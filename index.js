const express = require("express")
const {logReqRes} = require('./midlesware/index')
const {connectMongoDb} = require('./connection')
const app = express();
const useRouter = require("./routes/user")

const PORT = 8000;

// connection
connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1").then(()=>console.log("MongoDb connected"))


app.use(logReqRes("log.txt"));
// Midleware - pluge in
app.use(express.urlencoded({extended: false}))
//Route
app.use(logReqRes("log.txt"));
app.use(logReqRes("log.txt"));
// Midleware - pluge
app.use("/api/users", useRouter);

app.listen(PORT,()=>console.log(`Server started at Port:${PORT}`));
//Route
app.use(logReqRes("log.txt"));