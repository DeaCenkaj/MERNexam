const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "You must provide a title!"],
        minlength: [3, "The title must be at least 3 characters long!"],
    },
    dueDate: {
        type: Date,
        required: [true, "A due date is required for the project!"]
    },
    status: {
        type: String,
        required: [true, "A status is required for the project!"]
    }
}, {timestamps: true})

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;