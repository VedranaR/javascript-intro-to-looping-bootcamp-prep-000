var array = [];

function forLoop(array){
  for(let i=0; i<25; i++){
    if(i===1) {
      array.push(`I am a ${i} strange loop.`);
    return array;
    }
    else {
      array.push(`I am a ${i} strange loops.`);
    }
  }
}