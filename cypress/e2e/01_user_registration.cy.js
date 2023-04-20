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
        general.selectEnglishLanguage();
        perform.loginActions.checkLanguageAndCorrectTitleOnLoginPage();



    });
});