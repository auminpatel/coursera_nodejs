const express = require('express');

const dishRouter = express.Router();

dishRouter.use(express.json())
dishRouter.use(express.urlencoded({
  extended: true
}))

dishRouter.route('/')
.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})
.get((req, res, next) => {
res.end('Will send all the disher to you!')
})

.post( (req,res,next) => {
res.end(`Will add the dish ${req.body.name} with details: ${req.body.description}` )
})
.put( (req,res,next) => {
res.statusCode= 403
res.end(`PUT operation not supported on /dishes` )
})
.delete((req, res, next) => {
res.end('Deleting all the dishes');
});

module.exports=dishRouter;