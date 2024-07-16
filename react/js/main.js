class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchKeyword: "",
    };
  }
  handleChangeInput(event) {
    const searchKeyword = event.target.value;

    if (searchKeyword <= 0) return this.handleReset();

    this.setState({
      searchKeyword,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  handleReset() {
    this.setState(
      () => {
        return {
          searchKeyword: "",
        };
      },
      () => console.log(this.state.searchKeyword)
    );
  }

  render() {
    return (
      <>
        <header>
          <h2 className="container">검색</h2>
        </header>
        <div className="container">
          <form
            onSubmit={(event) => this.handleSubmit(event)}
            onReset={() => this.handleReset()}
          >
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              autoFocus
              value={this.state.searchKeyword}
              onChange={(event) => this.handleChangeInput(event)}
            />
            {this.state.searchKeyword.length > 0 && (
              <button type="reset" className="btn-reset"></button>
            )}
          </form>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
