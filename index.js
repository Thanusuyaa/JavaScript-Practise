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

// function check(){
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
function changecolor(){
    date=new Date();
    hour=date.getHours();
    minute=date.getMinutes();
    second=date.getSeconds();
    timing=date.toLocaleTimeString();
    x=document.getElementById("p1");
    x.innerHTML=timing;

    if(second%2==0)
    {x.style.color="red";}
    else
    {x.style.color="blue";}
} //changecolor
function start(){
clear=setInterval(changecolor,1000);
}
function stop(){
clearInterval(clear);
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
