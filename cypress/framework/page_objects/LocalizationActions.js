import CommonActivities from "../CommonActivities";
import localization from "../../data/localization";


class LocalizationActions extends  CommonActivities{
    getTitleTextForLoginPage(language) {

        const titleSelector = 'h1';
        return cy.get(titleSelector)
            .invoke('text')
            .then((text) => {
                const localizedTitle = localization[language].loginTitle;
                cy.wrap(text.trim()).should('equal', localizedTitle);

            });

    }



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

    // add more methods as needed
}

export default new LocalizationActions();