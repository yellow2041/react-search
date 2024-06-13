import { on, qs } from "../helpers.js";
import View from "./View.js";

export default class SearchFormView extends View {
  constructor() {
    super(qs("#search-form-view"));
    this.resetElement = qs("[type=reset]", this.element);
    this.inputElement = qs("[type=text]", this.element);

    this.showResetButton(false);
    this.bindEvent();
  }

  showResetButton(visible = true) {
    this.resetElement.style.display = visible ? "block" : "none";
  }

  bindEvent() {
    on(this.inputElement, "keyup", () => this.handleKeyup());
  }

  handleKeyup() {
    const { value } = this.inputElement;
    this.showResetButton(value.length > 0);
  }
}
