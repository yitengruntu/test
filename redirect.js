/*
* @Author: Song Zhang
* @Date:   2016-12-09 18:55:07
* @Last Modified by:   Song Zhang
* @Last Modified time: 2016-12-10 15:36:48
*/

'use strict';
var str="https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx57396d7aced16b5a&secret=eb55d090befc00183074a6f5230bbe14&code="+getQueryVariable('code')+"&grant_type=authorization_code";
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
             var pair = vars[i].split("=");
          if(pair[0] == variable){return pair[1];}
    }
    return(false);
  }

$(document).ready(function(){
  $("button").click(function(){
    $.getJSON(str,function(result){
      $.each(result, function(i, field){
        $("p").append(field + " ");
      });
    });
  });
});

