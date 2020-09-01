// 

// 
var student=
[
    {
        name:"pratheesh",
        usn:"4Mc18CS186",
        math_mark:78,
        bio_mark:98
    },
    {
        name:"Ramesh",
        usn:"4Mc18CS189",
        math_mark:98,
        bio_mark:88
    },
    {
        name:"girish",
        usn:"4Mc18CS146",
        math_mark:93,
        bio_mark:99
    }
]
function mark(){
var divEle=document.getElementById("student_info");
for(var i=0;i<student.length;i++)
{
    var h2EleName=document.createElement("h2");
    var spanEleName=document.createElement("span");
    var h2EleUsn=document.createElement("h2");
    var spanEleUsn=document.createElement("span");
    var h2EleMaths=document.createElement("h2");
    var spanEleMaths=document.createElement("span");
    var h2EleBio=document.createElement("h2");
    var spanEleBio=document.createElement("span");
    h2EleName.textContent="Name : "             
    spanEleName.textContent=student[i].name ;
    h2EleName.appendChild(spanEleName)
    divEle.appendChild(h2EleName);      //end of h2 contain name
    h2EleUsn.textContent="Usn : "
    spanEleUsn.textContent=student[i].usn ;
    h2EleUsn.appendChild(spanEleUsn);
    divEle.appendChild(h2EleUsn);  //end of h2 contain usn
    h2EleMaths.textContent="mathematics : "
    spanEleMaths.textContent=student[i].math_mark ;
    h2EleMaths.appendChild(spanEleMaths);
    divEle.appendChild(h2EleMaths);  //end of h2 contain maths mark
    h2EleBio.textContent="Biology : "
    spanEleBio.textContent=student[i].bio_mark ;
    h2EleBio.appendChild(spanEleBio);
    divEle.appendChild(h2EleBio); 
     //end of h2 contain maths mark
     var hrEle=document.createElement("hr");
     divEle.appendChild(hrEle)
    



}

}




















    // var div_ele=document.getElementById("student_info")
    // for(var i=0;i<student.length;i++)
    // {
        
    //     var h2Ele=document.createElement('h2');
    //     var spanEle=document.createElement("span")
    //     var h2EleUsn=document.createElement('h2');
    //     var spanEleUsn=document.createElement("span")
    //     spanEle.textContent=student[i].name;
    //     h2Ele.textContent="name : "

    //     h2Ele.appendChild(spanEle);
    //     div_ele.appendChild(h2Ele)
    //     h2EleUsn.textContent="Usn : "

    //     spanEleUsn.textContent=student[i].usn;
    //     h2EleUsn.appendChild(spanEleUsn);
    //     div_ele.appendChild(h2EleUsn)
    

    // }
    // for(var i=0;i<student.length;i++)
    // {
    //      var div_ele=document.querySelector("div");
    //      var h2Ele=document.createElement("h2");
    //      var spanEle=document.createElement("span");
    //     if(i===0)
    //     {
    //      h2Ele.innerHTML="name: "
    //      for(var i=0;i<student[0].length;i++)
    //      spanEle.textContent=student[i].name;

        
    //     }
    //     else if(i==1)
    //     {
    //         h2Ele.innerHTML="usn"
    
    //     } 
    //     else if(i==2)
    //     {
    //         h2Ele.innerHTML="maths"
    
    //     } 
    //     else if(i==3)
    //     {
    //         h2Ele.innerHTML="bio"
    
    //     } 
    //      div_ele.append(h2Ele)
    //      h2Ele.append(spanEle)
    // }
