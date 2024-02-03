import { useStore, actions } from "./store";
import "./App.css";
import { useRef } from "react";

function App() {
  const [state, dispatch] = useStore();
  const { inputTodo, listTodo, editTodo, editIndex } = state;
  const inputRef = useRef();

  const handleAddTodo = () => {
    dispatch(actions.addTodo(inputTodo));
    dispatch(actions.setTodo(""));
    inputRef.current.focus();
  };
  return (
    <div className="App">
      <h2>TODO APP</h2>
      <input
        ref={inputRef}
        value={!editTodo ? inputTodo : ""}
        onChange={(e) => dispatch(actions.setTodo(e.target.value))}
        placeholder="Enter todo ..."
      />
      <button onClick={handleAddTodo}>ADD</button>
      <ul>
        {listTodo.map((todo, index) => (
          <li key={index}>
            {/* Xử lý Update */}
            {editIndex === index ? (
              <input
                autoFocus
                value={inputTodo}
                onChange={(e) => {
                  dispatch(actions.updateTodo(e.target.value));
                }}
              />
            ) : (
              ""
            )}

            {/* Xử lý Save */}
            {editIndex === index ? (
              <button
                style={{ marginLeft: 10 }}
                onClick={() => {
                  dispatch(
                    actions.saveTodo({
                      index,
                      editing: false,
                      inputTodo,
                      inputRef,
                    })
                  );
                }}
              >
                Save
              </button>
            ) : (
              ""
            )}

            {/* Xử lý Edit Todo khi click Edit */}
            {editIndex === index ? (
              ""
            ) : (
              <>
                {todo}
                <button
                  style={{ marginLeft: 10 }}
                  onClick={() => {
                    dispatch(
                      actions.editTodo({
                        index,
                        editing: true,
                        inputTodo: todo,
                      })
                    );
                  }}
                >
                  Edit
                </button>
                <button
                  style={{ marginLeft: 10 }}
                  onClick={() => {
                    dispatch(actions.deleteTodo(index));
                  }}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
      {state.listTodo.length > 0 ? (
        <button
          style={{ marginLeft: 10 }}
          onClick={() => {
            dispatch(actions.deleteAllTodo(listTodo));
            inputRef.current.focus();
          }}
        >
          Delete All
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
