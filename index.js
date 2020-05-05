const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose');

// const MongoClient = require('mongodb').MongoClient;

const app = express()
const port = 3000

// Connection URL
const url = 'mongodb://localhost:27017/yyy';
// Database Name


mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const SurveySchema = new mongoose.Schema({
  survey: { type: String, default: '' },
    text: { type: String, default: 0 },
    choice: {type:Object}
    count1: { type: Number, default:0 },
  });
const Survey = mongoose.model('Survey', SurveySchema);
const CountSchema = new mongoose.Schema({
  survey: { type: String, default:'' },
    count: { type: Number, default:0 },
   
  });
const Count = mongoose.model('Count', CountSchema);


// parse application/json
app.use(bodyParser.json())
app.use(cors())
// app.use(express.static('client/dist/client'))

app.get('/survey', (req, res)=>{
    Survey.find((err, result)=>{
      console.log(result);
      res.json(result);
    })
})
app.get('/count', (req, res)=>{
  Count.find((err, result)=>{
    console.log(result);
    res.json(result);
  })
})
app.get('/survey/:name', function(req, res) {
  let name1 = req.params.name;
  
	Survey.findOne({survey:name1}, function(err, surveyy) {
		if (err)
			res.send(err)
 
    res.json(surveyy);
   
	});
 
});
app.get('/survey/:name', function(req, res) {
  let name1 = req.params.name;
Model.findOne({survey:name1}, function (err, doc){
  doc.name = 'jason bourne';
  doc.visits.$inc();
  doc.save();
});
});
app.post('/survey', (req, res)=>{
    let survey = req.body;
    // users.push(user);
    const obj = new Survey();
    obj.survey=survey.surveyname;
    obj.text = survey.text;
    obj.choice=survey.choices;
    obj.save((error, result)=> {
        res.status(201).end();
    })

  //
});
app.post('/count', (req, res)=>{
  let countt = req.body;
  // users.push(user);
  const objj = new Count();
  objj.survey=countt.survey1;
  objj.count =objj.count+countt.text1
  console.log("wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww")
  console.log(objj.surveyy)
  console.log(objj.count)
  objj.save((error, result)=> {
      res.status(201).end();
  })

//
});
   
    
    // res.json(users)



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

module.exports = {
    app
};


 // MongoClient.connect(url, function(err, client) {
    //     console.log("Connected successfully to server");
    //     const db = client.db(dbName);
    //     const collection = db.collection('users');
    //     collection.insertOne(user, (error, result)=>{
    //         if(error) throw error;
    //         console.log(result);
    //         res.status(201).end();
    //     });
    //   });
