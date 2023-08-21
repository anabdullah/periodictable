

const topDiv = document.querySelector(".top");
const extraDiv = document.querySelector(".extra");

list1.forEach((element, index) => {

  topDiv.innerHTML += `
    <div class="element">
    <span>${element.atomic_number}</span>
    <h1>${element.symbol}</h1>
    <p>${element.name}</p>
</div>
    `
})


list2.forEach((element, index) => {

  extraDiv.innerHTML += `
    <div class="element">
    <span>${element.atomic_number}</span>
    <h1>${element.symbol}</h1>
    <p>${element.name}</p>
</div>
    `
});

let popUp = document.querySelector(".pop-up");
let close = document.querySelector(".close");

let boxes = document.querySelectorAll(".element");

boxes.forEach((e) => {
  if (e.querySelector("h1").innerText == "") {
    return;
  }

  e.onclick = (event) => {
    event.stopPropagation();
    popUp.style.display = "block";
    popUp.querySelector(".element-name").textContent = e.querySelector("p").textContent;
    popUp.querySelector("h2").textContent = "Symbol: " + e.querySelector("h1").textContent;
    popUp.querySelector(".a-num").textContent =e.querySelector("span").textContent;
    popUp.querySelector(".mass").textContent= list3[parseInt(popUp.querySelector(".a-num").textContent)-1].atomic_mass;
    popUp.querySelector(".details").textContent= list3[parseInt(popUp.querySelector(".a-num").textContent)-1].description;
    popUp.querySelector(".type-span").textContent= list3[parseInt(popUp.querySelector(".a-num").textContent)-1].type;


//removing disablitity of prev and next button every time the user clicks on an element
  if(parseInt(popUp.querySelector(".a-num").textContent)==1){
    prevBtn.setAttribute("disabled",null);
    prevBtn.style.cursor="no-drop";
    prevBtn.style.opacity=0.7;
  }else{
    prevBtn.removeAttribute("disabled");
    prevBtn.style.cursor="pointer";
    prevBtn.style.opacity=1;
  }

  if(parseInt(popUp.querySelector(".a-num").textContent)==118){
    nextBtn.setAttribute("disabled",null);
    nextBtn.style.cursor="no-drop";
    nextBtn.style.opacity=0.7;
  }else{
    nextBtn.removeAttribute("disabled");
    nextBtn.style.cursor="pointer";
    nextBtn.style.opacity=1;
  }

  }
});


boxes.forEach(e=>{
  if(e.querySelector("h1").textContent==""){
  e.style.visibility="hidden"
  }
})


close.onclick = () => {
  popUp.style.display = "none"
}

document.onclick=()=>{
  popUp.style.display = "none";
}


let prevBtn= document.querySelector(".prev");
let nextBtn= document.querySelector(".next");

//on the click of prev btn 
prevBtn.onclick=()=>{
  let currentIndex= parseInt(popUp.querySelector(".a-num").textContent);
  nextBtn.removeAttribute("disabled");
  nextBtn.style.cursor="pointer";
  nextBtn.style.opacity=1;
  if(currentIndex-2==0){
    popUp.querySelector(".element-name").textContent = newArr[currentIndex-2].name;
    popUp.querySelector("h2").textContent = "Symbol: " +newArr[currentIndex-2].symbol;
    popUp.querySelector(".a-num").textContent =newArr[currentIndex-2].atomic_number;
    popUp.querySelector(".mass").textContent= list3[currentIndex-2].atomic_mass;
    popUp.querySelector(".details").textContent= list3[currentIndex-2].description;
    popUp.querySelector(".type-span").textContent= list3[currentIndex-2].type;


    prevBtn.setAttribute("disabled",null);
    prevBtn.style.cursor="no-drop";
    prevBtn.style.opacity=0.7;
  }


    popUp.querySelector(".element-name").textContent = newArr[currentIndex-2].name;
    popUp.querySelector("h2").textContent = "Symbol: " +newArr[currentIndex-2].symbol;
    popUp.querySelector(".a-num").textContent =newArr[currentIndex-2].atomic_number;
    popUp.querySelector(".mass").textContent= list3[currentIndex-2].atomic_mass;
    popUp.querySelector(".details").textContent= list3[currentIndex-2].description;
    popUp.querySelector(".type-span").textContent= list3[currentIndex-2].type;




}

// on clicking the next btn
nextBtn.onclick=()=>{
  let currentIndex= parseInt(popUp.querySelector(".a-num").textContent);
  prevBtn.removeAttribute("disabled");
  prevBtn.style.cursor="pointer";
  prevBtn.style.opacity=1;
  if(currentIndex==117){
    popUp.querySelector(".element-name").textContent = newArr[currentIndex].name;
    popUp.querySelector("h2").textContent = "Symbol: " +newArr[currentIndex].symbol;
    popUp.querySelector(".a-num").textContent =newArr[currentIndex].atomic_number;
    popUp.querySelector(".mass").textContent= list3[currentIndex].atomic_mass;
    popUp.querySelector(".details").textContent= list3[currentIndex].description;
    popUp.querySelector(".type-span").textContent= list3[currentIndex].type;


    nextBtn.setAttribute("disabled",null);
    nextBtn.style.cursor="no-drop";
    nextBtn.style.opacity=0.7;
  }


    popUp.querySelector(".element-name").textContent = newArr[currentIndex].name;
    popUp.querySelector("h2").textContent = "Symbol: " +newArr[currentIndex].symbol;
    popUp.querySelector(".a-num").textContent =newArr[currentIndex].atomic_number;
    popUp.querySelector(".mass").textContent= list3[currentIndex].atomic_mass;
    popUp.querySelector(".details").textContent= list3[currentIndex].description;
    popUp.querySelector(".type-span").textContent= list3[currentIndex].type;

}



popUp.onclick=(event)=>{
event.stopPropagation();
}