import LoginPage from "../locators/LoginPage";
import LocalizationActions from "./LocalizationActions";
import CommonActivities from "../CommonActivities";

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
    }
}
export default LoginActions