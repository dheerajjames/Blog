import { changeBodyClick } from "../app.js";

const asideDiv=document.getElementById("asidediv");
const rootDiv =document.getElementById("root");


export const bodyChangeContent=(props)=>{
    let title1=document.getElementById("title");
    title1.textContent=props.title;
    let image1=document.getElementById("image");
    image1.src=props.imageUrl;
    let para1=document.getElementById("para");
    para1.textContent=props.content;

}


export const asideChangeContent=(props)=>{
    // let relatedLink;
    asideDiv.innerHTML=" ";
    let heading=document.createElement("h5");
    heading.textContent="RELATED LINKS"
    asidediv.appendChild(heading);
    let ul = document.createElement("ul");
    props.forEach(element => {
        let relatedLinks=document.createElement("li");
        relatedLinks.classList.add("list");
        // relatedLinks.style.listStyle = "none";
        relatedLinks.textContent=element.title;
        // console.log(relatedLinks.textContent);
        let ids=element.id;
        relatedLinks.id=`${ids}`;
        // relatedLinks.setAttribute("onclick",`changeBodyClick(event)`);
        relatedLinks.addEventListener('click', changeBodyClick);

        ul.appendChild(relatedLinks);
        asideDiv.appendChild(ul);
        rootDiv.appendChild(asideDiv); 
    }); 

}