
const User = require('../models').User;
var crypto = require('crypto'); 
var md5 = crypto.createHash('md5'); 

module.exports = {

  create(req,res) {
    
    var passwordUserHash = md5.update(req.body.ClientMotDePasse).digest('hex'); 
    
 return User
      .create({
        emailUser: req.body.ClientEmail,
        passwordUser: passwordUserHash,
      })

      .then(User => res.status(201).json(User))
      .catch(error => res.status(400).send(error));
  },

  find(req,res) {
    
    return User
      .find({
        where: { emailUser: req.body.ClientEmail } 
      })

  }, 

}; 
