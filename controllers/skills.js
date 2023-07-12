const skills = require('../models/skill');



function index(req, res) {
  // req is the request a user is making
  // res is the response object thtat helps us repond to the request
  res.render("skills/index", {
    // what is returned from the getAll() method in the model/skills file
    skills: skills.getAll(),
  });
}

function show(req, res) {
  res.render("skills/show", {
    skill: skills.getOne(req.params.id)
  });
}

module.exports = {
  index,
  show
};
