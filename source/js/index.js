var scrollEventCtr=function(){var a=[],b=[];return $(window).on("scroll",function(){a.forEach(function(a,c){return!!b[c]||void("function"==typeof a&&(b[c]=a()))})}),function(c){b.push(!1),a.push(c),"function"==typeof c&&(b[b.length-1]=c())}}();function getEnv(){var a=navigator.userAgent.toLowerCase();return /micromessenger(\/[\d\.]+)*/.test(a)?"weixin":/qq\/(\/[\d\.]+)*/.test(a)||/qzone\//.test(a)?"qq":"h5"}
var Imgs=$(".img-placeholder");function lazyLoadImg(){return setTimeout(function(){for(var a=$(window).scrollTop(),b=$(window).height(),c=0;c<Imgs.length;c++){var d=$(Imgs[c]),e=d.offset().top,f=d.attr("src");a+b>e&&a<e&&(d.replaceWith("<img src=\""+f+"\" width=\"100%\" height=\"100%\">"),Imgs.splice(c--,1))}},500),!1}Imgs.length&&scrollEventCtr(lazyLoadImg);
var $pay=$("#payMe");$("#payBtn").on("click",function(){var a=$("<div class=\"popup-overlay\"></div>");$(document.body).css("overflow","hidden").append(a),a.on("click",hidePay),$pay.show().removeClass("hide").addClass("show")}),$pay.on("click","input",function(){var a=this.id;$pay.find("[alt="+a+"]").show().siblings().hide()}),$pay.find(".icon-cancel").on("click",hidePay);function hidePay(){$(document.body).css("overflow",""),$pay.removeClass("show").addClass("hide"),setTimeout(function(){$pay.hide(),$(".popup-overlay").remove()},500)}
var Content=null,changeEvent="oninput"in window?"input":"onpropertychange"in window?"propertychange":"keyup";$("[data-tag=search]").on("click",popupSearch);function popupSearch(){function a(){i.removeClass("show").addClass("hide"),setTimeout(function(){i.remove(),g.css("overflow",""),h.remove()},500)}function b(){var a=this.className;"num"==a?e=parseInt($(this).html(),10)-1:"prev"==a?e--:"next"==a&&e++,d(f,e,10)}function c(){var a=$.trim($(this).val());if(!a)return f.length=0,e=0,j.empty(),l.html("\u6CA1\u6709\u5185\u5BB9"),void k.html("");var b=RegExp(a,"ig"),c=new Date,g=function(a){return a.replace(b,function(b){return"<em>"+b+"</em>"})};f=[],j.empty(),loadData().done(function(e){e.forEach(function(a){var c=[],d=!1,e=!1,h={};$.extend(!0,h,a),a.tags.forEach(function(a){c.push(a.name)}),c.length&&(h.tagStr=c.join("@#"),(d=b.test(h.tagStr))&&(h.tagStr=g(h.tagStr))),(e=b.test(a.title))&&(h.titleStr=g(a.title)),(e||d)&&f.push(h)}),f.length?(l.html("\u627E\u5230 <span>"+f.length+"</span> \u6761\u76F8\u5173\u6761\u76EE\uFF0C\u7528\u4E86 <span>"+(new Date-c)+"</span> \u6BEB\u79D2"),d(f,0,10)):l.html("\u672A\u53D1\u73B0\u4E0E <span>\""+a+"\"</span> \u76F8\u5173\u7684\u5185\u5BB9")})}function d(a,b,c){c=c||10;var d=[],e=b*c,f=(b+1)*c;a.slice(e,f).forEach(function(a){d.push(getResultRow(a))}),j.html(d.join("")),k.html(getPagination(a.length,b,c))}var e=0,f=[],g=$(document.body),h=$("<div class=\"popup-overlay\"></div>"),i=$("<div class=\"search-popup show\"><div class=\"search-top\"><div class=\"search-icon\"><i class=\"icon-search\"></i></div><div class=\"search-close\"><i class=\"icon-close\"></i></div><div class=\"search-input\"><input type=\"text\" placeholder=\"Please input ...\"></div></div><div class=\"search-content\"><h3 class=\"search-tip\">\u6CA1\u6709\u5185\u5BB9</h3><div class=\"search-result\"></div><nav class=\"search-pagination\"></nav></div></div>");g.css("overflow","hidden").append(h).append(i);var j=i.find(".search-result"),k=i.find(".search-pagination"),l=i.find(".search-tip");setTimeout(function(){i.find("input").focus()},500),i.find(".search-close").on("click",a),h.on("click",a),i.find("input").on(changeEvent,function(){c.call(this)}),i.find(".search-pagination").on("click","a",function(){b.call(this)})}function loadData(){return $.Deferred(function(a){return Content?void a.resolve(Content):void $.get("/content.json",function(b){b?(Content=b,a.resolve(b)):a.reject(null)})})}function getResultRow(a){var b=new Date(a.date),c=b.getFullYear()+"/"+("0"+(b.getMonth()+1)).slice(-2)+"/"+("0"+b.getDate()).slice(-2),d="<a class=\"search-link\" href=\"/{path}\"><p class=\"search-title\">{title}</p><p class=\"search-info\"><time>{date}</time>&nbsp;";return d=d.replace(/{path}/g,a.path).replace(/{title}/g,a.titleStr||a.title).replace(/{date}/g,c),a.tagStr&&(d+="<i class=\"icon-tags\"></i>&nbsp;<span>"+a.tagStr.replace(/@#/g,"</span>&nbsp;<span>")+"</span></p>"),d+="</a>",d}function getPagination(a,b,c){if(!a)return"";var d=Math.ceil(a/c),e=[];if(1>=d)return"";for(var f=0;f<d;f++)0==f&&0!=b&&e.push("<a class=\"prev\" href=\"javascript:;\">Prev</a>"),f==b?e.push("<span>"+(f+1)+"</span>"):e.push("<a class=\"num\" href=\"javascript:;\">"+(f+1)+"</a>"),f==d-1&&b!=d-1&&e.push("<a class=\"next\" href=\"javascript:;\">Next</a>");return e.join("")}
function shareInit(){var a=getEnv(),b=$("#isPost").val(),c=location.protocol+"//"+location.host+location.pathname,d=$(".post-title").html(),f=d,g="",i=[];$(".share").on("click",function(j){if(j.stopPropagation(),j.preventDefault(),"true"==b&&("weixin"==a||"qq"==a))return void showShareOverlay();var e=$(this),k=e.attr("data-url"),l=k.replace(/\//g,"");if(sharePop=$("#"+l),article=e.parents("article"),offset=e.offset(),w=e.width(),h=e.height(),g="",c=location.protocol+"//"+location.host+k,d=article.find(".post-title").html(),f=e.attr("data-desc"),i=article.find("img"),i.length)g=i[0].src;else{var m,n,o=article.find(".post-banner");o.length&&(m=article.find(".post-banner").css("background"),n=m.match(/url\(\"([^()"]+)\"\)/),n.length&&(g=n[1]))}if(sharePop.length)"block"==sharePop.css("display")?sharePop.css("display","none"):($(".share-popup").css("display","none"),sharePop.css({display:"block",top:offset.top+h+5,left:offset.left-154}));else{$(".share-popup").css("display","none");var p=$("<div id=\""+l+"\" class=\"share-popup\" style=\"display: block;\"> <div class=\"share-input\"> <input type=\"text\" value=\""+c+"\"> </div> <div class=\"share-icons\"> <a class=\"weibo share-sns\" href=\"javascript:;\" data-type=\"weibo\" title=\"weibo\"> <i class=\"icon-weibo\"></i> </a> <a class=\"weixin share-sns\" href=\"javascript:;\" data-type=\"weixin\" title=\"wechat\"> <i class=\"icon-wechat\"></i> </a> <a class=\"qq share-sns\" href=\"javascript:;\" data-type=\"qq\" title=\"qq\"> <i class=\"icon-qq\"></i> </a> <a class=\"qzone share-sns\" href=\"javascript:;\" data-type=\"qzone\" title=\"qzone\"> <i class=\"icon-qzone\"></i> </a> </div> </div>");$(".container").append(p),p.css({top:offset.top+h+5,left:offset.left-154}).find(".share-input").on("click",function(a){a.stopPropagation(),a.preventDefault()})}}),$(".container").on("click",".share-sns",function(a){a.stopPropagation(),a.preventDefault();var b=$(this).attr("data-type");handleClick(b,{url:location.protocol+"//"+location.host,sUrl:c,sPic:g,sTitle:d,sDesc:f})})}function handleClick(a,b){"weibo"===a?generate("http://service.weibo.com/share/share.php?url={%sUrl%}&title={%sTitle%}&pic={%sPic%}",b):"qq"===a?generate("http://connect.qq.com/widget/shareqq/index.html?url={%sUrl%}&title={%sTitle%}&source={%sDesc%}",b):"douban"===a?generate("https://www.douban.com/share/service?image={%sPic%}&href={%sUrl%}&name={%sTitle%}&text={%sDesc%}",b):"qzone"===a?generate("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={%sUrl%}&title={%sTitle%}&pics={%sPic%}&summary={%sDesc%}&desc={%sDesc%}&site={%url%}",b):"facebook"===a?generate("https://www.facebook.com/sharer/sharer.php?u={%sUrl%}",b):"twitter"===a?generate("https://twitter.com/intent/tweet?text={%sTitle%}&url={%sUrl%}&via={%url%}",b):"google"===a?generate("https://plus.google.com/share?url={%sUrl%}",b):"weixin"==a&&showWX(b)}function generate(a,b){var a=a.replace(/{%sUrl%}/g,encodeURI(b.sUrl)).replace(/{%sTitle%}/g,b.sTitle).replace(/{%sDesc%}/g,b.sDesc).replace(/{%sPic%}/g,encodeURIComponent(b.sPic)).replace(/{%url%}/g,encodeURIComponent(b.url));window.open(a)}function generateCode(a){$("#qrcode").empty();new QRCode("qrcode",{text:a,width:200,height:200,colorDark:"#000000",colorLight:"#ffffff",correctLevel:QRCode.CorrectLevel.M})}function showShareOverlay(){var a=$("<div class=\"share-overlay\"><i class=\"share-arrow\"></i><p class=\"share-tip\">\u5206\u4EAB\u7ED9\u597D\u53CB&nbsp;</p></div>");$(document.body).css("overflow","hidden").append(a),a.on("click",function(){$(document.body).css("overflow",""),a.remove()})}function showWX(a){var b=$(".wxshare-popup"),c=$("<div class=\"popup-overlay\"></div>");generateCode(a.sUrl),$(document.body).css("overflow","hidden").append(c),b.show().removeClass("hide").addClass("show"),c.on("click",function(){$(document.body).css("overflow",""),c.remove(),b.removeClass("show").addClass("hide"),setTimeout(function(){b.hide()},500)})}shareInit();
$(window).on("resize",windowResize),$(".container").on("click",function(){$(".share-popup").css("display","none"),$(this).hasClass("animate-prepare")&&hideEffect()}),$("#barBtn").on("click",function(a){a.stopPropagation(),a.preventDefault(),$(".share-popup").css("display","none"),$(".container").hasClass("animate-prepare")||$(".container").addClass("animate-prepare"),$(".header").hasClass("open-menu")?hideEffect():($("body").css("overflow","hidden"),$(".header").addClass("open-menu"),$(".main").addClass("push"))});function hideEffect(){$("body").css("overflow",""),$(".header").removeClass("open-menu"),$(".main").removeClass("push"),setTimeout(function(){$(".container").removeClass("animate-prepare")},550)}function windowResize(){960<$(window).width()&&$(".container").hasClass("animate-prepare")&&hideEffect();var a=$(".main").width();$(".post-banner").css("backgroundSize",94e3/a+"%")}windowResize();
$(".to-top").on("click",function(){window.scrollTo(0,0)}),$(".to-bottom").on("click",function(){window.scrollTo(0,$(document).height()-$(window).height())});function setScrollTop(){var a=$(window).scrollTop(),b=$(document).height(),c=$(window).height(),d=$(".to-top"),e=$(".to-bottom");return 500<a?d.hasClass("hide")&&d.removeClass("hide").addClass("show"):d.hasClass("show")&&d.removeClass("show").addClass("hide"),500<b-c-a?e.hasClass("hide")&&e.removeClass("hide").addClass("show"):e.hasClass("show")&&e.removeClass("show").addClass("hide"),!1}scrollEventCtr(setScrollTop);