//Copier/author: Maxwell McAtee
//Last Updated: 2/15/2021
//Test script for the sum javascript example
//Professor: Nuxoll

const sum = require('../public/javascripts/sum.js');
test('adds 1+2 to equal 3', () => {
  expect(sum(1,2)).toBe(3);
});
