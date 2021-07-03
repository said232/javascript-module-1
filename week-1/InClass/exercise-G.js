


function studentPercentage(student) {
    var PercS=(100 * student) / 100 ;
    return PercS;
 };

 function mentorsPercentage(mentors) {
    var PercM=(100 * mentors) / 100 ;
    return PercM;
 };

 function Totalperc(student,mentors){
var result=`the percentage of student is ${studentPercentage(student)}% and the percentage of the mentors is ${mentorsPercentage(mentors)}%`;
return result;
 }
console.log(Totalperc(65,35));
console.log(Totalperc(70,30));