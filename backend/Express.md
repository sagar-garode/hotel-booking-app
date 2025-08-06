# This file gives all the information of express.js why it is used and what's the need to use it


<!-- Express JS -->
>Express.js is a minimalist, unopinionated web framework for Node.js that helps you build web apps and APIs quickly and cleanly.

🔧 Without Express: you manually handle HTTP requests and routing:
const http = require('http');
http.createServer((req, res) => {
  if (req.url === '/hello') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello world');
  }
}).listen(3000);

🚀 With Express: you write much less code and get cleaner structure:
const express = require('express');
const app = express();
app.get('/hello', (req, res) => {
  res.send('Hello world');
});

app.listen(3000); <!-- Creates express server -->
app.use(cors()) <!-- express middlewares which runs before route handler -->
app.use(express.static('public')) <!-- serving static files / like svg images , fonts, logos -->

<!-- Flow that express follows -->
1) It calls all the middlewares (Global)
2) Checks if any static files are present to serve
3) Routes begin ( check if the any route handler are present )
app.use('/abc',abcHandler) // server.js
4) If route has any middleware attached it runs before final controller logic (like checkAuthnetication function)
5) Route handler [abc handler is called] and processed using router.post() / router.get()
6) If no match error route handler is called 


<!-- Mongo DB -->
Mongo DB is used to store data in flexible JSON format unlike MySQL which ctores data in table and row
Node JS handles the server logic to do CRUD operation but needs databse to store data so we need database like mongoDB

use dbname >> to create new database
show dbs / show collections >> to display databases
db.createCollections("abc") >> creates collections
db.abc.insertOne() / insertMany() >> use to insert records in abc db

db.abc.find() >> find all records in DB
db.abc.find({} , { title : 1b}) >> will display only title field

MongoDB validation --- 
it supports JSON structure $jsonSchema is used to define document stucture
db.createCollections("abc",{
  validator : {
    $jsonSchema : {

    }
  }
})

Mostly mongodb needs to be installed as npm package to use it with node
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Database connected !!')
        app.listen(process.env.PORT, () =>{
            console.log(`Server started om ${process.env.PORT}`)
        })
    })

In terms of Node.js, mongodb is the native driver for interacting with a mongodb instance and mongoose is an Object modeling tool for MongoDB.
mongoose is built on top of the mongodb driver to provide programmers with a way to model their data.

MOngoDb flow 
--Database (hotel-booking)
  --collections (hotel,room,user)
    --documents (records)

Most of the times we need data in chunks so we can use mongoose-paginate to retrive data in chunks
lets suppose we create dataSchema;

cosnt DataSchema = {}
DataSchema.plugin(mongoosePaginate)
const Data = mongoose.model('Data', DataSchema)

In UI -
const result = await Data.paginate({}, { page: 1, limit : 20 })