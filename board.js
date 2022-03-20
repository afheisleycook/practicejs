function draw(size,length) {
    let board = ""
    for(b=0;b<=size;++b) 
    {
      if(b%2!=0) {
      board+=" # # # #";
      }
      else if(b%2==0) 
      {
       board+="# # # #";
      }
      board+="\n";

   }
   return board;
    

}

let myboard = draw(8);
console.log(myboard);

