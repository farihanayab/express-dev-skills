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
  
  module.exports = {
    getAll,
    getOne
  };