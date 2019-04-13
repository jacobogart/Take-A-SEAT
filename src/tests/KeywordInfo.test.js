import React from 'react';
import KeywordInfo from '../components/KeywordInfo';
import { shallow } from 'enzyme';

const mockSelectWord = jest.fn();
const mockKeywordData = {
  "word": "mockData Name",
  "nextWords": [
    "=",
    "}"
  ],
  "value": "mock-",
  "isEditable": true,
  "phase": ["S"],
  "details": "Variable name for your mock data",
  "id": 101
}

describe('KeywordInfo', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <KeywordInfo
        keywordData={mockKeywordData}
        selectWord={mockSelectWord}
      />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke submit value when #keywordForm is submited', () => {
    const mockEvent = {
      preventDefault: () => {},
      target: { querySelector: () => {return { value: ''}} }
    };
    wrapper.find('#keywordForm').simulate("submit", mockEvent);
    expect(mockSelectWord).toHaveBeenCalled();
  });

  it('should invoke selectWord when submitValue is called', () => {
    const mockEvent = {
      preventDefault: () => { },
      target: { querySelector: () => { return { value: '' } } }
    };
    wrapper.instance().submitValue(mockEvent);
    expect(mockSelectWord).toHaveBeenCalled();
  });
    
});