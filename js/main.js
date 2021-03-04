function mapsSelector() {
    if /* if we're on iOS, open in Apple Maps */
      ((navigator.platform.indexOf("iPhone") != -1) || 
       (navigator.platform.indexOf("iPod") != -1) || 
       (navigator.platform.indexOf("iPad") != -1))
      window.open("maps://maps.google.com/maps?daddr=Kulturhuset%20Hagelund%20Storvegen%202420%20Trysil&amp;ll=");
  
    else /* else use Google */
      window.open("https://maps.google.com/maps?daddr=Kulturhuset%20Hagelund%20Storvegen%202420%20Trysil&amp;ll=");
}

//skriv et script som avgør hvilket maps program de kjør på mobilen

//krever en test!!

//Trysil rådhus, Storvegen 5, 2420 Trysil

//Default
//<a href=“http://maps.google.com?q=Kulturhuset%20Hagelund%20Storvegen%202420%20Trysil”>Finn Møtet</a>

//iPhone
//<a href=“http://maps.google.com/?saddr=Current%20Location&daddr= Kulturhuset%20Hagelund%20Storvegen%202420%20Trysil”>Finn Møtet</a>

//Android
//<a href=“geo:Kulturhuset%20Hagelund%20Storvegen%202420%20Trysil″>Finn Møtet</a>

//WP7
//<a href=“maps:Kulturhuset%20Hagelund%20Storvegen%202420%20Trysil”>Finn Møtet</a>