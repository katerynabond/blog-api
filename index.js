const express = require('express');
const mongoose = require('mongoose');

const server = express();

const { mongoURI } = require('./credentials');
//const mongoURI = require('./credentials').mongoURI; old style


const port = process.env.PORT || 8080;

//connect to DB
mongoose.connect(mongoURI, {
  useMongoClient: true
});

// middleware imports
const morgan = require('morgan');
const cors = require('cors');

//router imports
const userRouter = require('./routers/user.router');
const postRouter = require('./routers/post.router');

// wire up the middleware
server.use(cors());
server.use(morgan('dev'));

//wire up the routers
server.use(userRouter);
server.use(postRouter);


server.get('/', (req, res) => {
     res.send('it works');
});


server.listen(port, () => {
   console.log(`Now listening on port ${port}`);
});
