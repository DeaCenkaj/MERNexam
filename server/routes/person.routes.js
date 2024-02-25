const ProjectController = require("../controllers/project.controller")

module.exports = app => {
    app.get("/api/projects", ProjectController.findAllProjects);
    app.get("/api/projects/:id", ProjectController.findOneProject);
    app.post("/api/projects/new", ProjectController.createProject);
    app.put("/api/projects/update/:id", ProjectController.updateOneProject);
    app.delete("/api/projects/delete/:id", ProjectController.deleteProject);
}