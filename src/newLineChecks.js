const newLineChecks = [
  {
    "find": "beforeEach",
    "ifFound": true,
    "remove": "beforeEach"
  },
  {
    "find": "<",
    "ifFound": false,
    "remove": "/>"
  },
  {
    "find": "<",
    "ifFound": false,
    "remove": "Prop Name"
  },
  {
    "find": "<", 
    "ifFound": true,
    "remove": "Component Name"
  },
  {
    "find": "(", 
    "ifFound": false,
    "remove": ")"
  },
  {
    "find": "{",
    "ifFound": false,
    "remove": "}"
  }
];

export default newLineChecks