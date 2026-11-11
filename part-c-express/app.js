const express = require ("express");
const { data } = require("react-router-dom");

const app = express();

app.use(express.json());

const PORT = 4000;


let tasks = [];


app.get("/tasks", (req,res) => {

    res.status(200).json({
        message: "Tasks fetched successfully",
        success: true,
        data: tasks
    });
});
app.get("/tasks/:id", (req, res)  => {
 const id = Number(req.params.id);
 const task = tasks.find( t => t.id === id);
 if (!task){
    return res.status(404).json({
        message: "Task not found",
        success: false,
        data: null
    });
 }

res.status(200).json({
    message: "Task fetched successfully",
    success: true,
    data: task
});

});
app.post("/tasks", (req,res) =>{

    const title = req.body.title;
    if(!title || typeof title !== "string" || !title.trim()){
        return res.status(400).json({
            message: "Task title is required",
            success: false,
            data: null
        });
    }
const newTask = {
    id: tasks.length +1 ,
    title: title.trim()

};

tasks.push(newTask);

res.status(201).json({
    message: "Task created successfully",
    success: true,
    data: newTask
});



});    
app.put("/tasks/:id", (req,res) => {
    const id = Number (req.params.id);
    const task = tasks.find( t => t.id === id);
if (!task) {
    return res.status(404).json({
        message: "Task not found",
        success: false,
        data: null

    });
}
const title = req.body.title;
if (!title || typeof title !== "string"  || !title.trim()){
    return res.status(400).json({
        message: "Task title is required",
        success: false,
        data: null
    });
}
task.title = title.trim();
res.status(200).json({
    message: "Task updated successfully",
    success: true,
    data: task 
});
});
app.delete("/tasks/:id", (req,res) =>{
    const id = Number(req.params.id);
    const taskIndex = tasks.findIndex( t => t.id === id);
if (taskIndex === -1){
    return res.status(404).json({
        message: "Task not found",
        success: false,
        data: null
    });
}

const  deletedTask = tasks.splice(taskIndex, 1)[0];
res.status(200).json({
    message: "Task delete successfully",
    success: true,
    data: deletedTask
});
});

app.listen(PORT, () => {
    console.log("Express server running on http://localhost:4000");

});
