import Todo from "../models/Todo.js";

export async function createTodo(req, res) {

  try {

    const todo = await Todo.create({
      title: req.body.title,
      completed: req.body.completed || false
    });

    res.status(201).json({
      success: true,
      data: todo
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message
    });

  }
}


export async function getTodos(req, res) {

  try {

    const todos = await Todo.find();

    res.json({
      success: true,
      data: todos
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
}


export async function updateTodo(req, res) {

  try {

    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        completed: req.body.completed
      },
      {
        new: true
      }
    );

    if (!todo) {
      return res.status(404).json({
        message: "Todo not found"
      });
    }

    res.json({
      success: true,
      data: todo
    });

  } catch (error) {

    res.status(400).json({
      message: error.message
    });

  }
}


export async function deleteTodo(req, res) {

  try {

    const todo = await Todo.findByIdAndDelete(
      req.params.id
    );

    if (!todo) {
      return res.status(404).json({
        message: "Todo not found"
      });
    }

    res.json({
      success: true,
      message: "Todo deleted successfully"
    });

  } catch (error) {

    res.status(400).json({
      message: error.message
    });

  }
}