function reduceCarSpeed() {
    car.Currentspeed = car.Currentspeed - 10;
}

const car = {

    // Properties
    Name: `Ford`,
    Model: 2017,
    IsRunning: false,
    Currentspeed: 0,

    // Methods()

    StartEngine: function () {
        car.IsRunning = true;
    },

    StopEngine: () => {
        car.IsRunning = false;
    },

    IncreaseSpeed: () => {
        car.Currentspeed = car.Currentspeed + 10;

    },

    DecreaseSpeed: reduceCarSpeed,

    Printdetails: () => {
        console.log(`
        Car Details info
     -------------------------
     Name :${car.Name}
     Model : ${car.Model}
     Running : ${car.IsRunning}
     Speed : ${car.Currentspeed}  
        `)
    }


}
console.log(`car Details`, car);
car.Printdetails();


car.IncreaseSpeed();
car.IncreaseSpeed();
car.Printdetails();

function ReduceCarSpeed() {
    bike.currentspeed = bike.currentspeed - 10;
}

const bike = {

    // Properties

    Bikename: `Duke`,
    Model: 2017,
    isRunning: true,
    currentspeed: 0,

    // Methods ()
    startEngine: () => {
        bike.isRunning = true;
    },


    stopEngine: function () {
        bike.isRunning = false;
    },

    increasebikespeed: () => {
        bike.currentspeed = bike.currentspeed + 10;
    },

    Decreasebikespeed: ReduceCarSpeed,




    printdetails: () => {
        console.log(`
        bike details info
        -------------------
        bikename:${bike.Bikename},
        modelyear:${bike.Model},
        isRunning:${bike.isRunning},
        Currentspeed:${bike.currentspeed}
       `)
    }
}



console.log(`Bike Details`, bike);
bike.printdetails();

bike.increasebikespeed();
bike.increasebikespeed();
bike.printdetails();


bike.increasebikespeed();
bike.printdetails();

bike.Decreasebikespeed();
bike.printdetails();



function ReduceAeroSpeed() {
    Aeroplane.currentRPMspeed = Aeroplane.currentRPMspeed - 15;
}

const Aeroplane = {

    PlainName: `Air India`,
    Model: `fighter 25`,
    Yearofmanfuctuate: 2015,
    Stillruningconsition: true,
    currentRPMspeed: 0,


    StartAeroengine: () => {
        Aeroplane.Stillruningconsition = true;
    },

    StopAeroengine: () => {
        Aeroplane.Stillruningconsition = false;
    },

    Increasespeed: () => {
        Aeroplane.currentRPMspeed = Aeroplane.currentRPMspeed + 30;

    },

    Decreasespeed: ReduceAeroSpeed,



    PrintAeroDetails: () => {
        console.log
            (`
Aeroplane details
---------------------
Aeroplane Name:${Aeroplane.PlainName}
Model :${Aeroplane.Model}
Yeal Model:${Aeroplane.Yearofmanfuctuate}
Condition :${Aeroplane.Stillruningconsition}
Speed :${Aeroplane.currentRPMspeed}

`)
    }
}

console.log(Aeroplane);
Aeroplane.PrintAeroDetails();

Aeroplane.Increasespeed();
Aeroplane.PrintAeroDetails();



