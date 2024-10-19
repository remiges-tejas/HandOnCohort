import { useState } from "react";

const Todos = () => {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "Watch Dsa Video",
      desc: "DSA Video",
    },
    {
      id: 2,
      title: "Watch Dev Video",
      desc: "DSA Video",
    },
    {
      id: 3,
      title: "Watch Tailwind Video",
      desc: "DSA Video",
    },
    {
      id: 4,
      title: "Watch Docker Video",
      desc: "DSA Video",
    },
    {
      id: 5,
      title: "Watch Jenkins Video",
      desc: "DSA Video",
    },
  ]);
  const handletodo = () => {
    setTodo([
      ...todo,
      {
        id: todo.length + 1, // Generate unique ID based on the length of the todo array
        title: "Random Todo Added", // Corrected the typo here
        desc: "This is a random Todo Description",
      },
    ]);
    alert("Todo Added ");
  };

  return (
    <>
      <div className="flex justify-center gap-2">
        <Button
          doaction={handletodo}
          content={"Add Random Todo"}
          color={"text-white"}
          bgcolor={"bg-teal-900"}
          size={"w-[30vw]"}
        />

        <Notification count={100} />
      </div>

      {todo.map((todo) => {
        return <Todo key={todo.id} title={todo.title} desc={todo.desc} />;
      })}
    </>
  );
};

// Single Component for the TODO

// eslint-disable-next-line react/prop-types
function Todo({ title, desc }) {
  return (
    <>
      <div className="flex w-2/3 justify-center items-center gap-4 flex-col border mx-auto my-5 p-2 bg-slate-900  text-white">
        <h2 className="border border-white text-teal-400 px-4 text-xl">
          {" "}
          {title}
        </h2>
        <p className="text-sm px-4 ">{desc}</p>
      </div>
    </>
  );
}

// Button Conponent

// eslint-disable-next-line react/prop-types
function Button({ content, color, size, bgcolor, doaction }) {
  return (
    <button
      onClick={doaction}
      className={`${color} ${size} ${bgcolor} rounded-lg my-3 py-3`}
    >
      {content}{" "}
    </button>
  );
}

// NotificationCount Component

// eslint-disable-next-line react/prop-types
function Notification({ count }) {
  return (
    <>
      <div className="bg-green-800 p-5 my-3 rounded-lg font-bold text-white">
        {" "}
        {count > 99 ? "99+" : count}
      </div>
    </>
  );
}

export default Todos;
