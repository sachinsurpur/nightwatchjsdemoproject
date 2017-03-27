// Author: Sachin Surpur
// This test script demonstrates functional tests implemented on
// Page Object Model to test SelectDropDown and the Submit button functionality.
module.exports = {

tags: ['selectdropdown', 'sanity'],
'Test SelectDropDown functionality' : function (browser) {
//This function launches the browser and clicks on Starship item from Select dropbox.
//Verifies that appropriate submit button shows up

  browser
    .page.init().launch()
    .page.poms().clickSelectDropDownstarship()
    .page.poms().verifySubmitBtnText();
},

tags: ['button', 'sanity'],
'Testing Button functionality' : function (browser) {
  //This function is to test whether the textboxes- starshipName, starshipModel
  //that pertain to Starship are loaded after 'RANDOM STARSHIP' button is clicked.
  //Next set of tests specific to Starship will run after this one is a pass.

      browser
      .page.poms().clickSubmitButton()
      .page.poms().verifyInputFieldExists();
},

tags: ['starshiptextbox', 'sanity'],
'Test Starship Textboxes are not empty' : function (browser) {
  // This function is demonstrating BDD-style assertions
  // which tests whether all textboxes pertaining to Starship populate data.

  browser.expect.element('#starshipName').to.have.value.not.equals('');
  browser.expect.element('#starshipModel').to.have.value.not.equals('');
  browser.expect.element('#starshipManufacturer').to.have.value.not.equals('');
  browser.expect.element('#starshipCost').to.have.value.not.equals('');
  browser.expect.element('#starshipLength').to.have.value.not.equals('');
  browser.expect.element('#starshipMaxSpeed').to.have.value.not.equals('');
  browser.expect.element('#starshipCrew').to.have.value.not.equals('');
  browser.expect.element('#starshipPassengers').to.have.value.not.equals('');
  browser.expect.element('#starshipCargoCapacity').to.have.value.not.equals('');
  browser.expect.element('#starshipConsumables').to.have.value.not.equals('');
  browser.expect.element('#starshipHyperdrive').to.have.value.not.equals('');
  browser.expect.element('#mglt').to.have.value.not.equals('');
  browser.expect.element('#starshipClass').to.have.value.not.equals('');
},

after: function (browser) {
    browser.end();
}

};
