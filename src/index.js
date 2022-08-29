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
 * CREATE
 * 할 일을 추가할 수 있다.
 * 내용없이 추가할 수 없다.
 * @param {TodoModel} todo - 할 일
 */
function createTodo(todo) {}

/**
 * READ ALL
 * 모든 할 일을 조회할 수 있다.
 * @returns {TodoModel[]} - 모든 할 일
 */
function getTodos() {}

/**
 * READ by ID
 * ID를 기반으로 특정 할 일을 조회할 수 있다.
 * @param {string} id - 아이디
 * @returns {TodoModel} - 할 일
 */
function getTodoById(id) {}

/**
 * UPDATE
 * ID를 제외한 모든 속성을 수정할 수 있다.
 * 특정 할 일의 특정 태그를 수정할 수 있다.
 */
function updateTodo() {}

/**
 * DELETE
 * ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * @param {string} id - 아이디
 */
function deleteTodoById(id) {}

/**
 * DELETE
 * 모든 할 일을 제거할 수 있다.
 */
function deleteTodoAll() {}

/**
 * DELETE
 * 특정 할 일의 특정 태그를 삭제할 수 있다.
 * @param {string} id - 아이디
 * @param {string} tag - 태그
 */
function deleteTodoTagById(id, tag) {}

/**
 * DELETE
 * 특정 할 일의 모든 태그를 제거할 수 있다.
 * @param {string} id - 아이디
 */
function deleteTodoTagsById(id) {}
