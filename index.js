const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());

app.get("/", (_, res) => {
  res.send("Hello World!");
});
app.get('/findMessage', (req, res)=>{
  res.status(200).json({messages})
})
app.post('/message', (req, res) =>{
  const {text, user} = req.body;
  if(!text || !user){
    res.status(400).json({error : "Please provide a valid input"})
  }
    const newMessage = {
      user, 
      text,
      timestamp : new Date().toISOString(),
    }
    messages.push(newMessage)
    res.status(200).json({message : newMessage})

})
const messages = [];

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = { app, messages };
