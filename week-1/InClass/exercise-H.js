
// in this function there are 2 inputs wich is hours and days. if pass hours or days you will got the salry of the days or hours you work.
function Iputs(hours,days){
    salaryPerHour=hours*10;
    salaryPerday=days*80;

var result="if you work for " + hours +" hours you will got "+salaryPerHour+ " Euro and if you will work for "+days+" days you will got "+salaryPerday+" Euro";
return result;
}
 console.log(Iputs(3,3));