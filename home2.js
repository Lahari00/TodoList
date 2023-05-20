//alert("hii");
let butt=document.createElement('button');
    butt.textContent="Add Project +";
    butt.style.fontSize="1.5vw";
    butt.setAttribute('id','Bts');
    one.appendChild(butt);
    butt.addEventListener("click",addProject);
    
function addProject(e){
    if(butt.textContent.includes('Add Project')){
       butt.remove();
       let input=document.createElement('input');
       input.placeholder=" ";
       input.setAttribute('id','ipBtn');
       input.style.width="80%";
       input.style.height="2vw";
       one.appendChild(input);
       let bu1=document.createElement('button');
       bu1.textContent="Add";
       bu1.setAttribute('id','addBtn');
       bu1.style.paddingTop="3%";
       bu1.style.paddingBottom="3%";
       bu1.style.marginRight="25%";
       bu1.style.marginTop="5%";
       bu1.style.fontSize="1.5vw";
       bu1.style.backgroundColor="MediumSeaGreen";
       let bu2=document.createElement('button');
       bu2.textContent="Cancel";
       bu2.setAttribute('id','cancelBtn');
       bu2.style.paddingTop="3%";
       bu2.style.paddingBottom="3%";
       bu2.style.backgroundColor="IndianRed";
       bu2.style.fontSize="1.5vw";
       one.appendChild(bu1);
       one.appendChild(bu2);
       bu1.addEventListener("click",addContent);
       bu2.addEventListener("click",cancelContent);

    }
    function addContent(e){
        let currbtn=e.currentTarget;
        let currin=currbtn.previousElementSibling;
       // alert(currin.value);
        if(currin.value!="")
        {
        let parentlist=document.getElementById('parentList');
      /*  let newbutt=document.createElement('button');
        newbutt.textContent=currin.value;
        newbutt.setAttribute('class','newBtn');
        newbutt.style.margintop="5%";
        newbutt.style.marginBottom="5%";
        newbutt.style.width="100px";*/
        let newli=document.createElement('li');
        //newli.classList.add('list-group-item');
        newli.innerHTML=currin.value;
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        //span.style.marginLeft="170%";
        span.style.color="#555";
        //span.style.hover
        newli.appendChild(span);
        parentlist.prepend(newli);

        //newli.style.width="80%";
       

        
       
       // one.prepend(newbutt);
       
        }
        let input=document.getElementById('ipBtn');
        let bu1=document.getElementById('addBtn');
        let bu2=document.getElementById('cancelBtn');
        input.remove();
        bu1.remove();
        bu2.remove();
        butt=document.createElement('button');
        butt.textContent="Add Project +";
        butt.style.fontSize="1.5vw";
        one.appendChild(butt);
        butt.addEventListener("click",addProject);
    }
    function cancelContent(e){
        let input=document.getElementById('ipBtn');
        let bu1=document.getElementById('addBtn');
        let bu2=document.getElementById('cancelBtn');
        input.remove();
        bu1.remove();
        bu2.remove();
        butt=document.createElement('button');
        butt.textContent="Add Project +";
        butt.style.fontSize="1.5vw";
        one.appendChild(butt);
        butt.addEventListener("click",addProject);
    }
   
   
} 
////////////INBOX-----//////////////////////
let inBox=document.getElementById(inbox);
inbox.onmouseover=inbox.onmouseout=handler;
function handler(event){
if (event.type == 'mouseover')
  {
    event.target.style.background = 'LightGray'
  }
  if (event.type == 'mouseout') 
  {
    event.target.style.background = ''
  }  

}

let today=document.getElementById(tooday);
tooday.onmouseover=tooday.onmouseout=handler;
let Week=document.getElementById(week);
week.onmouseover=week.onmouseout=handler;
let Cmplt=document.getElementById(cmplt);
cmplt.onmouseover=cmplt.onmouseout=handler;
function addToday(e){
    var h1=document.createElement('h1');
    var textans=document.createTextNode('Today');
    h1.appendChild(textans);
    two.prepend(h1);

        const date=new Date();
        let day=date.getDate();
        let month=date.getMonth()+1;
        let year=date.getFullYear();
        let fullDate="".concat(day,"-",month,"-",year);
        let parentList3=document.getElementById('parentList3');
        
    let elements = document.querySelectorAll("li");
    for (let i = 0; i < elements.length; i++) {
           if(elements[i].innerHTML.includes(fullDate)){
            let newli3=document.createElement('li');
            newli3.innerHTML=elements[i].innerHTML;
            let inputcheck=document.createElement('input');
            inputcheck.type="checkbox";
            newli3.prepend(inputcheck);
            parentList3.prepend(newli3);
           }
      }
    
}
function addCmplt(e){
    var h1=document.createElement('h1');
    var textans=document.createTextNode('Completed');
    h1.appendChild(textans);
    two.prepend(h1);
    let parentList4=document.getElementById('parentList4');
    let elements = document.querySelectorAll("#parentList3>li input:checked ");
    let element2 = document.querySelectorAll("#parentList3>li");
    for(let i=0;i<elements.length;i++){
        //let x=elements[i].innerHTML.getElementByTagName("input");
        console.log(elements[i].innerHTML);
        if(elements[i].checked==true){
            let newli4=document.createElement('li');
            newli4.innerHTML=element2[i].innerHTML;
            parentList4.prepend(newli4);
        }
    
    }
}
function addWeek(e){
    var h1=document.createElement('h1');
    var textans=document.createTextNode('Week');
    h1.appendChild(textans);
    two.prepend(h1);

        const date=new Date();
        let day=date.getDate();
        let month=date.getMonth()+1;
        let year=date.getFullYear();
        let fullDate="".concat(day,"-",month,"-",year);
        let parentList4=document.getElementById('parentList4');
        
    let elements = document.querySelectorAll("li");
    for (let i = 0; i < elements.length; i++) {
           if(elements[i].innerHTML.includes(fullDate)){
           }
           else{
            let newli4=document.createElement('li');
            newli4.innerHTML=elements[i].innerHTML;
            parentList4.prepend(newli4);
           }
      }
    
}

function addInbox(e){
    var h1=document.createElement('h1');
    var textans=document.createTextNode('Inbox');
    h1.setAttribute('id','INBOX');
    h1.appendChild(textans);
    two.prepend(h1);
    let inbutt=document.createElement('button');
    inbutt.textContent="Add Task +";
    inbutt.style.paddingLeft="15%";
    inbutt.style.alignItems="center";
    two.appendChild(inbutt);
    inbutt.addEventListener("click",addTask);
}



function addTask(e){
    let inbutt=e.currentTarget;
   // console.log(inbutt);
    if(inbutt.textContent.includes('Add Task'))
    {
        inbutt.remove();
        let input=document.createElement('input');
        input.placeholder=" ";
        input.setAttribute('id','IPBTN');
        input.style.width="80%";
        two.appendChild(input);
        let bu1=document.createElement('button');
        bu1.textContent="Add";
        bu1.setAttribute('id','ADDBTN');
        bu1.style.paddingTop="3%";
        bu1.style.paddingBottom="3%";
        bu1.style.marginRight="55%";
        bu1.style.marginTop="5%";
        bu1.style.backgroundColor="MediumSeaGreen";
        let bu2=document.createElement('button');
        bu2.textContent="Cancel";
        bu2.setAttribute('id','CANCELBTN');
        bu2.style.paddingTop="3%";
        bu2.style.paddingBottom="3%";
        bu2.style.marginleft="45%";
        bu2.style.marginTop="5%";
        bu2.style.backgroundColor="IndianRed";
        two.appendChild(bu1);
        two.appendChild(bu2);
        bu1.addEventListener("click",addContentTwo);
        bu2.addEventListener("click",cancelContentTwo);
 
     }

     function addContentTwo(e)
     {
        let currbtn=e.currentTarget;
        let currin=currbtn.previousElementSibling;
       // alert(currin.value);
        if(currin.value!="")
        {
        let parentList2=document.getElementById('parentList2');
        let newli2=document.createElement('li');
        //newli.classList.add('list-group-item');
        //newli2.innerHTML=currin.value;
       // newli2.setAttribute("id","navbar");
        let span2=document.createElement("span");
        span2.innerHTML="\u00d7";
        //span.style.marginLeft="170%";
        span2.style.color="#555";
        //span.style.hover
       // newli2.appendChild(span2);
        const date=new Date();
        let day=date.getDate();
        let month=date.getMonth()+1;
        let year=date.getFullYear();
        let fullDate=currin.value.concat("",day,"-",month,"-",year);
        
        newli2.innerHTML=fullDate;
        newli2.appendChild(span2);
        parentList2.prepend(newli2);
       
        }
        let input=document.getElementById('IPBTN');
        let bu1=document.getElementById('ADDBTN');
        let bu2=document.getElementById('CANCELBTN');
        input.remove();
        bu1.remove();
        bu2.remove();
        butt=document.createElement('button');
        butt.textContent="Add Task +";
        two.appendChild(butt);
        butt.addEventListener("click",addTask);
        
    }
    function cancelContentTwo(e)
    {
        let input=document.getElementById('IPBTN');
        let bu1=document.getElementById('ADDBTN');
        let bu2=document.getElementById('CANCELBTN');
        input.remove();
        bu1.remove();
        bu2.remove();
       let butt2=document.createElement('button');
        butt2.textContent="Add Task +";
        two.appendChild(butt2);
        butt2.addEventListener("click",addTask);
    }
}
let parentlist=document.getElementById('parentList');
parentlist.addEventListener("click",calls);
if(e){
function calls(e){
    if(e.target.tagName ==="LI"){
       // e.target.classList.toggle("");
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
    }
}
}
let parentList2=document.getElementById('parentList2');
parentList2.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
       // e.target.classList.toggle("");
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
    }
}, false);
let parentList3=document.getElementById('parentList3');
parentList3.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
       // e.target.classList.toggle("");
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
    }
}, false);

