import fastJson from 'fast-json-stringify';

console.log(fastJson);

// First Example.
const stringify = fastJson({
  title: 'First Example',
  type: 'object',
  properties: {
    firstName: {
      type: 'string',
    },
    lastName: {
      type: 'string',
    },
  },
});

console.log(
  stringify({
    firstName: 'Fabian',
    lastName: 'Deitelhoff',
    testNumber: 32,
  })
);

const stringifyPatterns = fastJson({
  title: 'Pattern Properties Beispiel',
  type: 'object',
  patternProperties: {
    num: {
      type: 'number',
    },
    '.*foo$': {
      type: 'string',
    },
  },
});

const patternPropertiesExample = {
  matchfoo: 42,
  otherfoo: 'str',
  matchnum: 3,
};

console.log(stringifyPatterns(patternPropertiesExample));

const stringifyDebug = fastJson(
  {
    title: 'First Example',
    type: 'object',
    properties: {
      firstName: {
        type: 'string',
      },
      lastName: {
        type: 'string',
      },
    },
  },
  { debugMode: true }
);

console.log(stringifyDebug); // it is an array of functions that can create your `stringify` function
console.log(stringifyDebug.toString()); // print a "ready to read" string function, you can save it to a file

const rawString = stringifyDebug.toString();
const stringify2 = fastJson.restore(rawString); // use the generated string to get back the `stringify` function

console.log(stringify2);

// const anyOfStringify = fastJson({
//   title: 'AnyOf Schema',
//   type: 'object',
//   properties: {
//     anyOfType: {
//       anyOf: [
//         {
//           type: 'string',
//         },
//         {
//           type: 'boolean',
//         },
//       ],
//     },
//   },
// });

// const schemaRef = {
//   title: 'Schema Ref',
//   definitions: {
//     num: {
//       type: 'object',
//       properties: {
//         int: {
//           type: 'integer',
//         },
//       },
//     },
//     str: {
//       type: 'string',
//     },
//   },
//   type: 'object',
//   properties: {
//     nickname: {
//       $ref: '#/definitions/str',
//     },
//   },
//   patternProperties: {
//     num: {
//       $ref: '#/definitions/num',
//     },
//   },
// };
