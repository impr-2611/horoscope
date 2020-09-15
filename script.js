
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
  var name = document.getElementById('userName');
  var sign = document.getElementById('sunsign').value;
  var freq = document.getElementById('frequency').value;
  var url = proxyurl+api_url+freq+"/"+sign;
  console.log(api_url+sign);

  if(name){
    user.innerHTML="Hi! "+name.value;
  }
  else{
    user.innerHTML="Hi! Anonymous!";
  }

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
