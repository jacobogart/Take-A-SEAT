import React from "react";
import KeywordContainer from "../components/KeywordContainer";
import { shallow } from "enzyme";
import { keywords } from "../data-set";

const mockChalkboardChecker = jest.fn();
const mockFindNextWords = jest.fn();
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
        keywords={keywords}
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
