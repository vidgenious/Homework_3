//Author: Maxwell McAtee
//Last Updated: 3/1/2021
//Test orders.js that JSON is not null
//Professor: Nuxoll

var fs = require('fs');
test('json array is not NULL', () => {

  var output = fs.readFileSync('routes/orders.js');

  expect(output).not.toBeNull();
})
