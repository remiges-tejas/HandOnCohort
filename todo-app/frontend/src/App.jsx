import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";
import { useEffect, useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);

  // Component Render Reapatedly
  // this is not right apporch
  // it repetedly git the backend which request are overwhelmed

  // fetch("http://localhost:3005/todos")
  //   .then(async (res) => {
  //     const resonse = await res.json();
  //     setTodos(resonse.k);
  //   })
  //   .catch((err) => {
  //     console.log(" Eror :while fetching data from the backed :", err);
  //   });

  // Function to fetch todos from backend
  const fetchTodos = async () => {
    try {
      const res = await fetch("http://localhost:3005/todos");
      const response = await res.json();
      setTodos(response);
    } catch (err) {
      console.log("Error while fetching data from the backend:", err);
    }
  };

  // Fetch todos when the component mounts
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <div>
        <CreateTodo />
        <Todos todos={todos} />
      </div>
    </>
  );
};

export default App;
