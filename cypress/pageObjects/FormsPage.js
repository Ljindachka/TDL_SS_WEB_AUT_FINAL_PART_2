import Base from "./basePage";

// FOR FUCNTIONS WHICH ARE COMMENTED - TRIED TO FIND A SOLUTION,
// BUT COULDN'T THIS TIME

class FormsPage extends Base {
    static get url() {
        return "https://demoqa.com/automation-practice-form";
    }

    static get firstName() {
        return cy.get("#firstName");
    }

    static get lastName() {
        return cy.get("#lastName");
    }

    static get userEmail() {
        return cy.get("#userEmail");
    }

    static get setMale() {
        return cy.get("#gender-radio-1.custom-control-input");
    }

    static get userNumber() {
        return cy.get("#userNumber");
    }

    static get dateOfBirth() {
        return cy.get("#dateOfBirthInput");
    }

    static get setMonth() {
        return cy.get(".react-datepicker__month-select");
    }

    static get setYear() {
        return cy.get(".react-datepicker__year-select");
    }

    // static get setDate() {
    //     return cy.get(".react-datepicker__day.react-datepicker__day--029");
    // }

    static get subject() {
        return cy.get(".subjects-auto-complete__value-container");
    }

    // static get sportsButton() {
    //     return cy.get("#hobbies-checkbox-1");
    // }

    static get currentAddress() {
        return cy.get("#currentAddress")
    }

    static get state() {
        return cy.get("#state");
    }

    // static get selectState() {
    //     return cy.get(".css-26l3qy-menu");
    // }

    // static get city() {
    //     return cy.get("#city");
    // }

    static get submitButton() {
        return cy.get("#submit");
    }
}

export default FormsPage;