const submit_btn=document.getElementById("submit_btn");
const mainone=document.getElementById("mainone");
const ingridient=document.getElementById("ingridient");
const nothing=document.getElementById("nothing");
const image_container=document.getElementById("image_container");
const recipe_name=document.getElementById("recipe_name");
const info=document.getElementById("info");
const full_recipe=document.getElementById("full_recipe");

// const getalert =(event)=>{
//     event.preventDefault();
//     mainone.classList.remove("hide");
// }


// submit_btn.addEventListener("click", getalert);


const getrecipe=async(event)=>{
    event.preventDefault();
    let ingridientval=ingridient.value;
    if(ingridientval===""){
        nothing.classList.remove("hide");
        mainone.classList.add("hide");
    }else{
        mainone.classList.remove("hide");
        nothing.classList.add("hide");
        // let url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${ingridientval}`;
        // const response =await fetch(url);

    }
}
submit_btn.addEventListener("click",getrecipe);
