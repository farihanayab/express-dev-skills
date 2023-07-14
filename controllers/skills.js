const skills = require('../models/skill');

function index(req, res) {
  res.render("skills/index", {
    // what is returned from the getAll() method in the model/skills file
    skills: skills.getAll(),
    title: "All skills",
  });
}
function newskills(req, res) {
  res.render("skills/new", { title: "New skills" });
}

function show(req, res) {
  res.render("skills/show", {
    skills: skills.getOne(req.params.id),
    title: "skill details",
  });
}
function update(req, res) {
  req.body.done = !!req.body.done;
  skills.update(req.params.id, req.body);
  res.redirect(`/skills/${req.params.id}`);
}
function create(req, res) {
  skills.create(req.body);

  res.redirect("/skills");
}

function deleteskills(req, res) {
  skills.deleteOne(req.params.id);

  res.redirect("/skills");
}

function edit(req, res) {
  const skill = skills.getOne(req.params.id);
  res.render("skills/edit", {
    title: "Edit skills",
    skill,
  });
}
module.exports = {
  index,
  show,
  new: newskills,
  create,
  delete: deleteskills,
  edit,
  update,
};
