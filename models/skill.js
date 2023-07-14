const skills = [
    { id: 12567, skills: "Time Management ", done: true },
    { id: 12987, skills: "Responsible", done: false },
    { id: 12321, skills: "Communication", done: true },
  ];
  
  function getAll() {
    return skills;
  }
  
  function getOne(id) {
    id = parseInt(id);
    return skills.find((skills) => skills.id === id);
  }
  
  function create(skill) {
    skill.id = Date.now() % 1000000;
  
    skill.done = false;
    skills.push(skill);
  }
  
  function deleteOne(id) {
    id = parseInt(id);
  
    const idx = skills.findIndex((skill) => skill.id === id);
    skills.splice(idx, 1);
  }
  
  function update(id, updatedskill) {
    id = parseInt(id);
    const skill = skills.find((skill) => skill.id === id);
   Object.assign(skill, updatedskill);
  }
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update,
};