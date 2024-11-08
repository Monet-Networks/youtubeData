const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());

app.use("/youtube", require("./routes/youtube"));

const port = 8800;

app.listen(port,() => {
  console.log(`server is connected at port : ${port}`);
});
