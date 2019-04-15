import React from "react";
import Chalkboard from "../components/Chalkboard";
import { shallow } from "enzyme";

let mockCurrentPhrase = "<Chalkboard";
let mockChalkboardPhrases = [
  "let const mockData = {};",
  "let wrapper = shallow("
];

describe('Chalkboard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Chalkboard
        currentPhrase={mockCurrentPhrase}
        chalkboardPhrases={mockChalkboardPhrases}
      />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
