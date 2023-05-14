compnum = Math.floor(Math.random()*100)
let trynum=0;
function attempt(){
	let elem = document.getElementById("user-num-input");
  let usernum = +elem.value;
  let result;
  
  if (compnum > usernum){
  	result = `${usernum} замало`;
    trynum++
  } else if (compnum < usernum){
  	result = `${usernum} забагато`;
    trynum++
  } else{
  	result = `Вітаю! Вгадав з ${trynum}-ї спроби!`;
    trynum=0;
  }
  
  elem = document.getElementById("result-div");
  elem.innerHTML +=`<p>${result}</p>`;
}
