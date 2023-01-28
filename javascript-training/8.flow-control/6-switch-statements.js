import readline from 'readline-sync'

const TRAFFIC_SIGNALS = [
    'Green',
    'Red',
    'Yellow'
]

const UserSelectedLights = readline.keyInSelect(TRAFFIC_SIGNALS);
const Color_lights = TRAFFIC_SIGNALS[UserSelectedLights];

const Green =0;
const Red = 1;
const Yellow =2;

switch (Color_lights) {
    case Green:
        console.log(`Go . .  `);
        
        break;
    case Red:
        console.log(`Stop . .`);
        break;
    case Yellow:
        console.log(`Move slow . .`);
        break;

    default:
        console.log(`UNKNOWN VALUE`)
        break;
}



 





