//@ts-check

/**
 * 할 일 모델링
 * @typedef TodoModel
 * @type {object}
 * @property {string} id - 아이디
 * @property {string} content - 내용
 * @property {boolean} isCompleted - 완료여부
 * @property {string} category - 카테고리
 * @property {string[]} [tags] - 태그들
 */

/**
 * TodoList
 */
class TodoList {
  /**
   * @param {TodoModel[]} todos
   */
  constructor(todos) {
    this.todos = todos;
  }

  /**
   * CREATE
   * 할 일을 추가할 수 있다.
   * 내용없이 추가할 수 없다.
   * @method
   * @param {TodoModel} todo - 할 일
   */
  createTodo(todo) {
    this.todos = [...this.todos, todo];
  }

  /**
   * READ ALL
   * 모든 할 일을 조회할 수 있다.
   * @returns {TodoModel[]} - 모든 할 일
   */
  getTodos() {
    return this.todos;
  }

  /**
   * READ by ID
   * ID를 기반으로 특정 할 일을 조회할 수 있다.
   * @param {string} id - 아이디
   * @returns {TodoModel} - 할 일
   */
  getTodoById(id) {
    const getTodo = this.todos.find((todo) => todo.id === id);
    if (!getTodo) throw new Error("해당 아이디를 찾을 수 없습니다.");
    return getTodo;
  }

  /**
   * UPDATE
   * ID를 제외한 모든 속성을 수정할 수 있다.
   * 특정 할 일의 특정 태그를 수정할 수 있다.
   * @param {string} id
   * @param {TodoModel} newTodo
   */
  updateTodo(id, newTodo) {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);
    if (!todoIndex) throw new Error("해당 아이디를 찾을 수 없습니다.");
    this.todos[todoIndex].content = newTodo.content;
    this.todos[todoIndex].category = newTodo.category;
    this.todos[todoIndex].isCompleted = newTodo.isCompleted;
    if (newTodo.tags) {
      this.todos[todoIndex].tags = newTodo.tags;
    }
  }

  /**
   * DELETE
   * ID를 기반으로 특정 할 일을 삭제할 수 있다.
   * @param {string} id - 아이디
   */
  deleteTodoById(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  /**
   * DELETE
   * 모든 할 일을 제거할 수 있다.
   */
  deleteTodoAll() {
    this.todos = [];
  }

  /**
   * DELETE
   * 특정 할 일의 특정 태그를 삭제할 수 있다.
   * @param {string} id - 아이디
   * @param {string} tag - 태그
   */
  deleteTodoTagById(id, tag) {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);
    if (!todoIndex) throw new Error("해당 아이디를 찾을 수 없습니다.");

    if (!this.todos[todoIndex].tags)
      throw new Error("태그가 존재하지 않습니다.");
      this.todos[todoIndex].tags = this.todos[todoIndex].tags?.filter((tag) => tag !== tag);
  }

  /**
   * DELETE
   * 특정 할 일의 모든 태그를 제거할 수 있다.
   * @param {string} id - 아이디
   */
  deleteTodoTagsById(id) {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);
    if (!todoIndex) throw new Error("해당 아이디를 찾을 수 없습니다.");
    if (this.todos[todoIndex].tags) {
      delete this.todos[todoIndex].tags;
    }
  }
}
