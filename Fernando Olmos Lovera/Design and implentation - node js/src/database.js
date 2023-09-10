import mongoose from "mongoose";

mongoose.connect("mongodb://mongo/api-movies",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(db => console.log("Db is conected to", db.connection.host))
    .catch(err => console.log(err))