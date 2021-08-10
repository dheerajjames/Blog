import { bodyChangeContent } from "./components/changeContent.js";
import { asideChangeContent } from "./components/changeContent.js";
import { bodyContent } from "./components/mainContent.js";
import { asideContent } from "./components/mainContent.js";
import { NavigationBar } from "./components/navigation.js";
import { footerFunction } from "./components/footer.js";
import { footer } from "./data/data.js";
 
const rootDiv =document.getElementById("root");
const navBar = document.getElementById("navigation");
const footerDiv = document.getElementById("footer");
// const bodyDiv=document.getElementById("bodydiv");
// const asideDiv=document.getElementById("asidediv");

 navBar.appendChild(NavigationBar());
 footerDiv.appendChild(footerFunction(footer.footerData));

let myArr=[];
// console.log(myArr);
let url="https://dheerajjames.github.io/json-data/blog%20data/data.json";
fetch(url)
.then((response)=>{
    return response.json();
})
.then((myarray)=>{
    blogBody(myarray);
   myArr=myarray;
})

const blogBody=(data)=>{
        let someNumber=Math.random()*data.length;
        let indices=Math.floor(someNumber);
        bodyContent(data[indices]);
        asideContent(data[indices].links);   
    }
export const changeBodyClick=(event)=>{
    let num=event.target.id;
    // console.log(myArr);    
    myArr.forEach((element)=>{
        if(element.id==num){
                    let result=element;
                    // console.log(result.links);
                    bodyChangeContent(result);
                    asideChangeContent(result.links);
        
                }
    })
   
}
