const Todo = require('./../models/todoModel');
const APIFeatures = require('./utils/apiFeatures');

// Get all todos
exports.getAllTodos = async (req, res) => {
  try {
    // Execute query
    const features = new APIFeatures(Todo.find(), req.query).sort();
    const todos = await features.query;

    //Send response
    res.status(201).json({
      status: 'success',
      requestedAt: req.requestTime,
      results: todos.length,
      data: {
        todo: todos,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

// Create a new Todo

exports.createTodo = async (req, res) => {
  try {
    console.log(req.body);
    const newTodo = await Todo.create(req.body);

    res.status(201).json({
      status: 'success',
      requestedAt: req.requestTime,
      data: {
        tour: newTodo,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
