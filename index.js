
<<<<<<< HEAD
=======
function takeANumber(katzDeli, name) {
   katzDeli.push(`${name}`);
   return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
 }
 
 function nowServing(katzDeli){
   let i = 0;
   while(i<katzDeli.length){
     i++;
   }
   if(katzDeli.length === 0){
     return ("There is nobody waiting to be served!")
   }
   else{
     return (`Currently serving ${katzDeli.shift()}.`);
   }
   
    var line = [];
    
   
 function currentLine(katzDeli) {
   
   let i = 0;
   
   while (i < katzDeli.length) {
     
     line.push(` `+[i+1]+`. `  + katzDeli[i])
     
     i++;
   }
   if (katzDeli.length === 0) {
     
     return "The line is currently empty.";
     
   } 
   else{
     return(`The line is currently:` + line);
   }
  
  }
   
}
>>>>>>> 6724bb039a7d082b1b0307e14e7267db739f2b8b
 