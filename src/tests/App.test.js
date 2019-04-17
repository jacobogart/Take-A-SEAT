import React from 'react';
import App from '../components/App';
import { shallow } from "enzyme";

const defaultState = {
  showKeywords: false,
  keywords: null,
  currentPhrase: "",
  stages: null,
  nextWords: null,
  chalkboardPhrases: [],
  chalkboardLines: 0
};

const mockKeywords = [
  {
    "word": "Prop Name",
    "nextWords": [
      "mockData Name",
      "mockPropFunction"
    ],
    "value": "yourPropName={",
    "isEditable": true,
    "phase": ["S"],
    "details": "This is how you will access the prop's value in the child component",
    "id": 114
    },
    {
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
    },
    {
    "word": "mockPropFunction",
    "nextWords": [
      "=",
      "}"
    ],
    "value": "mock-",
    "isEditable": true,
    "phase": ["S"],
    "details": "Name of mock function you will pass as props and/or spy on",
    "id": 102
  },
  {
    "word": "New Line",
    "nextWords": [
      ")",
      "let",
      "wrapper",
      "expect",
      "beforeEach",
      "Prop Name",
      "/>",
      "}",
      "describe",
      "Component Name",
      "it"
    ],
    "value": "New Line",
    "isEditable": false,
    "phase": ["S", "E", "A", "T"],
    "details": "Start a new line of testing",
    "id": 127
  },

]
;

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <App />
    );
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state', () => {
    expect(wrapper.state()).toEqual(defaultState);
  });

  it('should render KeywordContainer and Chalkboard if showKeywords is true', () => {
    wrapper.instance().setState({ showKeywords: true });
    expect(wrapper).toMatchSnapshot();
  });

  describe('findNextWords', () => {
    it('should set nextWords to an array of keyword objects', () => {
      wrapper.instance().setState({ keywords: mockKeywords })
      wrapper.instance().findNextWords(mockKeywords[0]);
      expect(wrapper.state('nextWords')).toEqual([mockKeywords[1], mockKeywords[2]]);
    });

    it('should update showKeywords to true', () => {
      wrapper.instance().setState({ keywords: mockKeywords })
      wrapper.instance().findNextWords(mockKeywords[0]);
      expect(wrapper.state('showKeywords')).toEqual(true);
    });
    it("should invoke newLineTests if the keyword is New Line", () => {
      wrapper.instance().setState({ keywords: mockKeywords });
      jest.spyOn(wrapper.instance(), "newLineTests");
      wrapper.instance().findNextWords(mockKeywords[3]);
      expect(wrapper.instance().newLineTests).toHaveBeenCalled();
    });
  });

  describe('chalkboardChecker', () => {
    it("should invoke newChalkboardLine if keyboardValue is New Line", () => {
      let instance = wrapper.instance(); 
      jest.spyOn(instance, "newChalkboardLine");
      instance.chalkboardChecker('New Line');
      expect(instance.newChalkboardLine).toHaveBeenCalled();
    });

    it("should invoke addToChalkboard if keyboardValue is not New Line", () => {
      let instance = wrapper.instance();
      jest.spyOn(instance, "addToChalkboard");
      instance.chalkboardChecker("=");
      expect(instance.addToChalkboard).toHaveBeenCalled();
      expect(instance.addToChalkboard).toHaveBeenCalledWith("=");
    });
  });

  describe('newChalkboardLine', () => {
    it('should update chalkboardPhrases when newChalkboardLine is called', () => {
      let instance = wrapper.instance();
      expect(wrapper.state()).toEqual(defaultState);
      instance.setState({
        currentPhrase: "mock current phrase"
      });
      instance.newChalkboardLine();
      expect(wrapper.state("chalkboardPhrases")).toEqual([
        "mock current phrase"
      ]);
    });

    it("should update currentPhrase when newChalkboardLine is called", () => {
      let instance = wrapper.instance();
      expect(wrapper.state()).toEqual(defaultState);
      instance.setState({
        currentPhrase: "mock current phrase"
      });
      expect(wrapper.state("currentPhrase")).toEqual("mock current phrase");
      instance.newChalkboardLine();
      expect(wrapper.state("currentPhrase")).toEqual('');
    });
  });

  describe('addToChalkboard', () => {
    it('should add keywordValue to the current string, if there is already a currentPhrase', () => {
      let instance = wrapper.instance();
      expect(wrapper.state()).toEqual(defaultState);
      instance.setState({
        currentPhrase: "mock current phrase"
      });
      instance.addToChalkboard(" test");
      expect(wrapper.state('currentPhrase')).toEqual("mock current phrase test");
    });

    it("should set currentPhrase to keywordValue if there isn't a currentPhrase", () => {
      let instance = wrapper.instance();
      expect(wrapper.state()).toEqual(defaultState);
      instance.addToChalkboard("test");
      expect(wrapper.state("currentPhrase")).toEqual("test");
    });
  });
});
