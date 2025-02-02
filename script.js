// Function to calculate SGPA
document.getElementById("sgpaForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let grade1 = parseFloat(document.getElementById("grade1").value);
    let credit1 = parseFloat(document.getElementById("credit1").value);
    let grade2 = parseFloat(document.getElementById("grade2").value);
    let credit2 = parseFloat(document.getElementById("credit2").value);
    let grade3 = parseFloat(document.getElementById("grade3").value);
    let credit3 = parseFloat(document.getElementById("credit3").value);
    let grade4 = parseFloat(document.getElementById("grade4").value);
    let credit4 = parseFloat(document.getElementById("credit4").value);
    let grade5 = parseFloat(document.getElementById("grade5").value);
    let credit5 = parseFloat(document.getElementById("credit5").value);

    let totalGradePoints = (grade1 * credit1) + (grade2 * credit2) + (grade3 * credit3) + (grade4 * credit4) + (grade5 * credit5);
    let totalCredits = credit1 + credit2 + credit3 + credit4 + credit5;

    let sgpa = totalGradePoints / totalCredits;
    document.getElementById("sgpaResult").textContent = sgpa.toFixed(2);
});

// Function to calculate CGPA
document.getElementById("cgpaForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let cgpaGrade1 = parseFloat(document.getElementById("cgpaGrade1").value);
    let cgpaCredit1 = parseFloat(document.getElementById("cgpaCredit1").value);
    let cgpaGrade2 = parseFloat(document.getElementById("cgpaGrade2").value);
    let cgpaCredit2 = parseFloat(document.getElementById("cgpaCredit2").value);
    let cgpaGrade3 = parseFloat(document.getElementById("cgpaGrade3").value);
    let cgpaCredit3 = parseFloat(document.getElementById("cgpaCredit3").value);
    let cgpaGrade4 = parseFloat(document.getElementById("cgpaGrade4").value);
    let cgpaCredit4 = parseFloat(document.getElementById("cgpaCredit4").value);

    let totalGradePointsCGPA = (cgpaGrade1 * cgpaCredit1) + (cgpaGrade2 * cgpaCredit2) + (cgpaGrade3 * cgpaCredit3) + (cgpaGrade4 * cgpaCredit4);
    let totalCreditsCGPA = cgpaCredit1 + cgpaCredit2 + cgpaCredit3 + cgpaCredit4;

    let cgpa = totalGradePointsCGPA / totalCreditsCGPA;
    document.getElementById("cgpaResult").textContent = cgpa.toFixed(2);
});
