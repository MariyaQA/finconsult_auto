import LoginPage from "../locators/LoginPage";
import LocalizationActions from "./LocalizationActions";

class LoginActions {
    clickSignUpButton(){
        cy.get(LoginPage.cssBtn_SignUp).click();
    };

    checkLanguageAndCorrectTitleOnLoginPage() {
        return LocalizationActions.getCurrentLanguage().then((language) => {
            return LocalizationActions.getTitleTextForLoginPage(language).then((expectedTitle) => {
                cy.get("h1").invoke("text").should("equal", expectedTitle);
            });
        });
    }
}
export default LoginActions