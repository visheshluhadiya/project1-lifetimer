let isdobopen=false;

let dateofbirth;

const cogEL=document.getElementById("setting-icon")

const settingcontentEl=document.getElementById("setting-content")

const initialEl=document.getElementById("initial")

const afterdobEl=document.getElementById("afterdob")

const dobbuttonEl=document.getElementById("dobbutton")

const dobinputEl=document.getElementById("dobinput")

const YearEl=document.getElementById("Year")
const MonthEl=document.getElementById("Month")
const DayEl=document.getElementById("Day")
const HourEl=document.getElementById("Hour")
const MinuteEl=document.getElementById("Minute")
const SecondEl=document.getElementById("Second")


const toggle=() => {
    if (isdobopen){
        settingcontentEl.classList.add("hide");
    }else{
        settingcontentEl.classList.remove("hide");
    }
    isdobopen = !isdobopen;

    console.log("toggle",isdobopen)
}

const updateage=() => {
    const currentDate=new Date();
    const datediff=currentDate-dateofbirth

    const year=Math.floor(datediff/(1000*60*60*24*365));
    const month=Math.floor(datediff/(1000*60*60*24*365))%12;
    const Day=Math.floor(datediff/(1000*60*60*24))%30
    const Hour=Math.floor(datediff/(1000*60*60))%24;
    const Minute=Math.floor(datediff/(1000*60))%60;
    const Second=Math.floor(datediff/1000)%60;

    YearEl.innerHTML = year;
    MonthEl.innerHTML = month;
    DayEl.innerHTML = Day;
    HourEl.innerHTML = Hour;
    MinuteEl.innerHTML = Minute;
    SecondEl.innerHTML = Second;
}

const setdobhandler=() => {
    const datestring=dobinputEl.value;

    dateofbirth=new Date(datestring);

    if (dateofbirth){
        initialEl.classList.add("hide");
        afterdobEl.classList.remove("hide");
        setInterval(() => updateage(),1000);
    }else{
        afterdobEl.classList.add("hide");
        initialEl.classList.remove("hide");
    }
};





cogEL.addEventListener("click",toggle);
dobbuttonEl.addEventListener("click",setdobhandler);