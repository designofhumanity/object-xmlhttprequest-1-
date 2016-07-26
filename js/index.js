var xhr = new XMLHttpRequest(),
    url = "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&rvprop=content&format=json";
    //firs get cental authtoken;
authTokenUrl = "https://www.mediawiki.org/w/api.php?action=centralauthtoken";
xhr.withCredetial = true;
xhr.open("GET",authTokenUrl);
xhr.send();