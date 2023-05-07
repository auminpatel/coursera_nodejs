const http = require('http');

const hostname = 'localhost';
const fs = require('fs');
const path = require('path')

const port = 3000;

const server  = http.createServer((req, res) => {
  console.log(`Request for ${req.url} by method ${req.method}`);



  if(req.method === "GET") {
    var fileUrl;
    if(req.url == '/') fileUrl = '/index.html'
    else fileUrl = req.url;
    var filePath = path.resolve('./public' + fileUrl) ;

    const fileExt = path.extname(filePath);
      if(fileExt === '.html') {
        const exists = fs.existsSync(filePath)

        if(!exists) {
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/html');
          res.end(`<html><body><h1>Error 404 ${fileUrl} not found<h1></body><html>` );
          return res;
      }

      res.code = 200;
      res.setHeader('Content-Type', 'text/html');
    
      fs.createReadStream(filePath).pipe(res)
      }
      else {
        res.statusCode = 404;
              res.setHeader('Content-Type', 'text/html');
              res.end(`<html><body><h1>Error 404 ${fileUrl} is not html file<h1></body><html>` );
              return
      }


  }
  else {
    res.statusCode = 404;
              res.setHeader('Content-Type', 'text/html');
              res.end(`<html><body><h1>Error 404 ${req.method} not supported<h1></body><html>` );
              return ;
  }


});



server.listen(port, hostname , () => {
  console.log(`Server running at http://${hostname}:${port}`)
})
