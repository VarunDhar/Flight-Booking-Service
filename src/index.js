const express = require("express");
const app = express();
const {PORT, Logger} = require("./config");
const routesRouter = require("./routes");
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(PORT, (req,res)=>{
    console.log(`Server running successfully on port : ${PORT}`);
    Logger.info("Server started successfully");
});

app.use('/api',routesRouter);