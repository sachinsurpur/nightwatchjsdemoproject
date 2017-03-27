// Author: Sachin Surpur

module.exports = function (browser) {
  this.launch = function() {
    browser
      .windowMaximize()
      .url('http://www.alexckramer.com/force-vue/#/home')
      .waitForElementVisible('body', 1000)
    return browser;
  };
};
