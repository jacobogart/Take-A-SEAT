import React from "react";
import Keyword from "../components/Keyword";
import { shallow } from "enzyme";

const mockFindNextWords = jest.fn();
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
        findNextWords={mockFindNextWords}
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
      wrapper.instance().selectWord(mockKeywordData);
      expect(mockFindNextWords).toHaveBeenCalled();
      expect(mockFindNextWords).toHaveBeenCalledWith(mockKeywordData);
    });

    it('should invoke chalkboardChecker if showDetails is true', () => {
      wrapper.instance().setState({ showDetails: true });
      wrapper.instance().selectWord(mockKeywordData);
      expect(mockChalkboardChecker).toHaveBeenCalled();
      expect(mockChalkboardChecker).toHaveBeenCalledWith('wrapper');
    });
  })
})
