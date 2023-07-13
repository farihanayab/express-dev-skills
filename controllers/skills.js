const skills = require('../models/skill');

function index(req, res) {
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
function update(req, res) {
  req.body.done = !!req.body.done;
  Todo.update(req.params.id, req.body);
  res.redirect(`/skills/${req.params.id}`);
}
module.exports = {
  index,
  show
  new: newskills,
  create,
  delete: deleteskills,
  edit,
  update,
};
