// 익스프레스
const express = require("express");
const app = express();

// dotenv .env 파일을 사용하기 위함
const dotenv = require("dotenv");
dotenv.config();
// dotenv .env 파일을 사용하기 위함

// json 파일을 보내고 받을 수 있게한다.
app.use(express.json());

// const authRoute = require("./routes/auth")
// app.use("/api/auth", authRoute)
const authRoute = require("./routes/auth");
app.use("/back/auth", authRoute);
// const postsRoute = require("./routes/posts")
// app.use("/api/posts", postsRoute)
// const categoriesRoute = require("./routes/categories")
// app.use("/api/categories", categoriesRoute)

const timeRoute = require("./routes/time");
app.use("/back/time", timeRoute);

const mongoose = require("mongoose");
// mongoose.connect('mongodb://localhost:27017/test');
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connect to MongoDB"))
  .catch((err) => console.log(err));

app.use(express.static("build"));
app.get("/*", function (req, res) {
  res.sendFile(__dirname + "/build/index.html");
});

var cron = require('node-cron');
const User = require("./models/User");
const Time = require("./models/Time");
const WeekTime = require("./models/WeekTime");
const TotalTime = require("./models/TotalTime");
const MonthTime = require("./models/MonthTime");


// cron.schedule('50 45 4 * * *',
//   async (req, res) => {
//     console.log('매 분 마다 작업 실행');
//     // console.log("ww")
//     // console.log(req.body);
//     // console.log("plz");
//     var tt3;
//     tt3 = await MonthTime.updateMany(
//       {},
//       { $set: { hour: 0, minute: 0, second: 0 } }
//     );
//     console.log(tt3);
//   });


// var a = new Date()
// console.log(a)
// console.log(a.getDay())
// cron.schedule('41 4 * * 6',
cron.schedule('59 23 * * *',
  async (req, res) => {
    console.log('매 분 마다 작업 실행');
    // console.log("ww")
    // console.log(req.body);
    // console.log("plz");
    var tt1;
    tt1 = await Time.updateMany(
      {},
      { $set: { time: 0, hour: 0, minute: 0, second: 0 } }
    );
    console.log(tt1);
  });

cron.schedule('59 23 * * 0',
  async (req, res) => {
    // console.log('매 분 마다 작업 실행');
    // console.log("ww")
    // console.log(req.body);
    // console.log("plz");
    var tt2;
    tt2 = await WeekTime.updateMany(
      {},
      { $set: { hour: 0, minute: 0, second: 0 } }
    );
    console.log(tt2);
  });

cron.schedule('0 0 1 * *',
  async (req, res) => {
    // console.log('매 분 마다 작업 실행');
    // console.log("ww")
    // console.log(req.body);
    // console.log("plz");
    var tt3;
    tt3 = await MonthTime.updateMany(
      {},
      { $set: { hour: 0, minute: 0, second: 0 } }
    );
    console.log(tt3);
  });
// const multer = require("multer")
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "images")
//     }, filename: (req, file, cb) => {
//         cb(null, req.body.name)
//     },
// })

// const upload = multer({ storage: storage });
// app.post("/api/upload", upload.single("file"), (req, res) => {
//     res.status(200).json("File has been uploaded");
// });
// app.use("/", (req, res) => {
//     console.log("hey this is main url")
// })

// const cors = require("cors");
// const corsOptions = {
//     origin: true,
//     credentials: true
// };
// app.use(cors(corsOptions));
// const session = require("express-session");
// const path = require("path")
// app.use("/images", express.static(path.join(__dirname, "/images")))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  // app.listen(5000, () => {
  console.log("Backend is running.");
});
