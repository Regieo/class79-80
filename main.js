class79=[];
function submit(){
    var name1=document.getElementById("student1").value;
    var name2=document.getElementById("student2").value;
    var name3=document.getElementById("student3").value;
    var name4=document.getElementById("student4").value;
    var name5=document.getElementById("student5").value;
    class79.push(name1);
    class79.push(name2);
    class79.push(name3);
    class79.push(name4);
    class79.push(name5);
    console.log(class79);
    document.getElementById("display").innerHTML=class79;
    document.getElementById("SUBMIT").style.display="none";
    document.getElementById("SORT").style.display="inline-block";
}
function sorting(){
    class79.sort();
    console.log(class79);
    document.getElementById("display").innerHTML=class79;
}