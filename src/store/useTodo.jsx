import { create } from "zustand";
import { devtools } from "zustand/middleware";

const todoObj = (todoContent) => {
  return {
    id: crypto.randomUUID(),
    todoContent,
    complete: false,
    edit: false,
  };
};

const addNewTodo = (todos, todoContent) => {
  const todo = todoObj(todoContent);
  return [...todos, todo];
};

const toggleCompleteTodo = (todos, todoId) => {
  return todos.map((todo) =>
    todo.id === todoId ? { ...todo, complete: !todo.complete } : todo
  );
};

const deleteTodo = (todos, todoId) => {
  return todos.filter((todo) => todo.id !== todoId);
};

const toggleEditTodo = (todos, todoId) => {
  return todos.map((todo) =>
    todo.id === todoId ? { ...todo, edit: !todo.edit } : todo
  );
};

const updateTodoContent = (todos, todoId, newTodoContent) => {
  return todos.map((todo) =>
    todo.id === todoId ? { ...todo, todoContent: newTodoContent } : todo
  );
};

const useTodo = create(
  devtools((set) => ({
    todos: [],
    addNewTodo(todoContent) {
      set((state) => {
        return { ...state, todos: addNewTodo(state.todos, todoContent) };
      });
    },
    toggleCompleteTodo(todoId) {
      set((state) => {
        return { ...state, todos: toggleCompleteTodo(state.todos, todoId) };
      });
    },
    deleteTodo(todoId) {
      set((state) => {
        return { ...state, todos: deleteTodo(state.todos, todoId) };
      });
    },
    toggleEditTodo(todoId) {
      set((state) => {
        return { ...state, todos: toggleEditTodo(state.todos, todoId) };
      });
    },
    updateTodoContent(todoId, newTodoContent) {
      set((state) => {
        return {
          ...state,
          todos: updateTodoContent(state.todos, todoId, newTodoContent),
        };
      });
    },
  }))
);

export default useTodo;
