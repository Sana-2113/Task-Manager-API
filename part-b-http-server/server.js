const http = require("http");



let tasks = [];

const server = http.createServer((req, res) => {


    if (req.url ==="/" && req.method === "GET") {

        res.end ("Welcome to Task Manager API");
    }

    else if (req.url === "/tasks" && req.method === "GET") {
 
        res.writeHead (200,  {  "Content-Type": "application/json"});
        res.end (JSON.stringify({
            message:"Task fetch successfully",
            success:true,
            data:tasks
        }));

    }
else if (req.url.startsWith("/tasks/") && req.method === "GET") {
    const id = Number (req.url.split("/")[2]);
    const task = tasks.find (t => t.id === id );
    
    
    res.writeHead(task ? 200 :404,{

        "Content-Type": "application/json"
    });
    res.end(JSON.stringify({
        message: task? "Task found"  :  "Task not found",
        success:  !!task,
        data: task || null
    }));
}
else if (req.url === "/tasks" && req.method === "POST"){
    let body = "";
    
    req.on ("data",( chunk)  =>{
        body += chunk;
    });
    req.on ("end", ()  =>{
let taskData;

try {
  taskData = JSON.parse(body);

  if (
    !taskData ||
    typeof taskData.title !== "string" ||
    !taskData.title.trim()
  ) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
      message: "Task title is required",
      success: false,
      data: null
    }));
    return;
  }
} catch (error) {
  res.writeHead(400, { "Content-Type": "application/json" });
  res.end(JSON.stringify({
    message: "Invalid JSON",
    success: false,
    data: null
  }));
  return;
}
const newTask = {
    id: tasks.length + 1,
    title: taskData.title
};
tasks.push(newTask);

res.writeHead(201,{
    "Content-Type": "application/json"
});

res.end(JSON.stringify({
    message: "Task created successfully",
    success: true,
    data: newTask

}));

    });
}
else if (req.url.startsWith("/tasks/") && req.method === "PUT"){
    const id = Number(req.url.split("/")[2]);
    const task = tasks.find(t => t.id === id);

if (!task) {
    res.writeHead(404,{
        "Content-Type": "application/json"
    });
    return res.end(JSON.stringify({
        message: "Task not found" ,
        success: false,
        data: null

    }));
}
let body = "";
req.on("data", (chunk) =>{
    body += chunk;

});
req.on("end",() => {
const taskData = JSON.parse(body);
task.title = taskData.title;
res.writeHead(200, {
    "Content-Type": "application/json"

});
res.end(JSON.stringify({
    message: "Task updated successfully",
    success: true,
    data: task

}));
});

}
else if (req.url.startsWith("/tasks/") && req.method === "DELETE")  {
    const id= Number(req.url.split("/")[2]);
    const taskIndex = tasks.findIndex(t => t.id === id);
    if (taskIndex === -1){

        res.writeHead(404,{
            "Content-Type": "application/json"

        });

        return res.end(JSON.stringify({
            message: "Task not found",
            success: false,
            data: null
        }));

    }
    const deleteTask = tasks.splice(taskIndex, 1)[0];

res.writeHead(200, {

    "Content-Type": "application/json"

});
res.end(JSON.stringify({
    message: "Task deleted successfully",
    success: true,
    data: deleteTask

}));

}
    else if (req.url === "/about"  && req.method === "GET"){

        res.end("This is a Task Manager API built with Node.js");
    }
});

server.listen(3000,() => {

    console.log ("Server running on http:// localhost:3000");
});