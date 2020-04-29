const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  done: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
