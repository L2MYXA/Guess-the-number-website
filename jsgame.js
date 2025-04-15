var random_number = Math.floor(Math.random() * 101);
var sug_num;
let hp = 5;



function set_hp(){
  const div_hp = document.getElementById("hp_count");
  div_hp.textContent = hp;
}




function submit_function() {
  sug_num = document.getElementById("2").value;
  number_distance = Math.abs(random_number - sug_num);
  if (number_distance == 0){
    alert("Congratulations the number was " + random_number);
    hp = 5;
    newnumber_function();
} 
  else{
    if(hp > 1){
      cold();
    }
    else{
      alert("You lost, number was " + random_number);
      hp = 5;
      newnumber_function();
    }
    set_hp();
  }

  }



function newnumber_function() {
  set_hp();
  random_number = Math.floor(Math.random() * 101);
  alert("Guess the new-generated number from 0 to 100 ");
}

function cold(){
  if (number_distance >= 25){
    alert("Freezing cold (25 off)");
  }
  else if (number_distance <= 25 && number_distance >= 10 ){
    alert("Warm (25 to 10 off)");
  }
  else if (number_distance <= 10 && number_distance >= 3){
    alert("HOT!!! (10 to 3 off)");
  }
  else{
    alert("BURNING HOT!!! (2 or less off)")
  }
  hp = hp - 1;
}

function warm(){
  if (number_distance == 0){
    alert("Congratulations the number was " + random_number);
    hp = 5;
    newnumber_function();
} 
}

