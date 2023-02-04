 const friends =[
        'lohith', // 0
        'venky', // 1
        'Mani', // 2
        'sunny',// 3
 ]

 console.log(friends)
 console.log(friends[2]);
 
 const index =3;           // => friends[3]
 console.log(friends[3]);

 console.log(friends[0]);
 console.log(friends[1]);
 console.log(friends[2]);
 console.log(friends[3]);

 console.log(`.................. `);
 console.log(`Access array value by Static Index`);

 let currentindex =0;       // Loop initial Point
 const lastindex =3;

 while(currentindex <= lastindex){       // Loop condition
        console.log(friends[currentindex]);
        currentindex = currentindex+1;      // Loop Updatation
 }

