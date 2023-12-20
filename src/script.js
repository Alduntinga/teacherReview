const bwhsBtn=document.getElementById("bwhsBtn");

bwhsBtn.addEventListener("click",()=>{
    localStorage.setItem("school","BWHS");
    window.location.href="../pages/school.html"
})