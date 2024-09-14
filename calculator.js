function operation() {
    let x = parseFloat(prompt("Enter your first value"));
    let op = prompt("Enter your operator (+, -, *, /, %)");
    let y = parseFloat(prompt("Enter your second value"));

    let result;

    if (op === "+") {
        result = x + y;
    } else if (op === "-") {
        result = x - y;
    } else if (op === "*") {
        result = x * y;
    } else if (op === "/") {
        result = x / y;
    } else if (op === "%") {
        result = x % y;
    } else {
        result = "Invalid operator";
    }

    // Append a new row to the existing table
    document.getElementById("resultTable").innerHTML += 
        "<tr><td>" + x + "</td><td>" + op + "</td><td>" + y + "</td><td>" + result + "</td></tr>";
}

let ans = prompt("Do you wanna use the Calculator? (Y/N)");

if (ans === "Y" || ans === "y") {
    // Create the table structure once at the beginning if the user chooses to use the calculator 
    
    document.write("<table border='1' id='resultTable'>");
    document.write("<tr style='background-color: orange;'><th>X</th><th>Op</th><th>Y</th><th>Result</th></tr>");

    
    while (ans === "Y") {
        operation();
        ans = prompt("Do you wanna use the Calculator again? (Y/N)");
    }

    document.write("</table>");
} else {
    document.write("Exiting...");
}

