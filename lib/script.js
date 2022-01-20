//creating a todo list,
//takes the list
//update based on the id
//lists the map in order of the priority
//deletes the todo based on id;


let id = 0;
let tasksList = new Map();

process();

//driver process
function process(){
  let choice = showPrompt();
  if(choice==1)
  {
    id++;
    createTask(id);
    process();
  }
  else if(choice == 2)
  {
    updateTaskList();
    process();
  }
  else if(choice==3)
  {
    showTaskList();
    process();
  }
  else if(choice==4)
  {
    deleteTask();
    process();
  }
  else{
    //exit
    return;
  }

}

function createTask(taskId)
{
    let taskDescription = prompt("Enter task", "Get a bath");
    let taskPriority = prompt("Priority?", "High/Medium/Low");
    //console.log(taskPriority);
    taskPriority = taskPriority.toLowerCase();
    let priorityValue = getPriorityKey(taskPriority);
    let task = [priorityValue, taskDescription];
    tasksList.set(taskId, task);
    //console.log(tasksList);
    alert("NEW TASK CREATED");
}

function updateTaskList()
{
    let taskId = prompt("Enter id you want to update?", "0");
    taskId = Number(taskId);
    let oldTask = tasksList.get(taskId);

    let newDescription = prompt("Enter new description?(leave blank if not)", "");
    let newPriority = prompt("Enter new priority?(leave blank, if not)", "");

    newDescription = (newDescription.length) ? newDescription : oldTask[1];
    newPriority = (newPriority.length) ? getPriorityKey(newPriority.toLowerCase()) : oldTask[0];

    let freshTask = [newPriority, newDescription];
    tasksList.set(taskId, freshTask);

    alert("UPDATED");
}

function showTaskList()
{
    let tasksArray = Array.from(tasksList.values());
  //  alert(tasksArray.length);
    tasksArray.sort();
    console.log(tasksArray);

    /*tasksArray.forEach((value) => {
      alert(`${getPriorityValue(value[0])} == ${value[1]}`);
    });*/
}

function deleteTask()
{
    let taskId = Number(prompt("Enter id you want to delete?", "0"));
    //console.log(tasksList.has(taskId));
    if(tasksList.has(taskId)){
      tasksList.delete(taskId);
      //console.log(tasksList.size);
      alert("DELETED");
    }
    else {
      alert("NO TASK WITH THAT ID!")
    }

}

function getPriorityValue(taskPriorityKey)
{
  if(taskPriorityKey==1)
  return "HIGH";
  else if(taskPriorityKey==2)
  return "MEDIUM";
  else
  return "LOW";
}


function getPriorityKey(taskPriority){
  if(taskPriority=="high")
  return 1;
  else if (taskPriority=="medium")
  return 2;
  else
  return 3;
}

function showPrompt() {
  let choice = prompt("Enter 1 for create todo\nEnter 2 for update todo\nEnter 3 to list todo\nEnter 4 to delete todo\nEnter 0 to exit", "0");
  return choice;
}


//console.log(showPrompt());
// Add your code here


//testvalues
//[[4, [2, "abcwork"]], [1, [1, "get a bath"]], [2, [3, "get drunk"]], [3, [3, "chill"]]]
