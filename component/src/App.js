import React from "react";
import Header from "./components/Header.js";
import SearchForm from "./components/SearchForm.js";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchKeyword: "",
    };
  }

  handleChangeInput(searchKeyword) {
    if (searchKeyword.length <= 0) {
      this.handleReset();
    }
    this.setState({ searchKeyword });
  }
  search(searchKeyword) {
    console.log(searchKeyword);
  }
  handleReset() {
    console.log("Reset");
  }
  render() {
    return (
      <>
        <Header title="검색" />
        <div class="container">
          <SearchForm
            value={this.state.searchKeyword}
            onChange={(value) => this.handleChangeInput(value)}
            onSubmit={(searchKeyword) => this.search(searchKeyword)}
            onReset={() => this.handleReset()}
          />
        </div>
      </>
    );
  }
}

export default App;
