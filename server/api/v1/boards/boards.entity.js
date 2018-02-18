const mongoose = require('mongoose');


const schema = new mongoose.Schema({
    id: {type: Number, required: true},
    project_name: { type: String, required: true },
    description: { type: String,},
    backlog: { type: Number,},
    doing: { type: Number,},
    done: { type: Number,},
    lists: [{
        name: {type: String, required: true},
        description: {type: String,},
        taskList: [
            {
                name: {type: String, required: true},
                description: {type: String, required: true },
                dueDate: { type: Date, },
                status: {type: String, required: true}
            }
        ]
    }]
 }, { collection: 'boards' });


module.exports = mongoose.model("boards", schema);




