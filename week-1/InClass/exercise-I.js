function  Birthday (age){
   var result= 2021-age;
   return result;
}

function TheAge(name,age){
    var birthData =Birthday(age)
    var welcome=("hello "+ name + " you were born in ");
    var result= welcome + birthData;
    return result;
}



console.log(TheAge("said",21));