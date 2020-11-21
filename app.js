var team1={
    name:"Real Madrid",
    score:0,
    runs:[]
};
var team2={
    name:"Huesca",
    score:0,
    runs:[]
};
//var score=[0,1,2,3,4,5,6]
var toss
var penalty


window.onload=()=>{
selectToss();
updateButtonText();
updateScores();
}

function selectToss(){
    toss=Math.round(Math.random())+1
    console.log(toss)
}

function updateButtonText(){
    var button = document.getElementById("strikebutton")
    var result = document.getElementById("result")
    result.style.visibility=""
    //if(team1.runs.length!=6 || team2.runs.length!=6){
    //toss=team1.runs.length==6?2:team2.runs.length==6?1:toss;}
    //console.log(`${toss===1?team1.name:team2.name} Strike`)
    // toss=toss==1?2:1
    document.getElementById("strikebutton").textContent=`${toss===1?team1.name:team2.name} Strike`
    if(team1.runs.length==6 && team2.runs.length==6){
        //console.log("Both teams finished their chances")
        //console.log(team1.score===team2.score?"It is a draw":)
        button.remove();
        console.log(team1.score===team2.score?"IT IS A DRAW":`${team1.score>team2.score?team1.name.toUpperCase():team2.name.toUpperCase()} WINS`)
        result.textContent=team1.score===team2.score?"IT IS A DRAW":`${team1.score>team2.score?team1.name.toUpperCase():team2.name.toUpperCase()} WINS`
    }
    //toss=toss==1?2:1
    // else{
    //     toss=toss==1?2:1
    //     //toss=team1.runs.length==6?2:team2.runs.length==6?1:toss;
    //     //console.log(`${toss===1?team1.name:team2.name} Strike`)
    // }
}

function handleStrike(){
     //console.log("Onclick Works!")
    penalty=Math.round(Math.random())
     console.log(penalty)

     if(toss===1){
        team1.runs.push(penalty)
        console.log(team1.name+"="+team1.runs)
        team1.score=calculateScore(team1.runs)
        //toss=2
     }
     else{
        team2.runs.push(penalty)
        console.log(team2.name+"="+team2.runs)
        team2.score=calculateScore(team2.runs)
        //toss=1
     }
    //  updateButtonText();
     updateScores();
     toss=toss==1?2:1
     updateButtonText();
}

var calculateScore=(runs)=>{
    return runs.map(num=>{return num;}).reduce((total,num)=>total+num);
}

function updateScores(){
    console.log("Team1 Score: "+team1.score)
    console.log("Team2 Score: "+team2.score)
    document.getElementById("team1score").textContent=team1.score;
    document.getElementById("team2score").textContent=team2.score;
    updateRuns();
}
function updateRuns(){
    //var index=1
    //var i=1
    var team1runs = document.getElementById("team1runs").children;
    var team2runs = document.getElementById("team2runs").children;
    if (toss==1){
   team1.runs.forEach((penalty,index)=>{
       team1runs[index].style=`${penalty==1?"background-color:#135813;":"background-color:#d00c0c;"}`
       //index=index+1
   });
 }
   else{
    team2.runs.forEach((penalty,i)=>{
    //team2runs[i].textContent=runs;
    team2runs[i].style=`${penalty==1?"background-color:#135813;":"background-color:#d00c0c;"}`
    //i=i+1
   });
}
}

function tryagain(){
    window.location.reload();
}