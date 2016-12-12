/*
* @Author: Song Zhang
* @Date:   2016-12-09 18:55:07
* @Last Modified by:   Song Zhang
<<<<<<< HEAD
* @Last Modified time: 2016-12-12 13:34:39
=======
* @Last Modified time: 2016-12-10 16:29:45
>>>>>>> e08d68150700f2217d8348ae5058a66d9cc6a928
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

$(document).ready(function() {
  $("button").click(function() {
    $.getJSON(str,function(result) {
      $.each(result, function(i, field) {
        $("p").append(field + " ");
      });
    });
  });
});

var obj = new WxLogin({
  id:"QRCode",
  appid: "wx57396d7aced16b5a",
  scope: "snsapi_login",
  redirect_uri: "http%3a%2f%2fopen.wechat.redshift.cc",
  state: "",
  style: "",
  href: ""
});

