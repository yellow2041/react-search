import { TabType } from "./views/TabView.js";

const tag = "[Controller]";

export default class Controller {
  constructor(store, { searchFormView, searchResultView, tabView }) {
    console.log(tag);
    this.store = store;

    this.searchFormView = searchFormView;
    this.searchResultView = searchResultView;
    this.tabView = tabView;

    this.subscribeViewEvents();
    this.render();
  }
  subscribeViewEvents() {
    this.searchFormView
      .on("@submit", (event) => this.search(event.detail.value))
      .on("@reset", () => this.reset());

    // TODO
    this.tabView.on("@click", () => this.changeTabType());
  }

  search(keyword) {
    console.log(tag, keyword);
    this.store.search(keyword);
    this.render();
  }

  reset() {
    console.log(tag, "reset");
    this.store.searchKeyword = "";
    this.render();
  }

  render() {
    if (this.store.searchKeyword.length > 0) {
      return this.renderSearchResult();
    }

    this.tabView.show(this.store.selectedTab);
    this.searchResultView.hide();
  }

  renderSearchResult() {
    this.tabView.hide();
    this.searchResultView.show(this.store.searchResult);
  }

  changeTabType() {
    this.store.selectedTab =
      this.store.selectedTab === TabType.KEYWORD
        ? TabType.HISTORY
        : TabType.KEYWORD;
    this.render();
  }
}
