import React from "react";
import Header from "./components/Header.js";
import SearchForm from "./components/SearchForm.js";

class App extends React.Component {
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
            onSubmit={(searchKeyword) => this.search(searchKeyword)}
            onReset={() => this.handleReset()}
          />
        </div>
      </>
    );
  }
}

export default App;
