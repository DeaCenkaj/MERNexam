const Project = require("../models/project.model");

module.exports.findAllProjects = (req, res) => {
    Project.find().sort({dueDate: 1})
        .then(allProjects => res.json({project : allProjects}))
        .catch(err => res.json({message: "Something went wrong when finding all!", error: err}))
}
module.exports.findOneProject = (req, res) => {
    Project.findOne({_id: req.params.id})
        .then(oneProject => res.json({project: oneProject}))
        .catch(err => res.json({message: "Something went wrong when finding one!", error: err}))
}
module.exports.createProject = (req, res) => {
    Project.create(req.body)
        .then(newProject => res.json({project : newProject}))
        .catch(err => res.json({message: "Something went wrong when creating a Project!", error: err}))
}

module.exports.updateOneProject = (req, res) => {
    Project.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedProject => res.json({project : updatedProject}))
        .catch(err => res.json({message: "Something went wrong when trying to update a Project!", error: err}))
}

module.exports.deleteProject = (req, res) => {
    Project.deleteOne({_id: req.params.id})
        .then(result => res.json({result : result}))
        .catch(err => res.json({message: "Something went wrong when trying to delete a Project!", error: err}))
}