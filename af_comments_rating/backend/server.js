const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); 

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const commentRouter = require('./routes/comments');
const userRouter = require('./routes/users');
const ratingRouter = require('./routes/ratings');

app.use('/comments', commentRouter);
app.use('/users', userRouter);
app.use('/ratings',ratingRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);

});