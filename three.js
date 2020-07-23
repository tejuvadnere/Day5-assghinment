function fapi(){
    var rand = parseInt(Math.random()*200+1);
fetch(`https://jsonplaceholder.typicode.com/todos/${rand}`)
.then(response=>response.json())
.then(data=>console.log(data))
}


document.querySelector(".three").addEventListener("click", fapi)