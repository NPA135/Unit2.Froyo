const froyoflavors = prompt(
    "Enter your froyo flavors separated by commas."
);

const froyoinput = froyoflavors.split(",");

const flavors = {}

for (let i = 0; i < froyoinput.length; i++) {
    let newkey = froyoinput[i].trim() 
    if (flavors[newkey]) { 
        flavors[newkey]++ 
    } else {
        flavors[newkey] = 1 
    }
}

console.log(flavors)