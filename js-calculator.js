var output = '';
var operator = '';
var total = 0;

function myFunction(input) {
    console.log(!isNaN(input.id));
    if(isNaN(input)){
      if(input.id === 'equ'){
        total = caluclateMyInput();
        output = total.toString();
        document.getElementById("answer").value = output;
      }
      else if(input.id === 'add'){
        operator = 'add';
        total = parseFloat(output);
        document.getElementById("answer").value = output;
        output = '';
      }
      else if(input.id === 'sub'){
        operator = 'sub';
        total = parseFloat(output);
        document.getElementById("answer").value = output;
        output = '';
      }
      else if(input.id === 'mul'){
        operator = 'mul';
        total = parseFloat(output);
        document.getElementById("answer").value = output;
        output = '';
      }
      else if(input.id === 'div'){
        operator = 'div';
        total = parseFloat(output);
        document.getElementById("answer").value = output;
        output = '';
      }
      else if(input.id === 'percent'){
        console.log(document.getElementById('percent').id);
        output = output.concat('%');
        document.getElementById("answer").value = output;
      }
      else if(input.id === 'dot'){
        console.log(document.getElementById('dot').value);
        output = output.concat('.');
        document.getElementById("answer").value = output;
      }
      else if(input.id === 'AC'){
        output = '';
        document.getElementById("answer").value = '0';
      }
      else if(input.id === 'CE'){
        output = '';
        document.getElementById("answer").value = '0';
      }
      console.log(input.id + ': ? :' + total);
    }
    else{
      console.log(input);
      output += document.getElementById(input).innerHTML;
      document.getElementById("answer").value = output;
      console.log(input + ': ? :' + output);
    }

}


function caluclateMyInput(){
  //total = total operator input;
  var value = parseFloat(output);
  if (operator === 'add'){
    total = total + value;
    return total;
  }
  else if(operator === 'sub'){
    total = total - value;
    return total;
  }
  else if(operator === 'mul'){
    total = total * value;
    return total;
  }
  else if(operator === 'div'){
    total = total / value;
    return total;
  }
}





// var entries = [];
// var total = 0;
//
// var temp = '';
// $("button").on('click', function() {
//  	var val = $(this).text();
//
//   // Got a number, add to temp
//   if (!isNaN(val) || val === '.') {
//     temp += val;
//     $("#answer").val(temp.substring(0,10));
//
//   // Got some symbol other than equals, add temp to our entries
//   // then add our current symbol and clear temp
//   } else if (val === 'AC') {
//     entries = [];
//     temp = '';
//     total = 0;
//     $("#answer").val('')
//
//   // Clear last entry
//   } else if (val === 'CE') {
//     temp = '';
//     $("#answer").val('')
//
//   // Change multiply symbol to work with eval
//   } else if (val === 'x') {
//     entries.push(temp);
//     entries.push('*');
//     temp = '';
//
//   // Change divide symbol to work with eval
//   } else if (val === '÷') {
//     entries.push(temp);
//     entries.push('/');
//     temp = '';
//
//   // Got the equals sign, perform calculation
//   } else if (val === '=') {
//   	entries.push(temp);
//
//     var nt = Number(entries[0]);
//     for (var i = 1; i < entries.length; i++) {
//       var nextNum = Number(entries[i+1])
//       var symbol = entries[i];
//
//       if (symbol === '+') { nt += nextNum; }
//       else if (symbol === '-') { nt -= nextNum; }
//       else if (symbol === '*') { nt *= nextNum; }
//       else if (symbol === '/') { nt /= nextNum; }
//
//       i++;
//     }
//
//     // Swap the '-' symbol so text input handles it correctly
//     if (nt < 0) {
//       nt = Math.abs(nt) + '-';
//     }
//
//     $("#answer").val(nt);
// 		entries = [];
//     temp = '';
//
//   // Push number
//   } else {
//     entries.push(temp);
//     entries.push(val);
//     temp = '';
//   }
// });
