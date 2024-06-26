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
### 이벤트 위임을 이용하여 클릭된 탭 구분하기
- `helper.js`의 delegate 함수를 이용하여 이벤트가 발생된 탭 구분
  ```javascript
  export function delegate(target, eventName, selector, handler) {
    const emitEvent = (event) => {
      const potentialElements = qsAll(selector, target);

      for (const potentialElement of potentialElements) {
        if (potentialElement === event.target) {
          return handler.call(event.target, event);
        }
      }
    };

    on(target, eventName, emitEvent);
  }
  ```
- 사용
  ```javascript
  bindEvent() {
    delegate(this.element, "click", "li", (event) => this.handleClick(event));
  }
  ```
> View에서는 이벤트가 발생한 element만 구분해서 Controller로 넘기고, 이벤트에 대한 처리는 controller에서 이루어진다.