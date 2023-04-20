import AccountCreationPage from "../locators/AccountCreationPage";
import localization from "../../data/localization";
import LocalizationActions from "../page_objects/LocalizationActions";
import CommonActivities from "../CommonActivities";


class AccountCreationActions {
    clickLoginButton(){
        cy.get(AccountCreationPage.cssBtn_Login).click();

    }
    checkLanguageAndCorrectTitleOnSignUpPage(){

    }




}

export  default AccountCreationActions;

