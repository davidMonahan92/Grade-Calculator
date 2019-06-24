var Result;
var Worth;
var caPercentage;
var gradeWanted;
var examPercentage;
var gradeWorth;
var marksNeeded;

//Calculates the Continous Assessment result based on users inputs 
function calcCaPercentage() {
  
  	//result equals the users Continous Assesment results input value
	Result = parseFloat(document.getElementById("caResult").value);
  
  	//result equals over Continous Assesment Worth input value
	Worth = parseFloat(document.getElementById("caWorth").value);
	
	caPercentage = Worth * (Result / 100);
  
  	//CA Percentage result gets displayed here
	document.getElementById("caPercentage").innerHTML = caPercentage + "%";
  
  	//Returns the Continous Assessment Precentage for the other methods
	return caPercentage;
}

//Calcualtes the users exam percentage needed to get the grade they want
function calcExamPercentage() {

  	//GradeWanted equals the grade the user wants     
	gradeWanted = parseFloat(document.getElementById("gradeWanted").value);
  
  	//x equals the Continous Assessment Precentage from the calcCaPercentage function
	var x = calcCaPercentage();
	examPercentage = gradeWanted - x;
  
  	//Exam Percentage gets displayed here
	document.getElementById("examPercentage").innerHTML = examPercentage +"%";
  
  	//Returns the Exam Precentage for the other methods
	return examPercentage;
}

//Calculates the Marks needed for the user to get the grade they want
function calcMarkNeeded() {

  	//gradeWorth equals what the overall Exam worth input
	gradeWorth = parseFloat(document.getElementById("gradeWorth").value);
  
  	//y equals the Exam Precentage from the calcExamPercentage function
	var y = calcExamPercentage();
  
  	//marksNeeded equals a round up version of the overall result
	marksNeeded = Math.floor((y / gradeWorth) * 100 /1);

  	//The marks needed will be displayed here
	document.getElementById("marksNeeded").innerHTML = marksNeeded + " Marks!";
}
