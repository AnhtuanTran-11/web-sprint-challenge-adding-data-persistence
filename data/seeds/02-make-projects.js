const projects = [
  {project_name: 'Play basketball'},
  {project_name: 'Play soccer'},
  {project_name: 'Play golf'},
]

const resources = [
  {resource_name: 'Basketball'},
  {resource_name: 'Soccer ball'},
  {resource_name: 'Golf ball'},
]

const project_resources = [
  {project_id: 1, resource_id: 1,},
  {project_id: 2, resource_id: 2,},
  {project_id: 3, resource_id: 3,},
]

const tasks = [
  {task_description: "Go to basketball court", project_id: 1},
  {task_description: "Go to soccer field", project_id: 2},
  {task_description: "Go to golf course", project_id: 3},
]


exports.seed = async function (knex) {
  await knex('projects').insert(projects)
  await knex('resources').insert(resources)
  await knex('tasks').insert(tasks)
  await knex('project_resources').insert(project_resources)
  };