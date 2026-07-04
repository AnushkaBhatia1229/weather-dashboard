const mongoose = require("mongoose");

const uri =
  "mongodb+srv://bhatiaanushka7_db_user:YOUR_PASSWORD@cluster0.nphhymv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(uri)
  .then(() => {
    console.log("✅ Connected");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });