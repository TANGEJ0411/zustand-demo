import useTodo from "./store/useTodo";

const Todos = () => {
  const {
    todos,
    toggleCompleteTodo,
    deleteTodo,
    toggleEditTodo,
    updateTodoContent,
  } = useTodo();
  console.log(todos, "todos");

  return (
    <div>
      {todos.map((todo) => (
        <div className="todo" key={todo.id}>
          {todo.edit ? (
            <div>
              <input
                type="text"
                value={todo.todoContent}
                onChange={(e) => {
                  updateTodoContent(todo.id, e.target.value);
                }}
              />
              <button
                className="save"
                onClick={() => {
                  toggleEditTodo(todo.id);
                }}
              >
                Save
              </button>
            </div>
          ) : (
            <div>
              <span
                style={{
                  textDecoration: todo.complete ? "line-through" : null,
                }}
              >
                {todo.todoContent}
              </span>
              <button
                className="toggle"
                onClick={() => {
                  toggleCompleteTodo(todo.id);
                }}
              >
                Complete
              </button>
              <button
                className="edit"
                onClick={() => {
                  toggleEditTodo(todo.id);
                }}
              >
                Edit
              </button>
              <button
                className="delete"
                onClick={() => {
                  deleteTodo(todo.id);
                }}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Todos;
