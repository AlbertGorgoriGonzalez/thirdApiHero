const mongoose = require('mongoose');

const filmSchema = mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Film', filmSchema);


// module.exports = mongoose.model('User', mongoose.Schema({
//   mail: String
// }));