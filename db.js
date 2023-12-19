const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
const connectToMongo =() => {
    const mongoURI = process.env.DATABASE;
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully "+process.env.DATABASE);
    })
}
module.exports = connectToMongo;
//mongodb://localhost:27017
//mongodb://localhost27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false