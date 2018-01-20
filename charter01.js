var myVar = 1;
function writeIt(){
    var myVar = 2;
    console.log('myVar = '+ myVar);
    writeMore();
}
function writeMore(){
    console.log('myVar = '+ myVar);
}

writeIt();