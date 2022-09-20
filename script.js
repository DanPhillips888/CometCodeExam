//You have been employed by the City Council to determine the most suitable type of traffic control to build, for an intersection where two roads cross.
// Each of the 4 intersecting roads has a Cars-Per-Minute (CPM) rate variable.
// At this stage, the City Council do not have enough information to determine the most efficient parameters for a given road intersection. Each control method will perform differently, depending on the total CPM of the 4 roads

var northCPM = 2;
var eastCPM = 3;
var southCPM = 3;
var westCPM = 1;

var cpm = northCPM + eastCPM + southCPM + westCPM;
console.log(cpm);

//score for efficiency of control type
var scoreRoundabout = 0;
var scoreStopSign = 0;
var scoreTrafficLight = 0;

// score scale 1 to 100 bad to good
// function which control scores highest?
// roundabout
const roundabout = (cpm) => {
    if (cpm < 10) {
        scoreRoundabout += 90;
    } else if (20 > cpm >= 10) {
        scoreRoundabout += 75;
    }
    else {
        scoreRoundabout += 90;
    }
    return scoreRoundabout;
}
roundabout(cpm);
console.log("roundabout ",scoreRoundabout);

// stop sign
const stopSign = (cpm) => {
    if (cpm >= 20) {
        scoreStopSign += 20;
    }
    else if (20 > cpm >= 10) {
        scoreStopSign += 30;
    }
    else {
        scoreStopSign += 40;
    }
    return scoreStopSign;
}
stopSign(cpm);
console.log("stopsign", scoreStopSign);

// traffic light
const trafficLight = (cpm) => {
    if (cpm >= 20) {
        scoreTrafficLight += 90;
    }
    else if (20 > cpm >= 10) {
        scoreTrafficLight += 75;
    }
    else {
        scoreTrafficLight += 30;
    }
    return scoreTrafficLight;
}
trafficLight(cpm);
console.log("trafficLight: ", scoreTrafficLight);

const efficiencyScore = () => {
    let efficiency = document.createElement("article");
    
    efficiency.innerHTML = `
    <ul class="carsPerMinuteRate">
      <li>North Road Rate: ${northCPM}</li>
      <li>East Road Rate: ${eastCPM}</li>
      <li>South Road Rate: ${southCPM}</li>
      <li>West Road Rate: ${westCPM}</li>
    </ul>
    <h1 class="efficiencyScore">Efficiency Score:</h1>
    <ul class="controlType">
      <li>Roundabout: ${scoreRoundabout}%</li>
      <li>Stop Sign: ${scoreStopSign}%</li>
      <li>Traffic Lights: ${scoreTrafficLight}%</li>
    </ul>
    `;
    return efficiency;
}

const main = document.querySelector(".maincontent");
main.append(efficiencyScore());