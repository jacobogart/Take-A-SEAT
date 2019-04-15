import React from "react";
import Keyword from "../components/Keyword";
import { shallow } from "enzyme";

const mockUpdateCurrentWord = jest.fn();
const mockChalkboardChecker = jest.fn();
const mockKeywordData = {
  "word": "wrapper",
  "nextWords": [
    "=",
    ";",
    ")",
    "state("
  ],
  "value": "wrapper",
  "isEditable": false,
  "phase": ["S", "A"],
  "details": "An object that surrounds the shallow rendering of an instance",
  "id": 110
};

describe('Keyword', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Keyword
        key={mockKeywordData.id}
        keywordData={mockKeywordData}
        updateCurrentWord={mockUpdateCurrentWord}
        chalkboardChecker={mockChalkboardChecker}
      />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state', () => {
    expect(wrapper.state("showDetails")).toEqual(false);
  });

  it('should render keywordInfo if showDetails is true', () => {
    wrapper.instance().setState({ showDetails: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke selectWord when .keywordButton is clicked', () => {
    wrapper.find('.keywordButton').simulate('click');
    expect(wrapper.state('showDetails')).toEqual(true);
  });

  describe('selectWord', () => {
    const mockValue = "const";
    it('should toggle showDetails when selectWord is called', () => {
      expect(wrapper.state('showDetails')).toEqual(false);
      wrapper.instance().selectWord(mockValue);
      expect(wrapper.state('showDetails')).toEqual(true);
      wrapper.instance().selectWord(mockValue);
      expect(wrapper.state('showDetails')).toEqual(false);
    })

    it('should invoke updateCurrentWord if showDetails is true', () => {
      wrapper.instance().setState({ showDetails: true});
      wrapper.instance().selectWord(mockValue);
      expect(mockUpdateCurrentWord).toHaveBeenCalled();
      expect(mockUpdateCurrentWord).toHaveBeenCalledWith(mockKeywordData);
    });

    it('should invoke chalkboardChecker if showDetails is true', () => {
      wrapper.instance().setState({ showDetails: true });
      wrapper.instance().selectWord(mockValue);
      expect(mockChalkboardChecker).toHaveBeenCalled();
      expect(mockChalkboardChecker).toHaveBeenCalledWith('const');
    });
  })
})
