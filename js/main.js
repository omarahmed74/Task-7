let taskInput = document.getElementById("taskInput")
let addTaskbtn = document.getElementById("addTaskbtn")
let noTasks = document.getElementById("noTasks")
let allTasks = document.getElementById("allTasks")



let addTaskFunction = ()=> {
   taskData = taskInput.value
   noTasks.remove();
   newDiv = document.createElement("div");
   newDiv.classList = "alert alert-info";
   newDiv.append(taskData);
   allTasks.append(newDiv)
}

addTaskbtn.addEventListener('click' ,  addTaskFunction)