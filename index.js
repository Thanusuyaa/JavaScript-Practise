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
//  function sendsms()
//  { 
//     value1=document.getElementById("i1").value;
//     value2=document.getElementById("i2").value;
//     element=document.createElement("li");

//     if(value1 !="")
//     {
//         text1=document.createTextNode(value1);
//         element.appendChild(text1);
//         mydiv=document.getElementById("mydiv");
//         mydiv.appendChild(element);
//         element.style.color="blue";
//         document.getElementById("i1").value="";
//     }
//     else if(value2 !="")
//     {
//         text2=document.createTextNode(value2);
//         element.appendChild(text2);
//         mydiv=document.getElementById("mydiv");
//         mydiv.appendChild(element);
//         element.style.color="red";
//         document.getElementById("i2").value="";
//     }
//  }

// 7) Calculator
// function send(i){
//     x=document.getElementById("input1");
//     switch(i){
//         case 0:x.value+=0;
//         break;
//         case 1:x.value+=1;
//         break;
//         case 2:x.value+=2;
//         break;
//         case 3:x.value+=3;
//         break;
//         case 4:x.value+=4;
//         break;
//         case 5:x.value+=5;
//         break;
//         case 6:x.value+=6;
//         break;
//         case 7:x.value+=7;
//         break;
//         case 8:x.value+=8;
//         break;
//         case 9:x.value+=9;
//         break;
 
//         case '+':x.value+='+'; break;
//         case '-':x.value+='-'; break;
//         case '/': x.value+='/'; break;
//         case '*':x.value+='*'; break;
//         case '.':x.value+='.'; break;
//         case 'AC':x.value="";break;

//         case '=': result=eval(x.value);
//         x.value=result; 
//         break;
         
//         case 'log': result=eval(Math.log10(x.value));
//         x.value=result;
//         break;

//         case '': result=eval(Math.sqrt(x.value));
//         x.value=result;
//         break;

//         case '1/x': result=eval(1/x.value);
//         x.value=result;
//         break;
//     }
// // }

// 8) Image slider
// x=["img/s1.jpeg", "img/s2.jpeg","img/s3.jpeg","img/s4.jpeg", "img/s5.jpeg"];
// slide=document.getElementById("images");
// count=-1;
// // console.log(x.length)

// function forward()
// {
//     count=count+1;
//     if(count <=x.length)
//     {
//         if(count==x.length)
//         {
//             count=0;
//         }
//         slide.src=x[count];
//     }
//     console.log(count);
// }
//  function backward()
//  {
//    count=count-1;
//    if(count<x.length)
//    {
//     if(count==-1 || count==-2)
//     {
//       index=x.length-1;
//         count=index;
//     }
//     slide.src=x[count];
//    }
//    console.log(count);
//  }

// 9) Refresh,Auto refresh and Redirecting page
// function refresh()
// {
// //    time=document.getElementById("i1").value;  refresh
// //    time=parseInt(time);  refresh
//    time=3;
//    setTimeout("location.reload.(true)",time*1000);
//    console.log(window.location.href);
// //    if(setTimeout("location.reload(true)",time*1000))  // refresh, autorefresh
//    if(setTimeout("location.assign(https://www.amizhth.com/)",time*1000))
//    // redirecting the page using href
//    {
//     // document.getElementById("h2").style.color="blue";   
//     //  refresh changing the h2 title color
//     document.getElementById("b1").style.backgroundColor="red";
//    }
// }
// setInterval(refresh,3000);


// alert box
// function check()
// {
//      alert("Don't visit this page")
// }

// confirm box 
// function check()
// {
//     if(confirm("Sure to proceed"))
//     {
//         document.getElementById("p1").innerHTML="Thank You!!!"
//     }
//     else
//     {
//         document.getElementById("p1").innerHTML="Oh Sorry!!!"
//     }
//     }

// prompt
//  function check()
//  {
//     password=prompt("Please enter password","");
//     if(password==1234)
//     {
//         document.getElementById("p1").innerHTML="Thank You!!!"
//         // document.getElementById("p1").style.backgroundColor="red";
//     }
//     else
//     {
//         document.getElementById("p1").innerHTML="Oh Sorry!!!"
//         // document.getElementById("p1").style.backgroundColor="blue";
//     }
//  }

// Automatic image slide show
// x=["img/h3.jpg","img/s2.jpeg","img/h1.jpg","img/s1.jpeg","img/h5.jpg","img/s3.jpeg","img/h4.jpg","img/s4.jpeg","img/h2.jpg","img/s5.jpeg"];
// slide=document.getElementById("pic");
// count=0;

// function forward()
// {
//     count=count+1;
//     if(count<=x.length)
//     {
//        if(count==x.length)
//     {
//         count=0;
//     }
//     slide.src=x[count];
// }
// console.log(count);
// }
// setInterval(forward,2000);


    // Adding and removing class
//  x=document.getElementsByTagName("input");
//  y=document.getElementsByTagName("p");
//  function onMouseover(i)
//  {
//     if(x[i].value=="")
//     {
//         y[i].innerHTML="Please fill this field";
//         y[i].className="show";
//     }    
//     }
//  {
//     function onMouseout(i)
//     {
//         y[i].innerHTML="";
//         y[i].classList.remove("show"); 
//     }
//  }

// 13) Form validation
// function check()
// {
//     name=document.getElementById("name").value;
//     mobile=document.getElementById("mobile").value;
//     if(name=="")
//     {
//         alert("Please fill the name");
//         return false;
//     }
//     else if(mobile=="")
//     {
//         alert("Please fill the mobile")
//     }
// }


// name validation
function check()
{
    // -----------------------letters-------------------
    x=document.getElementsByTagName("input");
    alpha=/^[A-Za-z]+$/
    // pattern for alphabets only
    if(x[0].value=="")
    {
        alert("Please fill the name");
        return false;
    }
    if(!alpha.test(x[0].value))
    {
        alert("use only alphabets is name");
        return false;
    }
    // ---------------------------letters---------

    // -------------------------------numbers---------------
     //pattern for numbers 
     number=/^[0-9]{10}+$/ 
     if(x[1].value=="")
     {
        alert("Please fill the mobile number");
        return false;
     }
     if(!number.test(x[1].value))
     {
        alert("Use only 10 digit numbers");
        return false;
     }
    //  ----------------------numbers----------------
//    ------------------------ Email----------------
email=/^([A-Za-z0-9_.])+\@+([a-z])+\.([a-z])+$/
if(x[2].value==0)
{
    alert("Please fill the E-mail address");
    return false;
}

if(!email.test(x[2].value))
{
    alert("Use the correct E-mail format  eg: .....@gmail.com");
    return false;
}
// --------------------------Email---------------
// ------------------------password---------------
 password=/^((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,})+$/
 if(x[3].value=="")
 {
    alert("Please fill the password");
    return false;
 }
 if(!pass.test(x[3].value))
 {
    alert("Use one small, caps, numbers, special characters");
    return false;
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
