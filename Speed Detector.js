function speed_detector(speed){
    const speed_limit = 90;
    let demerit_points = 0

    if (speed < speed_limit) {
        console.log("OK");
    }

     else if(demerit_points = Math.floor((speed - speed_limit) / 5)){//Calculating of the demerit points
        console.log(`Points: ${demerit_points}`);

     }
        
        else if(demerit_points > 12){
            console.log("License suspended");
    }
}
speed_detector(40)
