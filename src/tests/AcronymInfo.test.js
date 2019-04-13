import React from 'react';
import AcronymInfo from '../components/AcronymInfo';
import { shallow } from 'enzyme';

const mockName = "Setup";
const mockDescription =
  "Setup the conditions required to execute the action on your Subject Under Test";

describe('AcronymInfo', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <AcronymInfo 
        stageName={mockName}
        stageDescription={mockDescription}
      />)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});