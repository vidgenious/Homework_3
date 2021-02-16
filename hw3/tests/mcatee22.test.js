//Copier/Author: Maxwell McAtee
//Last Updated: 2/15/2021
//Test for the index.HTML
//Professor: Nuxoll

var fs = require('fs');
test('test selectEvent', () => {
 //Read the index.html file into a string
 var html = fs.readFileSync('public/index.html', 'utf8');
 expect(html).toEqual(expect.anything()); //any non-null value is okay

 //put the HTML into a testing DOM and do a sanity check
 document.body.innerHTML = html;
 const $ = require('jquery');
 expect($('h1').html()).toBe("Cheesecake Order Form");
});
