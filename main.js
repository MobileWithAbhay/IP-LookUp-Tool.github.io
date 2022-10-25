const lookupBtn = document.querySelector(".lookup-btn");
const ip = document.querySelector(".ip");
const locationb = document.querySelector(".locationb");
const geo = document.querySelector(".geo");

lookupBtn.addEventListener("click",()=>{
  axios.get("https://ipapi.co/json/").then((response)=>{
    ip.textContent=`${response.data.ip}`;
    
    locationb.textContent=`${response.data.city},${response.data.region},${response.data.country_name}`;
    
    geo.textContent=`${response.data.latitude},${response.data.longitude}`;
  });
});
