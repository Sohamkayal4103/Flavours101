const submit_btn=document.getElementById("submit_btn");
const mainone=document.getElementById("mainone");
const ingridient=document.getElementById("ingridient");
const nothing=document.getElementById("nothing");
const image_container=document.getElementById("image_container");
const recipe_name=document.getElementById("recipe_name");
const info=document.getElementById("info");
const full_recipe=document.getElementById("full_recipe");
const stepsone=document.getElementById("stepsone");
const cross_btn=document.getElementById("cross_btn");
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

        const show_recipe=()=>{
            stepsone.classList.remove("hide");

            const close_steps=()=>{
                stepsone.classList.add("hide");
            }

            cross_btn.addEventListener("click", close_steps);

        }
        full_recipe.addEventListener("click",show_recipe);
        // let url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${ingridientval}`;
        // const response =await fetch(url);

    }
}
submit_btn.addEventListener("click",getrecipe);
