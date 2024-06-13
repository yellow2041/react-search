import { qs } from "../helpers.js";
import View from "./View.js";

export default class SearchFormView extends View {
  constructor() {
    super(qs("#search-form-view"));
    this.resetElement = qs("[type=reset]", this.element);
    console.log(this.resetElement);
    this.showResetButton(false);
  }

  showResetButton(visible = true) {
    this.resetElement.style.display = visible ? "block" : "none";
  }
}
