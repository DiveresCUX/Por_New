const flagsElement = document.getElementById("flags");
const textsToChange = document.querySelectorAll("[data-section]");



const flagsItem = document.getElementById("ingles");
const valueFlagsItem = flagsItem.dataset.language;


const welcome = document.getElementById("Bienvenida"); 




const changeLanguage = async language => {
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();
    
    if(language == valueFlagsItem){
        welcome.style.width = "9ch";
    }else{
        welcome.style.width = "12ch";
    }

    for(const textToChange of textsToChange){
       const section = textToChange.dataset.section;
       const value = textToChange.dataset.value;

       textToChange.innerHTML= texts[section][value];
       
    }
};



flagsElement.addEventListener("click", async (e) => { 

    const language = e.target.parentElement.dataset.language;
    await changeLanguage(language);
});

