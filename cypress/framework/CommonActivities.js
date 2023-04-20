import {BASE_URL} from "../data/links";
import localization from "../data/localization";



class  CommonActivities {
    static cssBtn_Language = ".mt-react-select__single-value";
    static cssInput_Language = ".mt-react-select__input-container";
    static cssDropdown_LanguageUA = "react-select-2-option-0";
    static cssDropdown_LanguagePL = "react-select-2-option-1";
    static cssDropdown_LanguageEN = "react-select-2-option-2";
    static cssDropdown_LanguageRU = "react-select-2-option-3";

    openWebsite(){
        cy.visit(BASE_URL);
    };

    getCurrentLanguage() {
        return cy.get(CommonActivities.cssBtn_Language).invoke("text");
    };

    selectEnglishLanguage(){
        cy.get(CommonActivities.cssInput_Language).click();
        cy.get(CommonActivities.cssInput_Language).type('english{enter}');
        cy.reload();
    }


}
export default CommonActivities