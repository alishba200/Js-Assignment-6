// Q1: Arithmetic Operations
document.write("<h2>Task 2: Arithmetic Operations</h2>");
var a = 10;
document.write("Result:"+ "<br>");
document.write("The value of a is: " + a + "<br>");
document.write("........................................" + "<br><br>");
document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + (a++) + "<br>");

document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Q2: Variable Output Explanation

var a = 2, b = 1;
var result = --a - --b + ++b + b--;

document.write("<h2>Task 2: Variable Output Explanation</h2>");
document.write("Initial values: a = 2, b = 1<br>");
document.write("After --a: a = " + (a - 1) + ", b = " + b + "<br>");
document.write("After --a - --b: " + (a - 1) + " - " + (b - 1) + " = " + ((a - 1) - (b - 1)) + "<br>");
document.write("After --a - --b + ++b: " + ((a - 1) - (b - 1)) + " + " + (b) + " = " + (((a - 1) - (b - 1)) + b) + "<br>");
document.write("After --a - --b + ++b + b--: " + (((a - 1) - (b - 1)) + b) + " + " + b + " = " + result + "<br>");
document.write("Final values: a = " + a + ", b = " + b + "<br><br>");

// Q3: Greet the User

var userName = prompt("Enter your name:");

document.write("<h2>Task 3: Greet the User</h2>");
document.write("Hello, " + userName + "! Welcome to our website.<br><br>");

// Q5: Multiplication Table

var userNumber = prompt("Enter a number for multiplication table (default is 5):");
userNumber = userNumber ? parseInt(userNumber) : 5;

document.write("<h2>Task 5: Multiplication Table</h2>");
document.write("Multiplication table of :" + userNumber + "<br>");
for (var i = 1; i <= 10; i++) {
    document.write(userNumber + " x " + i + " = " + (userNumber * i) + "<br>");
}
document.write("<br>");

// Q6: Subject Marks Calculation

// Q6 (a)
var sub1 = prompt("Enter the name of the first subject:");
var sub2 = prompt("Enter the name of the second subject:");
var sub3 = prompt("Enter the name of the third subject:");

// Q6 (b)
var totalMarksPerSubject = 100;

// Q6 (c)
var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + sub1 + ":"));

// Q6 (d)
var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + sub2 + ":"));
var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + sub3 + ":"));

// Q6 (e)
var totalMarks = totalMarksPerSubject * 3;
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage1 = (obtainedMarks1 / totalMarksPerSubject) * 100;
var percentage2 = (obtainedMarks2 / totalMarksPerSubject) * 100;
var percentage3 = (obtainedMarks3 / totalMarksPerSubject) * 100;
var overallPercentage = (totalObtainedMarks / totalMarks) * 100;

document.write("<h2>Task 6: Subject Marks Calculation</h2>");
document.write("<table style=' border-collapse: collapse;'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + sub1 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarks1 + "</td><td>" + percentage1.toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + sub2 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarks2 + "</td><td>" + percentage2.toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + sub3 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarks3 + "</td><td>" + percentage3.toFixed(2) + "%</td></tr>");
document.write("<tr><td>Total</td><td>" + totalMarks + "</td><td>" + totalObtainedMarks + "</td><td>" + overallPercentage.toFixed(2) + "%</td></tr>");
document.write("</table><br>");
