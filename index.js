// Code your solution in this file!
function distanceFromHqInBlocks(targetBlock){
    return Math.abs(targetBlock - 42);
}
distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

function distanceFromHqInFeet(blockDistance){
    return distanceFromHqInBlocks(blockDistance)*264;
}
distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);

function distanceTravelledInFeet(a, b){
    return Math.abs((b - a)*264)
}
distanceTravelledInFeet(43,48);
distanceTravelledInFeet(50,60);
distanceTravelledInFeet(34,28);

function calculatesFarePrice(c, d){
    if (distanceTravelledInFeet(c, d) <= 400){
        return 0;
    }
    else if (distanceTravelledInFeet(c, d) <= 2000 && distanceTravelledInFeet(c, d) >= 400){
        return (distanceTravelledInFeet(c, d) - 400)*0.02
    }
    else if (distanceTravelledInFeet(c, d) >= 2000 && distanceTravelledInFeet(c, d) < 2500){
        return 25;
    }
    else if (distanceTravelledInFeet(c, d) >= 2500){
        return "cannot travel that far"
    }
}
calculatesFarePrice(43, 44);
calculatesFarePrice(34, 32);
calculatesFarePrice(50, 58);
calculatesFarePrice(34, 24);