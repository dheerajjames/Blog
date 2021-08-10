import { changeBodyClick } from "../app.js";

const rootDiv =document.getElementById("root");
const bodyDiv=document.getElementById("bodydiv");
const asideDiv=document.getElementById("asidediv");



export const bodyContent=(props)=>{
    let title=document.createElement("h1");
    title.textContent=props.title;
    title.id="title";
    let imagediv=document.createElement("div");
    imagediv.classList.add("imagediv");
    let images=document.createElement("img");
    images.src=props.imageUrl;
    images.id="image";
    let para=document.createElement("p");
    para.classList.add("content");
    para.textContent=props.content;
    para.id="para";
    imagediv.appendChild(images);
    bodyDiv.appendChild(title);
    bodyDiv.appendChild(imagediv);
    bodyDiv.appendChild(para);
    rootDiv.appendChild(bodyDiv);    
}




export const asideContent=(props)=>{
    let relatedLink;
    let heading=document.createElement("h3");
    heading.textContent="RELATED LINKS"
    asidediv.appendChild(heading);
    let ul = document.createElement("ul");
    props.forEach(element => {
        relatedLink=document.createElement("li");
        relatedLink.classList.add("list");
        // relatedLink.style.listStyle = "none";
        relatedLink.textContent=element.title;
        let ids=element.id;
        relatedLink.id=`${ids}`;
        // relatedLink.setAttribute("onclick",`changeBodyClick(event)`);
        relatedLink.addEventListener('click', changeBodyClick);

        ul.appendChild(relatedLink);
        asideDiv.appendChild(ul);
        rootDiv.appendChild(asideDiv); 
    }); 
    return relatedLink;   
}