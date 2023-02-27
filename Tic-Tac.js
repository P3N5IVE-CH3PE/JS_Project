
test = document.querySelectorAll(".square");

function Rando(){
      for(i=0;i<test.length;i++){
    if(Math.round(Math.random()) === 0){
        test[i].innerText = "O";}
    
  else{
        test[i].innerText = "X"; 
      }
}
}

Rando();



