/* eslint-disable react/prop-types */
export function Todos({ todos }) {
  return (
    <>
      <hr />
      <h2 className="text-center my-4 mb-5 text-xl font-bold underline text-red-700">
        Todos
      </h2>

      {todos.map((todo) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div >    
            <div className="flex w-2/3 mx-auto gap-8 border justify-center items-center p-2">
              <h1 className="text-black font-bold"> Title : {todo.title}</h1>
              <p className="text-gray-500">
                {" "}
                <span className="font-bold text-black"> Description :</span>
                {todo.desc}
              </p>
              <button className="bg-red-700 py-2 text-white rounded px-2">
                {" "}
                {todo.completed == true ? "completed" : "Mark as Completed"}
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
