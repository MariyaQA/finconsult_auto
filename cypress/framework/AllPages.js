import LoginActions from "./page_objects/LoginActions"
import AccountCreationActions from "./page_objects/AccountCreationActions";
import LocalizationActions from "./page_objects/LocalizationActions";

class AllPages {
    loginActions = new LoginActions();
    accountCreationActions = new AccountCreationActions();

}
export default AllPages