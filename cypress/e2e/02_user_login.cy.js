import AllPages from "../framework/AllPages";
import CommonActivities from "../framework/CommonActivities";
import loginActions from "../framework/page_objects/LoginActions";

describe ("Login new user to the system after registration", ()=> {
    let perform = new AllPages();
    let general = new CommonActivities();
    before(function (){
        cy.viewport(1200, 800);
    });
    it('should check validation errors during login', function () {
        general.openWebsite();
        perform.loginActions.addCorrectEmailToInput();
        perform.loginActions.clickLoginButton();
        perform.loginActions.checkPasswordConfirmNameTypeForLoginPage();
        perform.loginActions.checkPasswordErrorForLoginPage();
        perform.loginActions.clearEmailAndFillPasswordInput();
        perform.loginActions.checkPasswordDisplayedWhenClickEyeButton();
        general.clickNextButton();
        perform.loginActions.checkEmailNameTypeForLoginPage();
        perform.loginActions.checkEmailErrorTypeForLoginPage();
        perform.loginActions.addCorrectEmailToInput();
        perform.loginActions.addIncorrectPassword();
        general.clickNextButton();
        perform.loginActions.checkErrorThatPasswordIncorrect();
        perform.loginActions.addCorrectPasswordAndNotRegisteredEmail();
        general.clickNextButton();
        perform.loginActions.checkErrorThatUserIsNotRegistered();
        perform.loginActions.clickRegistrationLinkToOpenSignUpPage();
        perform.accountCreationActions.checkRegistrationPageIsOpened();
        perform.accountCreationActions.clickLoginButton();
        perform.loginActions.checkLoginPageIsOpened();
        perform.loginActions.addCorrectEmailToInput();
        perform.loginActions.addCorrectPassword();
        perform.loginActions.clickLoginButton();
        perform.loginActions.checkHomePageIsOpened();
    });
});