function forLoop(array){
  for (let i=1; i<=25; i++){
    if (i < 1){
      array.push(`I am ${i} strange loops.`)
    } else {
      array.push('I am one strange loop.')
    }
  }
  return array
}

function whileLoop(n){
  while(n){
    console.log(toString(n-=1))
  }
  return 'done'
}

function doWhileLoop(array){
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do{
    array.shift()
  } while((array.length > 0) && maybeTrue());
  return array
}
