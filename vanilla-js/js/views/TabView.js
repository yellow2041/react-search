import { on, qs, qsAll } from "../helpers.js";
import View from "./View.js";

export const TabType = {
  KEYWORD: "KEYWORD",
  HISTORY: "HISTORY",
};

const TabLabel = {
  [TabType.KEYWORD]: "추천 검색어",
  [TabType.HISTORY]: "최근 검색어",
};

export default class TabView extends View {
  constructor() {
    super(qs("#tab-view"));
    this.template = new Template();
    // TODO
    this.bindEvent();
  }

  show(selectedTab) {
    this.element.innerHTML = this.template.getTabList();

    qsAll("li", this.element).forEach((li) => {
      li.className = li.dataset.tab === selectedTab ? "active" : "";
    });

    super.show();
  }

  bindEvent() {
    on(this.element, "click", () => this.handleClick());
  }

  handleClick() {
    this.emit("@click");
  }
}

class Template {
  getTabList() {
    console.log(Object.values(TabType));
    return `
      <ul class="tabs">
         ${Object.values(TabType)
           .map((tabType) => ({ tabType, tabLabel: TabLabel[tabType] }))
           .map(this._getTab)
           .join("")}
      </ul>
    `;
  }
  _getTab({ tabType, tabLabel }) {
    return `
      <li data-tab="${tabType}">
        ${tabLabel}
      </li>
    `;
  }
}
