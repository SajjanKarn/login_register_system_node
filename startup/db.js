const mongoose = require('mongoose');

module.exports = () => {
   // mongdb cloud connection is here
  mongoose
    .connect("mongodb://localhost/databaseName", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log("connected to mongodb cloud! :)");
    })
    .catch((err) => {
      console.log(err);
    }); 
};
