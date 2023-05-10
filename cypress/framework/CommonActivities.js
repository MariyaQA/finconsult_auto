import {BASE_URL} from "../data/links";
import localization from "../data/localization";
import {faker} from "@faker-js/faker";
import LocalizationActions from "./page_objects/LocalizationActions";
import AccountCreationPage from "./locators/AccountCreationPage";



class  CommonActivities {
    static cssBtn_Language = ".mt-react-select__single-value";
    static cssInput_Language = ".mt-react-select__input-container";
    static cssDropdown_LanguageUA = "react-select-2-option-0";
    static cssDropdown_LanguagePL = "react-select-2-option-1";
    static cssDropdown_LanguageEN = "react-select-2-option-2";
    static cssDropdown_LanguageRU = "react-select-2-option-3";
    static cssTitle = "h1";
    static cssLabel_NameType = ".label-itself";
    static cssLabel_Error = ".error-msg";
    static cssBtn_Next = ".main-button";
    static cssField_Email = "[name='email']";
    static cssField_Password = "[name='password']";

    openWebsite(){
        cy.visit(BASE_URL);
    };

    clickNextButton(){
        cy.get(CommonActivities.cssBtn_Next).click();
    };

    getCurrentLanguage() {
        return cy.get(CommonActivities.cssBtn_Language).invoke("text");
    };

    selectEnglishLanguage(){
        cy.get(CommonActivities.cssInput_Language).click();
        cy.get(CommonActivities.cssInput_Language).type(localization.English.lang);
        cy.reload();
    }

    selectRussianLanguage(){
        cy.get(CommonActivities.cssInput_Language).click();
        cy.get(CommonActivities.cssInput_Language).type(localization.Русский.lang);
        cy.reload();
    }

    selectUkrainianLanguage(){
        cy.get(CommonActivities.cssInput_Language).click();
        cy.get(CommonActivities.cssInput_Language).type(localization.Українська.lang);
        cy.reload();
    }

    selectPolishLanguage(){
        cy.get(CommonActivities.cssInput_Language).click();
        cy.get(CommonActivities.cssInput_Language).type(localization.Polski.lang);
        cy.reload();
    }






}
export default CommonActivities