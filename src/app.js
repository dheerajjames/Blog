import { bodyChangeContent } from "./components/changeContent.js";
import { asideChangeContent } from "./components/changeContent.js";
import { bodyContent } from "./components/mainContent.js";
import { asideContent } from "./components/mainContent.js";



const rootDiv =document.getElementById("root");
const bodyDiv=document.getElementById("bodydiv");
const asideDiv=document.getElementById("asidediv");


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
