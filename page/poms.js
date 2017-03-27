//Author: Sachin Surpur

var homePageCommands = {
  clickSubmitButton: function() {
    this
      .waitForElementVisible('@submitBtn', 1000)
      .click('@submitBtn')
      .api.pause(2000);
    return this.api;
  },

  clickSelectDropDownstarship: function() {
    this
      .waitForElementVisible('body', 1000)
      .click('@selectDropDown_starship')
      .api.pause(1000);
    return this.api;
  },

  verifySubmitBtnText: function() {
    this
    .assert.containsText('@submitBtn', 'public RANDOM STARSHIP')
    .api.pause(1000);
  },

  verifyInputFieldExists: function() {
    this
    .waitForElementVisible('@starShipName', 1000)
    .waitForElementVisible('@starShipModel', 1000)
    .api.pause(1000);
  },
};

module.exports = {
    url: 'http://www.alexckramer.com/force-vue/#/home',

    elements : {
      submitBtn: {
        selector: "button[class*='mdl-button'][class*='mdl-js-ripple-effect']"
      },
      selectDropDown_starship:{
         selector: "select.mdl-tabs__tab option:nth-child(3)"
      },
      starShipName: {
        selector: '#starshipName'
      },

      starShipModel: {
        selector: '#starshipModel'
      },

    },

    commands: [homePageCommands]
};
