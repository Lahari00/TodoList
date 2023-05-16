//alert("hii");
let butt=document.createElement('button');
    butt.textContent="Add Project +";
    one.appendChild(butt);
    butt.addEventListener("click",addProject);
function addProject(e){
    if(butt.textContent.includes('Add Project')){
       butt.remove();
       let input=document.createElement('input');
       input.placeholder=" ";
       input.setAttribute('id','ipBtn');
       input.style.width="80%";
       one.appendChild(input);
       let bu1=document.createElement('button');
       bu1.textContent="Add";
       bu1.setAttribute('id','addBtn');
       bu1.style.paddingTop="3%";
       bu1.style.paddingBottom="3%";
       bu1.style.marginRight="25%";
       bu1.style.marginTop="5%";
       bu1.style.backgroundColor="MediumSeaGreen";
       let bu2=document.createElement('button');
       bu2.textContent="Cancel";
       bu2.setAttribute('id','cancelBtn');
       bu2.style.paddingTop="3%";
       bu2.style.paddingBottom="3%";
       bu2.style.backgroundColor="IndianRed";
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
        let newbutt=document.createElement('button');
        newbutt.textContent=currin.value;
        newbutt.setAttribute('class','newBtn');
        newbutt.style.margintop="5%";
        newbutt.style.marginBottom="5%";
        newbutt.style.width="100px";
        let newli=document.createElement('li');
        newli.classList.add('list-group-item');
        newli.append(newbutt);
        newli.style.width="80%";
        let parentlist=document.getElementById('parentList');
        parentlist.prepend(newli);
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
 // var item=document.getElementById('inbox');
// inBox.onclick=addInbox();
}
//var isInboxClicked=true;
function addInbox(e){
   //isInboxClicked=false;
    var h1=document.createElement('h1');
    var textans=document.createTextNode('Inbox');
    h1.setAttribute('id','INBOX');
    h1.appendChild(textans);
    two.prepend(h1);
    h1.style.paddingLeft="28%";
   let inbutt=document.createElement('button');
    inbutt.textContent="Add Task +";
    inbutt.style.paddingLeft="15%";
    inbutt.style.alignItems="center";
    two.appendChild(inbutt);
    inbutt.addEventListener("click",addTask);
    //isInboxClicked=true;
   
    
}
function addTask(e){
    let inbutt=e.currentTarget;
   // console.log(inbutt);
    if(inbutt.textContent.includes('Add Task')){
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
        bu1.addEventListener("click",addContent);
        bu2.addEventListener("click",cancelContent);
 
     }

     function addContent(e){
        let currbtn=e.currentTarget;
        let currin=currbtn.previousElementSibling;
       // alert(currin.value);
        if(currin.value!="")
        {
        let newbutt=document.createElement('button');
        newbutt.textContent=currin.value;
        newbutt.setAttribute('class','newBtn2');
        newbutt.style.margintop="5%";
        newbutt.style.marginBottom="5%";
        newbutt.style.width="100px";
        let newli=document.createElement('li');
        newli.classList.add('list-group-item2');
        newli.append(newbutt);
        newli.style.width="80%";
        newli.style.t
        let parentlist=document.getElementById('parentList2');
        parentlist.prepend(newli);
       // one.prepend(newbutt);
       
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
    function cancelContent(e){
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
butt.addEventListener("click",addProject);
    console.log(butt.addEventListener("click",addProject).value);