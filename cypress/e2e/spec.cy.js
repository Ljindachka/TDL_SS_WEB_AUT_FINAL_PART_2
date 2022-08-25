/// <reference types="cypress" />

// FOR FUCNTIONS WHICH ARE COMMENTED - TRIED TO FIND A SOLUTION,
// BUT COULDN'T THIS TIME

import FormsPage from "../pageObjects/FormsPage";

describe('Demoqa page', () => {
  beforeEach(() => {
    FormsPage.visit();
  });

  it("Scenario 1 - Forms Page", () => {
    FormsPage.firstName.click();
    FormsPage.firstName.type("Marko");
    FormsPage.lastName.click();
    FormsPage.lastName.type("Polo");
    FormsPage.userEmail.click();
    FormsPage.userEmail.type("imacat@catmail.com");
    FormsPage.setMale.click({force:true});
    FormsPage.userNumber.click();
    FormsPage.userNumber.type("29712345");
    FormsPage.dateOfBirth.click();
    FormsPage.setMonth.select("February");
    FormsPage.setYear.select("1984");
    // FormsPage.setDate.select("29");
    FormsPage.subject.click();
    FormsPage.subject.type("Maths");
    // FormsPage.sportsButton.click();
    FormsPage.currentAddress.click();
    FormsPage.currentAddress.type("Marko secret address, Jūrmala");
    FormsPage.state.click();
    // FormsPage.state.select("Haryana");
    // FormsPage.city.click();
    FormsPage.submitButton.click();
  });
});