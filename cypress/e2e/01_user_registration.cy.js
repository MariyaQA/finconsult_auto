import AllPages from "../framework/AllPages";
import CommonActivities from "../framework/CommonActivities";

describe ("Register new user to the system", ()=> {
    let perform = new AllPages();
    let general = new CommonActivities();
    before(function (){
        cy.viewport(1200, 800);
    });
    it('should check validation during registration', function () {
        general.openWebsite();
        perform.loginActions.clickSignUpButton();
        perform.accountCreationActions.clickLoginButton();
        perform.loginActions.checkLanguageAndCorrectTitleOnLoginPage();
        general.selectPolishLanguage();
        perform.loginActions.checkLanguageAndCorrectTitleOnLoginPage();
        perform.loginActions.clickSignUpButton();
        general.clickNextButton();
        perform.accountCreationActions.checkTOSErrorForSignUpPage();
        perform.accountCreationActions.enterIncorrectName();
        general.clickNextButton();
        perform.accountCreationActions.checkNameTypeForSignUpPage();
        perform.accountCreationActions.checkNameErrorForSignUpPage();
        perform.accountCreationActions.enterCorrectName();
        perform.accountCreationActions.enterFirstIncorrectEmailAndCheckError();
        perform.accountCreationActions.enterSecondIncorrectEmailAndCheckError();
        perform.accountCreationActions.enterThirdIncorrectEmailAndCheckError();
        perform.accountCreationActions.enterFourthIncorrectEmailAndCheckError();
        perform.accountCreationActions.enterCorrectRandomEmailForRegistration();
        perform.accountCreationActions.checkPasswordNameTypeForSignUpPage();
        perform.accountCreationActions.checkPasswordErrorForSignUpPage();
        perform.accountCreationActions.enterIncorrectPasswordAndCheckError();
        perform.accountCreationActions.enterCorrectPasswordToTheField();
        perform.accountCreationActions.checkPasswordConfirmNameTypeForSignUpPage();
        perform.accountCreationActions.checkPasswordConfirmErrorForSignUpPage();
        perform.accountCreationActions.enterIncorrectPasswordCheckingAndCheckError();
        perform.accountCreationActions.enterCorrectPasswordConfirmToTheField();


    });
});