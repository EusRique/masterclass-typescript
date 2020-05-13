"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cors_1 = require("cors");
var routes_1 = require("./routes");
var app = express_1["default"]();
app.use(cors_1["default"]());
app.use(routes_1["default"]);
app.listen(3333);
