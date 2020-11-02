const express = require('express');
const { nanoid } = require('nanoid');
const bodyParser = require('body-parser');


let arr = [
  {   
  id: nanoid(), 
  text: "Lorem, ipsum dolor sit",
  title: "Lorem",
  status: "In progres",
  priority: "Minor",
  },
  {
    id: nanoid(), 
    title: "Lorem ipsum",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    status: "Open",
    priority: "Major",
  }
]

const app = express();

app.use(express.static('public'));

app.use(bodyParser.json());

// Get all. GET

app.get("/api/arr", (req, res)  => {
  res.json(arr);
})

// Create. POST

app.post('/api/arr', (req, res) => {
  let el = req.body;
  if (el && el.title) {
    el.id = nanoid();
    arr.push(el);

    res.json(el);
  } else {
    res.status(400);
    res.json({
      status: 400,
      message: 'Title is empty',
    });
  }
});

// Rename. PUT

app.put('/api/arr/:id', (req, res) => {
  let index = arr.findIndex((element) => element.id === req.params.id);     

  if (index === -1) {
    res.status(404);
    res.json({
      status: 404,
      message: 'Not Found',
    });
  } else {  
    let newEl = req.body;
    newEl.id = req.params.id;
    arr[index] = newEl;

    res.json(newEl);
  }
});

// Delete. DELETE

app.delete('/api/arr/:id', (req, res) => {
  let el = arr.find(el => el.id === req.params.id);
  if (!el) {
    res.status(404);
    res.json({
      status: 404,
      message: 'Not Found',
    });
  } else {
    arr = arr.filter(el => el.id !== req.params.id);
    res.json(el);
  }
});

app.listen(3000, () => {
  console.log('Server started at 3000');
});