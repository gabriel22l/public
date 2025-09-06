let length;
let width;

function calculateArea(){
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
    let area = length * width;
    document.getElementById('result').innerText = `The area of the rectangle is ${area}`;

}
let total = 0;
function calculateTotal(){
    let groceries = document.getElementsByClassName('grocery');
    for(grocery of groceries){
        total += parseFloat(grocery.value);
    }
    document.getElementById('Total').innerText = `The total amount is: $${total}`
}