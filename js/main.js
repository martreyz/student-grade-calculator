"use strict";

const mathInput = document.querySelector(".maths");
const physicsInput = document.querySelector(".physics");
const chemistryInput = document.querySelector(".chemistry");
const englishInput = document.querySelector(".english");

const submitButton = document.querySelector(".button");

const percentageParr = document.querySelector(".percentageP");
const gradeParr = document.querySelector(".gradeP");
const resultParr = document.querySelector(".resultMessage");

const calculateGrades = () => {
  const mathValue = parseInt(mathInput.value);
  const physicsValue = parseInt(physicsInput.value);
  const chemistryValue = parseInt(chemistryInput.value);
  const englishValue = parseInt(englishInput.value);
  const totalGrade = mathValue + physicsValue + chemistryValue + englishValue;
  const percentage = totalGrade / 4;
  let grade;
  if (percentage < 60) {
    grade = "F";
  } else if (percentage <= 62 && percentage >= 60) {
    grade = "D-";
  } else if (percentage <= 66 && percentage >= 63) {
    grade = "D";
  } else if (percentage <= 69 && percentage >= 67) {
    grade = "D+";
  } else if (percentage <= 72 && percentage >= 70) {
    grade = "C-";
  } else if (percentage <= 76 && percentage >= 73) {
    grade = "C";
  } else if (percentage <= 79 && percentage >= 77) {
    grade = "C+";
  } else if (percentage <= 82 && percentage >= 80) {
    grade = "B-";
  } else if (percentage <= 86 && percentage >= 83) {
    grade = "B";
  } else if (percentage <= 89 && percentage >= 87) {
    grade = "B+";
  } else if (percentage <= 92 && percentage >= 90) {
    grade = "A-";
  } else if (percentage <= 100 && percentage >= 93) {
    grade = "A";
  }

  printResults(percentage, grade);
};

const printResults = (percentage, grade) => {
  percentageParr.innerHTML = "Your percentage is: " + percentage;
  gradeParr.innerHTML = "Your grade is: " + grade;
  if (percentage < 60) {
    resultParr.innerHTML = "Sorry! You did not pass.";
  } else {
    resultParr.innerHTML = "Congratulations! You passed!";
  }
};

submitButton.addEventListener("click", calculateGrades);
