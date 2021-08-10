import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import {
  setLocale,
  loadTranslations,
  syncTranslationWithStore,
} from "react-redux-i18n";
import rootReducer from "./reducers/index";
import translations from "../l10n/translations";

const store = createStore(rootReducer, applyMiddleware(thunk));

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translations));
store.dispatch(setLocale("en"));

export default store;
