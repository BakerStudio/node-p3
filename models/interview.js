const mongoose = require('mongoose');
// const timestamps = require('mongoose-timestamp');

const QuestionSchema = mongoose.Schema({
  question: {type: String, required: true, trim: true},
  answer: {type: String, required: false, trim: true, default: ' '},
  category: {type: String, required: false, trim: true, default: "not categorized"},
  qsource: {type: String, required: false, trim: true},
  asource: {type: String, required: false, trim: true},
  rating: {type: Number, required: false, default: 0}
}, {collection: 'questions'});

// QuestionSchema.plugin(timestamps);

module.exports = exports = mongoose.model('Question', QuestionSchema)
