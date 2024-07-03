import Controller from "./Controller.js";
import Store from "./Store.js";
import storage from "./storage.js";
import HistoryListView from "./views/HistoryListView.js";
import KeywordListView from "./views/KeywordListView.js";
import SearchFormView from "./views/SearchFormView.js";
import SearchResultView from "./views/SearchResultView.js";
import TabView from "./views/TabView.js";

const tag = "[main]";

document.addEventListener("DOMContentLoaded", main);

function main() {
  console.log(tag);
  const store = new Store(storage);

  const views = {
    searchFormView: new SearchFormView(),
    searchResultView: new SearchResultView(),
    tabView: new TabView(),
    keywordListView: new KeywordListView(),
    historyListView: new HistoryListView(),
  };

  new Controller(store, views);
}
