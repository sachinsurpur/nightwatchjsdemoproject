// Author: Sachin Surpur
// Unit test to check all combinations for Select Dropdown

var assert = require('assert');
module.exports = {
  submitButtonStatus : function (browser) {
    browser
    .windowMaximize()
    .url('http://www.alexckramer.com/force-vue/#/home')
    .click("select.mdl-tabs__tab option:nth-child(1)")    //Verify if 'RANDOM PERSON' button shows up
    .click("button[class*='mdl-button'][class*='mdl-js-ripple-effect']");
    browser.expect.element("button[class*='mdl-button'][class*='mdl-js-ripple-effect']").text.to.contain('RANDOM PERSON').before(1000);

    //Verify if 'RANDOM PLANET' button shows up
    browser
    .click("select.mdl-tabs__tab option:nth-child(2)")
    .click("button[class*='mdl-button'][class*='mdl-js-ripple-effect']");
    browser.expect.element("button[class*='mdl-button'][class*='mdl-js-ripple-effect']").text.to.contain('RANDOM PLANET').before(1000);

    //Verify if 'RANDOM STARSHIP' button shows up
    browser
    .click("select.mdl-tabs__tab option:nth-child(3)")
    .click("button[class*='mdl-button'][class*='mdl-js-ripple-effect']");
    browser.expect.element("button[class*='mdl-button'][class*='mdl-js-ripple-effect']").text.to.contain('RANDOM STARSHIP').before(1000);

    browser.end();
  }
};
