const img=document.getElementById("img");
const teachName=document.getElementById("teachName");
const nickname=document.getElementById("nickname");
const desciption=document.getElementById("description");
const back=document.getElementById("back");

let school=localStorage.getItem('school');
let student=localStorage.getItem("student");
teachName.innerHTML=student;

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

const colRef=ref(db, "Schools/"+school+"/Students/"+student)

onValue(colRef,(snapshot)=>{
    let vals=[]
    snapshot.forEach((childSnapshot)=>{
        vals.push(childSnapshot.val());
    })
    console.log(vals)
    desciption.innerHTML=vals[0];
    img.src=vals[1];
    nickname.innerHTML=vals[2];
})

back.addEventListener("click",()=>{
    window.location.href="school.html";
})