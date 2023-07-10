import { useEffect, useState } from "react";
import axios from "axios";
import "./todoList.css";
function TodoList({ setCurrentUsername,todoChange,todoDelete }) {
  const myStorage = window.localStorage;
  const [todos, setTodos] = useState(
    myStorage.getItem("todos") ? JSON.parse(myStorage.getItem("todos")) : []
  );
  const [inputValue, setInputValue] = useState("");
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = async (e) => {
    e.preventDefault();

    if (inputValue.trim() !== "") {
      if (editingIndex === -1) {
        setTodos([...todos, inputValue]);
      } else {
        const updatedTodos = [...todos];
        updatedTodos[editingIndex] = inputValue;
        setTodos(updatedTodos);
        setEditingIndex(-1);
      }
      setInputValue("");
    } else {
      console.log("Please input some value");
    }
    const newOrderAdd = {
      username: setCurrentUsername,
      item: inputValue.trim(),
    };
    console.log(newOrderAdd)
    todoChange(inputValue.trim())
    try {
      const res = await axios.post(
        "https://hawkerhut-back.onrender.com/api/items",
        // "http://localhost:8009/api/items",
        newOrderAdd
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  //Get items from local storage
  useEffect(() => {
    myStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //Deleting an item from item model
  const handleDeleteTodo = async (e, index) => {
    e.preventDefault();
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    todoDelete(index)
    const newOrderDelete = {
      username: setCurrentUsername,
      item: todos[index],
    };
    try {
      const res = await axios.post(
        "https://hawkerhut-back.onrender.com/api/items/del",
        // "http://localhost:8009/api/items/del",
        newOrderDelete
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
    <div style={{display:"flex",justifyContent:"space-between",paddingBottom:"2vh"}}>
    <input
        type="text"
        placeholder="Type your items here"
        value={inputValue}
        onChange={handleInputChange}
        style={{ width: "250px" }}
      />
      <button
        onClick={(e) => handleAddTodo(e)}
        className="add-btn"
      >
         Add 
      </button>
    </div>
      <ol>
        {todos.map((todo, index) => (
          <li key={index} style={{ color: "#2b2e3d" }}>
          <div style={{display:"flex",justifyContent:"space-between"}}>
          <span style={{  minWidth: "40px" }}>{todo}</span>
            <button
              className="delete-btn"
              onClick={(e) => handleDeleteTodo(e, index)}
            >
              Delete
            </button>
          </div>
           
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;
