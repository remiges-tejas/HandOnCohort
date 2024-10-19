import { useState } from "react";

export function CreateTodo() {
  // react query state varible
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <div className="flex flex-col w-2/3  md:w-[30vw] justify-center mx-auto gap-5 my-12  md:my-4 border px-5 py-6">
      <h2 className="text-center font-bold text-xl text-green-900  ">
        {" "}
        CREATE TODO{" "}
      </h2>
      <input
        className="border px-2 py-2"
        type="text"
        placeholder="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        className="border px-2 py-2"
        type="text"
        placeholder="description"
        onChange={(e) => {
          setDesc(e.target.value);
        }}
      />
      <button
        className="bg-green-700 py-2 text-white rounded"
        onClick={() => {
          fetch("http://localhost:3005/todos", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              desc: desc,
            }),
            headers: {
              "Content-Type": "application/json", // Fixed the incorrect header
            },
          }).then(async (res) => {
            await res.json();
            alert("Todo Added");
          });
        }}
      >
        {" "}
        Add Todo
      </button>
    </div>
  );
}
