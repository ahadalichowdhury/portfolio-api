const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  shape: {
    type: String,
    enum: ['box', 'sphere', 'torus'],
    default: 'box'
  },
  githubLink: [{
    type: String,
    trim: true
  }],
  liveUrl:{
    type: String,
    trim: true
  },
  image:{
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Project', projectSchema);
