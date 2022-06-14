const express = require('express');

const app = express();
let people = [
    {
        name: "himanshu",
        id:1
    },
    {
        name: "james",
        id:2
    },
    {
        name: "james",
        id:3
    }
]

app.get('/', (req, res) => {
    res.send('<h1>Welcome</h1>');
})

app.get('/api/users', (req, res) => {
    res.json(people);
})
const PORT = 3001
  app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
  })


