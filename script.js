const time=document.getElementById("time");
const timeformat=document.getElementById("timeformat");
document.addEventListener('DOMContentLoaded',()=>{
    setInterval(sett, 1000);
})
const sett=()=>{
    let date= new Date();
    let hr=date.getHours();
    let mi=date.getMinutes();
    let se=date.getSeconds();
    if(hr<10){
        hr=`0${hr}`;
    }
    if(mi<10){
        mi=`0${mi}`;
    }
    if(se<10){
        se=`0${se}`;
    }
    timeformat.innerHTML=hr>12 ?"PM":"AM";
    // console.log(hr,mi,se);
    time.innerHTML=`${hr}:${mi}:${se}`;

}