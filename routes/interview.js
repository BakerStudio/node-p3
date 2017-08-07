const Question = require('../models/interview');

module.exports = function(server) {

  // List of questions

  server.get('/questions', (req, res, next) => {
    let query = req.query || {};
    let limit = 10;

    Question.find(query).limit(limit)
      .then(questions => {
        res.send(200, questions)
        next()
      })
      .catch(err => {
        res.send(500, err)
      })
  })

  // delete question by id

  server.del('/questions/:questionId', (req, res, next) => {
    const questionId = req.params.questionId;
    console.log("in delete route");

    Question.findOneAndRemove({
        _id: questionId
      })
      .then((question) => {
        if (!question) {
          console.log("question NOT found");
          res.send(404, questionId);
          next();
        } else {
          console.log("question found and deleted");
          res.send(204, questionId);
          next();
        }
      })
      .catch(err => {
        res.send(500, err, questionId)
      })
  })

  // count number of questions

  server.get('/count', (req, res, next) => {
    Question.count()
    .then(count => {
      res.send(200, count);
      next();
    })
    .catch(err => {
      res.send(500, err);
    });
  })

// create a question

server.post('/question', (req, res, next) => {
  let data = req.body || {};
  Question.create(data)
    .then(data => {
      res.send(200, data);
      next();
    })
    .catch(err => {
      res.send(500, err);
    });
})


}
