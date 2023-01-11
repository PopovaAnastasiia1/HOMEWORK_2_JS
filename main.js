let name = prompt("What is your name?");
let age = prompt("How old are you?");
let agree
 
while (name === "" || !isNaN(name) || !/^[a-zA-Z]+$/.test(name)) {
    name = prompt("Re-enter your name!", name);
}

while (age === "" || Number(isNaN(age))) {
    age = +prompt("Re-enter your age!", age);
}

if (age < 18) {
    alert("You are not allowed to visit this website");
} else if (age >=18 && age <=22) {
    agree = confirm("Are you sure you want to continue?");
    if ( agree === true){
        alert(`Welcome, ${name}`);
    } else  {
        alert("You are not allowed to visit this website");
    }
} else {
    alert(`Welcome, ${name}`);
}


