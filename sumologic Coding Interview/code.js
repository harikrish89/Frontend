

<html>
<head>
<script>
// input
var list = ['Adam', 'Brett', 'Cari', 'Donna', 'Ethan', 'Fred', 'Grok', 'Han', 'Izzy', 'Jay'];
var columns = 3;  // or 4, etc

// output
// [
//  [ 'Adam', 'Ethan', 'Izzy'],
//  [ 'Brett', 'Fred', 'Jay'],
//  [ 'Cari', 'Grok'],
//  [ 'Donna', 'Han']
// ]

function tableify (list, columns) {

  var result = [];
  var i = 0;
  var j = 0;
  var count = 0;
  var row = Math.floor(list.length / columns);
  var mod = list.length % columns;
  if( mod != 0)
    {
      row += 1;
    }
  for (var i = 0; i < row; i++) {
  result[i] = [, ,];
}
  

  // add code here
  for(j=0; j < columns; j++) {
    for (i = 0 ; i < row; i++) {
      if (count < list.length) {
          result[i][j] = (list[count]);
        count += 1;
      }
      else {
        return result;
        
      }
    
    }
  
  }

  
}


console.log(tableify(list, columns));
</script>
</head>
</html>


