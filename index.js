"use strict";

const inquirer = require("inquirer");

const toDoList = [];

// INDEX COUNTER
let indexID = toDoList.length;

// ADD AN ITEM
function addToDo(string) {
  let toDo = {
    id: indexID + 1,
    text: string,
    status: false,
    date: new Date().toUTCString(),
  };
  toDoList.push(toDo);
  indexID++;
}

// DELETE AN ITEM
const updateIndex = () =>
  toDoList.map((item) => (item.id = toDoList.indexOf(item) + 1));

function deleteToDo(number) {
  for (let obj of toDoList) {
    if (number === obj.id) {
      toDoList.splice(obj.id - 1, 1);
      indexID--;
    }
  }
  updateIndex();
}

//UPDATE STATUS
function updateToDo(itemIndex, value) {
  if (value == true || value == "true") {
    return (toDoList[itemIndex - 1].status = true);
  } else if (value == false || value == "false") {
    return (toDoList[itemIndex - 1].status = false);
  } else {
    return console.log("Sorry invalid input");
  }
}

//EDIT ITEMS
const editToDo = (itemIndex, value) =>
  typeof value === "string"
    ? (toDoList[itemIndex - 1].text = value)
    : console.log("Please insert a string");

// FILTER ITEMS
function pendingToDo() {
  let pending = [];
  for (let obj of toDoList) {
    if (obj.status === false) {
      pending = pending.concat(obj);
    }
  }
  return pending;
}

function doneToDo() {
  let done = [];
  for (let obj of toDoList) {
    if (obj.status === true) {
      done = done.concat(obj);
    }
  }
  return done;
}
// PROMPT LIST
const questions = [
  {
    type: "list",
    name: "Choices",
    message: `Welcome to TODO
Please select a option from the list`,
    choices: [
      "Show TODO List",
      "Add a task to your list",
      "Delete a task",
      "Mark a task as done or not done",
      "Edit tasks",
      "Show pending tasks",
      "Show finished tasks",
      "Quit TODO",
    ],
  },
];

// PROMPT
async function main() {
  // List of options
  let answers = await inquirer.prompt(questions);

  // Show TODO
  if (answers.Choices === "Show TODO List") {
    console.table(toDoList);
  }

  // Add a task
  else if (answers.Choices === "Add a task to your list") {
    let add = await inquirer.prompt({
      name: "addTask",
      type: "input",
      message: "Type the name of your task",
    });
    addToDo(add.addTask);
    console.table(toDoList);
  }

  // Delete something
  else if (answers.Choices === "Delete a task") {
    let del = await inquirer.prompt({
      name: "deleteTask",
      type: "input",
      message: "Which task do you want to delete? Type in the ID.",
    });
    deleteToDo(del.deleteTask);
    console.table(toDoList);
  }

  // Mark task as done or unfinished
  else if (answers.Choices === "Mark a task as done or not done") {
    let index = await inquirer.prompt({
      name: "indexTask",
      type: "input",
      message: "Which task do you want to update?",
    });
    let status = await inquirer.prompt({
      name: "statusTask",
      type: "input",
      message: "Type 1 for done, and 0 for unfinished",
    });
    updateToDo(index.indexTask, status.statusTask);
    console.table(toDoList);
  }

  // Edit tasks
  else if (answers.Choices === "Edit tasks") {
    let index = await inquirer.prompt({
      name: "editIndex",
      type: "input",
      message: "Which task do you want to edit?",
    });
    let edit = await inquirer.prompt({
      name: "editTask",
      type: "input",
      message: "Type in your new task!",
    });
    editToDo(index.editIndex, edit.editTask);
    console.table(toDoList);
  }

  // Show pending tasks
  else if (answers.Choices === "Show pending tasks") {
    console.table(pendingToDo());
  }
  // Show finished tasks
  else if (answers.Choices === "Show finished tasks") {
    console.table(doneToDo());
  } else if (answers.Choices === "Quit TODO") {
    return;
  }
  main();
}
// Calling the prompt
main();
