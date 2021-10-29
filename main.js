console.log("prince");

let click = document.getElementById("click")


click.addEventListener("click",()=>{
    let hindi =document.getElementById("hindi").value;
    let english =document.getElementById("english").value;
    let science =document.getElementById("science").value;
    let math =document.getElementById("math").value;
    let sanskrit =document.getElementById("sanskrit").value;
    let ss =document.getElementById("ss").value;
    let grade = "";
    let result ="";
    if(hindi>100 || math>100 || english>100 || sanskrit>100 || science>100|| ss>100 || english==0 || hindi==0 || science==0 ||math==0 || sanskrit==0 || ss==0){
    alert("Enter your valid Marks");
    }
    else{
        let total = parseFloat(hindi)+parseFloat(math)+parseFloat(science)+parseFloat(ss)+parseFloat(sanskrit)+parseFloat(english);
        console.log(total);
        let percent = (total/600)*100;
        console.log(percent)
        if(percent <= 100 &&percent >=90){
            grade="S";
        }else if(percent<=89 &&percent >=80){
            grade="A";
        }
        else if(percent<=79 &&percent >=70){
            grade="B";
        }
        else if(percent<=69 &&percent >=60){
            grade="C";
        }
        else if(percent<=59 &&percent >=50){
            grade="D";
        }
        else if(percent<=49 &&percent >=40){
            grade="E";
        }
        else if(percent<=40 &&percent >=33){
            grade="F";
        }
        else{
            grade="G"
        }
        console.log(grade)
        if(grade =="G"){
            result = "Fail"
        }
        else{
            result = "Pass"
        }
        document.getElementById("showdata").innerHTML =`Your total is <span>${total}</span> Out of 600 and Percentage is <span>${percent}%</span> and Garde is <span>${grade}</span> and you <span>${result}</span>. `
    }
    


    
});
let click1 = document.getElementById("click1")

click1.addEventListener("click",()=>{
    document.getElementById("hindi").value="";
    document.getElementById("math").value="";
    document.getElementById("science").value="";
    document.getElementById("ss").value="";
    document.getElementById("sanskrit").value="";
    document.getElementById("english").value="";

    document.getElementById("showdata").innerHTML="";
    console.log("prince")
})




