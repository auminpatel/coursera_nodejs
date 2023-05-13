const express = require('express');

const leaderRouter = express.Router()

leaderRouter.use(express.json())
leaderRouter.use(express.urlencoded({
  extended: true
}))



leaderRouter.route('/')
.all((req, res, next)=> {
      res.statusCode = 200;
      res.setHeader('Content-Type' , 'text/plain');
      next()
})
.get((req, res) => {
    res.end('Will send all the leaders to you!');
})
.post((req, res) => {
  res.end(
    `Will add the leader ${req.body.name} with details: ${req.body.description}`
  );
})
.put((req, res) => {
  res.statusCode = 403;
  res.end('PUT operation is not suported on /leaders')
})
.delete((req, res) => {
  res.end("Deleting all the leaders");
})

leaderRouter
  .route("/:promoId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end(`Will send all details of the leader: ${req.params.promoId} to you`);
  })

  .post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on  /leaders/${req.params.promoId} `);
  })

  .put((req, res) => {
    res.write(`Updating the leader: ${req.params.promoId} \n`);
    res.end(
      `Will update the leader: ${req.body.name} + with details: ${req.body.description}`
    );
  })

  .delete((req, res) => {
    res.end(`Deleting leader ${req.params.promoId}`);
  });




module.exports = leaderRouter