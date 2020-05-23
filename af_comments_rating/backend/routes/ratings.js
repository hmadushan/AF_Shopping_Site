const router = require('express').Router();
let Rating = require('../models/rating.model');

router.route('/').get((req,  res) => {
   Rating.find()
         .then(ratings => res.json(ratings))
         .catch(err => res.status(400).json('Error:' + err));
}); 

router.route('/add').put((req, res) => {
  const username = req.body.username;
  const rating = req.body.rating;
  const productid = req.body.productid;
  
  const newRating = new Rating({
     username,
     rating,
     productid,
  });

  console.log(newRating);
  

  Rating.update({ "productid" : productid }, 
                {
                             "productid":productid,
                              "rating":rating,
                              "username":username
                  } ,{ upsert : true }).then(()=> res.json('rating add'))
                  .catch(err => res.status(400).json("rating not update" + err));
                  



  //  newRating.save()
  //       .then(() => res.json('Rating added!'))
  //       .catch(err => res.status(400).json('Error: ' + err));            
});

router.route('/:id').get((req, res) => {
   Rating.find( {"productid":req.params.id})
     .then((rating)=> res.json(rating))
     .catch(err => res.status(400).json('Error: ' + err));
 });

 router.route('/:id').delete((req, res) => {
   Rating.findByIdAndDelete(req.params.id)
     .then(() => res.json('Rating deleted.'))
     .catch(err => res.status(400).json('Error: ' + err));
 });

 router.route('/update/:id').post((req, res) => {
   Rating.findById(req.params.id)
     .then(comment => {
       comment.username = req.body.username;
       comment.rating = req.body.rating;
       comment.productid = req.body.productid;
      
       comment.save()
         .then(() => res.json('Rating updated!'))
         .catch(err => res.status(400).json('Error: ' + err));
     })
     .catch(err => res.status(400).json('Error: ' + err));
 });


module.exports = router;