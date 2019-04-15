import React from "react";
import AcronymContainer from "../components/AcronymContainer";
import { shallow } from "enzyme";
import { stages } from "../data-set";

const mockFindNextWords = jest.fn();

describe('AcronymContainer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <AcronymContainer
        stages={stages}
        findNextWords={mockFindNextWords}
      />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})