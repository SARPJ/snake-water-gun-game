let you = prompt("Choose Water, snake, gun")
let cpuI = Math.floor(Math.random() *3);
let cpu = ["water", "snake", "gun"][cpuI]


const match= (cpu, you)=>{
  if (cpu == you){
    return "Nobody";
  }
  else if(cpu=== "snake" && you==="water"){
    return "cpu"
  }
  else if(cpu=== "water" && you==="gun"){
    return "cpu" ;
  }
  else if(cpu=== "gun" && you==="snake"){
    return "cpu";
  }
  else if(cpu=== "water" && you==="snake"){
    return "you";
  }
   else if(cpu=== "snake" && you==="gun"){
    return "you";
  }
   else if(cpu=== "gun" && you==="water"){
    return "you"
  }
}
let result = match(cpu,you)
console.log("winner is " +result)
