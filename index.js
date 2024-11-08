const express = require("express");
const app = express();
const cors = require('cors');
const port = 8800;

app.get('/',(req,res)=>{
  res.send(`this is working. and server is running at port ${port}`)
})

app.use(cors());

app.use("/youtube", require("./routes/youtube"));



app.listen(port,() => {
  console.log(`server is connected at port : ${port}`);
});
