import React from "react";
import AcronymContainer from "../components/AcronymContainer";
import { shallow } from "enzyme";

const mockFindNextWords = jest.fn();
const mockStages = [];

describe('AcronymContainer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <AcronymContainer
        stages={mockStages}
        findNextWords={mockFindNextWords}
      />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})