import React from "react";
import KeywordContainer from "../components/KeywordContainer";
import { shallow } from "enzyme";

const mockChalkboardChecker = jest.fn();
const mockFindNextWords = jest.fn();
const mockKeywords = [];
const mockNextWords = [{
  "word": "const",
  "nextWords": [
    "mockData Name",
    "mockPropFunction"
  ],
  "value": "const ",
  "isEditable": false,
  "phase": ["S"],
  "details": "Declare a variable that cannot be reassigned",
  "id": 100
}]

describe('KeywordContainer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <KeywordContainer
        keywords={mockKeywords}
        chalkboardChecker={mockChalkboardChecker}
        nextWords={mockNextWords}
        findNextWords={mockFindNextWords}
      />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})
