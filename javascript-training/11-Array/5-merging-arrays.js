 const Schoolfriends =[
        `venky`,
        `Shankar`,
        `Aneela`,
        `Lohith`
 ];
 
 const Collegefriends =[
        `Varun`,
        `Sid`,
        `anil`,
        `rakesh`
 ]

   // Merge / Combin multiple array into single array

   // using .concat method

 const friends =Schoolfriends.concat(Collegefriends);
 console.log(friends);

  // Using es6 spread operator (...) (es6 feature ) it works in es6.
  const friednslist= [...Schoolfriends,...Collegefriends];
  console.log(friednslist); 

  // Generic / Lecacy tech
  const combinefriends = []; 
  for (let i = 0; i < Schoolfriends.length; i++){
        const friends = Schoolfriends[i];
        combinefriends.push(friends);
  }

  for ( let i = 0; i < Collegefriends.length;i++){
        combinefriends.push(combinefriends[i])
  }

   console.log(combinefriends);