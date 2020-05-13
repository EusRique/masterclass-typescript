"use strict";
exports.__esModule = true;
var express_1 = require("express");
var UserController_1 = require("./controllers/UserController");
var routes = express_1.Router();
routes.get('/users', UserController_1["default"].index);
routes.post('/users', UserController_1["default"].create);
exports["default"] = routes;
