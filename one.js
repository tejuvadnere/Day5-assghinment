function nums() {
    var inputArray = [];
    let n = parseInt(prompt("Enter the no. of Array Elements you want:"));
    for (i = 0; i < n; i++) {
        inputArray[i] = i + 1;
    }
    console.log(inputArray);
    let odd = inputArray.filter(el => el % 2 != 0);
    console.log(odd);
    let cubes = odd.map(el => el **3);
    console.log(cubes);
}
document.querySelector(".one").addEventListener("click", nums);
