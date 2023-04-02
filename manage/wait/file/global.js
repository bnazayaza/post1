var UspsEnterpriseReg={UNITED_STATES:"840 UNITED STATES",UNITED_STATES_ABBR:"US",PUERTO_RICO_ABBR:"PR",EXACT_MATCH:"EXACT MATCH",MULTIPLE_RESPONSE:"MULTIPLE RESPONSE",DEFAULT_MATCH:"DEFAULT MATCH",ADDRESS_NOT_FOUND:"ADDRESS NOT FOUND",INVALID_ADDRESS:"INVALID-ADDRESS",INVALID_ZIPCODE:"INVALID-ZIPCODE",INVALID_STATE:"INVALID-STATE",INVALID_CITY:"INVALID-CITY",COMPANY_MATCH_FOUND:"COMPANY-MATCH-FOUND",EQUIFAX_SIMILARS:"EQUIFAX-SIMILARS",SUCCESS:"success",ERROR:"ERROR",CONFIRM:"confirm",COMPANY_ADDED:"COMPANY-ADDED",errorMsgs:{INVALID_ADDRESS_MSG:"You've entered an invalid address",INVALID_ZIPCODE_MSG:"You've entered an invalid ZIP Code",INVALID_STATE_MSG:"You've entered an invalid state",INVALID_CITY_MSG:"You've entered an invalid city"},regExps:{regExptAllSpaces:/^[\s]*$/,regExptAllNumbers:/^[\d]*$/,regExptUserName:/^(?=.*[a-zA-Z\d])(\w|[\.\@\-\?\,\&\''\/\_\""]){6,50}$/,regExptPassword:/^(?:(?!([a-zA-Z0-9-().&@?""#,+''\s\/])\1\1)[a-zA-Z0-9-().&@?""#,+''\s\/]){7,}$/,regExptSecAnswer:/^(\w|[a-zA-Z\d\s\.\@\-\?\,\&\/\_\#\+\(\)\""\'']){3,50}$/,regExptFName:/^[a-zA-Z \''\-\.]+$/,regExptLName:/^[a-zA-Z \''\-\.]+$/,regExptName:/^[a-zA-Z \''\-\.]+$/,regExptMI:/^[a-zA-Z \''\-\.]*$/,regExptCompany:/^[A-Za-z0-9\-\.'_,\"\&()?#\/+@\s]+$/,regExptAddress:/^[0-9A-Za-z'\-\._\",\&()?#\/+@\s]+$/,regExptApt:/^[0-9A-Za-z'\-\._\",\&()?#\/+@\s]*$/,regExptCity:/^[A-Za-z'\-\.\s]+$/,regExptZip:/^(\d{5}-\d{4})|(\d{5})$/,regExptUrbanCode:/^[A-Za-z0-9""-\.''\,&\(\)\?#\/\+@ ]{0,20}$/,regExptAddress1:/^[0-9A-Za-z'\-\._\",\&()?#\/+@\s]+$/,regExptAddress2:/^[0-9A-Za-z'\-\._\",\&()?#\/+@\s]*$/,regExptAddress3:/^[0-9A-Za-z'\-\._\",\&()?#\/+@\s]*$/,regExptCityInt:/^[A-Za-z'\-\.\s]+$/,regExptProvince:/^[A-Za-z'\-\.\s]*$/,regExptPostalCode:/^[A-Za-z0-9\s]{0,10}$/,regExptEmail:/\b(^['_A-Za-z0-9+-]+(\.['_A-Za-z0-9+-]+)*@([A-Za-z0-9-])+(\.[A-Za-z0-9-]+)*((\.[A-Za-z0-9]{2,})|(\.[A-Za-z0-9]{2,}\.[A-Za-z0-9]{2,}))$)\b/,regExptPhone:/^([2-9]\d{2})[- ]?(\d{3})[- ]?(\d{4})$/,regExptExt:/^[0-9-]*$/,regExptPhoneInternational:/^\d{10,15}$/,regExptFaxInternational:/^(\d{10,15})*$/,regExptFax:/^(([2-9]\d{2})[- ]?(\d{3})[- ]?(\d{4}))*$/,regExptMobileInternational:/^(\d{10,15})*$/,regExptMobile:/^(([2-9]\d{2})[- ]?(\d{3})[- ]?(\d{4}))*$/}};
var sessionRefreshURL="/entreg/secure/SessionRefreshAction";var sessionTimeoutURL="/entreg/SignOutAction_input";var sessionRefreshTickRate=1000;var sessionRefreshDisplayTime=120000;var sessionTimeout=780000;var showSessionRefreshTimeoutId;var sessionRefreshTickId;var sessionRefreshTimeout;function showSessionRefresh(){$("#session-timeout-modal").modal("show");
sessionRefreshTimeout=new Date().getTime()+sessionRefreshDisplayTime;sessionRefreshTick();sessionRefreshTickId=setTimeout("sessionRefreshTick()",sessionRefreshTickRate);}function sessionRefreshTick(){var c=sessionRefreshTimeout-(new Date().getTime());if(c>0){var b=Math.floor(c/1000)%60;var a=Math.floor(Math.floor(c/1000)/60);
if(a>0){$("#sessionCountdown").html(a+" minutes "+" and "+b+" seconds");}else{$("#sessionCountdown").html(b+" seconds");}if(typeof sessionRefreshTickId!=="undefined"){clearTimeout(sessionRefreshTickId);}sessionRefreshTickId=setTimeout("sessionRefreshTick()",sessionRefreshTickRate);}else{$("#session-timeout-modal").modal("hide");
window.location=sessionTimeoutURL;}}function addSessionRefreshTimer(){if(typeof showSessionRefreshTimeoutId!=="undefined"){clearTimeout(showSessionRefreshTimeoutId);}if(typeof sessionRefreshTickId!=="undefined"){clearTimeout(sessionRefreshTickId);}showSessionRefreshTimeoutId=setTimeout("showSessionRefresh();",sessionTimeout);
}function sanitizeHtmlOut(a){return typeof a==="undefined"?"":String(a).replace(/&/g,"&amp;").replace(/"/i,"&quot;").replace(/</i,"&lt;").replace(/>/i,"&gt;").replace(/'/i,"&apos;");}function escapeElementId(b){var a=b.replace(/[[]/g,"\\[");return a.replace(/]/g,"\\]");}var entityMap={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};
function escapeHtml(a){return String(a).replace(/[&<>"'\/]/g,function b(c){return entityMap[c];});}function sanitize(a){return typeof a==="undefined"?"":String(a).replace(/&/g,"&amp;").replace(/"/i,"&quot;").replace(/</i,"&lt;").replace(/>/i,"&gt;").replace(/'/i,"&apos;");}function log(a){$("<div>").text(a).prependTo("#log");
$("#log").scrollTop(0);}function htmlEncode(a){if(a){return jQuery("<div />").text(a).html();}else{return"";}}function htmlDecode(a){if(a){return $("<div />").html(a).text();}else{return"";}}var tm;var millis;function displayLockoutTimer(){var a=Math.floor(millis/3600000),c=Math.floor((millis%3600000)/60000),d=Math.floor((millis%60000)/1000);
var b="";if(a>0){b=a+" hours "+c+" minutes "+d+" seconds";}else{if(c>0){b=c+" minutes "+d+" seconds";}else{b=d+" seconds";}}$("#remaining").html(sanitizeHtmlOut(b));}(function(a){a.validateField=function(d){var e=a.extend({field:"#fieldname",fields:["#fieldname","#fieldName2"],required:false,icon:"false",trim:true},d);
var f=a(e.field);var c=f.attr("id");var i=a(e.fields);var h=e.icon;var g=e.required;var b=e.trim;f.on("keyup",function(j){if(a("#form-group-"+escapeElementId(c)).hasClass("has-error")){a("#form-group-"+escapeElementId(c)).removeClass("has-error");a("#error-"+escapeElementId(c)).empty();a("#"+escapeElementId(c)).removeAttr("aria-invalid");
a("#"+escapeElementId(c)).removeClass("is-invalid");a("#sr-only-error-"+escapeElementId(c)).empty();}}).on("focusin",function(){if(a("#form-group-"+escapeElementId(c)).hasClass("has-error")){}}).on("focusout",function(){var k={};k["fieldToValidate"]=a(this).attr("name");for(var j=0;j<i.length;j++){if(a(i[j]).attr("type")==="radio"){k[a(i[j]).attr("name")]=a("input[name="+a(i[j]).attr("name")+"]:radio:checked").val();
}else{k[a(i[j]).attr("name")]=a(i[j]).val();}}k["required"]=g;validateFieldMapJSON(k,b,function(l){if(l.status!="success"){var m=[];a.each(l.errors,function(o,n){if(n.hasOwnProperty("field")){a("#form-group-"+escapeElementId(n.field)).addClass("has-error");a("#"+escapeElementId(n.field)).attr("aria-invalid","true");
a("#"+escapeElementId(n.field)).addClass("is-invalid");a("#sr-only-error-"+escapeElementId(n.field)).empty().append(sanitizeHtmlOut(n.message));if(h=="true"){a("#error-"+escapeElementId(n.field)).empty().append('<span class="error-txt-blk"><span class="glyphicon glyphicon-minus-sign" aria-hidden="true"></span> '+sanitizeHtmlOut(n.message)+"</span>");
}else{a("#error-"+escapeElementId(n.field)).empty().append('<span class="error-txt-blk">'+sanitizeHtmlOut(n.message)+"</span>");}}else{if(h=="true"){m.push('<div class="error-txt"><span class="glyphicon glyphicon-minus-sign" aria-hidden="true"></span> '+sanitizeHtmlOut(n.message)+"</div>");}else{m.push('<div class="error-txt">'+sanitizeHtmlOut(n.message)+"</div>");
}}});if(m.length>0){a("#response-msg").html(m.join(""));}}});});};}(jQuery));var validateFieldMapJSON=function(e,a,f){var b;var d={};d["fieldName"]=e["fieldToValidate"];for(var c in e){if(c!="fieldToValidate"){d[c]=a?$.trim(e[c]):e[c];}}$.ajax({url:"/entreg/json/ValidateFieldAction",cache:false,type:"post",dataType:"json",data:d}).done(function(j){if(j.rs=="success"){b={"status":j.rs};
}else{b={"status":"error","errors":[]};if(j.errors){for(var g=0;g<j.errors.length;g++){b.errors.push({"message":j.errors[g]});}}if(j.actionErrors){for(var g=0;g<j.actionErrors.length;g++){b.errors.push({"message":j.actionErrors[g]});}}if(j.fieldErrors){for(fieldName in j.fieldErrors){if(j.fieldErrors.hasOwnProperty(fieldName)){for(var h=0;
h<j.fieldErrors[fieldName].length;h++){b.errors.push({"field":fieldName,"message":j.fieldErrors[fieldName][h]});}}}}if(b.errors.length<1){b={"status":j.rs};}}f(b);}).always(function(){}).fail(function(){b={"status":"fail"};f(b);});};var validateCodeMapJSON=function(d,e){var a;var c={};for(var b in d){if(b!="fieldToValidate"){c[b]=$.trim(d[b]);
}}$.ajax({url:"/entreg/secure/json/ValidationCodeAction",cache:false,type:"post",dataType:"json",data:c}).done(function(h){if(h.rs=="success"){a={"status":h.rs,"hadMyUsps":h.hadMyUsps,"hadRmin":h.hadRmin,"myUsps":h.myUsps,"rmin":h.rmin,"successMessages":[],"failureMessages":[]};$.each(h.resultList,function(){if(this.successful){a.successMessages.push({"message":this.methodMessage});
}else{a.failureMessages.push({"message":this.methodMessage});}});}else{a={"status":"error","errors":[]};if(h.errors){for(var f=0;f<h.errors.length;f++){a.errors.push({"message":h.errors[f]});}}if(h.actionErrors){for(var f=0;f<h.actionErrors.length;f++){a.errors.push({"message":h.actionErrors[f]});}}if(h.fieldErrors){for(fieldName in h.fieldErrors){if(h.fieldErrors.hasOwnProperty(fieldName)){for(var g=0;
g<h.fieldErrors[fieldName].length;g++){a.errors.push({"field":fieldName,"message":h.fieldErrors[fieldName][g]});}}}}if(a.errors.length<1){a.errors.push({"message":h.rs});}}e(a);}).always(function(){}).fail(function(f){a={"status":"fail","message":""+f};e(a);});};function ValidatePassword(c){var b=$(c).val(),a=0;
b.length>=8&&b.length<=50?($("#pswd_info_length").makeValid(),a++):$("#pswd_info_length").makeInValid();b.match(/[a-z]/)?($("#pswd_info_lower").makeValid(),a++):$("#pswd_info_lower").makeInValid();b.match(/[A-Z]/)?($("#pswd_info_capital").makeValid(),a++):$("#pswd_info_capital").makeInValid();b.match(/\d/)?($("#pswd_info_number").makeValid(),a++):$("#pswd_info_number").makeInValid();
b.match(/^[A-Za-z0-9-.@#&?'\/",\+\(\)!]*$/)?($("#pswd_info_symbol").makeValid(),a++):$("#pswd_info_symbol").makeInValid();b.toUpperCase()!==$("#username").val().toUpperCase()?($("#pswd_info_username").makeValid(),a++):$("#pswd_info_username").makeInValid();if(!b.match(/(.)\1\1/)){$("#pswd_info_repeats").makeValid();
a++;}else{$("#pswd_info_repeats").makeInValid();}if(a===7){$("#form-group-tPasswordNew").removeClass("has-error");}return a===7;}(function(c){var b="pswd_info_valid",a="pswd_info_invalid";c.fn.makeValid=function(){this.removeClass(a).addClass(b);};c.fn.makeInValid=function(){this.removeClass(b).addClass(a);
};})(jQuery);function ValidatePasswordv3(d){var a=escapeElementId($(d).attr("id"));if($("#form-group-"+a).hasClass("has-error")){$("#form-group-"+a).removeClass("has-error");$("#error-"+a).empty();$("#"+a).removeAttr("aria-invalid");$("#sr-only-error-"+a).empty();}var c=$(d).val(),b=0;c.length>=8&&c.length<=50?($("li[id^='pswd_info_length']").makeValidPortal(),b++):$("li[id^='pswd_info_length']").makeInValidPortal();
c.match(/[A-Z]/)?($("li[id^='pswd_info_capital']").makeValidPortal(),b++):$("li[id^='pswd_info_capital']").makeInValidPortal();c.match(/\d/)?($("li[id^='pswd_info_number']").makeValidPortal(),b++):$("li[id^='pswd_info_number']").makeInValidPortal();c.match(/^[A-Za-z0-9-.@#&?'\/",\+\(\)!]*$/)?($("li[id^='pswd_info_symbol']").makeValidPortal(),b++):$("li[id^='pswd_info_symbol']").makeInValidPortal();
c.toUpperCase()!==$("#tuserName").val().toUpperCase()?($("li[id^='pswd_info_username']").makeValidPortal(),b++):$("li[id^='pswd_info_username']").makeInValidPortal();if(!c.match(/(.)\1\1/)){$("li[id^='pswd_info_repeats']").makeValidPortal();b++;}else{$("li[id^='pswd_info_repeats']").makeInValidPortal();
}if(b===7){$("#form-group-"+a).removeClass("has-error");}return b===7;}(function(a){var c="pswd_info_valid_portal",b="pswd_info_invalid_portal";a.fn.makeValidPortal=function(){this.removeClass(b).addClass(c);};a.fn.makeInValidPortal=function(){this.removeClass(c).addClass(b);};})(jQuery);function ValidatePasswordv2(d){var a=escapeElementId($(d).attr("id"));
if($("#form-group-"+a).hasClass("has-error")){$("#form-group-"+a).removeClass("has-error");$("#error-"+a).empty();$("#"+a).removeAttr("aria-invalid");$("#sr-only-error-"+a).empty();}var c=$(d).val(),b=0;c.length>=8&&c.length<=50?($("#pswd_info_length").makeValid(),b++):$("#pswd_info_length").makeInValid();
c.match(/[a-z]/)?($("#pswd_info_lower").makeValid(),b++):$("#pswd_info_lower").makeInValid();c.match(/[A-Z]/)?($("#pswd_info_capital").makeValid(),b++):$("#pswd_info_capital").makeInValid();c.match(/\d/)?($("#pswd_info_number").makeValid(),b++):$("#pswd_info_number").makeInValid();c.match(/^[A-Za-z0-9-.@#&?'\/",\+\(\)!]*$/)?($("#pswd_info_symbol").makeValid(),b++):$("#pswd_info_symbol").makeInValid();
c.toUpperCase()!==$("#tuserName").val().toUpperCase()?($("#pswd_info_username").makeValid(),b++):$("#pswd_info_username").makeInValid();if(!c.match(/(.)\1\1/)){$("#pswd_info_repeats").makeValid();b++;}else{$("#pswd_info_repeats").makeInValid();}if(b===7){$("#form-group-"+a).removeClass("has-error");}return b===7;
}(function(c){var b="pswd_info_valid",a="pswd_info_invalid";c.fn.makeValid=function(){this.removeClass(a).addClass(b);};c.fn.makeInValid=function(){this.removeClass(b).addClass(a);};})(jQuery);function ValidateRetypePassword(a,f){var e=$(a).val(),c=$(f).val();var b=escapeElementId($(a).attr("id"));if($("#form-group-"+b).hasClass("has-error")){$("#form-group-"+b).removeClass("has-error");
$("#error-"+b).empty();$("#"+b).removeAttr("aria-invalid");$("#sr-only-error-"+b).empty();}$("#retype_pswd_info_invalid").hide();$("#retype_pswd_info_matching").hide();$("#retype_pswd_info_matching_progress").hide();$("#retype_pswd_info_match").hide();$("#retype_pswd_info_begin").hide();if($("#form-group-tPasswordNew").hasClass("has-error")||c.length==0){$("#form-group-tPasswordRetype").addClass("has-error");
$("#retype_pswd_info_invalid").makeInValid();$("#retype_pswd_info_invalid").show();}else{if(e.length==0){$("#retype_pswd_info_begin").show();}else{if(e==c){$("#retype_pswd_info_match").show();}else{for(var d=0;d<e.length;d++){if(e.charAt(d)!=c.charAt(d)){$("#form-group-tPasswordRetype").addClass("has-error");
$("#retype_pswd_info_matching").makeInValid();$("#retype_pswd_info_matching").show();$("#retype_pswd_info_matching_progress").hide();break;}else{$("#retype_pswd_info_matching_progress").show();}}}}}}function ValidateRetypePasswordv3(a,f){var e=$(a).val(),c=$(f).val();var b=escapeElementId($(a).attr("id"));
if($("#form-group-"+b).hasClass("has-error")){$("#form-group-"+b).removeClass("has-error");$("#error-"+b).empty();$("#"+b).removeAttr("aria-invalid");$("#sr-only-error-"+b).empty();}$("#retype_pswd_info_invalid").hide();$("#retype_pswd_info_matching").hide();$("#retype_pswd_info_matching_progress").hide();
$("#retype_pswd_info_match").hide();$("#retype_pswd_info_begin").hide();if($("#form-group-tPasswordNew").hasClass("has-error")||c.length==0){$("#form-group-tPasswordRetype").addClass("has-error");$("#retype_pswd_info_invalid").makeInValidPortal();$("#retype_pswd_info_invalid").show();}else{if(e.length==0){$("#retype_pswd_info_begin").show();
}else{if(e==c){$("#retype_pswd_info_match").show();}else{for(var d=0;d<e.length;d++){if(e.charAt(d)!=c.charAt(d)){$("#form-group-tPasswordRetype").addClass("has-error");$("#retype_pswd_info_matching").makeInValidPortal();$("#retype_pswd_info_matching").show();$("#retype_pswd_info_matching_progress").hide();
break;}else{$("#retype_pswd_info_matching_progress").show();}}}}}}var authenticateUsrCredentials=function(d,e){var b="/entreg/json/AuthenticateAction";var a;var c={username:d.username,password:d.password,newPassword:d.newPassword,retypeNewPassword:d.retypeNewPassword};$.ajax({url:b,cache:false,type:"post",data:$("#loginForm").serialize()}).done(function(h){if(h.rs=="success"){a={"status":h.rs};
}else{if(h.hasOwnProperty("ereg")){a={"status":"error","errors":[],"error":h.eregp,"ereg":h.ereg};}else{a={"status":"error","errors":[]};}if(h.errors){for(var f=0;f<h.errors.length;f++){a.errors.push({"message":h.errors[f]});}}if(h.actionMessages){for(var f=0;f<h.actionMessages.length;f++){a.errors.push({"action":h.actionMessages[f]});
}}if(h.actionErrors){for(var f=0;f<h.actionErrors.length;f++){a.errors.push({"message":h.actionErrors[f]});}}if(h.fieldErrors){for(fieldName in h.fieldErrors){if(h.fieldErrors.hasOwnProperty(fieldName)){for(var g=0;g<h.fieldErrors[fieldName].length;g++){a.errors.push({"field":fieldName,"message":h.fieldErrors[fieldName][g]});
}}}}if(a.errors.length<1){if(h.hasOwnProperty("ereg")){a={"status":h.rs,"error":h.eregp,"ereg":h.ereg};}else{a={"status":h.rs};}}}e(a);}).always(function(){}).fail(function(){a={"status":"fail"};e(a);});};var authenticateRefreshUsrCredentials=function(d,e){var b="/entreg/json/AuthenticateRefreshAction";
var a;var c={username:d.username,password:d.password};$.ajax({url:b,cache:false,type:"post",data:c}).done(function(h){if(h.rs=="success"){a={"status":h.rs};}else{a={"status":"error","errors":[]};if(h.errors){for(var f=0;f<h.errors.length;f++){a.errors.push({"message":h.errors[f]});}}if(h.actionMessages){for(var f=0;
f<h.actionMessages.length;f++){a.errors.push({"action":h.actionMessages[f]});}}if(h.actionErrors){for(var f=0;f<h.actionErrors.length;f++){a.errors.push({"message":h.actionErrors[f]});}}if(h.fieldErrors){for(fieldName in h.fieldErrors){if(h.fieldErrors.hasOwnProperty(fieldName)){for(var g=0;g<h.fieldErrors[fieldName].length;
g++){a.errors.push({"field":fieldName,"message":h.fieldErrors[fieldName][g]});}}}}if(a.errors.length<1){a={"status":h.rs};}}e(a);}).always(function(){}).fail(function(){a={"status":"fail"};e(a);});};function popoverTitleContent(){if($(this).attr("data-remotetitle")){var c=$(this).attr("data-remotetitle");
var b='<a href="#" class="close">x</a>';var a=c+" "+b;return a;}return $(this).attr("title");}function popoverContent(){if($(this).attr("data-remotecontent")){var a=$.ajax({url:$(this).attr("data-remotecontent"),type:"GET",data:$(this).serialize(),dataType:"html",async:false,success:function(){},error:function(){}}).responseText;
return a;}return $(this).attr("data-content");}$(document).on("click",".popover-title .close",function(b){b.preventDefault();var a=$(this).closest(".popover");a.popover("hide");a.data("bs.popover").inState.click=false;});$(document).ready(function(){if(isLoggedIn){addSessionRefreshTimer();}$("#session-timeout-modal").on("show.bs.modal",function(b){var a=$(this);
a.find(".modal-footer #session-refresh-btn").off().on("click",function(c){c.preventDefault();addSessionRefreshTimer();a.modal("hide");$.get(sessionRefreshURL);});});$("a.multi-link").on("click",function(d){d.preventDefault();var b=document.location.hostname;var a=b.indexOf("-")==-1?"en":b.slice(0,b.indexOf("-"));
var c=$(this).data("lang");if(c!=a){$("#lang").val(c);$("#header-language-form").submit();}});$("a.multi-lang-link").on("click",function(d){d.preventDefault();var b=document.location.hostname;var a=b.indexOf("-")==-1?"en":b.slice(0,b.indexOf("-"));var c=$(this).data("lang");if(c!=a){$("#lang").val(c);
$("#header-language-form").submit();}});});