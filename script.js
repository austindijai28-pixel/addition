// Function to handle the math
function performAddition() {
    // 1. Grab the values from the input fields
    const n1 = parseFloat(document.getElementById('num1').value) || 0;
    const n2 = parseFloat(document.getElementById('num2').value) || 0;

    // 2. Add them
    const sum = n1 + n2;

    // 3. Display the result in the H3 tag
    document.getElementById('result').innerText = "Result: " + sum;
}

// 4. Attach the function to the button click
document.getElementById('addBtn').addEventListener('click', performAddition);