
let list =[];
let task = prompt(" What would you like to do? type new, list, delete or quit");
while(task !== "quit"){
  
    if(task === "new"){
    
        let newTask = prompt("Enter a new task");
        list.push(newTask);
        console.log(`${newTask} added to the list`);
    }

    else if(task === "list"){
        if(list.length === 0){
            console.log("The list is empty");
        }else{
            for ( let i = 0; i < list.length; i++){
                console.log(`${i}: ${list[i]}`);
        }
    }
}
    else if(task === "delete"){
        let index = parseInt(prompt("Enter the index of the task you want to delete"));
        if(isNaN(index) || index <0 || index> list.length){
            console.log("Invalid index");
        }else{
            let deleted = list.splice(index, 1);
            console.log(`Deleted ${deleted}`);
        } 
       
    }
    task = prompt(" What would you like to do? type new, list, delete or quit");

}
console.log("You quit the app");