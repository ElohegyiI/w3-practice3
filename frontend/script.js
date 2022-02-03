//function addTwoIntegers(firstInteger, secondInteger) {
    //console.log(firstInteger + secondInteger)
    //return firstInteger + secondInteger
//if(typeof firstInteger === "number" && typeof secondInteger === "number") {return firstInteger + secondInteger
//} else {
  //  return "valamelyik argumentum nem szám"
//}  
//}
//console.log( addTwoIntegers(12,13) );
//console.log( addTwoIntegers(1920,85) );
//console.log(0=="0")

//function addThreeIntegers (firstInteger, secondInteger,thirdInteger) {
    
    //return (firstInteger - secondInteger + thirdInteger)

//}
//console.log( addThreeIntegers(50, 20, "y"));
//if (typeof firstInteger === "number" && typeof secondInteger === "number" //&&typeof thirdInteger === "number") {
  //  return (firstInteger - secondInteger + thirdInteger);
//} else { return "valamelyik nem szám"
//}
//console.log(addThreeIntegers(50, 20, 0));
//console.log (0=="0")//

function loadEvent(eventObject){
    //console.log(eventObject)
    const rootElement = document.getElementById("root");
    //console.dir(document);
    //console.dir(rootElement);

    const ListofSectionElements = document.querySelectorAll("section");
    //console.log(ListofSectionElements)
    //rootElement.classList.add("new-class");
    //ListofSectionElements[0].classList.add("new-class");
    //ListofSectionElements[1].classList.add("new-class");
    //ListofSectionElements[2].classList.add("new-class");
    //ListofSectionElements[3].classList.add("new-class");
    

    let anchors = "";
    
    for (const sectionElement of ListofSectionElements) {
        //sectionElement.classList.add("new-class");
        //anchors = anchors + '<a>$ {sectionElement.id}</a>'
        anchors += `<a href="#${sectionElement.id}"> ${sectionElement.id}</a>`
    }
    console.log(anchors)
    rootElement.insertAdjacentHTML("afterbegin",`<header>${anchors}</header>`)
    }
window.addEventListener("load", loadEvent)