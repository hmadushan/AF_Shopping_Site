const router = require('express').Router();
let Comment  = require('../models/comment.model');

router.route('/').get((req, res) => {
  Comment.find()
         .then(comments => res.json(comments))
         .catch(err => res.status(400).json('Error:' + err));

});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const content = req.body.content;
    const productid = req.body.productid;
    const date = req.body.date;
  
    const newComment = new Comment({
      username,
      content,
      productid,
      date,
     
    });
   // console.log("==================");
    
  //console.log(newComment);
    
  
    newComment.save()
    .then(() => res.json('Comments added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').get((req, res) => {
    Comment.findById(req.params.id)
      .then(Comment => res.json(Comment))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').delete((req, res) => {
    Comment.findByIdAndDelete(req.params.id)
      .then(() => res.json('Comment deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/update/:id').post((req, res) => {
    Comment.findById(req.params.id)
      .then(comment => {
        comment.username = req.body.username;
        comment.content = req.body.content;
        comment.productid = req.body.productid;
        comment.date = req.body.date;
  
        comment.save()
          .then(() => res.json('Comment updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });


  module.exports = router;