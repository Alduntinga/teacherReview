const img=document.getElementById("img");
const teachName=document.getElementById("teachName");
const tests=document.getElementById("tests");
const labs=document.getElementById("labs");
const desciption=document.getElementById("description");
const back=document.getElementById("back");

let school=localStorage.getItem('school');
let teach=localStorage.getItem("teach");
teachName.innerHTML=teach;

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

const colRef=ref(db, "Schools/"+school+"/Teachers/"+teach)

onValue(colRef,(snapshot)=>{
    let vals=[]
    snapshot.forEach((childSnapshot)=>{
        vals.push(childSnapshot.val());
    })
    desciption.innerHTML=vals[0];
    img.src=vals[1];
    labs.innerHTML=vals[2];
    tests.innerHTML=vals[3];
})

back.addEventListener("click",()=>{
    window.location.href="school.html";
})