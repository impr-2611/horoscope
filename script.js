window.onload=function(){
const checkBtn = document.getElementById('getHoroscopeBtn');
checkBtn.addEventListener('click', getHoroscope);
}

function getHoroscope(){
  const user = document.getElementById('name');
  const dur = document.getElementById('duration');
  const horoscope = document.getElementById('myData');
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const api_url = "http://horoscope-api.herokuapp.com/horoscope/";

  var name = document.getElementById('userName').value;
  var sign = document.getElementById('sunsign').value;
  var freq = document.getElementById('frequency').value;

  if (sign === "none") {
    alert("Please select your Sunsign at least!")
    return;
  }
  else if(freq === "none") {
    setTimeout(function() {alert("Since you haven't selected any timeline, let's see your today's horoscope.")}, 500);
    freq = "today";
  }

  var url = proxyurl+api_url+freq+"/"+sign;

  if(name){
    user.innerHTML="Hi, "+name[0].toUpperCase()+name.slice(1) + "!";
  }
  else{
    user.innerHTML="Hi, Anonymous!";
  }

  horoscope.innerHTML = "Fetching your horoscope ... ";
  
  fetch(url)
  .then(res => res.json())
  .then(data => {
    var x = data.horoscope;
    horoscope.innerHTML= x;
    
    if(!freq.localeCompare("today")){
      dur.innerHTML="Today : "+data.date;
    }
    else if(!freq.localeCompare("week")){
      dur.innerHTML="Week : "+data.week;
    }
    else if(!freq.localeCompare("year")){
      dur.innerHTML="Year : "+data.year;
    }
    // console.log(f);
    // dur.innerHTML=freq+" : "+data.week;
  })

  document.getElementById("Horoscope").style.display="block";

}
