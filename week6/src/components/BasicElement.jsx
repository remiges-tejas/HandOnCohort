import { useState } from "react";

export function BasicElement() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Tejas Bisen",
      age: 22,
      phoneNumber: "XXXXXXXX9517",
      Location: "Gondia",
    },
    {
      id: 2,
      name: "Tushar Bisen",
      age: 22,
      phoneNumber: "XXXXXXXX9517",
      Location: "Gondia",
    },
    {
      id: 3,
      name: "Kailsh Bisen",
      age: 22,
      phoneNumber: "XXXXXXXX9517",
      Location: "Gondia",
    },
    {
      id: 4,
      name: "Kailsh Bisen",
      age: 22,
      phoneNumber: "XXXXXXXX9517",
      Location: "Gondia",
    },
    {
      id: 5,
      name: "Kailsh Bisen",
      age: 22,
      phoneNumber: "XXXXXXXX9517",
      Location: "Gondia",
    },
  ]);

  // define function that generate the new Todo
  const addNewTodo = () => {
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    const newUser = {
      id: newId,
      name: "Joe Doe",
      age: 22,
      phoneNumber: "XXXXXXXX9517",
      Location: "Mumbai",
    };

    // Properly updating the state by spreading the existing users array
    setUsers([...users, newUser]);
  };

  console.log(users);

  return (
    <>
      <div className="flex justify-center my-6">
        <button
          onClick={addNewTodo}
          className="border px-3 py-2 rounded font-semibold bg-green-600 text-white hover:bg-black"
        >
          {" "}
          Add Data
        </button>
      </div>

      <div className="w-full grid grid-cols-5 border  ">
        <Todo users={users} />
      </div>
    </>
  );
}

export function Todo({ users }) {
  return (
    <>
      {users.map((e) => (
        <ul
          key={e.id}
          className="border flex flex-col justify-center items-center p-5"
        >
          <li className="border w-full px-4 py-2 bg-green-200 border-black">
            Name: {e.name}
          </li>
          <li className="border w-full px-4 py-2 bg-green-200 border-black">
            Age: {e.age}
          </li>
          <li className="border w-full px-4 py-2 bg-green-200 border-black">
            Phone: {e.phoneNumber}
          </li>
          <li className="border w-full px-4 py-2 bg-green-200 border-black">
            Location: {e.Location}
          </li>
        </ul>
      ))}
    </>
  );
}
