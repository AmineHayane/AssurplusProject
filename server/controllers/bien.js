const biens = require('../models').biens;

module.exports = {

  list(req, res) {
   
  return biens
    .findAll()
    .then(biens => res.status(200).send(biens))
    .catch(error => res.status(400).send(error));
  
    }, 

  create(req,res) {
    
    return biens
      .create({

        prixachat: req.body.prixachat, 
        imageurl: "assets/images/image4.jpg", 
        description: req.body.description, 
        dateachat: req.body.dateachat, 
        evaluation: "0"
      })
      .then(biens => res.status(201).json(biens))
      .catch(error => res.status(400).send(error));
      
  },

delete(req,res) {

  return biens

  .destroy({ where: { id: req.params.id} }) 
  .then(biens => res.status(201).json(biens))
  .catch(error => res.status(400).send(error));

}


};