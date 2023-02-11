"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDb = void 0;
let database;
const connectDb = () => {
    // database connection
    const mongoose = require('mongoose');
    const mongodbUrl = "mongodb://127.0.0.1:27017/lets_connect";
    mongoose.connect(mongodbUrl);
    mongoose.connection.on("connected", function () {
        console.log("mongoose database connected with " + mongodbUrl);
    });
    mongoose.connection.on("error", function (err) {
        console.log("Unable to connect with " + mongodbUrl + "error are" + err);
    });
};
exports.connectDb = connectDb;
//# sourceMappingURL=database.js.map