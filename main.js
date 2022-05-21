// all declaration
let Input = document.getElementById("input");
let Submit = document.getElementById("submit")
let Reset = document.getElementById("reset");
let EmptyBox = document.getElementById("empty-box");
let Text = document.getElementById("text");
// let newDiv = document.createElement('div');
// newDiv.className = 'container-lowerpart--box';
// newDiv.innerHTML = "<h2>This is demo .</h2>";
//let resultDiv = document.getElementById("result");
// resultDiv.prepend(newDiv);
// let secondOutput = document.createElement('h2');
// secondOutput.innerHTML = "<br>This is demo text";
// EmptyBox.appendChild(secondOutput);



Submit.onclick = function () {
    let recivedNumber = Number(Input.value);
    EmptyBox.style.background = '#5F7161';
    Text.innerHTML = `The Multiplication table of ${recivedNumber} is`
    Text.style.marginTop = '0px';
    for (let i = 1; i < 11; i++) {
        let singleLine = document.createElement("p");
        singleLine.style.margin = '5px 0px';
        singleLine.innerText = `${recivedNumber} x ${i}=${recivedNumber * i}`;
        console.log(`${recivedNumber} x ${i}=${recivedNumber * i}`);
        EmptyBox.append(singleLine);
    }


}





// if (recivedNumber % 2 === 0) {
//     Text.innerHTML = `${recivedNumber} is Even number`;
// }
// else if (recivedNumber % 2 === 1) {
//     Text.innerHTML = `${recivedNumber} is Odd number`;
// }
// else {
//     Text.innerHTML = `Given input is not an integer number`;
// }
// // Text.innerHTML = `The recive value is ${recivedNumber}`;
// // console.log(typeof (recivedNumber));



// function oddAndEvenCheck(num) {
//     if (num % 2 === 0) {
//         console.log(`${num} is a even number.`);
//     }
//     else if (num % 2 === 1) {
//         console.log(`${num} is a odd number.`);
//     }
//     else { console.log(`${num} is not an integer number`) }
// }

Reset.onclick = function () {
    // EmptyBox.style.background = '#F0EEE8';
    location.reload();
}



// blue btn js start

// Blue.onclick = function () {
//     // alert("There's a reason fairies wear blue!")
//     Blue.style.background = 'blue';
//     Red.style.background = '#1D2D50';
//     Green.style.backgroundColor = '#1D2D50';
//     EmptyBox.style.background = 'blue';
//     Text.innerHTML = 'Blue';
// }
//     // blue btn js end