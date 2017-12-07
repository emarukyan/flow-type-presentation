/* @flow */

const x = 'a text'
const getLength = (t: string) => t.length

// Error [flow] number (This type is incompatible with the expected param type of string)
getLength(145)
