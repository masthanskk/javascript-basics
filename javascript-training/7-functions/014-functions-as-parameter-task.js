function excute (paramOne,paramTwo) {
    const valueOne = paramOne();
    const valuetwo = paramTwo();
    return{
        value1:valueOne,
        value2:valuetwo
    }
}


    function addition (){
        return 10 +50;
    }
    function multiplication (){
        return 10 *40;

    }

    const result = excute(addition,multiplication);  // ? {value1 : 60,value2 : 400}
        console.log(result);


               // or


    const anotherResult = excute(
        () => {
            return 50+70;
        },

        () => {
            return 66*4;
        }


    );
    
    // {valueOne: 120, valuetwo: 264}
    // excute(  () => {return 50+70},{return 66*4} );
    
    console.log(anotherResult);