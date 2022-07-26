'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var express_1 = __importDefault(require('express'));
var routesIndex_1 = __importDefault(require('./routes/routesIndex'));
var app = (0, express_1.default)();
var PORT = 3000;
app.use('/api', routesIndex_1.default);
app.listen(PORT, function () {
  return console.log('live on http://localhost:'.concat(PORT, '/api'));
});
exports.default = app;
