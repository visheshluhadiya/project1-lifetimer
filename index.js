let isdobopen=false;

const cogEL=document.getElementById("setting-icon")

const settingcontentEl=document.getElementById("setting-content")

const toggle=() => {
    if (isdobopen){
        settingcontentEl.classList.add("hide");
    }else{
        settingcontentEl.classList.remove("hide");
    }
    isdobopen = !isdobopen;

    console.log("toggle",isdobopen)
}

cogEL.addEventListener("click",toggle);