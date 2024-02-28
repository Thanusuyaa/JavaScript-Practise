//  1) Selecting by tag from Id 
// function check()
//             {
//                  area=document.getElementById("mydiv");
//                  box=area.getElementsByTagName("input");
//                  data=document.getElementsByTagName("p");
              
//                  //  data[0].innerHTML=box[0].value;
//                 //  data[1].innerHTML=box[1].value;
//                 //  data[2].innerHTML=box[2].value;

//    // for loop
//          for(i=0;i<box.length;i++)
//          {
//             data[i].innerHTML=box[i].value;
//             console.log(i);
//          }
//           }

//2)  function check(){
//     box=document.getElementById("from").value;
//     document.getElementById("to").innerHTML=box;

// }
// 3) Javascript DOM select by tag name
    // function check(){
    //     box=document.getElementsByTagName("input");
    //     data=document.getElementsByTagName("p");
        
    //     // data[0].innerHTML=box[0].value;
    //     // data[1].innerHTML=box[1].value;
    //     // data[2].innerHTML=box[2].value;

    // for(i=0; i<box.length;i++)
    // {
    //     data[i].innerHTML=box[i].value;
    //     console.log(i);
    // }
    // }
// 4) Setting date and time
// function changecolor(){
//     date=new Date();
//     hour=date.getHours();
//     minute=date.getMinutes();
//     second=date.getSeconds();
//     timing=date.toLocaleTimeString();
//     x=document.getElementById("p1");
//     x.innerHTML=timing;

//     if(second%2==0)
//     {x.style.color="red";}
//     else
//     {x.style.color="blue";}
// } //changecolor
// function start(){
// clear=setInterval(changecolor,1000);
// }
// function stop(){
// clearInterval(clear);
// }

// 5) creating new HTML Element
// function create(){
//     value=document.getElementById("myinput").value;
//     element=document.createElement("p");
//     text=document.createTextNode(value);
//     element.appendChild(text);
//     mydiv=document.getElementById("mydiv");
//     mydiv.appendChild(element);
// }


// <!-- 6) Chat app -->
 function sendsms()
 { 
    value1=document.getElementById("i1").value;
    value2=document.getElementById("i2").value;
    element=document.createElement("li");

    if(value1 !="")
    {
        text1=document.createTextNode(value1);
        element.appendChild(text1);
        mydiv=document.getElementById("mydiv");
        mydiv.appendChild(element);
        element.style.color="#FDB7B9";
        document.getElementById("i1").value="";
    }
    else if(value2 !="")
    {
        text2=document.createTextNode(value2);
        element.appendChild(text2);
        mydiv=document.getElementById("mydiv");
        mydiv.appendChild(element);
        element.style.color="#d8f3e9";
        document.getElementById("i2").value="";
    }

 }

































// 5) Changing html by using JS
// function check()
//             {
//                  area=document.getElementById("mydiv");
//                  box=area.getElementsByTagName("input");
//                  data=document.getElementsByTagName("p");
//                 for(i=0;i<box.length;i++)
//                 {
//                     // data[i].innerHTML=box[i].value;
//                     // data[i].style.color="green";
//                     // data[i].style.backgroundColor="yellow";

//                     data[i].innerHTML=box[i].value;
//                     data[i].className="myclass";
//                 }
//              }
