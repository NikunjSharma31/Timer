const EndDate = "2 July 2023 4:42  PM";
document.getElementById("endDate").innerHTML = EndDate;
const inputs = document.querySelectorAll("input");

const timer = () =>{
    const end = new Date(EndDate);
    const now = new Date();
    const difference = (end- now)/1000;
    //Calculating and Adding days
    
    const days = Math.floor(difference/60/60/24);
    inputs[0].value = days;

    //Calculating and Adding Hours
    const hours = Math.floor((difference/60/60)%24);
    inputs[1].value = hours;

    //Calculating and Adding Minutes
    const minutes = Math.floor((difference/60)%60);
    inputs[2].value = minutes;
    
    //Calculating and Adding Seconds
    const seconds = Math.floor(difference%60);
    inputs[3].value = seconds;

    const text = "OH No!!!! Offers are no more...";
    if(difference <= 0){
        document.getElementById("offer").innerHTML = text ;
        inputs[0].value = 0;
        inputs[1].value = 0;
        inputs[2].value = 0;
        inputs[3].value = 0;
        
    }
    console.log(text);
    
}

timer()
    setInterval(()=>{
        timer()
    } ,  1000)