import AccountCreationPage from "../locators/AccountCreationPage";
import LocalizationActions from "../page_objects/LocalizationActions";
import CommonActivities from "../CommonActivities";
import userInfo from "../../data/userInfo";
import {faker} from "@faker-js/faker";
import localization from "../../data/localization";

class AccountCreationActions {

    localizationTextForEmailChecking(){
        LocalizationActions.getCurrentLanguage().then((language) => {
            LocalizationActions.getErrorTextForEmailFieldOnSignUpPage(language).then((expectedType) => {
                cy.get(CommonActivities.cssLabel_Error).eq(0).invoke("text").should("eq", expectedType);
            });
        });
    };

    clickLoginButton(){
        cy.get(AccountCreationPage.cssBtn_Login).click();
    };

    checkNameTypeForSignUpPage(){
        LocalizationActions.getCurrentLanguage().then((language) => {
            LocalizationActions.getNameTypeTextForSignUpPage(language).then((expectedType) => {
                cy.get(CommonActivities.cssLabel_NameType).eq(0).invoke("text").should("eq", expectedType);
            });
        });
    };

    checkPasswordNameTypeForSignUpPage(){
        LocalizationActions.getCurrentLanguage().then((language) => {
            LocalizationActions.getPasswordNameTypeTextForSignUpPage(language).then((expectedType) => {
                cy.get(CommonActivities.cssLabel_NameType).eq(2).invoke("text").should("eq", expectedType);
            });
        });
    };

    checkPasswordConfirmNameTypeForSignUpPage(){
        LocalizationActions.getCurrentLanguage().then((language) => {
            LocalizationActions.getPasswordCheckingNameTypeTextForSignUpPage(language).then((expectedType) => {
                cy.get(CommonActivities.cssLabel_NameType).eq(3).invoke("text").should("eq", expectedType);
            });
        });
    };

    checkPasswordErrorForSignUpPage(){
        LocalizationActions.getCurrentLanguage().then((language) => {
            LocalizationActions.getPasswordErrorFieldOnSignUpPage(language).then((expectedType) => {
                cy.get(CommonActivities.cssLabel_Error)
                    .eq(0)
                    .invoke("text")
                    .should("eq", expectedType);
            });
        });
    };

    checkPasswordConfirmErrorForSignUpPage(){
        LocalizationActions.getCurrentLanguage().then((language) => {
            LocalizationActions.getPasswordCheckingErrorFieldOnSignUpPage(language).then((expectedType) => {
                cy.get(CommonActivities.cssLabel_Error)
                    .eq(0)
                    .invoke("text")
                    .should("eq", expectedType);
            });
        });
    };

    checkNameErrorForSignUpPage(){
        LocalizationActions.getCurrentLanguage().then((language) => {
            LocalizationActions.getNameError1TextForSignUpPage(language).then((expectedType) => {
                cy.get(CommonActivities.cssLabel_Error)
                    .eq(0)
                    .invoke("text")
                    .should("eq", expectedType);
            });
        });
    };

    checkTOSErrorForSignUpPage(){
        LocalizationActions.getCurrentLanguage().then((language) => {
            LocalizationActions.getTOSErrorTextForSignUpPage(language).then((expectedType) => {
                cy.get(AccountCreationPage.cssCheckbox_TOSError).invoke("text").should("eq", expectedType);
            });
        });
    };

    enterIncorrectName(){
        cy.get(AccountCreationPage.cssField_Name).type(userInfo.name.incorrectName);
    };

    enterCorrectName(){
        cy.get(AccountCreationPage.cssField_Name).clear();
        cy.get(AccountCreationPage.cssField_Name).type(userInfo.name.name);
    }

    enterFirstIncorrectEmailAndCheckError(){
        cy.get(CommonActivities.cssField_Email).type(userInfo.email.incorrect1);
        cy.wait(1000);
        this.localizationTextForEmailChecking();
    };

    enterSecondIncorrectEmailAndCheckError(){
        cy.get(CommonActivities.cssField_Email).clear();
        cy.get(CommonActivities.cssField_Email).type(userInfo.email.incorrect2);
        cy.wait(1000);
        this.localizationTextForEmailChecking();
    };

    enterThirdIncorrectEmailAndCheckError(){
        cy.get(CommonActivities.cssField_Email).clear();
        cy.get(CommonActivities.cssField_Email).type(userInfo.email.incorrect3);
        cy.wait(1000);
        this.localizationTextForEmailChecking();
    };

    enterFourthIncorrectEmailAndCheckError(){
        cy.get(CommonActivities.cssField_Email).clear();
        cy.get(CommonActivities.cssField_Email).type(userInfo.email.incorrect4);
        cy.wait(1000);
        this.localizationTextForEmailChecking();
    };

    enterIncorrectPasswordAndCheckError(){
        cy.get(CommonActivities.cssField_Password).type(userInfo.password.incorrect1);
        cy.wait(1000);
        LocalizationActions.getCurrentLanguage().then((language) => {
            LocalizationActions.getPwdErrorFieldOnSignUpPage(language).then((expectedType) => {
                cy.get(CommonActivities.cssLabel_Error)
                    .eq(0)
                    .invoke("text")
                    .should("eq", expectedType);
            });
        });
    };

    enterIncorrectPasswordCheckingAndCheckError(){
        cy.get(AccountCreationPage.cssField_ConfirmPass).type(userInfo.password.incorrect2);
        cy.wait(1000);
        LocalizationActions.getCurrentLanguage().then((language) => {
            LocalizationActions.getPasswordCheckingSecondErrorFieldOnSignUpPage(language).then((expectedType) => {
                cy.get(CommonActivities.cssLabel_Error)
                    .eq(0)
                    .invoke("text")
                    .should("eq", expectedType);
            });
        });
    };

    enterCorrectPasswordToTheField(){
        cy.get(CommonActivities.cssField_Password).clear();
        cy.get(CommonActivities.cssField_Password).type(userInfo.password.correct);
    };

    enterCorrectPasswordConfirmToTheField(){
        cy.get(AccountCreationPage.cssField_ConfirmPass).clear();
        cy.get(AccountCreationPage.cssField_ConfirmPass).type(userInfo.password.correct);
    };

    generateEmail(cy) {
        const username = faker.internet.userName();
        const domain = '@example.com';
        const newEmail = username + domain;
        cy.readFile('cypress/fixtures/email.json').then((emails) => {
            let parsedEmails = [];
            if (emails && typeof emails === 'string' && emails.trim()) {
                parsedEmails = JSON.parse(emails);
            }
            if (parsedEmails.length >= 5) {
                parsedEmails.shift();
            }
            parsedEmails.push(newEmail);
            cy.writeFile('cypress/fixtures/email.json', JSON.stringify(parsedEmails));
        });
        return newEmail;
    };

    enterCorrectRandomEmailForRegistration(){
        const email = this.generateEmail(cy);
        cy.get(CommonActivities.cssField_Email).clear();
        cy.get(CommonActivities.cssField_Email).type(email);
        cy.wrap(email).as('registeredEmail');
    };

    clickEyeButton(){
        cy.get(AccountCreationPage.cssButton_Eye).click();
    };

    checkConfidentialityModalWindowAndTitle(){
        cy.get(AccountCreationPage.cssModal_Confidentiality).click();
        cy.get(AccountCreationPage.cssTitle_TOS).should("contain.text", localization.Русский.tosTitle);
        cy.get(AccountCreationPage.cssButton_Close).click();
    };

    checkConfirmTitleForSignUpPage(){
        cy.wait(2000);
        LocalizationActions.getCurrentLanguage().then((language) => {
            LocalizationActions.getTitleOnConfirmEmailPage(language).then((expectedType) => {
                cy.get(AccountCreationPage.cssTitle_Auth).invoke("text").should("eq", expectedType);
            });
        });
    };


}

export  default AccountCreationActions;

