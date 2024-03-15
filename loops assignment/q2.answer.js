function calculategrades(marks)
{
    if (marks >= 90){
        console.log("Grade A");
    }
    else if (70 <= marks < 90){
        console.log("Grade B");
    }
    else if (50 <= marks < 70){
        console.log("grede C")
    }
    else{console.log("Grade D");
        
    }
};
calculategrades(100);