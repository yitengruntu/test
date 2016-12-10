/*
* @Author: Song Zhang
* @Date:   2016-12-09 18:55:07
* @Last Modified by:   Song Zhang
* @Last Modified time: 2016-12-10 16:29:45
*/

'use strict';

function loadXMLDoc()
{
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
    }
  }
var str="https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx57396d7aced16b5a&secret=eb55d090befc00183074a6f5230bbe14&code="+getQueryVariable('code')+"&grant_type=authorization_code";
xmlhttp.open("GET",str,true);
xmlhttp.send();
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
             var pair = vars[i].split("=");
          if(pair[0] == variable){return pair[1];}
    }
    return(false);
  }

// Create the XHR object.
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

// Helper method to parse the title tag from the response.
function getTitle(text) {
  return text.match('<title>(.*)?</title>')[1];
}

// Make the actual CORS request.
function makeCorsRequest() {
  // This is a sample server that supports CORS.
  var url="https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx57396d7aced16b5a&secret=eb55d090befc00183074a6f5230bbe14&code="+getQueryVariable('code')+"&grant_type=authorization_code";

  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
    document.getElementById("myDiv").innerHTML=xhr.responseText
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  xhr.send();
}
