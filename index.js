var container = $('.theform');
var submit = $('.submit');

submit.on("click", calcuate);

function calcuate(e){
  e.preventDefault();
  var name1 = $('#name1').val();
  var name2 = $('#name2').val();
  var charArray = name1.toLowerCase().split("");
  var name2Array = name2.toLowerCase().split("");
  name2Array.forEach(function(x){
    charArray.push(x);
  })
  for(i = 0; i < charArray.length;i++){
    if(charArray[i] == " "){
      charArray.splice(i, 1);
    }
  }

  var checkedLetters = [];
  var lettersInCommonCount = [];

  for(i = 0; i < charArray.length;i++){
    var count = 1;
    if(!checkedLetters.includes(charArray[i])){
      checkedLetters.push(charArray[i])
      for(j = i+1; j < charArray.length; j++){
        if(charArray[i] == charArray[j]){
          count++;
        }
      }
      lettersInCommonCount.push(count);
    }
  }

  while(lettersInCommonCount.length > 2){
    var condensation = [];
    if(lettersInCommonCount.length%2 == 0){
      for(i = 0; i < lettersInCommonCount.length/2;i++){
        condensation.push(lettersInCommonCount[i] + lettersInCommonCount[lettersInCommonCount.length - i - 1]);
      }
    }else{
      for(i = 0; i < (lettersInCommonCount.length/2)-1;i++){
        condensation.push(lettersInCommonCount[i] + lettersInCommonCount[lettersInCommonCount.length - i - 1]);
      }
      condensation.push(lettersInCommonCount[Math.floor(lettersInCommonCount.length/2)])
    }
    lettersInCommonCount = [];
    lettersInCommonCount = condensation;
  }

  var percentage = lettersInCommonCount[0]*10 + lettersInCommonCount[1];

  container.append(
    `<p class = "appended">${name1} and ${name2} are ${percentage}% compatible!`
  )


}
