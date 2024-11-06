import initialRender from "./initialRender.js";
import listener from "./listeners.js";
import observer from "./observer.js";

class Todo {
  init() {
    observer();
    initialRender();
    listener();
  }
}

export default Todo;
