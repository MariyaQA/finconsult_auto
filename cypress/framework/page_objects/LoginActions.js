import LoginPage from "../locators/LoginPage";
import LocalizationActions from "./LocalizationActions";
import CommonActivities from "../CommonActivities";
import userInfo from "../../data/userInfo";

class LoginActions {
    clickSignUpButton(){
        cy.get(LoginPage.cssBtn_SignUp).click();
    };

    checkLanguageAndCorrectTitleOnLoginPage() {
        return LocalizationActions.getCurrentLanguage().then((language) => {
            return LocalizationActions.getTitleTextForLoginPage(language).then((expectedTitle) => {
                cy.get(CommonActivities.cssTitle).invoke("text").should("equal", expectedTitle);
            });
        });
    };

    addCorrectEmailToInput(){
        cy.fixture('email').then((emails) => {
            const email = emails[0];
            cy.get(CommonActivities.cssField_Email).type(email);
        });
    };

    clickLoginButton(){
      cy.get(CommonActivities.cssBtn_Next).click();
    };

    checkPasswordConfirmNameTypeForLoginPage(){
        LocalizationActions.getCurrentLanguage().then((language) => {
            LocalizationActions.getPasswordNameTypeTextForLoginPage(language).then((expectedType) => {
                cy.get(CommonActivities.cssLabel_NameType).eq(1).invoke("text").should("eq", expectedType);
            });
        });
    };

    checkPasswordErrorForLoginPage(){
        LocalizationActions.getCurrentLanguage().then((language) => {
            LocalizationActions.getPasswordErrorOnLoginPage(language).then((expectedType) => {
                cy.get(CommonActivities.cssLabel_Error)
                    .eq(0)
                    .invoke("text")
                    .should("eq", expectedType);
            });
        });
    };

    checkEmailNameTypeForLoginPage(){
        LocalizationActions.getCurrentLanguage().then((language) => {
            LocalizationActions.getEmailNameTypeTextForLoginPage(language).then((expectedType) => {
                cy.get(CommonActivities.cssLabel_NameType).eq(0).invoke("text").should("eq", expectedType);
            });
        });
    };

    checkEmailErrorTypeForLoginPage(){
        LocalizationActions.getCurrentLanguage().then((language) => {
            LocalizationActions.getErrorTextForEmailFieldOnLoginPage(language).then((expectedType) => {
                cy.get(CommonActivities.cssLabel_Error).eq(0).invoke("text").should("eq", expectedType);
            });
        });
    };

    clearEmailAndFillPasswordInput(){
        cy.get(CommonActivities.cssField_Email).clear();
        cy.get(CommonActivities.cssField_Password).type(userInfo.password.correct);
    };

    checkPasswordDisplayedWhenClickEyeButton(){
        cy.get(CommonActivities.cssField_Password).should('have.attr', 'type', 'password');
        cy.get(LoginPage.cssBtn_EyeIcon).click();
        cy.get(CommonActivities.cssField_Password).should('have.attr', 'type', 'text');
    };

    addIncorrectPassword(){
        cy.get(CommonActivities.cssField_Password).clear();
        cy.get(CommonActivities.cssField_Password).type(userInfo.password.incorrect1);
    };

    checkErrorThatPasswordIncorrect(){
        LocalizationActions.getCurrentLanguage().then((language) => {
            LocalizationActions.getIncorrectPasswordErrorOnLoginPage(language).then((expectedType) => {
                cy.get(LoginPage.cssPopup_Error).invoke("text").should("eq", expectedType);
            });
        });
    };



}
export default LoginActions