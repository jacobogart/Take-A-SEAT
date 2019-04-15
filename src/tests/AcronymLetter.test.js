import React from "react";
import AcronymLetter from "../components/AcronymLetter";
import { shallow } from "enzyme";

const mockStage = {
  "name": "Setup",
  "letter": "S",
  "description": "Setup the conditions required to execute the action on your Subject Under Test",
  "starterWords": [
    "describe",
    "let",
    "beforeEach",
    "it",
    "const"
  ],
  "id": 1
};
const mockFindNextWords = jest.fn();

describe('AcronymInfo', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <AcronymLetter
        key={mockStage.id}
        stage={mockStage}
        findNextWords={mockFindNextWords} 
      />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render AcronymInfo when showDetails is true', () => {
    expect(wrapper.state("showDetails")).toEqual(false);
    wrapper.instance().setState({ showDetails: true});
    expect(wrapper).toMatchSnapshot();
  })

  it('should have a default state', () => {
    expect(wrapper.state("showDetails")).toEqual(false);
  });

  it('should toggle showDetails as the mouse enters and leaves', () => {
    expect(wrapper.state("showDetails")).toEqual(false);
    wrapper.find('.letter').simulate('mouseOver');
    expect(wrapper.state("showDetails")).toEqual(true);
    wrapper.find('.letter').simulate('mouseLeave');
    expect(wrapper.state("showDetails")).toEqual(false);
  });

  it('should invoke findNextWords on click', () => {
    wrapper.find('.letter').simulate('click');
    expect(mockFindNextWords).toHaveBeenCalled();
    expect(mockFindNextWords).toHaveBeenCalledWith([
      "describe",
      "let",
      "beforeEach",
      "it",
      "const"
    ]);
  });

  it('should toggle showDetails when toggleShowDetails is invoked', () => {
    expect(wrapper.state("showDetails")).toEqual(false);
    wrapper.instance().toggleShowDetails();
    expect(wrapper.state("showDetails")).toEqual(true);
    wrapper.instance().toggleShowDetails();
    expect(wrapper.state("showDetails")).toEqual(false);

  })
})