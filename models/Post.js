const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
  
    title: {
      type: String,
      required: true,
      trim: true
    },
    content: {
      type: String,
      required: true,
      trim: true
    },
    author: {
      type: String,
      required: true,
      trim: true
    }

  },
  {
    // TODO (student): Keep timestamps enabled (or decide based on requirements).
    timestamps: true
  }
);

module.exports = mongoose.model('Post', postSchema);