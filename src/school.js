const teachHolder=document.getElementById("teachHolder")
const back=document.getElementById("back");
const students=document.getElementById("students");

let school=localStorage.getItem('school');

import {initializeApp}from 'firebase/app'
import {
    getDatabase,ref, onValue
}from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAVFsGqx0YThFI8hhi4W0mIDFZGIevtB3M",
    authDomain: "schoolreview-5f439.firebaseapp.com",
    projectId: "schoolreview-5f439",
    storageBucket: "schoolreview-5f439.appspot.com",
    messagingSenderId: "31414619077",
    appId: "1:31414619077:web:51e9314b20c5b9537519ac",
    measurementId: "G-ZL5MD877CP"
};

initializeApp(firebaseConfig)

const db=getDatabase()

const colRef=ref(db, "Schools/"+school+"/Teachers")

onValue(colRef,(snapshot)=>{
    snapshot.forEach((childSnapshot)=>{
        console.log(childSnapshot.key);
        let div=document.createElement("div");
        div.innerHTML=childSnapshot.key;
        div.style.color="blue";
        div.style.textDecoration="underline"
        div.addEventListener("click",(e)=>{
            localStorage.setItem("teach",e.target.innerHTML);
            window.location.href="teach.html";
        })
        teachHolder.appendChild(div);
    })
})

const calRef=ref(db, "Schools/"+school+"/Students")

onValue(calRef,(snapshot)=>{
    snapshot.forEach((childSnapshot)=>{
        let div=document.createElement("div");
        div.innerHTML=childSnapshot.key;
        div.style.color="blue";
        div.style.textDecoration="underline"
        div.addEventListener("click",(e)=>{
            localStorage.setItem("student",e.target.innerHTML);
            window.location.href="student.html";
        })
        students.appendChild(div);
    })
})

back.addEventListener('click',()=>{
    window.location.href="../index.html"
})