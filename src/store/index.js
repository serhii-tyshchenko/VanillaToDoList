export class Store {
  constructor(app, initalState = []) {
    this.todos = initalState;
    this.app = app;
  }
  addTodo(newTodo) {
    this.todos = [...this.todos, newTodo];
    this.app.render();
  }
  removeTodo(todoId) {
    this.todos = this.todos.filter((item) => item.id !== todoId);
    this.app.render();
  }
  updateTodo(todoId, data) {
    this.todos = this.todos.map((item) =>
      item.id === todoId ? { ...item, ...data } : item
    );
    this.app.render();
  }
}
