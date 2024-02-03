function Storage() {
  const todoStorage = localStorage.getItem("listTodo");
  if (!todoStorage) {
    localStorage.setItem("listTodo", JSON.stringify([]));
  }

  return {
    setItem(listTodo) {
      localStorage.setItem("listTodo", JSON.stringify(listTodo));
    },
    getItem() {
      const listTodo = localStorage.getItem("listTodo");
      return listTodo ? JSON.parse(listTodo) : [];
    },
  };
}

export default Storage;
