import CommonActivities from "../CommonActivities";
import localization from "../../data/localization";
import AccountCreationPage from "../locators/AccountCreationPage";
import LoginPage from "../locators/LoginPage";


class LocalizationActions extends  CommonActivities{
    getTitleTextForLoginPage(language) {
        const titleSelector = CommonActivities.cssTitle;
        return cy.get(titleSelector)
            .invoke('text')
            .then((text) => {
                const localizedTitle = localization[language].loginTitle;
                cy.wrap(text.trim()).should('equal', localizedTitle);
            });
    };

    getNameTypeTextForSignUpPage(language){
        const typeSelector = CommonActivities.cssLabel_NameType;
        return cy.get(typeSelector).eq(0)
            .invoke('text')
            .then((text) => {
                const localizedTitle = localization[language].nameLabelType;
                cy.wrap(text.trim()).should('equal', localizedTitle);
            });

    };

    getNameError1TextForSignUpPage(language) {
        const typeSelector = CommonActivities.cssLabel_Error;
        const localizedTitle = localization[language].nameError;

        return cy.get(typeSelector).eq(0)
            .invoke('text')
            .then((text) => {
                expect(text.trim()).to.equal(localizedTitle.trim());
            });
    };

    getErrorTextForEmailFieldOnSignUpPage(language){
        const typeSelector = CommonActivities.cssLabel_Error;
        const localizedTitle = localization[language].emailError1;

        return cy.get(typeSelector).eq(0)
            .invoke('text')
            .then((text) => {
                expect(text.trim()).to.equal(localizedTitle.trim());
            });
    };

    getTOSErrorTextForSignUpPage(language){
        const typeSelector = AccountCreationPage.cssCheckbox_TOSError;
        return cy.get(typeSelector)
            .invoke('text')
            .then((text) => {
                const localizedType = localization[language].confidentialityError;
                expect(text.trim()).to.equal(localizedType);
            });
    };

    getPasswordNameTypeTextForSignUpPage(language){
        const typeSelector = CommonActivities.cssLabel_NameType;
        const localizedTitle = localization[language].pwdLabelType;

        return cy.get(typeSelector).eq(2)
            .invoke('text')
            .then((text) => {
                expect(text.trim()).to.equal(localizedTitle.trim());
            });
    };

    getPasswordErrorFieldOnSignUpPage(language){
        const typeSelector = CommonActivities.cssLabel_Error;
        const localizedTitle = localization[language].pwdLabelError;

        return cy.get(typeSelector).eq(0)
            .invoke('text')
            .then((text) => {
                expect(text.trim()).to.equal(localizedTitle.trim());
            });
    };

    getPasswordErrorFieldOnLoginPage(language){
        const typeSelector = CommonActivities.cssLabel_Error;
        const localizedTitle = localization[language].pwdLabelError;

        return cy.get(typeSelector).eq(1)
            .invoke('text')
            .then((text) => {
                expect(text.trim()).to.equal(localizedTitle.trim());
            });
    };

    getPwdErrorFieldOnSignUpPage(language){
        const typeSelector = CommonActivities.cssLabel_Error;
        const localizedTitle = localization[language].pwdError1;

        return cy.get(typeSelector).eq(0)
            .invoke('text')
            .then((text) => {
                expect(text.trim()).to.equal(localizedTitle.trim());
            });
    };

    getPasswordCheckingNameTypeTextForSignUpPage(language){
        const typeSelector = CommonActivities.cssLabel_NameType;
        const localizedTitle = localization[language].confirmPwdLabelType;

        return cy.get(typeSelector).eq(3)
            .invoke('text')
            .then((text) => {
                expect(text.trim()).to.equal(localizedTitle.trim());
            });
    };

    getPasswordCheckingErrorFieldOnSignUpPage(language){
        const typeSelector = CommonActivities.cssLabel_Error;
        const localizedTitle = localization[language].confirmPwdLabelError;

        return cy.get(typeSelector).eq(0)
            .invoke('text')
            .then((text) => {
                expect(text.trim()).to.equal(localizedTitle.trim());
            });
    };

    getPasswordCheckingSecondErrorFieldOnSignUpPage(language){
        const typeSelector = CommonActivities.cssLabel_Error;
        const localizedTitle = localization[language].confirmPwdError1;

        return cy.get(typeSelector).eq(0)
            .invoke('text')
            .then((text) => {
                expect(text.trim()).to.equal(localizedTitle.trim());
            });
    };

    getTitleOnConfirmEmailPage(language){
        const authTitle = AccountCreationPage.cssTitle_Auth;
        const localizedTitle = localization[language].confirmEmail;

        return cy.get(authTitle).eq(0)
            .invoke('text')
            .then((text) => {
                expect(text.trim()).to.equal(localizedTitle.trim());
            });
    };

    getPasswordNameTypeTextForLoginPage(language){
        const typeSelector = CommonActivities.cssLabel_NameType;
        const localizedTitle = localization[language].pwdLabelType;

        return cy.get(typeSelector).eq(1)
            .invoke('text')
            .then((text) => {
                expect(text.trim()).to.equal(localizedTitle.trim());
            });
    };

    getEmailNameTypeTextForLoginPage(language){
        const typeSelector = CommonActivities.cssLabel_NameType;
        const localizedTitle = localization[language].emailLabelType;

        return cy.get(typeSelector).eq(0)
            .invoke('text')
            .then((text) => {
                expect(text.trim()).to.equal(localizedTitle.trim());
            });
    };

    getPasswordErrorOnLoginPage(language){
        const typeSelector = CommonActivities.cssLabel_Error;
        const localizedTitle = localization[language].pwdLabelError;

        return cy.get(typeSelector).eq(0)
            .invoke('text')
            .then((text) => {
                expect(text.trim()).to.equal(localizedTitle.trim());
            });
    };

    getIncorrectPasswordErrorOnLoginPage(language){
        const typeSelector =  LoginPage.cssPopup_PassError;
        return cy.get(typeSelector)
            .invoke('text')
            .then((text) => {
                const localizedTitle = localization[language].incorrectPasswordError1;
                cy.wrap(text.trim()).should('equal', localizedTitle);
            });
    };

    getErrorForEmailOnLoginPage(language){
        const typeSelector =  LoginPage.cssPopup_EmailError;
        return cy.get(typeSelector)
            .invoke('text')
            .then((text) => {
                const localizedTitle = localization[language].notRegisteredEmailError;
                cy.wrap(text.trim()).should('equal', localizedTitle);
            });
    };

    getErrorTextForEmailFieldOnLoginPage(language){
        const typeSelector = CommonActivities.cssLabel_Error;
        const localizedTitle = localization[language].emailLabelError;

        return cy.get(typeSelector).eq(0)
            .invoke('text')
            .then((text) => {
                expect(text.trim()).to.equal(localizedTitle.trim());
            });
    };


    // getTitleTextForSignUp(language) {
    //     // get the text of the title element for a specific language
    //     const titleSelector = ".form-block h1";
    //     return cy.get(titleSelector, { timeout: 10000 }).invoke("text").then((text) => {
    //         return this.compareText(text, localization[language].signUpTitle);
    //     });
    // }
    //
    // getTitleTextForLogin(language) {
    //     // get the text of the login button for a specific language
    //     const titleSelector = ".form-block h1";
    //     return cy.get(titleSelector).invoke("text").then((text) => {
    //         return this.compareText(text, localization[language].loginTitle);
    //     });
    // }


    // compareText(actualText, expectedText) {
    //     // compare the actual and expected text values and return true or false
    //     return actualText === expectedText;
    // }

}

export default new LocalizationActions();