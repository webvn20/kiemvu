/* Check URL (strip username) */
function parseQueryString() {
    var result = {},
        searchArr = location.search.substr(1).split('&');
    for (var i = 0; i < searchArr.length; i++) {
        var str = searchArr[i];
        if (!str) continue;
        var arr = str.split('=');
        result[arr[0]] = arr[1];
    }
    return result;
}
var qData = parseQueryString();
if (qData.u) {
    delete qData.u;
    delete qData.sid;
    var newUrl = location.href.replace(location.search, '') + '?',
        dataArr = [];
    for (var k in qData)
        dataArr.push(k.toString() + '=' + qData[k]);
    newUrl += dataArr.join('&');
    location.href = newUrl;
}

 
   var url_domain = "http://mainsite.script.360game.vn";
        var play = window.location.href.split('?')[0].indexOf("play-game");
        if (play > 0) {
            url_domain = "http://playgame.script.360game.vn";
        }
  
  var time = new Date().getTime();
        var link_js_360 = '<script src="' + url_domain + '/script/v2-360game-' + time + '.js"></script> ';
        $('head').append(link_js_360);

  var _mer = "vng:congthanhchien";
  var _fields;
 $(document).ready(function () {  
        function parseQueryString() {
            var result = {},
                searchArr = location.search.substr(1).split('&');
            for (var i = 0; i < searchArr.length; i++) {
                var str = searchArr[i];
                if (!str) continue;
                var arr = str.split('=');
                result[arr[0]] = arr[1];
            }
            return result;
	}
 
      // load script tracking ccd
        var n = window.location.search;
	if(n.length>1){
	  n = n.substring(1);         
	} 
        if (0 == $("#360log").length) {
            var p = "http://360game.apps.zing.vn/log/tracking?appName=" + config360game.app_name + "&userName=" + config360game.zing_account + "&" + n +"&referer=" + encodeURIComponent(document.referrer);
	    $('body').append('<iframe id="360log" src="'+p+ '" height="0" width="0" style="display:none;visibility:hidden"></iframe>');	
        }
         if (0 == $("#360logweb").length) {
            p = "http://web.tracking.360game.vn/log/tracking?appName=" + config360game.app_name + "&userName=" + config360game.zing_account + "&" + n +"&referer=" + encodeURIComponent(document.referrer);
	    $('body').append('<iframe id="360logweb" src="'+p+ '" height="0" width="0" style="display:none;visibility:hidden"></iframe>');	
        }
        // script tracking moore
        var domain = window.location.href;
          if((n.indexOf("status=quick-register") != -1  || n.indexOf("_status=0") != -1 )&& domain.indexOf("/play-game")!=-1 ){ // trang play-game
	    if(config360game.app_name=="ctc360" ){
			_fields = _fields || []; 
		      _fields.push('6c042153-be30-4ce3-b876-69d8b48fbb70:'+config360game.zing_account); 
		      (function () { 
		      var srcipt = document.createElement('script'); 
		      srcipt.type = 'text/javascript'; 
		      srcipt.async = true; 
		      srcipt.src = 'http://service.doublelink.net/js/ctc/conversion.js'; 
		      var s = document.getElementsByTagName('script')[0]; 
		      s.parentNode.insertBefore(srcipt, s); 
		      })(); 
		      
		      function completeCallback() { 
		      //window.location = "#"; 
		      } 
		      
		      // Agency
		      try{
			      $('head').append( '<script src="//d17m68fovwmgxj.cloudfront.net/js/appier-track-v1.7.js"></script>');

			      (function(w, d, s, m) {
				  var f = d.getElementsByTagName('script')[0],
				      j = d.createElement('script'),
				      ns = 'APPIER_RETARGET';
				  w._appierSendQueue = [];
				  w['appierRetargetJson'] = { id: s, site: m};
				  j.async = true;
				  j.src = '//d17m68fovwmgxj.cloudfront.net/js/rt/track.js';
				  f.parentNode.insertBefore(j, f);
				  !w[ns] && (w[ns] = {});
				  (!w[ns].send) && (w[ns].send = function(j){
				      w._appierSendQueue.push(j);
				  });
			      })(window, document, 'o3Tr','ctc.360game.vn');
			  setTimeout(function(){
			    Appier.appierTrack("QKg8P8yzpCri50J", {unique_key:"true"}, "96d5315m51tSf0v");
			    window.APPIER_RETARGET.send({
				  't': 'type_conversion',
				  'content': 'registration'
			    });
			  
			  },5000);
			  
		      }catch(ex){
			console.log(ex);
		      }
	    }
	    
	    if(config360game.app_name=="ct360"){
	      try {
		      $('head').append( '<script src="//d17m68fovwmgxj.cloudfront.net/js/appier-track-v1.7.js"></script>');
		      (function(w, d, s, m) {
		      var f = d.getElementsByTagName('script')[0],
			  j = d.createElement('script'),
			  ns = 'APPIER_RETARGET';
		      w._appierSendQueue = [];
		      w['appierRetargetJson'] = { id: s, site: m};
		      j.async = true;
		      j.src = '//d17m68fovwmgxj.cloudfront.net/js/rt/track.js';
		      f.parentNode.insertBefore(j, f);
		      !w[ns] && (w[ns] = {});
		      (!w[ns].send) && (w[ns].send = function(j){
			  w._appierSendQueue.push(j);
		      });
		    })(window, document, 'o3Tr','ct.360game.vn');
	      }catch(ex){
		console.log(ex);
	      }
	      
	    }
	    
	    if(config360game.app_name=="baophong360" && n.indexOf("from3rd=Appier")){
	        $('head').append( '<iframe src="http://tracking.mass.com.vn/aff_l?offer_id=5" scrolling="no" frameborder="0" width="1" height="1"></iframe>');	      
	    }
	    
	    
	    if(config360game.app_name=="dbth360" && domain.indexOf("from3rd=Appier")!=-1){
		      $('body').append('<iframe src="http://comtechgroup.go2cloud.org/aff_l?offer_id=9" scrolling="no" frameborder="0" width="1" height="1"></iframe>');	  
	    }
	    
	    if(config360game.app_name=="bc2360" && domain.indexOf("from3rd=Ctech")!=-1){
		      $('body').append('<iframe src="http://comtechgroup.go2cloud.org/aff_l?offer_id=7" scrolling="no" frameborder="0" width="1" height="1"></iframe>');	  
	    }
	    
	    if(config360game.app_name=="mu360" && (domain.indexOf("from3rd=Appier")!=-1 || domain.indexOf("from3rd=Ctech")!=-1 )){
		      $('body').append('<iframe src="http://comtechgroup.go2cloud.org/aff_l?offer_id=15" scrolling="no" frameborder="0" width="1" height="1"></iframe>');	  
	    }
	    if(config360game.app_name=="bc2360" && domain.indexOf("from3rd=AMT")!=-1 ){
		      $('body').append('<iframe src="http://tracking.appboost.net/aff_l?offer_id=15" scrolling="no" frameborder="0" width="1" height="1"></iframe>');	  
	    }
	    
	    /*if(domain.indexOf("from3rd=Adtop")!=-1 ){
		      $('head').append( '<script src="//logging.adtop.vn/tracking/cli/1fba78324c"></script>');	  
			setTimeout(function(){
			    AdtopTrack.order(config360game.app_name);
			},5000);    
	    }
	   if(domain.indexOf("from3rd=Trueads")!=-1 ){
		$('head').append('<script src="http://tracking.trueads.vn/static/js/trackingnru.js?time=' + Date.now() + '" type="text/javascript" async="" defer=""></script><script>var configtracking={username:config360game.zing_account, appname: config360game.app_name, isnru: 1};</script>');
	   }
           if(domain.indexOf("from3rd=Meta")!=-1 ){
               var ads_params = parseQueryString().refer || '';
               $('body').append('<iframe src="http://event.adpia.vn/api/game_register/vng?uname=' + config360game.zing_account + '&source=' + ads_params + '" scrolling="no" frameborder="0" width="0" height="0" style="visibility: hidden;"></iframe>');
           }
           if(config360game.app_name=="mudts360" && domain.indexOf("from3rd=Comtech")!=-1 ){
               $('body').append('<iframe src="http://tracking.mass.com.vn/aff_l?offer_id=46" scrolling="no" frameborder="0" width="1" height="1" style="visibility: hidden;"></iframe>');
           }*/
	}
	
	if(config360game.app_name=="ctc360" && domain.indexOf("/play-game")==-1){
	    (function () { 
	    var srcipt = document.createElement('script'); 
	    srcipt.type = 'text/javascript'; 
	    srcipt.async = true; 
	    srcipt.src = 'http://service.doublelink.net/js/ctc/retracking.js'; 
	    var s = document.getElementsByTagName('script')[0]; 
	    s.parentNode.insertBefore(srcipt, s); 
	    })(); 
	    try{
	    // agency
	       var url1 = '<script src="//d17m68fovwmgxj.cloudfront.net/js/appier-track-v1.7.js"></script>'
	       $('head').append(url1);
			(function(w, d, s, m) {
		  var f = d.getElementsByTagName('script')[0],
		      j = d.createElement('script'),
		      ns = 'APPIER_RETARGET';
		  w._appierSendQueue = [];
		  w['appierRetargetJson'] = { id: s, site: m};
		  j.async = true;
		  j.src = '//d17m68fovwmgxj.cloudfront.net/js/rt/track.js';
		  f.parentNode.insertBefore(j, f);
		  !w[ns] && (w[ns] = {});
		  (!w[ns].send) && (w[ns].send = function(j){
		      w._appierSendQueue.push(j);
		  });
	      })(window, document, 'o3Tr','ctc.360game.vn');
	     
	    }catch(ex){
	    
	    }
	}
	
	
	
	
  })

 var _gamecode= "";
 var _platform= "";
 var _referer= "";
 var _username = "";
 var _serverid= "";
 var _status = "";
 var flag_click = 0;
  var flag_click_yahoo = 0;
  var flag_play = 0;
 
 var vmas_click = function(gamecode, platform, referer){
   _gamecode =gamecode;
   _platform = platform;
   _referer = referer;
   flag_click = 1;
}

var vmas_play = function(gamecode, username, serverid, status, platform){
  _gamecode =gamecode;
  _platform = platform;
  _username = username;
  _serverid= serverid;
  _status = status;
  flag_play= 1;
}

var vmas_click_yahoo = function(gamecode){
  _gamecode =gamecode;
  flag_click_yahoo
}
 
 
 var download360 = {
    hacq: function(type) {
        var url = "http://360game.apps.zing.vn/log/get-channel-info";
        var download_url = "http://hacq.download.360game.vn/dl";
        var download_success_url = "http://hacq.download.360game.vn/mc/";
        $.ajax({
            type: "GET",
            dataType: "jsonp",
            url: url,
            success: function(data) {
                try {
                    if (type == "mini") {
                        download_url += "?" + data.channel_info + "&timestamp=" + new Date().getTime();
                        download_success_url += "download_success.html";
                    } else if (type == "full") {
                        download_url += "?" + data.channel_info + "&timestamp=" + new Date().getTime() + "&from=fullclient";
                        download_success_url += "download_success_full.html";
                    }
                } catch (ex) {

                }
                if ($('#ifrDownload').length) {
                    $("#ifrDownload").remove();
                }
                if ($('#ifrDownloadSuccessfull').length) {
                    $("#ifrDownloadSuccessfull").remove();
                }
                $("body").append("<iframe id='ifrDownload' src='" + download_url + "' width='0' height='0' tabindex='-1' frameborder='0'></iframe>");
                $("body").append("<iframe id='ifrDownloadSuccessfull' src='" + download_success_url + "' width='0' height='0' tabindex='-1' frameborder='0'></iframe>");
            }
        });
    },
    daupha: function(type) {
        var url = "http://360game.apps.zing.vn/log/get-channel-info";
        var download_url = "http://tkb.download.360game.vn/dl";
        var download_success_url = "http://tbk.download.360game.vn/mc/";
        $.ajax({
            type: "GET",
            dataType: "jsonp",
            url: url,
            success: function(data) {
                try {
                    if (type == "mini") {
                        download_url += "?" + data.channel_info + "&timestamp=" + new Date().getTime();
                        download_success_url += "download_success.html";
                    } else if (type == "full") {
                        download_url += "?" + data.channel_info + "&timestamp=" + new Date().getTime() + "&from=fullclient";
                        download_success_url += "download_success_full.html";
                    }
                } catch (ex) {

                }
                if ($('#ifrDownload').length) {
                    $("#ifrDownload").remove();
                }
                if ($('#ifrDownloadSuccessfull').length) {
                    $("#ifrDownloadSuccessfull").remove();
                }
                $("body").append("<iframe id='ifrDownload' src='" + download_url + "' width='0' height='0' tabindex='-1' frameborder='0'></iframe>");
                $("body").append("<iframe id='ifrDownloadSuccessfull' src='" + download_success_url + "' width='0' height='0' tabindex='-1' frameborder='0'></iframe>");
            }
        });
    }
};
