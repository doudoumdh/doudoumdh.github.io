//an array list to hold all results for future use
let resultList = [];


//function to perform operation based on operation sign
function operation() {
    let x = parseFloat(prompt("Enter your first value"));
    let op = prompt("Enter your operator (+, -, *, /, %)");
    let y = parseFloat(prompt("Enter your second value"));

    let result;

    // Perform the operation and push the result to the resultList array
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

    // Only add valid results to the resultList
    if (!isNaN(result)) {
        resultList.push(result);
    }

    // Append a new row to the existing table
    document.getElementById("resultTable").innerHTML +=
        "<tr><td>" + x + "</td><td>" + op + "</td><td>" + y + "</td><td>" + result + "</td></tr>";
}

// Function to calculate min, max, avg, and total from resultList
function minMaxAvg() {
    let min;
    let max;
    let avg;
    let total;
    if (resultList.length === 0) return { min: 0, max: 0, avg: 0, total: 0 };

    min = Math.min(...resultList);
    max = Math.max(...resultList);


    total = resultList.reduce((a, b) => a + b, 0);
    avg = total / resultList.length;

    //we return the new values assigned
    return { min, max, avg, total };
}

let ans = prompt("Do you wanna use the Calculator? (Y/N)");

//prompt the user to continue or not
if (ans === "Y" || ans === "y") {
    // Create the table structure once at the beginning if the user chooses to use the calculator
    document.write("<table border='1' id='resultTable'>");
    document.write("<tr style='background-color: orange;'><th>X</th><th>Op</th><th>Y</th><th>Result</th></tr>");

    while (ans === "Y" || ans === "y") {
        operation();
        ans = prompt("Do you wanna use the Calculator again? (Y/N)");
    }

    // After exiting the loop, calculate and display the min, max, avg, and total
    let stats = minMaxAvg();

    document.write("<table border='1' id='minMaxtable'>");
    document.write("<tr style='background-color: orange;'><th>Min</th><th>Max</th><th>Avg</th><th>Total</th></tr>");
    document.write("<tr><td>" + stats.min + "</td><td>" + stats.max + "</td><td>" + stats.avg.toFixed(2) + "</td><td>" + stats.total + "</td></tr>");
    document.write("</table>");

} else {
    document.write("Exiting...");
}
