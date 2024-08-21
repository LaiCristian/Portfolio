const express = require('express');
const app = express();
const { MongoClient, ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken')

app.use(express.json())

const mongoURL = 'mongodb+srv://shadow:C30TO0Nh9dIUC8Fq@milionar.yiydnr6.mongodb.net/?retryWrites=true&w=majority';

app.get("/home", async (req, res) => {
   try {
        const client = new MongoClient(mongoURL); //, { useNewUrlParser: true, useUnifiedTopology: true }
        await client.connect();

        const db = client.db('test');
        const questionsCollection = db.collection('questions');

        const stageCounter = req.headers['stagecounter'];
        const username = req.headers['username'];
        if (stageCounter==0){
            console.log("User: ", username, " started a new game");
        }
        let st = parseInt(stageCounter) +1 
        const randomQuestion = await questionsCollection.aggregate([
        { $match: { questionStage: st } },
        { $sample: { size: 1 } }
        ]).toArray();

    if (randomQuestion.length === 0) {
        return res.status(404).json({ error: 'No question found' });
    }
    const id = randomQuestion[0]._id;
    const idString = id.toString();
    const question = {
        id: idString,
        questionStage: randomQuestion[0].questionStage,
        question: randomQuestion[0].question,
        wrong: randomQuestion[0].wrongAns,
        right: randomQuestion[0].rightAns
    };
    // console.log(question);

        res.json({ question });
        client.close();
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: err.message });
    }
});

app.post("/check-answer", async (req, res) => {
    try {
        const client = new MongoClient(mongoURL); //, { useNewUrlParser: true, useUnifiedTopology: true }
        await client.connect();

        const db = client.db('test');
        const questionsCollection = db.collection('questions');

        const { username, submittedAnswer, stageCounter, id } = req.body;

        const objectId = new ObjectId(id);
        
        const question = await questionsCollection.findOne({ _id: objectId });

        let isCorrect = false;
        let win = false;
        const resp = {
            isCorrect: isCorrect,
            win: win
        }
        if(submittedAnswer == question.rightAns){
            // console.log(stageCounter);
            if(stageCounter===8){
                resp.win = true;
                resp.isCorrect = true;
                console.log("User: ", username, " won the game");
            }else{
                resp.isCorrect = true;
                console.log("User: ", username, " passed the", stageCounter+1, "stage");
            }
        }else{
            console.log("User: ", username, " lost the game at", stageCounter+1, "stage");
        }

        res.json({ resp });
        client.close();
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: err.message });
    }
});


app.post("/usehelp", async (req, res) => {
    try {
        const client = new MongoClient(mongoURL); //, { useNewUrlParser: true, useUnifiedTopology: true }
        await client.connect();

        const db = client.db('test');
        const questionsCollection = db.collection('questions');

        const { username, selectedHelp, stageCounter, id } = req.body;

        const objectId = new ObjectId(id);
        
        const question = await questionsCollection.findOne({ _id: objectId });
        const differentQuestion = await questionsCollection.findOne({
            _id: { $ne: objectId }, 
            questionStage: stageCounter+1
        });


        const options = [];
        const rProcent = Math.floor(Math.random() * (61 - 40 + 1)) + 40;
        const w1Procent = Math.floor(Math.random() * ((100-rProcent) - 10 + 1)) + 10;
        const w2Procent = Math.floor(Math.random() * ((100-rProcent-w1Procent)));
        const w3Procent = 100-rProcent-w1Procent-w2Procent;
        const vote = [
            {
                answer: question.rightAns,
                procent: rProcent
            },
            {
                answer: question.wrongAns[0],
                procent: w1Procent
            },
            {
                answer: question.wrongAns[1],
                procent: w2Procent
            },
            {
                answer: question.wrongAns[2],
                procent: w3Procent
            }
        ]
        
        // console.log(differentQuestion);

        const idnew = differentQuestion._id;
        const idString = idnew.toString();
        const question2 = {
            id: idString,
            questionStage: differentQuestion.questionStage,
            question: differentQuestion.question,
            wrong: differentQuestion.wrongAns,
            right: differentQuestion.rightAns
        };

        let isCorrect = 0;
        const help = {
            options: options,
            isCorrect: isCorrect,
            vote: vote,
            question: question2
        };
        
        if(selectedHelp == 'fifty'){
            help.options.push(question.wrongAns[2]);
            help.options.push(question.wrongAns[Math.floor(Math.random() * 2)])
            help.isCorrect = 1;
            console.log("User: ", username, " used the ", selectedHelp, "help")
        }else if(selectedHelp == 'people'){
            help.isCorrect = 2;
            console.log("User: ", username, " used the ", selectedHelp, "help")
        }else if(selectedHelp == 'refresh'){
            help.isCorrect = 3;
            console.log("User: ", username, " used the ", selectedHelp, "help")
        }

        res.json({ help });
        client.close();
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: err.message });
    }
});

app.listen(8081, () => console.log("Server started on port 8081"));