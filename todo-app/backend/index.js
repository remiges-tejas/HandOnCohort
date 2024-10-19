const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todos } = require("./db");
const cors = require("cors");
const app = express();
const port = 3005;

// middleware
app.use(express.json());
app.use(cors({}));

// routes
app.post("/todos", async (req, res) => {
  const createPayLoad = req.body;
  const parsePayload = createTodo.safeParse(createPayLoad);

  //validating data using zod validation
  if (!parsePayload.success) {
    return res.status(411).json({
      msg: "You Sent Wrong Input",
    });
    return;
  }

  // put the data into the database
  await todos.create({
    title: createPayLoad.title,
    desc: createPayLoad.desc,
    completed: createPayLoad.completed,
  });
  res.json({
    msg: "Todo Creted",
  });
});

//displying the todo from the database
app.get("/todos", async (req, res) => {
    const todo = await todos.find();
  return res.json(todo)
});

// Update completed status
app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);

  if (!parsePayload.success) {
    return res.status(400).json({
      msg: "You've sent the wrong inputs",
    });
  }

  const updatedTodo = await todos.updateOne(
    { _id: req.body.id }, // Use the ID from the body
    { completed: true }
  );

  if (!updatedTodo) {
    return res.status(404).json({ msg: "Todo not found" });
  }

  return res.json({
    msg: "Todo marked as completed",
  });
});

// app.put("/completed", async (req, res) => {
//   const updatePayload = req.body;
//   const parsePayload = updateTodo.safeParse(updatePayload);

//   if (!parsePayload.success) {
//     return res.status(411).json({
//       msg: "you've sent the wrong inputs",
//     });
//     return;
//   }

// //   await todos.update(
// //     {
// //       _id: req.body.id,
// //     },
// //     {
// //       completed: true,
// //     }
// //   );

//   const updatedTodo = await todos.update(
//     { _id: req.body.id }, // Use the ID from the URL
//     { completed: true }
//   );

//   if (!updatedTodo) {
//     return res.status(404).json({ msg: "Todo not found" });
//   }

//   return res.json({
//     msg: "Todo marked as completed",
//   });

// )}

// listeenig request on this port

app.listen(port, () => {
  console.log(`Server is Running on Port ${port}`);
});
