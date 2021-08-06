const express = require('express');
const app = express();
const PORT = 8000

app.listen(PORT,function(){
  console.log(`Your server is running on port ${PORT}`)
})