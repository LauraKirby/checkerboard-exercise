// Your JS goes here
document.onload = function addElement(){
	for (var i = 0; i < 99; i++){
		if (i % 2 === 0){
			var newDiv = document.createElement('div');
			newDiv.style.backgroundColor = 'red';
  			newDiv.style.width = '11.1%';
  			newDiv.style.float = 'left';
  			newDiv.style.paddingBottom = '11.1%';
			document.body.appendChild(newDiv);
		}else {
			var newDiv = document.createElement('div');
			newDiv.style.backgroundColor = 'black';
  			newDiv.style.width = '11.1%';
  			newDiv.style.float = 'left';
  			newDiv.style.paddingBottom = '11.1%';
			document.body.appendChild(newDiv);
		}	
	}
}();

/*
The solution is similar to the chessboard solution from eloquent js ch 2: 
var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 === 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);
------------------------------


*/