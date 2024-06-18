# [리액트 1부] 만들고 비교하며 학습하는 리액트
## Vinilla JS를 활용한 검색폼 구현
### 실행
```
npx lite-server --baseDir vanilla-js/
```
### submit Event
- form의 input에서 사용자가 입력 후 enter 누를시 submit event 발생
- 페이지가 reload되면서 서버에 페이지 요청을 다시함
  - preventDefault()로 reload 막기
  ```javascript
  handleSubmit(event) {
    event.preventDefault();
    const { value } = this.inputElement;
    this.emit("@submit", { value });
  }
  ```
### View class의 on 함수
- this를 return하고있어서 method chaining사용 가능
- on
  ```javascript
    on(eventName, handler) {
      on(this.element, eventName, handler);
      return this;
    }
  ```
- chaining 사용
  ```javascript
  subscribeViewEvents() {
    this.searchFormView
      .on("@submit", (event) => this.search(event.detail.value))
      .on("@reset", () => this.reset());
  }
  ```