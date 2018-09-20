
var tableId = document.getElementById("table");
var resultstatus=document.getElementById("result");


var jcell;
var player=0;
var number;
//var flag=0;

  function generateFields() {
    var input = document.getElementById("input").value;
     number = Number(input);    
  //  if(flag!=number) {
    //  	flag=number;

    jcell = new Array(number);

    for (i = 0; i < number; i++) {
    	jcell[i] = new Array(number);
      	var newTR = document.createElement('tr');
      
      for(j=0;j<number;j++) {
      	var newTD = document.createElement('td');
      	jcell[i][j] = newTD;
      	newTD.classList.add('cell');
      	newTD.style.width="50px";
      	newTD.style.height="50px";
      	//newTD.innerHTML = i + " " + j;
      	newTD.innerHTML="";
      	newTD.dataset.row = i;
      	newTD.dataset.col = j;
      	newTD.addEventListener('click',handleClick);
      	newTR.appendChild(newTD);

      }
      tableId.appendChild(newTR);

            
    }
  }
//  }



  function handleClick(e){

  	//console.log(e.target.dataset.row);
  	var i=e.target.dataset.row;
   // console.log(e.target.dataset.col);
    var j=e.target.dataset.col;
    //jcell[i][j].classList.add('textcenter');
    if(player%2==0)	{
    	jcell[i][j].innerHTML = "X";	
    }
    else{   		
    	jcell[i][j].innerHTML = "O";	
    }
    checkwinner();
    player++;
    if(player==((number*number))){
    	resultstatus.innerHTML="Tie";

    }
    
  }
  function checkwinner(){
  	var ld=0;
  	var rd=0;
  	for(i=0;i<number;i++){
  		var cnt=0
  		for(j=0;j<number;j++){
  			if(jcell[i][j].innerHTML=="X")
  				cnt++;
  			else if(jcell[i][j].innerHTML=="O")
  				cnt--;

  		}
  		console.log(cnt);
  		declarresult(cnt);
  		
  	}
  		for(j=0;j<number;j++){
  		var cnt=0
  		for(i=0;i<number;i++){
  			if(jcell[i][j].innerHTML=="X"){
  				cnt++;
  				//console.log(i+" "+j);
  			}
  			else if(jcell[i][j].innerHTML=="O")
  				cnt--;

  		  }
  			console.log(cnt);
  			declarresult(cnt);
  			
  		}
  		
  		for(i=0;i<number;i++){
  			if(jcell[i][i].innerHTML=="X")
  				ld++;
  			else if(jcell[i][i].innerHTML=="O")
  				ld--;
  		}
  			

  		for(i=0;i<number;i++){
  			if(jcell[number-1-i][i].innerHTML=="X")
  				rd++;
  			else if(jcell[number-1-i][i].innerHTML=="O")
  				rd--;
  		}
  		

  			if(ld==number || rd==number){
  			resultstatus.innerHTML="X win";
  			}
  			if(ld==(-number) || rd==(-number)){
  			resultstatus.innerHTML="O win";
  			}	

  }

  function declarresult(cnt){
  	if(cnt==number){
  			resultstatus.innerHTML="X win";
  		}
  		if(cnt==(-number)){
  			resultstatus.innerHTML="O win";
  		}

  }










