const stages = [
  {
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
  },
  {
    "name": "Execution",
    "letter": "E",
    "description": "Execute some action on your Subject Under Test, usually by calling methods",
    "starterWords": [
      "wrapper"
    ],
    "id": 2
  },
  {
    "name": "Assertion",
    "letter": "A",
    "description": "Assert that the action you did had the results you expect",
    "starterWords": [
      "expect"
    ],
    "id": 3,
  },
  {
    "name": "Tear Down",
    "letter": "T",
    "description": "Clean up any resources you used in your test (this usully happens automatically)",
    "id": 4
  }

]
const keywords = [
  {
    "word": "const",
    "nextWords": [
      "mockData",
      "mockPropFunction"
    ],
    "value": "const",
    "isEditatble": false,
    "phase": ["S"],
    "id": 100
  },
  {
    "word": "mockData",
    "nextWords": [
      "is assigned to",
      "}"
    ],
    "value": "mock-",
    "isEditatble": true,
    "phase": ["S"],
    "id": 101
  },
  {
    "word": "mockPropFunction",
    "nextWords": [
      "is assigned to",
      "}"
    ],
    "value": "mock-",
    "isEditatble": true,
    "phase": ["S"],
    "id": 102
  },
  {
    "word": "is assigned to",
    "nextWords": [
      "mockData value",
      "jest.fn()",
      "shallow",
    ],
    "value": "=",
    "isEditatble": false,
    "phase": ["S"],
    "id": 103
  }, 
  {
    "word": "mockData value",
    "nextWords": [
      "New Line"
    ],
    "value": "-;",
    "isEditatble": true,
    "phase": ["S"],
    "id": 104
  }, 
  {
    "word": "jest.fn()",
    "nextWords": [
      "New Line"
    ],
    "value": "jest.fn();",
    "isEditatble": false,
    "phase": ["S"],
    "id": 105
  },
  {
    "word": "describe",
    "nextWords": [
      "Test Name",
    ],
    "value": "describe(",
    "isEditatble": false,
    "phase": ["S"],
    "id": 106
  },
  {
    "word": "Test Name",
    "nextWords": [
      "Arrow Function",
    ],
    "value": "-,",
    "isEditatble": true,
    "phase": ["S"],
    "id": 107
  },
  {
    "word": "Arrow Function",
    "nextWords": [
      "let",
      "wrapper",
      "expect"
    ],
    "value": "() => {",
    "isEditatble": false,
    "phase": ["S"],
    "id": 108
  },
  {
    "word": "let",
    "nextWords": [
      "wrapper",
    ],
    "value": "let",
    "isEditatble": false,
    "phase": ["S"],
    "id": 109
  },
  {
    "word": "wrapper",
    "nextWords": [
      "is assigned to",
      ";",
      ")",
      "state("
    ],
    "value": "wrapper",
    "isEditatble": false,
    "phase": ["S", "A"],
    "id": 110
  },
  {
    "word": "beforeEach",
    "nextWords": [
      "Arrow Function",
    ],
    "value": "beforeEach(",
    "isEditatble": false,
    "phase": ["S"],
    "id": 111
  },
  {
    "word": "shallow",
    "nextWords": [
      "React Component Name"
    ],
    "value": "shallow(",
    "isEditatble": false,
    "phase": ["S"],
    "id": 112
  },
  {
    "word": "React Component Name",
    "nextWords": [
      "Prop Name"
    ],
    "value": "<-",
    "isEditatble": true,
    "phase": ["S"],
    "id": 113
  },
  {
    "word": "Prop Name",
    "nextWords": [
      "mockData",
      "mockPropFunction"
    ],
    "value": "-={",
    "isEditatble": true,
    "phase": ["S"],
    "id": 114
  },
  {
    "word": "}",
    "nextWords": [
      "/>"
    ],
    "value": "}",
    "isEditatble": false,
    "phase": ["S"],
    "id": 115
  },
  {
    "word": "/>",
    "nextWords": [
      ")"
    ],
    "value": "/>",
    "isEditatble": false,
    "phase": ["S"],
    "id": 116
  },
  {
    "word": ")",
    "nextWords": [
      ";",
      ".toMatchSnapshot()",
      ")",
      ".toEqual("
    ],
    "value": ")",
    "isEditatble": false,
    "phase": ["S"],
    "id": 117
  },
  {
    "word": "it",
    "nextWords": [
      "Should Statement"
    ],
    "value": "it(",
    "isEditatble": false,
    "phase": ["S"],
    "id": 118
  },
  {
    "word": "Should Statement",
    "nextWords": [
      "Arrow Function"
    ],
    "value": "'-', ",
    "isEditatble": true,
    "phase": ["S"],
    "id": 119
  },
  {
    "word": "expect",
    "nextWords": [
      "wrapper"
    ],
    "value": "expect(",
    "isEditatble": false,
    "phase": ["A"],
    "id": 120
  },
  {
    "word": ".toMatchSnapshot()",
    "nextWords": [
      ";"
    ],
    "value": ".toMatchSnapshot()",
    "isEditatble": false,
    "phase": ["A"],
    "id": 121
  },
  {
    "word": "state(",
    "nextWords": [
      ")",
      "stateKey"
    ],
    "value": ".state(",
    "isEditatble": false,
    "phase": ["A"],
    "id": 122
  },
  {
    "word": "stateKey",
    "nextWords": [
      ")"
    ],
    "value": "'-'",
    "isEditatble": true,
    "phase": ["A"],
    "id": 123
  },
  {
    "word": ".toEqual(",
    "nextWords": [
      "mockStateObject",
      "mockStateValue"
    ],
    "value": ".toEqual(",
    "isEditatble": false,
    "phase": ["A"],
    "id": 124
  },
  {
    "word": "mockStateObject",
    "nextWords": [
      ")"
    ],
    "value": "{-}",
    "isEditatble": true,
    "phase": ["A"],
    "id": 125
  },
  {
    "word": "mockStateValue",
    "nextWords": [
      ")"
    ],
    "value": "-",
    "isEditatble": true,
    "phase": ["A"],
    "id": 126
  },
  {
    "word": "New Line",
    "nextWords": [
      ")"
    ],
    "value": "<br />",
    "isEditatble": false,
    "phase": ["S", "E", "A", "T"],
    "id": 127
  },
  {
    "word": ";",
    "nextWords": [
      "New Line"
    ],
    "value": ";",
    "isEditatble": false,
    "phase": ["S", "E", "A", "T"],
    "id": 128
  }
]

module.exports = {
  stages,
  keywords
};