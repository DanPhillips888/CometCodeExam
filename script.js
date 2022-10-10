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
// function which control scores highest

// roundabout
const roundabout = (cpm) => {
    if (cpm < 10) {
        scoreRoundabout += 90;
    } else if (20 > cpm >= 10) {
        scoreRoundabout += 75;
    }
    else {
        scoreRoundabout += 60;
    }
    return scoreRoundabout;
}
roundabout(cpm);
console.log("roundabout: ",scoreRoundabout);

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
console.log("stopsign: ", scoreStopSign);

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

// reset scores function
const reset = () => {
    scoreRoundabout = 0;
    scoreStopSign = 0;
    scoreTrafficLight = 0;
    cpm = northCPM + eastCPM + southCPM + westCPM;
    console.log(cpm);
    roundabout(cpm);
    stopSign(cpm);
    trafficLight(cpm);
    const updateScoreDisplay = () => {
        let roundabout = document.querySelector(".roundabout");
        roundabout.querySelector("span").innerHTML = `${scoreRoundabout}`;
        let stopSign = document.querySelector(".stopSign");
        stopSign.querySelector("span").innerHTML = `${scoreStopSign}`;
        let trafficLight = document.querySelector(".trafficLight");
        trafficLight.querySelector("span").innerHTML = `${scoreTrafficLight}`;
    };
    updateScoreDisplay();

    console.log("roundabout: ",scoreRoundabout);
    console.log("stopsign: ", scoreStopSign);
    console.log("trafficLight: ", scoreTrafficLight);
}

// Input component
const inputUI = (roadsArray) => {
    roadsArray.forEach((listElement) => {
        
        let direction = listElement.getAttribute("road-direction");
        const inputForm = document.createElement("form");
        inputForm.classList.add(`${direction}`);
    
        inputForm.innerHTML = `
            <input type="number" roadID="${direction}" placeholder="Enter New ${direction} Rate">
            <button>Update</button>
        `;
    
        inputForm.addEventListener("submit", (e) => {
            e.preventDefault();
            let newValue = inputForm.querySelector("input").value;

            if (direction === "north"){
                northCPM = Number(newValue);
                console.log(`${direction}CPM: `, northCPM);
            } else if (direction === "east"){
                eastCPM = Number(newValue);
                console.log(`${direction}CPM: `, eastCPM);
            } else if (direction === "south"){
                southCPM = Number(newValue);
                console.log(`${direction}CPM: `, southCPM);
            } else {
                westCPM = Number(newValue);
                console.log(`${direction}CPM: `, westCPM);
            }
            // this line only changes the html not the road rate variable
            listElement.querySelector("span").innerHTML = `${newValue}`;
            inputForm.querySelector("input").value = "";
            reset();
        });
        listElement.append(inputForm);
    });
};

// UI display HTML
const efficiencyScore = () => {
    let efficiency = document.createElement("article");
    
    efficiency.innerHTML = `
    <ul class="carsPerMinuteRate">
      <li class="roadRate" road-direction="north">North Road Rate: <span>${northCPM}</span></li>
      <li class="roadRate" road-direction="east">East Road Rate: <span>${eastCPM}</span></li>
      <li class="roadRate" road-direction="south">South Road Rate: <span>${southCPM}</span></li>
      <li class="roadRate" road-direction="west">West Road Rate: <span>${westCPM}</span></li>
    </ul>
    <h1 class="efficiencyScoreTitle">Efficiency Score:</h1>
    <ul class="controlType">
      <li class="roundabout">Roundabout: <span>${scoreRoundabout}</span>%</li>
      <li class="stopSign">Stop Sign: <span>${scoreStopSign}</span>%</li>
      <li class="trafficLight">Traffic Lights: <span>${scoreTrafficLight}</span>%</li>
    </ul>
    `;

    let roadCPMRate = efficiency.querySelectorAll(".roadRate");
    inputUI(roadCPMRate);

    return efficiency;
}

const main = document.querySelector(".maincontent");
main.append(efficiencyScore());