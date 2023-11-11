let todo = [];

let req = prompt("please enter what you want");

while ("true") {
  //   console.log("we are doing good");

  if (req == "quit") {
    console.log("ok good luck for next time");
    break;
  }

  if (req == "list") {
    console.log("here is the list start");
    for (i = o; i < todo.length; i++) {
      console.log(i, todo[i]);
    }
    console.log("here is loop end");
  }
  if (req == "add") {
    let task = prompt("please enter your task that you add");
    todo.push(task);
    console.log("task added");
  }

  // if(req == "quit"){
  //     console.log("ok good luck for next time");
  //     break;
  // }
  else if (req == "delete") {
    let index = prompt("please neter the task index");
    todo.splice(index, 1);
    console.log(index);
  } else {
    console.log("you are wrong");
  }
}
