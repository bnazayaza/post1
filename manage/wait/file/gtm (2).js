
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"570",
  
  "macros":[{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_stripWww":false,
      "vtp_varType":"URL",
      "vtp_component":"HOST"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",1],8,16],".match(\/[^.]*\\.[^.]{2,3}(?:\\.[^.]{2,3})?$\/)[0]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return-1!==",["escape",["macro",0],8,16],".indexOf(",["escape",["macro",2],8,16],")?!0:!1})();"]
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__dbg"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"customerID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var f=16,g=[{rewrite:!1,name:\"key_word\",kwRegex:\/keyword\/gi,pageRegex:\/informeddelivery.usps.com\\\/box\\\/pages\\\/secure\\\/dashboardaction_input.*[\u0026\\?]keyword=\/gi,pageRegexString:\"informeddelivery.usps.com\/box\/pages\/secure\/dashboardaction_input.*[\\x26?]keyword\\x3d\"}];(new RegExp(g[0].pageRegexString,\"i\")).test(location.href)\u0026\u0026(g[0].rewrite=!0);var d=[{rewrite:!1,name:\"\/ACCOUNTNUM\",acctNum:\"\/0123456789\",regexPath:\/(.*\\\/paymod.*\\\/account)(\\\/[0-9]{10})(.*)\/gi,regexPathString:\"(.*\/paymod.*\/account)(\/[0-9]{10})(.*)\"}];\nif((new RegExp(d[0].regexPathString,\"i\")).test(location.href)){d[0].rewrite=!0;var p=d[0].regexPath.exec(location.href);d[0].acctNum=p[2]}var l=[{name:\"EMAIL\",regex:\/((email)|(n_m))(ams)?=[^\u0026\\\/\\?]+\/gi},{name:\"PHONE\",regex:\/((tel(ephone)?)|(phone(number)?)|(mob(ile)?))(ams)?=[^\u0026\\\/\\?]+\/gi},{name:\"NAME\",regex:\/((f(irst)?|l(ast)?)name)(ams)?=[^\u0026\\\/\\?]+\/gi},{name:\"PASSWORD\",regex:\/(passw(or)?d)(ams)?=[^\u0026\\\/\\?]+\/gi},{name:\"ADDRESS\",regex:\/((addr(ess)?(1|2)?)|(locationname)|(street(name)?)|(apt)|(city)|(state)|(province))(ams)?=[^\u0026\\\/\\?]+\/gi},\n{name:\"ZIP4\",regex:\/(zip4)(ams)?=[^\u0026\\\/\\?]+\/gi},{name:\"ZIP+4\",regex:\/((zip(code)?)|(post(al)?code))(ams)?=(([0-9]{5}\\-[0-9]{4})|([0-9]{9}))\/gi},{name:\"OTHER\",regex:\/(fax)(ams)?=[^\u0026\\\/\\?]+\/gi}],m=\"_ga_originalSendHitTask\";return function(b){window[m]=window[m]||b.get(\"sendHitTask\");\"number\"===typeof f\u0026\u0026b.set(\"dimension\"+f,b.get(\"clientId\"));b.set(\"sendHitTask\",function(b){var f=b,n=window[m],e;try{if(\"undefined\"!==typeof l\u0026\u0026l.length){var h=b.get(\"hitPayload\").split(\"\\x26\");for(e=0;e\u003Ch.length;e++){var k=\nh[e].split(\"\\x3d\");try{var c=decodeURIComponent(decodeURIComponent(k[1]))}catch(a){c=decodeURIComponent(k[1])}l.forEach(function(a){c=c.replace(a.regex,\"[REDACTED \"+a.name+\"]\")});!0===g[0].rewrite\u0026\u0026g.forEach(function(a){c=c.replace(a.kwRegex,a.name)});!0===d[0].rewrite\u0026\u0026d.forEach(function(a){c=c.replace(a.acctNum,a.name)});k[1]=encodeURIComponent(c);h[e]=k.join(\"\\x3d\")}b.set(\"hitPayload\",h.join(\"\\x26\"),!0)}n(b)}catch(a){n(f)}})}})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_campaign",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"key",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=[\"id11waycta2018\"],a;\"informeddelivery.usps.com\"==",["escape",["macro",1],8,16],"\u0026\u0026b.includes(",["escape",["macro",10],8,16],")\u0026\u0026",["escape",["macro",11],8,16],"\u0026\u0026(a=",["escape",["macro",11],8,16],".toLowerCase());return a})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_source",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=[\"id11waycta2018\"],a;\"informeddelivery.usps.com\"==",["escape",["macro",1],8,16],"\u0026\u0026b.includes(",["escape",["macro",10],8,16],")\u0026\u0026",["escape",["macro",13],8,16],"\u0026\u0026(a=",["escape",["macro",13],8,16],");return a})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_medium",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=[\"id11waycta2018\"],a;\"informeddelivery.usps.com\"==",["escape",["macro",1],8,16],"\u0026\u0026b.includes(",["escape",["macro",10],8,16],")\u0026\u0026",["escape",["macro",15],8,16],"\u0026\u0026(a=",["escape",["macro",15],8,16],");return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=[\"id11waycta2018\"],a;\"informeddelivery.usps.com\"==",["escape",["macro",1],8,16],"\u0026\u0026b.includes(",["escape",["macro",10],8,16],")\u0026\u0026",["escape",["macro",10],8,16],"\u0026\u0026(a=",["escape",["macro",10],8,16],");return a})();"]
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a,b=\"",["escape",["macro",1],7],["escape",["macro",18],7],"\",c=[[\"^es(-.+)?\\\\.usps\\\\.com\",\"Spanish Language\"],[\"^zh(-.+)?\\\\.usps\\\\.com\",\"Chinese Language\"],[\"search\\\\.usps\\\\.com\",\"Search\"],[\"usps\\\\.com\/search(\/welcome|\/results)?\\\\.htm\",\"Search\"],[\"usps\\\\.com\/business\/advertise\\\\-with\\\\-mail\\\\.htm\",\"Advertise with Mail\"],[\"usps\\\\.com\/ship\/custom\\\\-mail\\\\-stamps\\\\.htm\",\"Advertise with Mail\"],[\"usps\\\\.com\/smallbusiness\/\",\"Advertise with Mail\"],[\"usps\\\\.com\/business\/vendors\\\\.htm\",\"Advertise with Mail\"],\n[\"uspsdelivers\\\\.com\",\"USPS Delivers\"],[\"uspssupport\\\\.com\",\"USPS Support\"],[\"postalpro\\\\.usps\\\\.com\",\"Postal Pro\"],[\"pfsr\\\\.usps\\\\.com\",\"Premium Forwarding Service\"],[\"store\\\\.usps\\\\.com\/pfs\",\"Premium Forwarding Service\"],[\"dm\\\\.taradel\\\\.com\",\"Taradel\"],[\"usps\\\\.com\/postalone\/\",\"Postal One\"],[\"store\\\\.usps\\\\.com\",\"Postal Store\"],[\"ecom\\\\-prod\\\\.usps\\\\.com\",\"Postal Store\"],[\"tools\\\\.usps\\\\.com\/go\/POLocator\",\"PO Locator\"],[\"tools\\\\.usps\\\\.com\/find\\\\-location\",\"PO Locator\"],[\"tools\\\\.usps\\\\.com\/money\\\\-orders\\\\.htm\",\n\"Money Orders\"],[\"uspscybersafe\\\\.com\",\"Cyber Safe\"],[\"imresearchcenter\\\\.com\",\"OIG\"],[\"ips\\\\.usps\\\\.com\",\"IVS\"],[\"fast\\\\.usps\\\\.com\",\"FAST\"],[\"passportscheduler\\\\.usps\\\\.com\",\"Passport Scheduler\"],[\"tools\\\\.usps\\\\.com\/go\/pages\/schedule\\\\-appointment\",\"Passport Scheduler\"],[\"tools\\\\.usps\\\\.com\/rcas.*\\\\.htm\",\"Passport Scheduler\"],[\"scheduler\\\\.usps\\\\.com\",\"Passport Scheduler\"],[\"usps\\\\.com\/scheduler\",\"Passport Scheduler\"],[\"tools\\\\.usps\\\\.com\/(schedule-pickup-steps|modify-order|order-modified|order-scheduled|order-history|order-cancelled)\\\\.htm\",\n\"Schedule a Pickup\"],[\"tools\\\\.usps\\\\.com\/go\/Track\",\"USPS Tracking\"],[\"tools\\\\.usps\\\\.com\/go\/Zip\",\"Zip Code Lookup\"],[\"tools\\\\.usps\\\\.com\/zip\",\"Zip Code Lookup\"],[\"www\\\\.usps\\\\.com\/holiday\",\"USPS Holiday\"],[\"sendcheer\\\\.com\",\"USPS Holiday\"],[\"uspscalendar\\\\.com\",\"USPS Holiday\"],[\"uspsoperationsanta\\\\.com\",\"Operation Santa\"],[\"www\\\\.delivercheer\\\\.com\",\"Operation Santa\"],[\"elf\\\\.delivercheer\\\\.com\",\"Operation Santa\"],[\"usps\\\\.com\/business\/web-?tools\",\"Web Tools\"],[\"usps\\\\.com\/yourbusiness\",\"Your Business\"],\n[\"about\\\\.usps\\\\.com\",\"About\"],[\"abrm\\\\-prod\\\\.usps\\\\.com\",\"Automated Business Reply Mail\"],[\"bulkservicerefunds\\\\.usps\\\\.com\",\"Bulk Service Refunds\"],[\"clds\\\\.usps\\\\.com\",\"Customer Label Distribution System\"],[\"cns\\\\.usps\\\\.com\",\"Click-N-Ship\"],[\"cfo\\\\.usps\\\\.com\",\"Custom Forms\"],[\"emailus\\\\.usps\\\\.com\/emailUs\/iq\/usps\/request\",\"Email Us\"],[\"usps\\\\.force\\\\.com\/emailus\/s\/\",\"Email Us\"],[\"dbcalc(ea)?\\\\.usps\\\\.com\",\"Rate Calculator\"],[\"ibcalc(ea)?\\\\.usps\\\\.com\",\"Rate Calculator\"],[\"ircalc(ea)?\\\\.usps\\\\.com\",\n\"Rate Calculator\"],[\"postcalc(ea)?\\\\.usps\\\\.com\",\"Rate Calculator\"],[\"eddm\\\\.usps\\\\.com\",\"Every Door Direct Mail\"],[\"usps\\\\.com\/business\/every-door-direct-mail\\\\.htm\",\"Every Door Direct Mail\"],[\"faq\\\\.usps\\\\.com\",\"FAQ\"],[\"usps\\\\.force\\\\.com\",\"FAQ\"],[\"gab\\\\.usps\\\\.com\",\"Global Address Book\"],[\"gateway\\\\.usps\\\\.com\",\"Business Customer Gateway\"],[\"programregistration\\\\.usps\\\\.com\",\"Business Customer Gateway\"],[\"holdmail\\\\.usps\\\\.com\",\"Hold Mail\"],[\"informeddelivery\\\\.usps\\\\.com\",\"Informed Delivery\"],\n[\"informeddelivery\\\\.com\",\"Informed Delivery\"],[\"realmail\\\\.usps\\\\.com\",\"Informed Delivery\"],[\"uspsid\\\\.com\",\"Informed Delivery\"],[\"irresistiblemail\\\\.com\",\"Irresistible Mail\"],[\"usps\\\\-irresistiblemail\\\\-2017\\\\.mrmclient\\\\.com\",\"Irresistible Mail\"],[\"www\\\\.usps\\\\.com\/nextgenaward\/\",\"Irresistible Mail\"],[\"app\\\\.wizehive\\\\.com\/webform\/irresistiblemail\",\"Irresistible Mail\"],[\"lcrs\\\\.usps\\\\.com\",\"Logistics Condition Report System\"],[\"mailtracking\\\\.usps\\\\.com\",\"Mail Tracking\"],[\"mid\\\\.usps\\\\.com\",\"Mailer ID\"],\n[\"usps\\\\.com\/help\/missing-mail\",\"Missing Mail\"],[\"missingmail\\\\.usps\\\\.com\",\"Missing Mail\"],[\"my\\\\.usps\\\\.com\",\"My USPS\"],[\"usps\\\\.com\/manage\/myusps\\\\.htm\",\"My USPS\"],[\"onlineclaims\\\\.usps\\\\.com\",\"Online Claims\"],[\"internationalclaims\\\\.usps\\\\.com\",\"Online Claims\"],[\"moversguide\\\\.usps\\\\.com\",\"Movers Guide\"],[\"pay\\\\.usps\\\\.com\",\"Payment\"],[\"pe\\\\.usps\\\\.com\",\"Postal Explorer\"],[\"pe\\\\.usps\\\\.gov\",\"Postal Explorer\"],[\"poboxes\\\\.usps\\\\.com\",\"PO Boxes Online\"],[\"usps\\\\.com\/manage\/po-boxes\\\\.htm\",\"PO Boxes Online\"],\n[\"postservices\\\\.usps\\\\.com\",\"Post Services\"],[\"postservicessm\\\\.usps\\\\.com\",\"Post Services\"],[\"postalpro\\\\.usps\\\\.com\",\"PostalPro\"],[\"prodpx\\\\-promotool\\\\.usps\\\\.com\",\"Promo Registration\"],[\"redelivery\\\\.usps\\\\.com\",\"Redelivery\"],[\"reg\\\\.usps\\\\.com\",\"Customer Registration\"],[\"retail\\\\-pi\\\\.usps\\\\.com\",\"Package Intercept Retail\"],[\"usps\\\\.com\/manage\/package-intercept\\\\.htm\",\"Package Intercept Retail\"],[\"caps\\\\.usps\\\\.gov\",\"Centralized Account Processing System\"],[\"webpmt\\\\.usps\\\\.gov\",\"Postmaster Finder\"],\n[\"www\\\\.uspspostalone\\\\.com\",\"Postal One\"],[\"www\\\\.usps\\\\.com\",\"USPS Static\"],[\"emailus\\\\.usps\\\\.com\",\"FAQ\"],[\"m\\\\.usps\\\\.com\",\"Mobile Site\"],[\"mobile\\\\.usps\\\\.com\",\"Mobile Site\"],[\"ourseason\\\\.com\",\"Holiday Mobile 2015\"],[\"nuestratemporada\\\\.com\",\"MRM Mobile Holiday ES\"],[\"uspsblog\\\\.com\",\"USPS Blog\"],[\"about\\\\.usps\\\\.com\",\"About\"],[\"uspsdelivers\\\\.com\",\"USPS Delivers\"],[\"pe\\\\.usps\\\\.gov\",\"Postal Explorer\"],[\"servicerefunds\\\\.usps\\\\.com\",\"Service Refunds\"],[\"deliveringinnovation\\\\.com\",\"Delivering Innovation\"],\n[\"uprt\\\\.usps\\\\.com\",\"Universal Refund Tool\"],[\"n\\\\-usps\\\\.com\",\"Fakesite\"],[\"usps\\\\-m\\\\.com\",\"Fakesite\"],[\"www\\\\.deliverthewin\\\\.com\",\"Deliver The Win\"],[\"printerdirectory\\\\.usps\\\\.com\",\"Mail Service Provider Directory\"]];\"undefined\"==typeof b\u0026\u0026(b=\"\");for(a=0;a\u003Cc.length;a++)if((new RegExp(c[a][0],\"i\")).test(b))return c[a][1];return\"No Virtual Site Name Found\"})();"]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",21],8,16],".length?\"\\x26\"+",["escape",["macro",21],8,16],":\"\";a=a.length?\"?\"+a.replace(\/\u0026[^\u0026@]+@[^\u0026]+\/g,\"\").substring(1):\"\";return 1\u003E=a.length?\"\":a})();"]
    },{
      "function":"__cid"
    },{
      "function":"__ctv"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date,c=-a.getTimezoneOffset(),d=0\u003C=c?\"+\":\"-\",b=function(a){a=Math.abs(Math.floor(a));return(10\u003Ea?\"0\":\"\")+a};return a.getFullYear()+\"-\"+b(a.getMonth()+1)+\"-\"+b(a.getDate())+\"T\"+b(a.getHours())+\":\"+b(a.getMinutes())+\":\"+b(a.getSeconds())+\".\"+b(a.getMilliseconds())+d+b(c\/60)+\":\"+b(c%60)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",18],8,16],".match(\/\\\/m\\\/\/ig)?\"Mobile\":\"Desktop\"})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_defaultValue":"false",
      "vtp_map":["list",["map","key","tools.usps.com","value","true"],["map","key","reg.usps.com","value","true"],["map","key","my.usps.com","value","true"],["map","key","informeddelivery.usps.com","value","true"],["map","key","moversguide.usps.com","value","true"],["map","key","pe.usps.gov","value","true"],["map","key","postalpro.usps.com","value","true"],["map","key","missingmail.usps.com","value","true"],["map","key","www.usps.com","value","true"],["map","key","about.usps.com","value","true"],["map","key","store.usps.com","value","true"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",18],8,16],".match(\/\\\/m\\\/\/ig)?\"Mobile\":\"Desktop\",b=",["escape",["macro",27],8,16],";if(\"Desktop\"===a\u0026\u0026\"true\"===b)return a=window.innerWidth,958\u003E=a?\"desktop page - in responsive mode\":\"desktop page - in desktop mode\";if(\"Mobile\"===a)return\"mobile page - is not responsive\";if(\"false\"===b)return\"desktop page - is not responsive\"})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function b(a,c){return a\u0026\u0026a.parentNode\u0026\u0026a.parentNode.querySelector?a.parentNode.querySelector(c)===a?a:b(a.parentNode,c):null}return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",29],8,16],",c=",["escape",["macro",30],8,16],",b=",["escape",["macro",31],8,16],",d=b(a,\"#global-menu\"),e=b(a,\"#search--display\"),f=b(a,\".homepage-blades\"),g=b(a,\".bot-promos\"),h=b(a,\".mobile-panels\");if(d){if(-1\u003Cc.search(\"Open\/Close Menu\"))return\"Open\/Close Menu\"}else if(e){if(c=b(a,\".empty-search\"),a=a.nodeName,\"A\"===a\u0026\u0026c)return\"Top Searches\"}else if(f){if(c){d=a.nodeName;if(\"Close\"===c)return\"Expand Link\";if(\"Expand\"===c)return\"Close Link\";if(\"A\"!=d)if(c=b(a,\".col_content\")){a=c.parentNode;\nif(c=a.className)return\"active\"===c?\"Close Blade\":\"Expand Blade\";if(a)return\"Expand Blade\"}else{if(\"LI\"===d){if(c=a.className)return\"active\"===c?\"Close Blade\":\"Expand Blade\";if(a)return\"Expand Blade\"}}else if(\"A\"===d)return c}}else if(g)if(c){d=b(a,\".firstImage\");b=b(a,\".secondImage\");if(\"A\"===a.nodeName\u0026\u0026d)return d.querySelector(\"h2\"),c+\" | Left\";if(\"A\"===a.nodeName\u0026\u0026b)return b.querySelector(\"h2\"),c+\" | Right\"}else{d=b(a,\".firstImage\");b=b(a,\".secondImage\");if(\"A\"===a.nodeName|\"IMG\"===a.nodeName\u0026\u0026\nd)return d.querySelector(\"h2\"),\"Image | Left\";if(\"A\"===a.nodeName|\"IMG\"===a.nodeName\u0026\u0026b)return b.querySelector(\"h2\"),\"Image | Right\"}else if(h\u0026\u0026c){e=b(a,\".section--show-hide.active\");b=b(a,\".section--show-hide\");d=a.nodeName;if(\"A\"===d)return c;if(e)return\"Close Blade\";if(b)return\"Expand Blade\"}})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"loginStatus"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"accountType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"accountStartDate"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"customerTransactions"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"customerLTV"
    },{
      "function":"__d",
      "vtp_elementSelector":"h1",
      "vtp_selectorType":"CSS"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",39],
      "vtp_name":"pageName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageCategoryNavId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageCategoryId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.newHistoryState.data"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",43],8,16],";return a?a:",["escape",["macro",21],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",44],8,16],";return\"\/zip-code-lookup.htm\"===",["escape",["macro",18],8,16],"?\"\/vpv\/zip-code-lookup\/\"+a:\"\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",45],
      "vtp_name":"virtualPageName"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return-1===document.cookie.indexOf(\"EntReg\")?!1:!0})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",49],
      "vtp_name":"sectionFormURL"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a,b=\"",["escape",["macro",50],7],"\",c=[[\"cns.usps.com\/?$\",\"Form - CNS Label Information\"],[\"cns.usps.com\/labelInformation\",\"Form - CNS Label Information\"],[\"cns.usps.com\/cfo-web\/?$\",\"Form - CNS Label Information - CFO Web\"],[\"cns.usps.com\/cfo-web\/labelInformation\",\"Form - CNS Label Information - CFO Web\"],[\"cns.usps.com\/preferences.shtml\",\"Form - CNS Preferences\"],[\"cns.usps.com\/customs\",\"Form - CNS Customs Information\"],[\"reg.usps.com\/entreg\/RegistrationAction\",\"Form - Customer Registration\"],\n[\"reg.usps.com\/entreg\/RegistrationBusinessAction\",\"Form - Customer Registration - Business\"],[\"reg.usps.com\/entreg\/LoginAction\",\"Form - Customer Login\"],[\"reg.usps.com\/entreg\/LoginAppAction\",\"Form - Customer Login - App\"],[\"reg.usps.com\/entreg\/secure\/SmsVerifyAction\",\"Form - Customer SMS Verify\"],[\"reg.usps.com\/entreg\/secure\/CoaValidationCodeAction\",\"Form - Customer COA Validate\"],[\"reg.usps.com\/entreg\/secure\/(Edit|Manage)Profile\",\"Form - Customer Profile\"],[\"reg.usps.com\/entreg\/secure\/PreferencesSummaryAction\",\n\"Form - Customer Preferences\"],[\"reg.usps.com\/entreg\/ForgotPassword\",\"Form - Customer Forgot Password\"],[\"reg.usps.com\/entreg\/secure\/ChangePasswordAction\",\"Form - Customer Change Password\"],[\"reg.usps.com\/entreg\/secure\/(Crid|Mid).*(Req|Lookup)\",\"Form - Customer CRID or MID Actions\"],[\"www.usps.com\/search\/results.htm\",\"Form - Search\"],[\"No Form Target Detected\",\"Form - No Form Target Detected\"]];\"undefined\"==typeof b\u0026\u0026(b=\"\");for(a=0;a\u003Cc.length;a++)if((new RegExp(c[a][0],\"i\")).test(b))return c[a][1];\nreturn\"Form - No Form Target Category\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"accountZip"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"no data-gtm-section",
      "vtp_name":"gtm.element.dataset.gtmSection"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"no data-gtm-subsection",
      "vtp_name":"gtm.element.dataset.gtmSubsection"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",29],8,16],".getElementsByTagName(\"a\")[0].dataset.gtmLabel;return a?a:\"no data-gtm-label of first link element\"})();"]
    },{
      "function":"__c",
      "vtp_value":"10"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return-1===document.cookie.indexOf(\"tmab_usps\")?!1:!0})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"tmab_usps"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",56],8,16],",a=\"cookie not set\";",["escape",["macro",57],8,16],"\u0026\u0026(a=",["escape",["macro",58],8,16],",a=parseInt(a)\u003C=parseInt(b)?\"true\":\"false\");return a})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",7],
      "vtp_map":["list",["map","key","false","value","UA-80133954-3"],["map","key","true","value","UA-80133954-1"]]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":["macro",7],
      "vtp_fieldsToSet":["list",["map","fieldName","cookieExpires","value","2592000"],["map","fieldName","userId","value",["macro",8]],["map","fieldName","allowLinker","value","true"],["map","fieldName","customTask","value",["macro",9]],["map","fieldName","campaignContent","value",["macro",12]],["map","fieldName","campaignSource","value",["macro",14]],["map","fieldName","campaignMedium","value",["macro",16]],["map","fieldName","campaignName","value",["macro",17]]],
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",19]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",20]],["map","index","2","dimension",["macro",22]],["map","index","4","dimension",["macro",19]],["map","index","5","dimension",["template",["macro",23]," | ",["macro",24]]],["map","index","6","dimension",["macro",25]],["map","index","9","dimension",["macro",26]],["map","index","10","dimension",["macro",28]],["map","index","11","dimension",["macro",32]],["map","index","12","dimension",["macro",33]],["map","index","107","dimension",["macro",34]],["map","index","108","dimension",["macro",35]],["map","index","109","dimension",["macro",8]],["map","index","110","dimension",["macro",36]],["map","index","111","dimension",["macro",37]],["map","index","112","dimension",["macro",38]],["map","index","113","dimension",["macro",40]],["map","index","117","dimension",["macro",41]],["map","index","118","dimension",["macro",42]],["map","index","17","dimension",["macro",34]],["map","index","18","dimension",["macro",35]],["map","index","19","dimension",["macro",8]],["map","index","20","dimension",["macro",36]],["map","index","21","dimension",["macro",46]],["map","index","22","dimension",["macro",47]],["map","index","23","dimension",["macro",48]],["map","index","13","dimension",["macro",50]],["map","index","14","dimension",["macro",51]],["map","index","15","dimension",["macro",52]],["map","index","114","dimension",["macro",53]],["map","index","115","dimension",["macro",54]],["map","index","116","dimension",["macro",55]],["map","index","30","dimension",["macro",59]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",60],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",29],8,16],";if(a.innerText){elText=a.innerText;fixedElText=elText.replace(\/\\n|\\r\/g,\" \");if(1\u003Ca.childNodes.length){fixedElText=\"\";for(i=0;i\u003Ca.childNodes.length;i++){var b=a.childNodes[i];\"#text\"===b.nodeName\u0026\u0026(fixedElText=fixedElText+\" \"+b.nodeValue.trim());\"SPAN\"===b.nodeName\u0026\u0026(fixedElText=fixedElText+\" \"+b.innerText.trim());\"DIV\"===b.nodeName\u0026\u0026(fixedElText=fixedElText+\" \"+b.innerText.trim());\"A\"===b.nodeName\u0026\u0026(fixedElText=fixedElText+\" \"+b.innerText.trim())}fixedElText=\nfixedElText.replace(\/\\(\\s+\/g,\"(\");fixedElText=fixedElText.replace(\/\\s+\\)\/g,\")\")}return fixedElText.trim()}if(\"IMG\"===a.nodeName){if(a.alt)return altText=a.alt;b=a.parentNode;if(\"A\"===b.nodeName){if(b.title)return titleText=b.title;if(a.href)return hrefText=a.href}}else if(\"A\"===a.nodeName)if(0\u003Ca.children.length){var d=0;for(i=1;i\u003C=a.children.length;i++){var c=a.children[d];if(\"IMG\"===c.nodeName){if(c.alt)return altText=c.alt;if(b.title)return titleText=b.title;if(a.href)return hrefText=a.href}d++}}else{if(a.title)return titleText=\na.title;if(a.href)return hrefText=a.href}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var b=ga.getAll(),c;var a=0;for(c=b.length;a\u003Cc;a+=1)if(b[a].get(\"trackingId\")===",["escape",["macro",60],8,16],")return b[a].get(\"clientId\")}catch(d){}return\"false\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(new Date).getTime()+\".\"+Math.random().toString(36).substring(5)})();"]
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__r"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a,b=\"",["escape",["macro",1],7],["escape",["macro",18],7],"\",c=[[\"search\\\\.usps\\\\.com\",\"Data layer not on page\"],[\"usps\\\\.com\/search\\\\.htm\",\"Data layer not on page\"],[\"usps\\\\.com\/business\/advertise\\\\-with\\\\-mail\\\\.htm\",\"Data layer not on page\"],[\"usps\\\\.com\/ship\/custom\\\\-mail\\\\-stamps\\\\.htm\",\"Data layer not on page\"],[\"uspsdelivers\\\\.com\",\"Data layer not on page\"],[\"uspssupport\\\\.com\",\"Data layer not on page\"],[\"cfo\\\\.usps\\\\.com\",\"Data layer on page\"],[\"pfs\\\\.usps\\\\.com\",\"Data layer not on page\"],\n[\"store\\\\.usps\\\\.com\/pfs\",\"Data layer not on page\"],[\"usps\\\\.com\/manage\/forward\\\\.htm\",\"Data layer not on page\"],[\"usps\\\\.com\/postalone\/\",\"Data layer not on page\"],[\"store\\\\.usps\\\\.com\",\"Data layer on page\"],[\"ecom\\\\-sit\\\\.usps\\\\.com\",\"Data layer on page\"],[\"ecom\\\\-cat\\\\.usps\\\\.com\",\"Data layer on page\"],[\"ecom\\\\-prod\\\\.usps\\\\.com\",\"Data layer on page\"],[\"tools\\\\.usps\\\\.com\/go\/POLocator\",\"Data layer not on page\"],[\"uspscybersafe\\\\.com\",\"Data layer not on page\"],[\"imresearchcenter\\\\.com\",\"Data layer not on page\"],\n[\"tools\\\\.usps\\\\.com\/go\/Schedule\",\"Data layer not on page\"],[\"tools\\\\.usps\\\\.com\/go\/Track\",\"Data layer on page\"],[\"tools\\\\.usps\\\\.com\/go\/ZipLookup\",\"Data layer not on page\"],[\"www\\\\.usps\\\\.com\/holiday\",\"Data layer not on page\"],[\"sendcheer\\\\.com\",\"Data layer not on page\"],[\"www\\\\.delivercheer\\\\.com\",\"Data layer not on page\"],[\"usps\\\\.com\/business\/web-?tools\",\"Data layer not on page\"],[\"usps\\\\.com\/yourbusiness\",\"Data layer not on page\"],[\"about\\\\.usps\\\\.com\",\"Data layer not on page\"],[\"abrm\\\\-prod\\\\.usps\\\\.com\",\n\"Data layer not on page\"],[\"clds\\\\.usps\\\\.com\",\"Data layer not on page\"],[\"cns\\\\.usps\\\\.com\",\"Data layer on page\"],[\"dbcalc(ea)?\\\\.usps\\\\.com\",\"Data layer not on page\"],[\"ibcalc(ea)?\\\\.usps\\\\.com\",\"Data layer not on page\"],[\"ircalc(ea)?\\\\.usps\\\\.com\",\"Data layer not on page\"],[\"postcalc(ea)?\\\\.usps\\\\.com\",\"Data layer not on page\"],[\"eddm\\\\.usps\\\\.com\",\"Data layer not on page\"],[\"usps\\\\.com\/business\/every-door-direct-mail\\\\.htm\",\"Data layer not on page\"],[\"faq\\\\.usps\\\\.com\",\"Data layer not on page\"],\n[\"gab\\\\.usps\\\\.com\",\"Data layer not on page\"],[\"gateway\\\\.usps\\\\.com\",\"Data layer not on page\"],[\"programregistration\\\\.usps\\\\.com\",\"Data layer not on page\"],[\"holdmail\\\\.usps\\\\.com\",\"Data layer not on page\"],[\"informeddelivery\\\\.usps\\\\.com\",\"Data layer not on page\"],[\"informeddelivery\\\\.com\",\"Data layer not on page\"],[\"realmail\\\\.usps\\\\.com\",\"Data layer not on page\"],[\"irresistiblemail\\\\.com\",\"Data layer not on page\"],[\"lcrs\\\\.usps\\\\.com\",\"Data layer not on page\"],[\"mailtracking\\\\.usps\\\\.com\",\"Data layer not on page\"],\n[\"mid\\\\.usps\\\\.com\",\"Data layer not on page\"],[\"usps\\\\.com\/help\/missing-mail\",\"Data layer not on page\"],[\"missingmail\\\\.usps\\\\.com\",\"Data layer not on page\"],[\"moversguide\\\\.usps\\\\.com\",\"Data layer not on page\"],[\"my\\\\.usps\\\\.com\",\"Data layer not on page\"],[\"usps\\\\.com\/manage\/myusps\\\\.htm\",\"Data layer not on page\"],[\"onlineclaims\\\\.usps\\\\.com\",\"Data layer not on page\"],[\"pay\\\\.usps\\\\.com\",\"Data layer not on page\"],[\"pe\\\\.usps\\\\.com\",\"Data layer not on page\"],[\"pe\\\\.usps\\\\.gov\",\"Data layer not on page\"],\n[\"poboxes\\\\.usps\\\\.com\",\"Data layer not on page\"],[\"usps\\\\.com\/manage\/po-boxes\\\\.htm\",\"Data layer not on page\"],[\"postservices\\\\.usps\\\\.com\",\"Data layer not on page\"],[\"postservicessm\\\\.usps\\\\.com\",\"Data layer not on page\"],[\"prodpx\\\\-promotool\\\\.usps\\\\.com\",\"Data layer not on page\"],[\"redelivery\\\\.usps\\\\.com\",\"Data layer not on page\"],[\"reg\\\\.usps\\\\.com\",\"Data layer not on page\"],[\"retail\\\\-pi\\\\.usps\\\\.com\",\"Data layer not on page\"],[\"usps\\\\.com\/manage\/package-intercept\\\\.htm\",\"Data layer not on page\"],\n[\"caps\\\\.usps\\\\.gov\",\"Data layer not on page\"],[\"webpmt\\\\.usps\\\\.gov\",\"Data layer not on page\"],[\"www\\\\.uspspostalone\\\\.com\",\"Data layer not on page\"],[\"www\\\\.usps\\\\.com\",\"Data layer not on page\"],[\"es\\\\.usps\\\\.com\",\"Data layer not on page\"],[\"zh\\\\.usps\\\\.com\",\"Data layer not on page\"],[\"m\\\\.usps\\\\.com\",\"Data layer not on page\"],[\"mobile\\\\.usps\\\\.com\",\"Data layer not on page\"],[\"ourseason\\\\.com\",\"Data layer not on page\"],[\"nuestratemporada\\\\.com\",\"Data layer not on page\"],[\"uspsblog\\\\.com\",\"Data layer not on page\"],\n[\"uspsdelivers\\\\.com\",\"Data layer not on page\"],[\"pe\\\\.usps\\\\.gov\",\"Data layer not on page\"],[\"deliveringinnovation\\\\.com\",\"Data layer not on page\"]];\"undefined\"==typeof b\u0026\u0026(b=\"\");for(a=0;a\u003Cc.length;a++)if((new RegExp(c[a][0],\"i\")).test(b))return c[a][1];return\"Data layer not on page\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products.0.name"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a,b=\"",["escape",["macro",1],7],["escape",["macro",18],7],"\",c=[[\"ircalc(ea)?\\\\.usps\\\\.com\/CountryInformationLookup\\\\.aspx\",\"Country Group Lookup\"],[\"ircalc(ea)?\\\\.usps\\\\.com\/CustomsFormsCalculator\\\\.aspx\",\"Customs Form Indicator\"],[\"ircalc(ea)?\\\\.usps\\\\.com\",\"International Retail Price Calculator\"],[\"dbcalc(ea)?\\\\.usps\\\\.com\",\"Domestic Business Price Calculator\"],[\"ibcalc(ea)?\\\\.usps\\\\.com\",\"International Business Price Calculator\"],[\"postcalc(ea)?\\\\.usps\\\\.com\/Restrictions\\\\.aspx\",\"APO\/FPO\/DPO Restrictions Utility\"],\n[\"postcalc(ea)?\\\\.usps\\\\.com\/ServiceCommitments\\\\.aspx\",\"Service Commitment Lookup Tool\"],[\"postcalc(ea)?\\\\.usps\\\\.com\/ZoneCharts\",\"USPS Postal Zone Charts\"],[\"postcalc(ea)?\\\\.usps\\\\.com\",\"Domestic Retail Price Calculator\"]];if(-1==\/calc(ea)?.usps.com\/i.test(b))return null;\"undefined\"==typeof b\u0026\u0026(b=\"\");for(a=0;a\u003Cc.length;a++)if((new RegExp(c[a][0],\"i\")).test(b))return c[a][1];return\"No Sub Site Found\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"edit_services"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"extra_shipping_service"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"holdmail_dates"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"holdmail_delivery"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"holdmail_lookup"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"holdmail_pickuplocation"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"holdmail_zip"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"interaction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"location"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"non_negotiable_documents"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"package_detail"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pickup_location"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pickup_lookup"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pickup_status"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pickup_zip"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"po_location"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"price_saved_type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"saved_prices_visible"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"section"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"shipping_destination"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"shipping_from"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"shipping_prices"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"shipping_service"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"shipping_shape"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"shipping_to"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"shipping_zone"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"system_error"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productsPurchased"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"paymentMethod"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"shipToZipCode"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dimension120"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.click.actionField.list"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.click.products.0.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.impressions.0.list"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",107],8,16],";return a.impressions})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",108],8,16],";return a=a.length})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.promoClick.promotions.0.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.promoView.promotions.0.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.remove.products.0.name"
    },{
      "function":"__d",
      "vtp_elementId":"pageUtagMetric",
      "vtp_attributeName":"value",
      "vtp_selectorType":"ID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=JSON.parse(",["escape",["macro",113],8,16],");return a=a.product_description||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dimension121"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dimension122"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=null,b=",["escape",["macro",114],8,16],";0===b.indexOf(\"PFS\")?a=\"Premium Forwarding Service\":0===b.indexOf(\"PUOD\")?a=\"Schedule a Pickup\":-1\u003Cb.indexOf(\"Package Intercept\")\u0026\u0026(a=\"Package Intercept Retail\");return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"attributes.eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"attributes.eventLabel"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=",["escape",["macro",29],8,16],".pathname.split(\".\");return 1\u003Ca.length?a.pop().toUpperCase():\"HTML\"}catch(b){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return ",["escape",["macro",29],8,16],".pathname.split(\"\/\").pop()}catch(a){}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"attributes.element"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,b){for(;!a.matches(b)\u0026\u0026!a.matches(\"body\");)a=a.parentElement;return a.matches(b)?a:void 0}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",123],8,16],"(",["escape",["macro",122],8,16],",'div[class^\\x3d\"form-group\"]');return\"undefined\"!==typeof a?a.innerText:\"Tooltip name not found\"})();"]
    },{
      "function":"__d",
      "vtp_elementId":"verification-failure",
      "vtp_selectorType":"ID"
    },{
      "function":"__d",
      "vtp_elementId":"verification-success",
      "vtp_selectorType":"ID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a,b=\"",["escape",["macro",125],7],["escape",["macro",126],7],"\",c=[[\"Sorry\",\"Failure\"],[\"Congratulations\",\"Success\"]];\"undefined\"==typeof b\u0026\u0026(b=\"\");for(a=0;a\u003Cc.length;a++)if((new RegExp(c[a][0],\"i\")).test(b))return c[a][1]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return-1===",["escape",["macro",0],8,16],".indexOf(",["escape",["macro",2],8,16],")?!0:!1})();"]
    },{
      "function":"__j",
      "vtp_name":"document.location.hash"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",129],8,16],",b=a.match(\/(.+)\\?.*\/i);return b?b[1]:a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",129],8,16],";return(a=a.match(\/.+(\\?.*)\/i))?a[1]:null})();"]
    },{
      "function":"__c",
      "vtp_value":"usps.com,delivercheer.com,irresistiblemail.com,uspsdelivers.com,deliveringinnovation.com,uspscalendar.com"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",132],8,16],".split(\",\"),d=",["escape",["macro",2],8,16],",e=[],a;for(a=0;a\u003Cc.length;a++){var b=c[a];b!==d\u0026\u0026-1===b.indexOf(\".\"+d)\u0026\u0026e.push(b)}return e})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",107],8,16],";if(a.impressions){var c={},b;for(b in a)\"impressions\"!==b\u0026\u0026(c[b]=a[b]);a=c}return{ecommerce:a}})();"]
    },{
      "function":"__d",
      "vtp_elementSelector":".no-results-found .no-product strong",
      "vtp_selectorType":"CSS"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",135],8,16],";if(\"null\"!=a)return a;if(a=document.querySelector(\".cartridge-search-instead .no-product p\"))return a=a.children[1].innerText})();"]
    },{
      "function":"__d",
      "vtp_elementSelector":".cartridge-search-suggest .no-product a",
      "vtp_selectorType":"CSS"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",137],8,16],";if(\"null\"!=a)return a;if(a=document.querySelector(\".cartridge-search-instead .no-product p\"))return a=a.children[0].innerText})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",18],8,16],";if(-1\u003Ca.indexOf(\"\/store\/results\"))return a=document.querySelector(\".results-numerical\"),a=a.innerText,a=a.split(\"of \",2)[1]})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"type"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(){var b=window.google_tag_manager[",["escape",["macro",23],8,16],"].dataLayer,a=\"backend_error edit_services extra_shipping_service holdmail_dates holdmail_delivery holdmail_lookup holdmail_pickuplocation holdmail_zip interaction location name non_negotiable_documents package_detail pickup_location pickup_lookup pickup_status pickup_zip po_location price_saved_type product saved_prices_visible section shipping_destination shipping_from shipping_prices shipping_service shipping_shape shipping_to shipping_zone system_error\".split(\" \");\nfor(i=0;i\u003Ca.length;i++)b.set(a[i],void 0)}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"backend_error"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function d(a){var b;if(\"object\"!==typeof a||null===a)return a;if(a instanceof Array){var c=[];for(b=0;b\u003Ca.length;b++)c.push(d(a[b]))}else for(b in c={},a)c[b]=d(a[b]);return c}return d})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",143],8,16],",a=",["escape",["macro",107],8,16],";b=b(a);var c;for(c=0;c\u003Cb.impressions.length;c++)a=b.impressions[c],a.name=a.name||\"Status Not Available\",a.category=a.category||\"Primary status not available \/ Secondary status not available \/ Location not available\";return{ecommerce:b}})();"]
    },{
      "function":"__e"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",145],
      "vtp_map":["list",["map","key","pseStartChooseEnvelope","value","\/store\/pse\/step-1-choose-envelope"],["map","key","pseNextChooseStamp","value","\/store\/pse\/step-2-choose-stamp"],["map","key","pseNextReturnAddress","value","\/store\/pse\/step-3-return-address"],["map","key","pseNextReviewTerms","value","\/store\/pse\/step-4-review-terms"],["map","key","pseAgree","value","\/store\/pse\/step-5-agree"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"searchTerm"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.detail.products.0.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.checkout.actionField.step"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",29],8,16],",b=",["escape",["macro",31],8,16],",c=b(a,\"#utility-bar\"),d=b(a,\".logo--link\"),e=b(a,\".site-nav\"),f=b(a,\".quick-tools\"),g=b(a,\".global-footer\"),h=b(a,\".global-header\"),k=b(a,\".site-header\"),l=b(a,\".menu-items\"),m=b(a,\".menu-footer\");a=b(a,\".track-from-menu\");return c?\"Header Nav\":d?\"Main Nav\":e?\"Main Nav\":f?\"Quick Tools\":g?\"Footer Nav\":h?\"Header Nav\":k?\"Mobile Header Nav\":l||m||a?\"Mobile Main Nav\":\"other element\"})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",0],
      "vtp_map":["list",["map","key","www.facebook.com","value","Facebook"],["map","key","twitter.com","value","Twitter"],["map","key","www.pinterest.com","value","Pinterest"],["map","key","www.youtube.com","value","YouTube"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",29],8,16],",b=",["escape",["macro",30],8,16],",c=",["escape",["macro",31],8,16],",d=c(a,\"#utility-bar\"),e=c(a,\".logo--link\"),f=c(a,\".site-nav\"),g=c(a,\".quick-tools\"),h=c(a,\".global-footer\"),k=c(a,\".global-header\"),l=c(a,\".site-header\"),m=c(a,\".menu-items\"),n=c(a,\".menu-footer\"),p=c(a,\".track-from-menu\");if(d)return b?b:\"no text\";if(f)return a=c(a,\".usps-logo\"),-1\u003Cb.search(\"Open\/Close Menu\")?b=b.replace(\"Open\/Close Menu\",\"\"):-1\u003Cb.search(\"Hi,\")?b.substring(0,3):b?b:a?\"Logo\":\"no text\";if(e)return b=\na.nodeName,\"IMG\"===b?\"Logo\":\"no text\";if(g)return a=c(a,\".shortcuts-close\"),b?b:a?\"Close Quick Tools\":\"no text\";if(h)return d=a.className,(a=c(a,\".global-footer--social\"))?",["escape",["macro",151],8,16],":\"global-footer--logo-link\"===d?\"Logo\":b?b:\"no text\";if(k)return c=a.parentElement,c=c.className,a=a.className,\"mobile-header usps_logo\"===c?\"Logo\":\"mobile-header mobile-menu-trigger active\"===c?\"Open Hamburger Menu\":\"mobile-header mobile-menu-trigger\"===c?\"Close Hamburger Menu\":\"mobile-header search-trigger active\"===\nc?\"Open Search\":\"mobile-header search-trigger\"===c?\"Close Search\":\"menu--toggle\"===a\u0026\u0026\"MENU-\"===b?\"Open or Close Hamburger Menu\":b?b:\"catch-all\";if(l){a=a.className;if(\"logo icon-logo-beak\"===a)return\"Logo\";if(\"link-menu icon-hamburger\"===a)return\"Open Hamburger Menu\"}else return m||n?b:p?\"Tracking Form\":b?b:\"catch-all\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",29],8,16],",b=",["escape",["macro",31],8,16],";return(a=b(a,\"#relatedSection\"))?\"Sticky Nav\":\"other element\"})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",154],
      "vtp_map":["list",["map","key","zone-select","value","Enter your average ground package zone"],["map","key","packageWeightInput","value","Enter average package weight"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",67],
      "vtp_map":["list",["map","key","onoffswitch-switch","value","On-Off Toggle"],["map","key","customForm-input-text float-right medium-width valid","value","Average Estimated Weekly Volume"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"attribute.category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"attribute.action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"attribute.options"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",159],8,16],",c=0,a=0;a\u003Cb.length;a++)c+=b[a].text;return 0\u003Cc?1:0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",159],8,16],",c=0,a=0;a\u003Cb.length;a++)c+=b[a].email;return 0\u003Cc?1:0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",159],8,16],",c=0,a=0;a\u003Cb.length;a++)if(\"All Below Updates\"==b[a].option)return 0\u003Cc+b[a].text+b[a].email?1:0;return 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",159],8,16],",c=0,a=0;a\u003Cb.length;a++)if(\"Expected Delivery Updates\"==b[a].option)return 0\u003Cc+b[a].text+b[a].email?1:0;return 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",159],8,16],",c=0,a=0;a\u003Cb.length;a++)if(\"Day of Delivery Updates\"==b[a].option)return 0\u003Cc+b[a].text+b[a].email?1:0;return 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",159],8,16],",c=0,a=0;a\u003Cb.length;a++)if(\"Package Delivered\"==b[a].option)return 1==b[a].text\u0026\u0026(c+=1),1==b[a].email\u0026\u0026(c+=1),0\u003Cc?1:0;return 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",159],8,16],",c=0,a=0;a\u003Cb.length;a++)if(\"Available for Pickup\"==b[a].option)return 1==b[a].text\u0026\u0026(c+=1),1==b[a].email\u0026\u0026(c+=1),0\u003Cc?1:0;return 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",159],8,16],",c=0,a=0;a\u003Cb.length;a++)if(\"Delivery Exception Updates\"==b[a].option)return 0\u003Cc+b[a].text+b[a].email?1:0;return 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",159],8,16],",c=0,a=0;a\u003Cb.length;a++)if(\"Package In-Transit Updates\"==b[a].option)return 0\u003Cc+b[a].text+b[a].email?1:0;return 0})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"attributes.timing"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"attributes.label"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a,b=\"",["escape",["macro",6],7],"\",c=[[\"\/store\/m\/mobile\",\"Buy Stamps\"],[\"\/store\/m\/shipping\",\"Buy Stamps\"],[\"\/m\/POLocatorAction\",\"Locations\"],[\"\/m\/POLocatorDetailsAction\",\"Locations\"],[\"\/m\/ZipLookupAction\",\"ZIP Codes\"],[\"\/m\/TrackConfirmAction\",\"Tracking Tool\"],[\"\/m\/ScheduleAPickupAction\",\"Schedule Pickup\"],[\"\/m\/LookupAPickupAction\",\"Schedule Pickup\"],[\"\/m\/DuplicatePickup\",\"Schedule Pickup\"],[\"\/m\/EditExistingPickupAction\",\"Schedule Pickup\"],[\"\/m\/HoldMail\",\"Hold Mail\"],[\"\/m\/Prices\",\"Prices\"]];\n\"undefined\"==typeof b\u0026\u0026(b=\"\");for(a=0;a\u003Cc.length;a++)if((new RegExp(c[a][0],\"i\")).test(b))return c[a][1];return\"mobile form unknown\"})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"search",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"value"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",30],8,16],"?\"Search\"==",["escape",["macro",30],8,16],"?",["escape",["macro",174],8,16],"?\"Search by \"+",["escape",["macro",174],8,16],":\"Search\":",["escape",["macro",30],8,16],":",["escape",["macro",175],8,16],"?",["escape",["macro",175],8,16],":\"no button text found\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"attribute.label"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",29],8,16],",b=",["escape",["macro",123],8,16],",c=b(a,\"#utility-header\"),d=b(a,\"#global-menu\"),e=b(a,\"#g-navigation\"),f=b(a,\"#search--display\"),g=b(a,\"#shortcuts-menu\"),h=b(a,\".global-footer\"),k=b(a,\".global-navigation\"),l=b(a,\".quicktools-title\"),m=b(a,\".site-header\"),n=b(a,\".menu-items\"),p=b(a,\".menu-footer\"),q=b(a,\".track-from-menu\");a=b(a,\".acsClassicInner\");return c?\"Header Nav\":d?\"Main Nav\":e?\"Main Nav\":f?\"Search\":g?\"Quick Tools\":h?\"Footer Nav\":k?\"Header Nav\":l?\"Quick Tools\":\nm?\"Mobile Header Nav\":n||p||q?\"Mobile Main Nav\":a?\"Foresee\":\"other element\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",29],8,16],",b=",["escape",["macro",31],8,16],",c=b(a,\".store-navigation\"),d=b(a,\".premium-full-page-store-banner\"),e=b(a,\".products-container\"),f=b(a,\".dual-product-spotlight\"),g=b(a,\".single-product-spotlight\"),h=b(a,\"#modal-product-cart\"),k=b(a,\".horizontal-tabs\");a=b(a,\".collectors-links\");return c?\"Postal Store Navigation Bar\":d?\"Premium Banner\":e||f||g||h?\"Content\":k?\"Shop By Category\":a?\"For Collectors\":\"other element\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",29],8,16],",b=",["escape",["macro",30],8,16],",c=",["escape",["macro",31],8,16],",f=c(a,\".store-navigation\"),d=c(a,\".premium-full-page-store-banner\"),g=c(a,\".products-container\"),h=c(a,\".dual-product-spotlight\"),e=c(a,\".single-product-spotlight\"),k=c(a,\"#modal-product-cart\"),l=c(a,\".horizontal-tabs\"),m=c(a,\".collectors-links\");if(f)return b?b:\"no text\";if(d){if(b)return b;a=d.querySelector(\"h1\");return(a=a.innerText)?a+\" - banner\":\"no text\"}if(g){if(b)return b;a=c(a,\".horizontal-record-spotlight-product\");\na=a.querySelector(\"h3\");return(a=a.innerText)?a+\" - photo\":\"no text\"}if(h){if(b)return b;b=c(a,\".product-one-spotlight\");a=c(a,\".product-two-spotlight\");return b?(a=b.querySelector(\"h1\"),a=a.innerText,a+\" - photo\"):a?(a=a.querySelector(\"h1\"),a=a.innerText,a+\" - photo\"):\"no text\"}if(e){if(b)return b;a=e.querySelector(\"h1\");return(a=a.innerText)?a+\" - photo\":\"no text\"}return k?b?b:\"no text\":l?(c=c(a,\".horizontal-tabs-nav\"))\u0026\u0026b?b+\" - tab\":a.firstElementChild?\"IMG\"===a.firstElementChild.nodeName?a.firstElementChild.alt:\na.alt?a.alt:b?b:\"no text\":a.alt?a.alt:b?b:\"no text\":m?b?b:\"no text\":\"no text\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.querySelector(\"div.results-heading-container h3.results-heading\").textContent;return a?a:\"no exact match found\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var c,b=document.getElementsByTagName(\"input\"),d=[],e,f,a=0;a\u003Cb.length;a++)\"checkbox\"==b[a].type\u0026\u00261==b[a].checked\u0026\u0026d.push(b[a].id);(d=d.join(\", \"))\u0026\u0026(c=\"Services: \"+d);for(a=0;a\u003Cb.length;a++)\"radio\"==b[a].type\u0026\u00261==b[a].checked\u0026\u0026\"distance\"==b[a].name\u0026\u0026(e=b[a].value);e\u0026\u0026(c=c?c+\" | Distance: \"+e+\" miles\":\"Distance: \"+e+\" miles\");for(a=0;a\u003Cb.length;a++)\"radio\"==b[a].type\u0026\u00261==b[a].checked\u0026\u0026\"sort\"==b[a].name\u0026\u0026(f=b[a].value);f\u0026\u0026(c=c?c+\" | Sort: \"+f:\"Sort By: \"+f);return c?c:\"No filters were selected when Apply button was clicked\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",29],8,16],";a=a.parentNode;a=a.innerText;var b=a.indexOf(\" (\");-1\u003Cb\u0026\u0026(a=a.split(\" (\"),a=a[0]);return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"psFilterSelect"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"cb_usps"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",185],8,16],"%100+1})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"attributes.videoAction"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"attributes.videoUrl"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",123],8,16],"(",["escape",["macro",29],8,16],",'div[class^\\x3d\"panel-heading\"]');return\"undefined\"!==typeof a?a.innerText:\"Panel heading not found\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",123],8,16],"(",["escape",["macro",29],8,16],",'div[class^\\x3d\"form-group\"]');return\"undefined\"!==typeof a?a.innerText:\"Tooltip name not found\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"attributes.distance"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",30],8,16],",b=\/.*View list of ([0-9]{4}) stamps.*\/;return b.test(a)?b.exec(a)[1]:\"Stamp Year Not Found\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",29],8,16],";return(a=a.parentNode.parentNode.parentNode)?a.id?a.id.substr(11,4):\"Element ID Unknown\":\"No Active Element\"})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",193],
      "vtp_defaultValue":["macro",193],
      "vtp_map":["list",["map","key","Element ID Unknown","value","Stamp Year Unknown"],["map","key","No Active Element","value","Stamp Year Unknown"]]
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",33],8,16],",b=\/.*\\\/store.usps.com\\\/store\\\/product\\\/buy-stamps\\\/([^\/?\u0026]+).*\/i,c=\/.*\\\/store.usps.com\\\/store\\\/browse\\\/.*productDetail.*productId=([^\/?\u0026]+).*\/i;return b.test(a)?b.exec(a)[1]:c.test(a)?c.exec(a)[1]:\"Stamp Not Identified\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.querySelector(\"#store-search\").value;return a})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",33],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*itunes.apple.com.*","value","Apple Store"],["map","key",".*play.google.com.*","value","Google Play"],["map","key",".*microsoft.com.*","value","Microsoft"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"attribute.metric134"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"attribute.metric135"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"attribute.metric136"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"attribute.metric137"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"attribute.metric138"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"attribute.metric139"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"attribute.metric140"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"attribute.metric141"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"attribute.metric142"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"RCAS Page Unknown",
      "vtp_name":"RCASnextPage"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",208],
      "vtp_defaultValue":"Passport Scheduler | No Step Information",
      "vtp_map":["list",["map","key","\/find-available-appointments","value","Passport Scheduler | Step 2: Find Available Appointments"],["map","key","\/find-available-appointments\/by-location\/search","value","Passport Scheduler | Step 2A: Search By Location"],["map","key","\/find-available-appointments\/by-date\/search","value","Passport Scheduler | Step 2B: Search By Date"],["map","key","\/find-available-appointments\/by-location\/results","value","Passport Scheduler | Step 2A: Location Search Results"],["map","key","\/find-available-appointments\/by-date\/results","value","Passport Scheduler | Step 2B: Date Search Results"],["map","key","\/find-available-appointments\/by-location\/selection","value","Passport Scheduler | Step 2A: Office Details for Selected Location"],["map","key","\/find-available-appointments\/by-date\/selection","value","Passport Scheduler | Step 2B: Office Details for Selected Date"],["map","key","\/select-appointment-time","value","Passport Scheduler | Step 3: Select Appointment Time"],["map","key","\/provide-contact-information","value","Passport Scheduler | Step 4: Provide Contact Information"],["map","key","\/review-appointment","value","Passport Scheduler | Step 5: Review Appointment"],["map","key","\/renew-by-mail","value","Passport Scheduler | Renew by Mail"],["map","key","\/manage-appointments","value","Passport Scheduler | Step 2: Manage Appointments"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",29],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"social link name not found",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*facebook.*","value","Facebook"],["map","key",".*twitter.*","value","Twitter"],["map","key",".*pinterest.*","value","Pinterest"],["map","key",".*youtube.*","value","YouTube"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",29],8,16],",a=",["escape",["macro",31],8,16],";if(\"IMG\"===b.firstChild.nodeName){if(b=a(b,\"div\"),b=b.parentElement,a=a(b,\"div\"))return(a=a.parentElement)?(a=a.querySelector(\"a.menuitem\"),a=a.innerText):\"menuheader not found\"}else if(a=a(b,\"div\"))return(a=a.parentElement)?(a=a.querySelector(\"a.menuitem\"),a=a.innerText):\"menuheader not found\";return\"div element not found\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",29],8,16],";if(a=a.children[1])return a=a.innerText})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",29],8,16],",b=",["escape",["macro",31],8,16],";return(a=b(a,\"div\"))?(a=a.parentElement)?(a=a.children[1],a=a.innerText):\"div parent not found\":\"el parent not found\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",29],8,16],",b=a.nodeName;return b?(b=b.toLowerCase(),\"img\"===b?(a=a.nextElementSibling,a=a.innerText):\"p\"===b?a=a.innerText:\"node name not found\"):\"node not found\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",30],8,16],";return a.split(\" \").join(\"-\").toLowerCase()})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*(www|es|zh).usps.com\/root\/global\/server_responses\/error_404.htm.*","value","404 Global Error"],["map","key",".*(www|es|zh).usps.com\/root\/global\/server_responses\/anyapp_outage_apology.htm.*","value","404 App Error"],["map","key",".*reg.usps.com\/entreg\/error404action_input.*","value","404 Reg Error"],["map","key",".*moversguide.usps.com\/mgo(-m)?\/error\/fatal-error.*","value","404 COA Error"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0\u003C",["escape",["macro",20],8,16],".length?",["escape",["macro",20],8,16],":\"No Referrer\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"RCASapplicants"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"Appointment ID Unknown",
      "vtp_name":"RCASappointmentID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"Date Unknown",
      "vtp_name":"RCASappointmentDate"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"Time Unknown",
      "vtp_name":"RCASappointmentTime"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"Selected Service Unknown",
      "vtp_name":"RCASservice"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"Minors Unknown",
      "vtp_name":"RCASminors"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"Text Messages Unknown",
      "vtp_name":"RCAStextMessages"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"Office Name Unknown",
      "vtp_name":"RCASofficeName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"Office ZIP Unknown",
      "vtp_name":"RCASofficeZIP"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"Office ID Unknown",
      "vtp_name":"RCASofficeID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"no data-gtm-label",
      "vtp_name":"gtm.element.dataset.gtmLabel"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "convert_null_to":"no element text",
      "convert_undefined_to":"no element text",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",229],8,16],".querySelector('input[type\\x3d\"submit\"]').value})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",228],8,16],";if(void 0==a||\"no data-gtm-label\"==a)if(a=",["escape",["macro",230],8,16],",\"no element text\"==a)return\"no element text or data-gtm-label\";return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"no application.selectedCheckbox value in data layer",
      "vtp_name":"application.selectedCheckbox"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",232],
      "vtp_defaultValue":"0",
      "vtp_map":["list",["map","key","Yes","value","1"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",232],
      "vtp_defaultValue":"0",
      "vtp_map":["list",["map","key","No","value","1"]]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"no application.userAction value in data layer",
      "vtp_name":"application.userAction"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",235],
      "vtp_defaultValue":"0",
      "vtp_map":["list",["map","key","impression","value","1"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",235],
      "vtp_defaultValue":"0",
      "vtp_map":["list",["map","key","interaction","value","1"]]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"no application.element value in data layer",
      "vtp_name":"application.element"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"no application.confirmationNumber value in data layer",
      "vtp_name":"application.confirmationNumber"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"no application.clickedElement value in data layer",
      "vtp_name":"application.clickedElement"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"no holdmailTransactionType value in data layer",
      "vtp_name":"holdmailTransactionType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"no application.addressType value in data layer",
      "vtp_name":"application.addressType"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",3],
      "vtp_defaultValue":"Outbound Link",
      "vtp_map":["list",["map","key","true","value","Internal Link Click"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",1],8,16],";return\"m.usps.com\"===a?\"mobile\":\"other\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",29],8,16],",b=",["escape",["macro",31],8,16],",c=b(a,\".utility-links\"),d=b(a,\".global-logo\"),e=b(a,\".qt-nav\"),f=b(a,\".nav-list\"),g=b(a,\".alert-bar\"),h=b(a,\"#search--display\"),k=b(a,\".hero-wrapper\"),l=b(a,\".quickMenu\"),m=b(a,\".homepage-blades\"),n=b(a,\".bot-promos\"),p=b(a,\".global-footer\"),q=b(a,\".mobile-header\"),r=b(a,\".mobile-sign\"),t=b(a,\".global-navigation\"),u=b(a,\".quicktools-title\"),v=b(a,\".mobile-panels\");a=b(a,\"#kampyleButtonContainer\");return c?\"Header Nav\":d?\"Global Logo\":\ne?\"Quick Tools\":f?\"Main Nav\":g?\"Alert Bar\":h?\"Search\":k?\"Premium Banner\":l?\"Body Nav\":m?\"Blade\":n?\"Lower Promo\":p?\"Footer Nav\":q?\"Mobile Header\":r?\"Mobile Sign-In\":t?\"Header Nav\":u?\"Quick Tools\":v?\"Blade\":a?\"Feedback\":\"other element\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",29],8,16],",b=",["escape",["macro",31],8,16],",c=b(a,\".site-header\"),d=b(a,\"#alert-1\"),e=b(a,\".menu-items\"),f=b(a,\".menu-footer\"),g=b(a,\".track-from-menu\"),h=b(a,\".index-nav\"),k=b(a,\".input-tracking-form\"),l=b(a,\".index-footer.index-footer-top\");a=b(a,\".index-footer.index-footer-bottom\");return c?\"Mobile Header Nav\":d?\"Mobile Alert Bar\":e||f||g?\"Mobile Main Nav\":h||k?\"Mobile Body Nav\":l||a?\"Mobile Footer Nav\":\"other element\"})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",244],
      "vtp_map":["list",["map","key","other","value",["macro",245]],["map","key","mobile","value",["macro",246]]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",29],8,16],",b=",["escape",["macro",30],8,16],",d=a.className,c=",["escape",["macro",31],8,16],",f=c(a,\".utility-links\"),g=c(a,\".nav-list\"),h=c(a,\".alert-bar\"),k=c(a,\"#search--display\"),l=c(a,\".qt-nav\"),m=c(a,\".nav-full\"),e=c(a,\".hero-wrapper\"),n=c(a,\".quickMenu\"),p=c(a,\".homepage-blades\"),q=c(a,\".bot-promos\"),r=c(a,\".global-footer\"),t=c(a,\".mobile-header\"),u=c(a,\".qt-nav\"),v=c(a,\".mobile-panels\");if(f)return b?b:\"no header text\";if(t)return\"mobile-logo\"===d?\"Logo\":\"mobile-hamburger active\"===\nd?\"Open Hamburger Menu\":\"mobile-hamburger\"===d?\"Close Hamburger Menu\":\"mobile-search active\"===d?\"Open Search\":\"mobile-search\"===d?\"Close Search\":\"no mobile header text\";if(m)return\"global-logo\"===d?\"Logo\":b?b:\"no full nav text\";if(g)return-1\u003Cb.search(\"Open\/Close Menu\")?b=b.replace(\"Open\/Close Menu\",\"\"):-1\u003Cb.search(\"Hi,\")?b.substring(0,3):b?b:\"no main nav text\";if(h)return b?b:\"no alert bar text\";if(k)return c=c(a,\".search-close\"),a=a.nodeName,c?\"Close Search\":\"A\"===a?b:\"no search tool text\";if(l)return a=\nc(a,\".shortcuts-close\"),b?b:a?\"Close Quick Tools\":\"no quick tools text\";if(e)return a=e.querySelector(\"h1\"),(a=a.innerText)?a:b?b:\"no premium banner text\";if(n)return b?b:\"no body nav text\";if(p){c=c(a,\".col_content\");d=a.nodeName;if(c)return a=c.querySelector(\"h3\"),(a=a.innerText)?a:\"no blades title text\";if(\"Close\"===b||\"Expand\"===b)return b=a.parentNode,a=b.querySelector(\"h3\"),(a=a.innerText)?a:\"no blades action text\";if(\"LI\"===d)return a=a.querySelector(\"h3\"),(a=a.innerText)?a:\"no blades list text\"}else{if(q){if(a=\nc(a,\".chosen\"))b=a.querySelector(\"h2\"),b=b.innerText;return b}return r?(d=a.className,(a=c(a,\".global-footer--social\"))?",["escape",["macro",151],8,16],":\"global-footer--logo-link\"===d?\"Logo\":b?b:\"no footer text\"):u?\"Open Quick Tools\":v?(b=c(a,\".section--show-hide\"),a=b.querySelector(\".section-title\"),a=a.innerText,b?a:\"cant find text\"):b?b:\"catch-all\"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",29],8,16],",c=",["escape",["macro",30],8,16],",b=",["escape",["macro",31],8,16],",d=b(a,\".site-header\"),e=b(a,\"#alert-1\"),f=b(a,\".menu-items\"),g=b(a,\".menu-footer\"),h=b(a,\".track-from-menu\"),k=b(a,\".index-nav\"),l=b(a,\".input-tracking-form\"),m=b(a,\".index-footer.index-footer-top\");b=b(a,\".index-footer.index-footer-bottom\");if(d){a=a.className;if(\"logo icon-logo-beak\"===a)return\"Logo\";if(\"link-menu icon-hamburger\"===a)return\"Open Hamburger Menu\"}else return e?c:f||g?c:h?\"Tracking Form\":k?c:l?\n\"Tracking Form\":m||b?c:\"no text\"})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",244],
      "vtp_map":["list",["map","key","other","value",["macro",248]],["map","key","mobile","value",["macro",249]]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",228],8,16],";if(void 0==c||\"no data-gtm-label\"==c){var a=",["escape",["macro",247],8,16],",b=",["escape",["macro",250],8,16],";c=a+\" | \"+b;if(!a||!b)return a\u0026\u0026void 0==b?a+\" | no element text or data-gtm-label\":void 0==a\u0026\u0026b?\"no element location or data-gtm-section | \"+b:\"no element text or data-gtm-label\"}return c})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",53],8,16],";if(void 0==a||\"no data-gtm-section\"==a)if(a=",["escape",["macro",247],8,16],",void 0==a||\"other element\"==a)return\"no element location or data-gtm-section\";return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",29],8,16],";var a=b.className;var c=",["escape",["macro",123],8,16],";if(b=c(b,\"li.menuheader\")){if(a=b.querySelector(\"a.menuitem\"))return a=a.innerText}else return\"global-logo\"===a||\"mobile-logo\"===a?\"Logo\":\"mobile-hamburger active\"===a?\"Open Hamburger Menu\":\"mobile-hamburger\"===a?\"Close Hamburger Menu\":\"mobile-search active\"===a?\"Open Search\":\"mobile-search\"===a?\"Close Search\":\"no submenu\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",54],8,16],";if(void 0==a||\"no data-gtm-subsection\"==a)if(a=",["escape",["macro",253],8,16],",void 0==a||\"no submenu\"==a)return\"no submenu or data-gtm-subsection\";return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cfo.eventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cfo.eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cfo.eventLabel"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",18],
      "vtp_map":["list",["map","key","\/cfo-web\/labelInformation.html","value","1"],["map","key","\/cfo-web\/serviceOptions.html","value","2"],["map","key","\/cfo-web\/customsInformation.html","value","3"],["map","key","\/cfo-web\/reviewPrint.html","value","4"],["map","key","\/cfo-web\/customsThankYou.html","value","5"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cfo.infoButtonDetail"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cfo.dimensionCheckbox"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cfo.girthCheckbox"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cfo.militaryRadioSelected"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cfo.serviceType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cfo.packageType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cfo.printerOption"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cfo.nondeliveryOption"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cfo.contentsCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cfo.aesExemption"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cfo.editFieldDetail"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dropDownDetail.timing"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dropDownDetail.label"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dropDownDetail.form"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":true,
      "vtp_varType":"ID",
      "vtp_defaultValue":"no element id attribute"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",273],
      "vtp_defaultValue":["template","Survey Name not found for ",["macro",273]],
      "vtp_map":["list",["map","key","kampyleForm244","value","Always-On Feedback Survey"],["map","key","kampyleForm245","value","NPA Survey"],["map","key","kampyleForm254","value","General Intercept Survey"],["map","key","kampyleForm7","value","Cart Abandonment Survey"],["map","key","kampyleForm11","value","Tracking Survey"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sectionFormField"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",20],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*ipsweb\/verification_enter_passcode.xhtml.*","value","code-match"],["map","key",".*ipsweb\/verification_user_information.xhtml.*","value","high-confidence"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_defaultValue":"false",
      "vtp_map":["list",["map","key","www.usps.com","value","true"],["map","key","store.usps.com","value","true"],["map","key","cns.usps.com","value","true"],["map","key","holdmail.usps.com","value","true"],["map","key","redelivery.usps.com","value","true"],["map","key","tools.usps.com","value","true"],["map","key","m.usps.com","value","true"],["map","key","faq.usps.com","value","true"],["map","key","poboxes.usps.com","value","true"],["map","key","informeddelivery.usps.com","value","true"],["map","key","reg.usps.com","value","true"],["map","key","pay.usps.com","value","true"],["map","key","about.usps.com","value","true"],["map","key","postcalc.usps.com","value","true"],["map","key","pe.usps.com","value","true"],["map","key","emailus.usps.com","value","true"],["map","key","es.usps.com","value","true"],["map","key","retail-pi.usps.com","value","true"],["map","key","www.uspsdelivers.com","value","true"],["map","key","gateway.usps.com","value","true"],["map","key","es-tools.usps.com","value","true"],["map","key","internationalclaims.usps.com","value","true"],["map","key","onlineclaims.usps.com","value","true"],["map","key","eddm.usps.com","value","true"],["map","key","usps.force.com","value","true"],["map","key","gab.usps.com","value","true"],["map","key","missingmail.usps.com","value","true"],["map","key","prodpx-promotool.usps.com","value","true"],["map","key","cfo.usps.com","value","true"],["map","key","dbcalc.usps.com","value","true"],["map","key","zh.usps.com","value","true"],["map","key","pfsr.usps.com","value","true"],["map","key","zh-tools.usps.com","value","true"],["map","key","es-reg.usps.com","value","true"],["map","key","servicerefunds.usps.com","value","true"],["map","key","es-store.usps.com","value","true"],["map","key","epay.usps.com","value","true"],["map","key","printerdirectory.usps.com","value","true"],["map","key","programregistration.usps.com","value","true"],["map","key","zh-store.usps.com","value","true"],["map","key","zh-reg.usps.com","value","true"],["map","key","ibcalc.usps.com","value","true"],["map","key","realmail.usps.com","value","true"],["map","key","imresearchcenter.com","value","true"],["map","key","es-faq.usps.com","value","true"],["map","key","zh-intpx-www.usps.com","value","true"],["map","key","es-intpx-www.usps.com","value","true"],["map","key","irresistiblemail.com","value","true"],["map","key","ibcalcsm.usps.com","value","true"],["map","key","ibcalcea.usps.com","value","true"],["map","key","dbcalcsm.usps.com","value","true"],["map","key","zh-faq.usps.com","value","true"],["map","key","es-ecom-cat.usps.com","value","true"],["map","key","pe.usps.gov","value","true"],["map","key","postcalcsm.usps.com","value","true"],["map","key","postcalcea.usps.com","value","true"],["map","key","deliveringinnovation.com","value","true"],["map","key","dbcalcea.usps.com","value","true"],["map","key","fast-tem.usps.com","value","true"],["map","key","uspssupport.com","value","true"],["map","key","search.usps.com","value","true"],["map","key","postalpro.usps.com","value","true"],["map","key","uspscybersafe.com","value","true"],["map","key","es-redelivery.usps.com","value","true"],["map","key","zh-about.usps.com","value","true"],["map","key","zh-redelivery.usps.com","value","true"],["map","key","uspscalendar.com","value","true"],["map","key","zh-holdmail.usps.com","value","true"],["map","key","pfs.usps.com","value","true"],["map","key","ircalc.usps.com","value","true"],["map","key","uspsid.com","value","true"],["map","key","www.irresistiblemail.com","value","true"],["map","key","stage.uspsdelivers.mrmclient.com","value","true"]]
    },{
      "function":"__d",
      "vtp_elementId":"transNbr",
      "vtp_selectorType":"ID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",278],8,16],";return 9==a.length\u0026\u0026Number(a)?a:\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.getElementById(\"orderTotal\");return(a=a?a.innerText.replace(\/\\$|,\/g,\"\"):null)\u0026\u0026Number(a)?10\u003ENumber(a).toFixed(2).length?0\u003CNumber(a)?a:\"\":\"\":\"\"})();"]
    },{
      "function":"__d",
      "vtp_elementId":"accountNbr",
      "vtp_selectorType":"ID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.getElementById(\"orderTotal\");return a?a.innerText.replace(\/\\$|,\/g,\"\"):null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.getElementById(\"totalAmt\");return(a=a?a.innerText.replace(\/\\$|,\/g,\"\"):null)\u0026\u0026Number(a)?10\u003ENumber(a).toFixed(2).length?0\u003CNumber(a)?a:\"\":\"\":\"\"})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"orderId",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.getElementById(\"totalAmt\");return a?a.innerText.replace(\/\\$|,\/g,\"\"):null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date;return a.getTime()})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"atgOrderId",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.querySelectorAll(\"div.checkout-complete-transaction strong\");return a=a[3].innerText.replace(\/\\$|,\/g,\"\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.querySelector(\"#inside-wrap .cap-box\").innerText;a=a.split(\"# - \");return a[1]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.getElementById(\"checkoutTotalCost\").innerText;return a=a.trim().replace(\/\\$|,\/g,\"\")})();"]
    },{
      "function":"__c",
      "vtp_value":"span.tool_tip_text"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,c,e){if(a.addEventListener)a.addEventListener(c,e);else if(a.attachEvent)a.attachEvent(\"on\"+c,function(d){d=a;var b=c,f=e;b.target=b.target||b.srcElement;f.call(d,b)});else if(\"undefined\"===typeof a[\"on\"+c]||null===a[\"on\"+c])a[\"on\"+c]=function(d){d=a;var b=c,f=e;b.target=b.target||b.srcElement;f.call(d,b)}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,b,c){a.removeEventListener?a.removeEventListener(b,c):a.detachEvent?a.detachEvent(\"on\"+b,c):a[\"on\"+b]===c\u0026\u0026(a[\"on\"+b]=null)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(d){for(var a=0,c=0;c\u003Cd.length;c++){var b=d.charCodeAt(c);127\u003E=b?a+=1:2047\u003E=b?a+=2:55296\u003C=b\u0026\u002657343\u003E=b?(a+=4,c++):a=65535\u003Eb?a+3:a+4}return a}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b,d){var f={name:\"nm\",id:\"id\",price:\"pr\",brand:\"br\",category:\"ca\",variant:\"va\",quantity:\"qt\",position:\"ps\"},e=\"ilXXXpi\"+d,c=[],a;for(a in f)\"undefined\"!==typeof b[a]\u0026\u0026c.push(e+f[a]+\"\\x3d\"+encodeURIComponent(b[a]));for(a in b)-1\u003Ca.indexOf(\"dimension\")?(a.split(\"dimension\"),c.push(e+\"dm\"+d+\"\\x3d\"+encodeURIComponent(b[a]))):-1\u003Ca.indexOf(\"metric\")\u0026\u0026(a.split(\"dimension\"),c.push(e+\"dm\"+d+\"\\x3d\"+encodeURIComponent(b[a])));return c.join(\"\\x26\")}})();"]
    },{
      "function":"__c",
      "vtp_value":"6000"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,b,c){if(a.addEventListener)return a.addEventListener(b,c);if(a.attachEvent)return a.attachEvent(\"on\"+b,function(b){c.call(a,b)});if(\"undefined\"===typeof a[\"on\"+b]||null===a[\"on\"+b])return a[\"on\"+b]=function(b){c.call(a,b)}}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"attributes"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"cb",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"origination",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_content",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_keyword",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"\";",["escape",["macro",300],8,16],"\u0026\u0026(a=a+\"\\x26origination\\x3d\"+",["escape",["macro",300],8,16],");",["escape",["macro",13],8,16],"\u0026\u0026(a=a+\"\\x26utm_source\\x3d\"+",["escape",["macro",13],8,16],");",["escape",["macro",15],8,16],"\u0026\u0026(a=a+\"\\x26utm_medium\\x3d\"+",["escape",["macro",15],8,16],");",["escape",["macro",10],8,16],"\u0026\u0026(a=a+\"\\x26utm_campaign\\x3d\"+",["escape",["macro",10],8,16],");",["escape",["macro",301],8,16],"\u0026\u0026(a=a+\"\\x26utm_content\\x3d\"+",["escape",["macro",301],8,16],");",["escape",["macro",302],8,16],"\u0026\u0026(a=a+\"\\x26utm_keyword\\x3d\"+",["escape",["macro",302],8,16],");return a})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_defaultValue":"false",
      "vtp_map":["list",["map","key","tusps.usps.com","value","true"],["map","key","ecom-sit-int.usps.com","value","true"],["map","key","ecom-cat.usps.com","value","true"],["map","key","cat-tools.usps.com","value","true"],["map","key","sit-tools.usps.com","value","true"],["map","key","stage-www.usps.com","value","true"],["map","key","cat-m.usps.com","value","true"],["map","key","catfaq-f2.usps.com","value","true"],["map","key","sit-my.usps.com","value","true"],["map","key","cat.usps.com","value","true"],["map","key","sit.usps.com","value","true"],["map","key","cat-cns.usps.com","value","true"],["map","key","lpobol-cat.usps.com","value","true"],["map","key","cat-my.usps.com","value","true"],["map","key","cat-informeddelivery.usps.com","value","true"],["map","key","stage-cns.usps.com","value","true"],["map","key","ecom-sit.usps.com","value","true"],["map","key","cat-usps.cs33.force.com","value","true"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Medallia_launch_on"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return-1===document.cookie.indexOf(\"mab_usps\")?!1:!0})();"]
    },{
      "function":"__r"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"mab_usps"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"\";",["escape",["macro",300],8,16],"\u0026\u0026(a=a+\"\\x26origination\\x3d\"+",["escape",["macro",300],8,16],");return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a,b=\"",["escape",["macro",1],7],["escape",["macro",18],7],"\",c=[[\"ecom-sit\\\\.usps\\\\.com\/store\/checkout\/shipping\\\\.jsp\",\"chat\"],[\"ecom-sit\\\\.usps\\\\.com\/store\/cart\/cart\\\\.jsp\",\"chat\"],[\"ecom-sit\\\\.usps\\\\.com\/store\/checkout\/confirm\\\\.jsp\",\"chat\"],[\"ecom-sit\\\\.usps\\\\.com\/store\/order\",\"chat\"],[\"tusps\\\\.usps\\\\.com\/welcome-salesforce-chat.htm\",\"chat\"]];\"undefined\"==typeof b\u0026\u0026(b=\"\");for(a=0;a\u003Cc.length;a++)if((new RegExp(c[a][0],\"i\")).test(b))return c[a][1];b=\"",["escape",["macro",1],7],["escape",["macro",18],7],"\";\nc=[];\"undefined\"==typeof b\u0026\u0026(b=\"\");for(a=0;a\u003Cc.length;a++)if((new RegExp(c[a][0],\"i\")).test(b))return c[a][1];b=\"",["escape",["macro",1],7],["escape",["macro",18],7],"\";c=[[\"ecom-sit\\\\.usps\\\\.com\/store\/pse\/\",\"chat\"],[\"ecom-sit\\\\.usps\\\\.com\/store\/pse\/pse-configure\\\\.jsp\",\"chat\"]];\"undefined\"==typeof b\u0026\u0026(b=\"\");for(a=0;a\u003Cc.length;a++)if((new RegExp(c[a][0],\"i\")).test(b))return c[a][1];b=\"",["escape",["macro",1],7],["escape",["macro",18],7],"\";c=[[\"sit-informeddelivery\\\\.usps\\\\.com\/box\/pages\/secure\/DashboardAction_input\\\\.action\",\n\"chat\"]];\"undefined\"==typeof b\u0026\u0026(b=\"\");for(a=0;a\u003Cc.length;a++)if((new RegExp(c[a][0],\"i\")).test(b))return c[a][1];b=\"",["escape",["macro",1],7],["escape",["macro",18],7],["escape",["macro",21],7],"\";c=[];\"undefined\"==typeof b\u0026\u0026(b=\"\");for(a=0;a\u003Cc.length;a++)if((new RegExp(c[a][0],\"i\")).test(b))return c[a][1];return\"no chat\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a,b=\"",["escape",["macro",1],7],["escape",["macro",18],7],"\",c=[[\"ecom-cat\\\\.usps\\\\.com\/store\/checkout\/confirm\\\\.jsp\",\"chat\"],[\"ecom-cat\\\\.usps\\\\.com\/store\/checkout\/shipping\\\\.jsp\",\"chat\"],[\"ecom-cat\\\\.usps\\\\.com\/store\/cart\/cart\\\\.jsp\",\"chat\"],[\"stage-www\\\\.usps\\\\.com\/welcome-salesforce-chat.htm\",\"chat\"]];\"undefined\"==typeof b\u0026\u0026(b=\"\");for(a=0;a\u003Cc.length;a++)if((new RegExp(c[a][0],\"i\")).test(b))return c[a][1];b=\"",["escape",["macro",1],7],["escape",["macro",18],7],"\";c=[[\"ecom-cat\\\\.usps\\\\.com\/store\/product\/buy-stamps\/stamp-subscription\",\n\"chat\"]];\"undefined\"==typeof b\u0026\u0026(b=\"\");for(a=0;a\u003Cc.length;a++)if((new RegExp(c[a][0],\"i\")).test(b))return c[a][1];b=\"",["escape",["macro",1],7],["escape",["macro",18],7],"\";c=[[\"ecom-cat\\\\usps\\\\.com\/pse\/pse-form-enter\\\\.action\",\"chat\"],[\"ecom-cat\\\\usps\\\\.com\/pse\/pse-home\\\\.action\",\"chat\"],[\"ecom-cat\\\\.usps\\\\.com\/store\/pse\/index\\\\.jsp\",\"chat\"],[\"ecom-cat\\\\.usps\\\\.com\/store\/pse\/pse-configure\\\\.jsp\",\"chat\"],[\"ecom-cat\\\\.usps\\\\.com\/store\/pse\/\",\"chat\"]];\"undefined\"==typeof b\u0026\u0026(b=\"\");for(a=0;a\u003Cc.length;a++)if((new RegExp(c[a][0],\n\"i\")).test(b))return c[a][1];b=\"",["escape",["macro",1],7],["escape",["macro",18],7],"\";c=[[\"cat2-informeddelivery\\\\.usps\\\\.com\/box\/pages\/secure\/DashboardAction_input\\\\.action\",\"chat\"],[\"cat-informeddelivery\\\\.usps\\\\.com\/box\/pages\/secure\/DashboardAction_input\\\\.action\",\"chat\"]];\"undefined\"==typeof b\u0026\u0026(b=\"\");for(a=0;a\u003Cc.length;a++)if((new RegExp(c[a][0],\"i\")).test(b))return c[a][1];b=\"",["escape",["macro",1],7],["escape",["macro",18],7],["escape",["macro",21],7],"\";c=[];\"undefined\"==typeof b\u0026\u0026(b=\"\");for(a=0;a\u003Cc.length;a++)if((new RegExp(c[a][0],\n\"i\")).test(b))return c[a][1];return\"no chat\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a,b=\"",["escape",["macro",1],7],["escape",["macro",18],7],"\",c=[[\"store\\\\.usps\\\\.com\/store\/cart\/cart\\\\.jsp\",\"chat\"],[\"store\\\\.usps\\\\.com\/store\/checkout\/confirm\\\\.jsp\",\"chat\"],[\"store.\\\\usps\\\\.com\/store\/checkout\/shipping\\\\.jsp\",\"chat\"]];\"undefined\"==typeof b\u0026\u0026(b=\"\");for(a=0;a\u003Cc.length;a++)if((new RegExp(c[a][0],\"i\")).test(b))return c[a][1];b=\"",["escape",["macro",1],7],["escape",["macro",18],7],"\";c=[[\"store\\\\.usps\\\\.com\/store\/product\/buy-stamps\/stamp-subscription\",\"chat\"]];\"undefined\"==typeof b\u0026\u0026(b=\"\");for(a=\n0;a\u003Cc.length;a++)if((new RegExp(c[a][0],\"i\")).test(b))return c[a][1];b=\"",["escape",["macro",1],7],["escape",["macro",18],7],"\";c=[[\"store\\\\.usps\\\\.com\/store\/pse\/index\\\\.jsp\",\"chat\"],[\"store\\\\.usps\\\\.com\/store\/pse\/pse-configure\\\\.jsp\",\"chat\"]];\"undefined\"==typeof b\u0026\u0026(b=\"\");for(a=0;a\u003Cc.length;a++)if((new RegExp(c[a][0],\"i\")).test(b))return c[a][1];b=\"",["escape",["macro",1],7],["escape",["macro",18],7],"\";c=[[\"informeddelivery\\\\.usps\\\\.com\/box\/pages\/secure\/HomeAction_input\\\\.action\",\"chat\"],[\"informeddelivery\\\\.usps\\\\.com\/box\/pages\/secure\/DashboardAction_input\\\\.action\",\n\"chat\"]];\"undefined\"==typeof b\u0026\u0026(b=\"\");for(a=0;a\u003Cc.length;a++)if((new RegExp(c[a][0],\"i\")).test(b))return c[a][1];b=\"",["escape",["macro",1],7],["escape",["macro",18],7],["escape",["macro",21],7],"\";c=[];\"undefined\"==typeof b\u0026\u0026(b=\"\");for(a=0;a\u003Cc.length;a++)if((new RegExp(c[a][0],\"i\")).test(b))return c[a][1];return\"no chat\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.impressions.0.category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.impressions.0.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.impressions.0.id"
    },{
      "function":"__j",
      "vtp_name":"utag_data.name"
    },{
      "function":"__j",
      "vtp_name":"utag_data.section"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a,b=\"",["escape",["macro",1],7],["escape",["macro",18],7],"\",c=[[\"store\\\\.usps\\\\.com\/store\/pse\/index\\\\.jsp\",\"rnchat\"],[\"store\\\\.usps\\\\.com\/store\/pse\/pse-configure\\\\.jsp\",\"rnchat\"],[\"store\\\\.usps\\\\.com\/pse\/pse-home\\\\.action\",\"rnchat\"]];\"undefined\"==typeof b\u0026\u0026(b=\"\");for(a=0;a\u003Cc.length;a++)if((new RegExp(c[a][0],\"i\")).test(b))return c[a][1];b=\"",["escape",["macro",21],7],"\";c=[[\"stamp-subscriptions\",\"rnchat\"],[\"tlmtest\",\"rnchat\"]];\"undefined\"==typeof b\u0026\u0026(b=\"\");for(a=0;a\u003Cc.length;a++)if((new RegExp(c[a][0],\n\"i\")).test(b))return c[a][1];b=\"",["escape",["macro",1],7],["escape",["macro",18],7],"\";c=[[\"store\\\\.usps\\\\.com\/pse\/pse-form-enter\\\\.action\",\"rnchat\"],[\"store\\\\.usps\\\\.com\/pse\/pse-home\\\\.action\",\"rnchat\"],[\"store\\\\.usps\\\\.com\/store\/cart\/cart\\\\.jsp\",\"rnchat\"],[\"store\\\\.usps\\\\.com\/store\/checkout\/confirm\\\\.jsp\",\"rnchat\"],[\"store\\\\.usps\\\\.com\/store\/checkout\/shipping\\\\.jsp\",\"rnchat\"]];\"undefined\"==typeof b\u0026\u0026(b=\"\");for(a=0;a\u003Cc.length;a++)if((new RegExp(c[a][0],\"i\")).test(b))return c[a][1];b=\"",["escape",["macro",1],7],["escape",["macro",18],7],"\";\nc=[[\"^informeddelivery\\\\.usps\\\\.com\/box\/pages\/secure\/HomeAction_input\\\\.action\",\"rnchat\"],[\"^informeddelivery\\\\.usps\\\\.com\/box\/pages\/secure\/DashboardAction_input\\\\.action\",\"rnchat\"]];\"undefined\"==typeof b\u0026\u0026(b=\"\");for(a=0;a\u003Cc.length;a++)if((new RegExp(c[a][0],\"i\")).test(b))return c[a][1];b=\"",["escape",["macro",1],7],["escape",["macro",18],7],["escape",["macro",21],7],"\";c=[];\"undefined\"==typeof b\u0026\u0026(b=\"\");for(a=0;a\u003Cc.length;a++)if((new RegExp(c[a][0],\"i\")).test(b))return c[a][1];return\"no chat\"})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_defaultValue":"false",
      "vtp_map":["list",["map","key","www.usps.com","value","true"],["map","key","store.usps.com","value","true"],["map","key","cns.usps.com","value","false"],["map","key","pfs.usps.com","value","true"],["map","key","holdmail.usps.com","value","true"],["map","key","redelivery.usps.com","value","true"],["map","key","tools.usps.com","value","true"],["map","key","m.usps.com","value","true"],["map","key","faq.usps.com","value","true"],["map","key","my.usps.com","value","true"],["map","key","poboxes.usps.com","value","true"],["map","key","search.usps.com","value","true"],["map","key","informeddelivery.usps.com","value","true"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"customerSpending"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"customerLoyalty"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"attributes.form"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",145],
      "vtp_map":["list",["map","key","formFocus","value","Enter a Form Field"],["map","key","formBlur","value","Exit a Form Field"]]
    },{
      "function":"__d",
      "vtp_elementSelector":".delivery-status-text",
      "vtp_selectorType":"CSS"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ForeSee_packageId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ForeSee_packageStatus"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ForeSee_packageProduct"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ForeSee_packageFeatures"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"attributes.value"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=16;return function(a){a.set(\"dimension\"+b,a.get(\"clientId\"))}})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"EntReg"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a,b=\"",["escape",["macro",1],7],["escape",["macro",18],7],"\",c=[[\"ecom-sit\\\\.usps\\\\.com\/store\/checkout\/shipping\\\\.jsp\",\"chat\"],[\"ecom-sit\\\\.usps\\\\.com\/store\/cart\/cart\\\\.jsp\",\"chat\"],[\"ecom-sit\\\\.usps\\\\.com\/store\/checkout\/confirm\\\\.jsp\",\"chat\"],[\"ecom-sit\\\\.usps\\\\.com\/store\/order\",\"chat\"],[\"ecom-cat\\\\.usps\\\\.com\/store\/checkout\/confirm\\\\.jsp\",\"chat\"],[\"ecom-cat\\\\.usps\\\\.com\/store\/checkout\/shipping\\\\.jsp\",\"chat\"],[\"ecom-cat\\\\.usps\\\\.com\/store\/cart\/cart\\\\.jsp\",\"chat\"],[\"tusps\\\\.usps\\\\.com\/welcome-salesforce-chat.htm\",\n\"chat\"]];\"undefined\"==typeof b\u0026\u0026(b=\"\");for(a=0;a\u003Cc.length;a++)if((new RegExp(c[a][0],\"i\")).test(b))return c[a][1];b=\"",["escape",["macro",1],7],["escape",["macro",18],7],"\";c=[[\"ecom-cat\\\\.usps\\\\.com\/store\/product\/buy-stamps\/stamp-subscription\",\"chat\"]];\"undefined\"==typeof b\u0026\u0026(b=\"\");for(a=0;a\u003Cc.length;a++)if((new RegExp(c[a][0],\"i\")).test(b))return c[a][1];b=\"",["escape",["macro",1],7],["escape",["macro",18],7],"\";c=[[\"ecom-sit\\\\.usps\\\\.com\/store\/pse\/\",\"chat\"],[\"ecom-sit\\\\.usps\\\\.com\/store\/pse\/pse-configure\\\\.jsp\",\"chat\"],\n[\"ecom-cat\\\\.usps\\\\.com\/store\/pse\/\",\"chat\"]];\"undefined\"==typeof b\u0026\u0026(b=\"\");for(a=0;a\u003Cc.length;a++)if((new RegExp(c[a][0],\"i\")).test(b))return c[a][1];b=\"",["escape",["macro",1],7],["escape",["macro",18],7],"\";c=[[\"sit-informeddelivery\\\\.usps\\\\.com\/box\/pages\/secure\/DashboardAction_input\\\\.action\",\"chat\"],[\"cat-informeddelivery\\\\.usps\\\\.com\/box\/pages\/secure\/DashboardAction_input\\\\.action\",\"chat\"]];\"undefined\"==typeof b\u0026\u0026(b=\"\");for(a=0;a\u003Cc.length;a++)if((new RegExp(c[a][0],\"i\")).test(b))return c[a][1];b=\"",["escape",["macro",1],7],["escape",["macro",18],7],["escape",["macro",21],7],"\";\nc=[];\"undefined\"==typeof b\u0026\u0026(b=\"\");for(a=0;a\u003Cc.length;a++)if((new RegExp(c[a][0],\"i\")).test(b))return c[a][1];return\"no chat\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dropDownDetail.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dropDownDetail.timestamp"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dropDownDetail.value"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",29],8,16],",b=",["escape",["macro",31],8,16],",c=b(a,\".menuheader\"),d=b(a,\".utility-links\"),e=b(a,\".global-logo\"),f=b(a,\".qt-nav\"),g=b(a,\".nav-list\"),h=b(a,\".alert-bar\"),k=b(a,\"#search--display\"),l=b(a,\".hero-wrapper\"),m=b(a,\".quickMenu\"),n=b(a,\".homepage-blades\"),p=b(a,\".bot-promos\"),q=b(a,\".global-footer\"),r=b(a,\".global-navigation\"),t=b(a,\".quicktools-title\"),u=b(a,\".mobile-panels\");a=b(a,\"#kampyleButtonContainer\");return c?\"Submenu Nav\":d?\"Header Nav\":e?\"Global Logo\":f?\"Quick Tools\":\ng?\"Main Nav\":h?\"Alert Bar\":k?\"Search\":l?\"Premium Banner\":m?\"Body Nav\":n?\"Blade\":p?\"Lower Promo\":q?\"Footer Nav\":r?\"Header Nav\":t?\"Quick Tools\":u?\"Blade\":a?\"Feedback\":\"other element\"})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Internal Link Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":["macro",0],
      "vtp_eventLabel":["macro",62],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":89
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"978081151",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":false,
      "vtp_url":["macro",65],
      "vtp_enableRdpCheckbox":true,
      "tag_id":944
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"infor0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"logge00",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"3976941",
      "vtp_ordinalStandard":["macro",66],
      "vtp_url":["macro",65],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":972
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Button Clicks",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":["macro",18],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":992
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Add to Cart",
      "vtp_eventLabel":["macro",69],
      "vtp_dimension":["list",["map","index","3","dimension",["macro",70]],["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]],["map","index","49","dimension",["macro",71]],["map","index","40","dimension",["macro",72]],["map","index","41","dimension",["macro",73]],["map","index","42","dimension",["macro",74]],["map","index","43","dimension",["macro",75]],["map","index","44","dimension",["macro",76]],["map","index","45","dimension",["macro",77]],["map","index","46","dimension",["macro",78]],["map","index","47","dimension",["macro",79]],["map","index","48","dimension",["macro",80]],["map","index","50","dimension",["macro",81]],["map","index","51","dimension",["macro",82]],["map","index","52","dimension",["macro",83]],["map","index","53","dimension",["macro",84]],["map","index","54","dimension",["macro",85]],["map","index","55","dimension",["macro",86]],["map","index","56","dimension",["macro",87]],["map","index","57","dimension",["macro",88]],["map","index","58","dimension",["macro",89]],["map","index","59","dimension",["macro",90]],["map","index","60","dimension",["macro",91]],["map","index","61","dimension",["macro",92]],["map","index","62","dimension",["macro",93]],["map","index","63","dimension",["macro",94]],["map","index","64","dimension",["macro",95]],["map","index","65","dimension",["macro",96]],["map","index","66","dimension",["macro",97]],["map","index","67","dimension",["macro",98]],["map","index","68","dimension",["macro",99]],["map","index","105","dimension",["macro",100]],["map","index","106","dimension",["macro",101]],["map","index","119","dimension",["macro",102]],["map","index","152","dimension",["macro",103]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":993
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Product List Click",
      "vtp_eventLabel":["template",["macro",104]," | ",["macro",105]],
      "vtp_dimension":["list",["map","index","3","dimension",["macro",70]],["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]],["map","index","49","dimension",["macro",71]],["map","index","40","dimension",["macro",72]],["map","index","41","dimension",["macro",73]],["map","index","42","dimension",["macro",74]],["map","index","43","dimension",["macro",75]],["map","index","44","dimension",["macro",76]],["map","index","45","dimension",["macro",77]],["map","index","46","dimension",["macro",78]],["map","index","47","dimension",["macro",79]],["map","index","48","dimension",["macro",80]],["map","index","50","dimension",["macro",81]],["map","index","51","dimension",["macro",82]],["map","index","52","dimension",["macro",83]],["map","index","53","dimension",["macro",84]],["map","index","54","dimension",["macro",85]],["map","index","55","dimension",["macro",86]],["map","index","56","dimension",["macro",87]],["map","index","57","dimension",["macro",88]],["map","index","58","dimension",["macro",89]],["map","index","59","dimension",["macro",90]],["map","index","60","dimension",["macro",91]],["map","index","61","dimension",["macro",92]],["map","index","62","dimension",["macro",93]],["map","index","63","dimension",["macro",94]],["map","index","64","dimension",["macro",95]],["map","index","65","dimension",["macro",96]],["map","index","66","dimension",["macro",97]],["map","index","67","dimension",["macro",98]],["map","index","68","dimension",["macro",99]],["map","index","105","dimension",["macro",100]],["map","index","106","dimension",["macro",101]],["map","index","119","dimension",["macro",102]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":994
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Product List Impression",
      "vtp_eventLabel":["macro",106],
      "vtp_dimension":["list",["map","index","3","dimension",["macro",70]],["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]],["map","index","49","dimension",["macro",71]],["map","index","40","dimension",["macro",72]],["map","index","41","dimension",["macro",73]],["map","index","42","dimension",["macro",74]],["map","index","43","dimension",["macro",75]],["map","index","44","dimension",["macro",76]],["map","index","45","dimension",["macro",77]],["map","index","46","dimension",["macro",78]],["map","index","47","dimension",["macro",79]],["map","index","48","dimension",["macro",80]],["map","index","50","dimension",["macro",81]],["map","index","51","dimension",["macro",82]],["map","index","52","dimension",["macro",83]],["map","index","53","dimension",["macro",84]],["map","index","54","dimension",["macro",85]],["map","index","55","dimension",["macro",86]],["map","index","56","dimension",["macro",87]],["map","index","57","dimension",["macro",88]],["map","index","58","dimension",["macro",89]],["map","index","59","dimension",["macro",90]],["map","index","60","dimension",["macro",91]],["map","index","61","dimension",["macro",92]],["map","index","62","dimension",["macro",93]],["map","index","63","dimension",["macro",94]],["map","index","64","dimension",["macro",95]],["map","index","65","dimension",["macro",96]],["map","index","66","dimension",["macro",97]],["map","index","67","dimension",["macro",98]],["map","index","68","dimension",["macro",99]],["map","index","105","dimension",["macro",100]],["map","index","106","dimension",["macro",101]],["map","index","119","dimension",["macro",102]],["map","index","150","dimension",["macro",109]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":995
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Promotion Click",
      "vtp_eventLabel":["macro",110],
      "vtp_dimension":["list",["map","index","3","dimension",["macro",70]],["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]],["map","index","49","dimension",["macro",71]],["map","index","40","dimension",["macro",72]],["map","index","41","dimension",["macro",73]],["map","index","42","dimension",["macro",74]],["map","index","43","dimension",["macro",75]],["map","index","44","dimension",["macro",76]],["map","index","45","dimension",["macro",77]],["map","index","46","dimension",["macro",78]],["map","index","47","dimension",["macro",79]],["map","index","48","dimension",["macro",80]],["map","index","50","dimension",["macro",81]],["map","index","51","dimension",["macro",82]],["map","index","52","dimension",["macro",83]],["map","index","53","dimension",["macro",84]],["map","index","54","dimension",["macro",85]],["map","index","55","dimension",["macro",86]],["map","index","56","dimension",["macro",87]],["map","index","57","dimension",["macro",88]],["map","index","58","dimension",["macro",89]],["map","index","59","dimension",["macro",90]],["map","index","60","dimension",["macro",91]],["map","index","61","dimension",["macro",92]],["map","index","62","dimension",["macro",93]],["map","index","63","dimension",["macro",94]],["map","index","64","dimension",["macro",95]],["map","index","65","dimension",["macro",96]],["map","index","66","dimension",["macro",97]],["map","index","67","dimension",["macro",98]],["map","index","68","dimension",["macro",99]],["map","index","105","dimension",["macro",100]],["map","index","106","dimension",["macro",101]],["map","index","119","dimension",["macro",102]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":996
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Promotion Impression",
      "vtp_eventLabel":["macro",111],
      "vtp_dimension":["list",["map","index","3","dimension",["macro",70]],["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]],["map","index","49","dimension",["macro",71]],["map","index","40","dimension",["macro",72]],["map","index","41","dimension",["macro",73]],["map","index","42","dimension",["macro",74]],["map","index","43","dimension",["macro",75]],["map","index","44","dimension",["macro",76]],["map","index","45","dimension",["macro",77]],["map","index","46","dimension",["macro",78]],["map","index","47","dimension",["macro",79]],["map","index","48","dimension",["macro",80]],["map","index","50","dimension",["macro",81]],["map","index","51","dimension",["macro",82]],["map","index","52","dimension",["macro",83]],["map","index","53","dimension",["macro",84]],["map","index","54","dimension",["macro",85]],["map","index","55","dimension",["macro",86]],["map","index","56","dimension",["macro",87]],["map","index","57","dimension",["macro",88]],["map","index","58","dimension",["macro",89]],["map","index","59","dimension",["macro",90]],["map","index","60","dimension",["macro",91]],["map","index","61","dimension",["macro",92]],["map","index","62","dimension",["macro",93]],["map","index","63","dimension",["macro",94]],["map","index","64","dimension",["macro",95]],["map","index","65","dimension",["macro",96]],["map","index","66","dimension",["macro",97]],["map","index","67","dimension",["macro",98]],["map","index","68","dimension",["macro",99]],["map","index","105","dimension",["macro",100]],["map","index","106","dimension",["macro",101]],["map","index","119","dimension",["macro",102]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":997
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Remove from Cart",
      "vtp_eventLabel":["macro",112],
      "vtp_dimension":["list",["map","index","3","dimension",["macro",70]],["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]],["map","index","49","dimension",["macro",71]],["map","index","40","dimension",["macro",72]],["map","index","41","dimension",["macro",73]],["map","index","42","dimension",["macro",74]],["map","index","43","dimension",["macro",75]],["map","index","44","dimension",["macro",76]],["map","index","45","dimension",["macro",77]],["map","index","46","dimension",["macro",78]],["map","index","47","dimension",["macro",79]],["map","index","48","dimension",["macro",80]],["map","index","50","dimension",["macro",81]],["map","index","51","dimension",["macro",82]],["map","index","52","dimension",["macro",83]],["map","index","53","dimension",["macro",84]],["map","index","54","dimension",["macro",85]],["map","index","55","dimension",["macro",86]],["map","index","56","dimension",["macro",87]],["map","index","57","dimension",["macro",88]],["map","index","58","dimension",["macro",89]],["map","index","59","dimension",["macro",90]],["map","index","60","dimension",["macro",91]],["map","index","61","dimension",["macro",92]],["map","index","62","dimension",["macro",93]],["map","index","63","dimension",["macro",94]],["map","index","64","dimension",["macro",95]],["map","index","65","dimension",["macro",96]],["map","index","66","dimension",["macro",97]],["map","index","67","dimension",["macro",98]],["map","index","68","dimension",["macro",99]],["map","index","105","dimension",["macro",100]],["map","index","106","dimension",["macro",101]],["map","index","119","dimension",["macro",102]],["map","index","152","dimension",["macro",103]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":998
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Purchase",
      "vtp_eventLabel":["macro",19],
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","105","dimension",["macro",100]],["map","index","119","dimension",["macro",102]],["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]],["map","index","152","dimension",["macro",103]],["map","index","153","dimension",["macro",115]],["map","index","154","dimension",["macro",116]],["map","index","106","dimension",["macro",101]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":999
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Purchase",
      "vtp_eventLabel":["macro",117],
      "vtp_dimension":["list",["map","index","4","dimension",["macro",117]],["map","index","105","dimension",["macro",100]],["map","index","119","dimension",["macro",102]],["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1000
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Ecom Purchase Failed",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":["macro",118],
      "vtp_eventLabel":["macro",119],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1001
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"File Downloads",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":["macro",120],
      "vtp_eventLabel":["macro",121],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1002
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Tooltip Interactions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Hover",
      "vtp_eventLabel":["template",["macro",19]," | ",["macro",124]],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1005
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Signup",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Informed Delivery",
      "vtp_eventLabel":["macro",127],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1006
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Outbound Link Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":["macro",0],
      "vtp_eventLabel":["macro",33],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1008
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["template",["macro",18],["macro",130]]],["map","fieldName","location","value",["template",["macro",6],["macro",131]]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":["macro",133],
      "vtp_gaSettings":["macro",61],
      "vtp_dimension":["list",["map","index","3","dimension",["macro",70]],["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1011
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",134],
      "vtp_useDebugVersion":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":["macro",133],
      "vtp_gaSettings":["macro",61],
      "vtp_dimension":["list",["map","index","3","dimension",["macro",70]],["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]],["map","index","49","dimension",["macro",71]],["map","index","40","dimension",["macro",72]],["map","index","41","dimension",["macro",73]],["map","index","42","dimension",["macro",74]],["map","index","43","dimension",["macro",75]],["map","index","44","dimension",["macro",76]],["map","index","45","dimension",["macro",77]],["map","index","46","dimension",["macro",78]],["map","index","47","dimension",["macro",79]],["map","index","48","dimension",["macro",80]],["map","index","50","dimension",["macro",81]],["map","index","51","dimension",["macro",82]],["map","index","52","dimension",["macro",83]],["map","index","53","dimension",["macro",84]],["map","index","54","dimension",["macro",85]],["map","index","55","dimension",["macro",86]],["map","index","56","dimension",["macro",87]],["map","index","57","dimension",["macro",88]],["map","index","58","dimension",["macro",89]],["map","index","59","dimension",["macro",90]],["map","index","60","dimension",["macro",91]],["map","index","61","dimension",["macro",92]],["map","index","62","dimension",["macro",93]],["map","index","63","dimension",["macro",94]],["map","index","64","dimension",["macro",95]],["map","index","65","dimension",["macro",96]],["map","index","66","dimension",["macro",97]],["map","index","67","dimension",["macro",98]],["map","index","68","dimension",["macro",99]],["map","index","105","dimension",["macro",100]],["map","index","119","dimension",["macro",102]],["map","index","150","dimension",["macro",109]],["map","index","95","dimension",["macro",136]],["map","index","96","dimension",["macro",138]],["map","index","98","dimension",["macro",139]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":1012
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Diagnostics",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Temp Hit for Custom Dimensions",
      "vtp_dimension":["list",["map","index","3","dimension",["macro",70]],["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]],["map","index","49","dimension",["macro",71]],["map","index","40","dimension",["macro",72]],["map","index","41","dimension",["macro",73]],["map","index","42","dimension",["macro",74]],["map","index","43","dimension",["macro",75]],["map","index","44","dimension",["macro",76]],["map","index","45","dimension",["macro",77]],["map","index","46","dimension",["macro",78]],["map","index","47","dimension",["macro",79]],["map","index","48","dimension",["macro",80]],["map","index","50","dimension",["macro",81]],["map","index","51","dimension",["macro",82]],["map","index","52","dimension",["macro",83]],["map","index","53","dimension",["macro",84]],["map","index","54","dimension",["macro",85]],["map","index","55","dimension",["macro",86]],["map","index","56","dimension",["macro",87]],["map","index","57","dimension",["macro",88]],["map","index","58","dimension",["macro",89]],["map","index","59","dimension",["macro",90]],["map","index","60","dimension",["macro",91]],["map","index","61","dimension",["macro",92]],["map","index","62","dimension",["macro",93]],["map","index","63","dimension",["macro",94]],["map","index","64","dimension",["macro",95]],["map","index","65","dimension",["macro",96]],["map","index","66","dimension",["macro",97]],["map","index","67","dimension",["macro",98]],["map","index","68","dimension",["macro",99]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1013
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",140]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",61],
      "vtp_dimension":["list",["map","index","3","dimension",["macro",70]],["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1014
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["template",["macro",18],["macro",130]]],["map","fieldName","location","value",["template",["macro",6],["macro",131]]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",61],
      "vtp_dimension":["list",["map","index","3","dimension",["macro",70]],["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1015
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","hitCallback","value",["macro",141]]],
      "vtp_eventCategory":"Backend Errors",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":["macro",142],
      "vtp_dimension":["list",["map","index","4","dimension","Mobile Site"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1016
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","hitCallback","value",["macro",141]]],
      "vtp_eventCategory":"Interactions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":["macro",79],
      "vtp_dimension":["list",["map","index","4","dimension","Mobile Site"],["map","index","40","dimension",["macro",72]],["map","index","41","dimension",["macro",73]],["map","index","42","dimension",["macro",74]],["map","index","43","dimension",["macro",75]],["map","index","44","dimension",["macro",76]],["map","index","45","dimension",["macro",77]],["map","index","46","dimension",["macro",78]],["map","index","47","dimension",["macro",79]],["map","index","48","dimension",["macro",80]],["map","index","49","dimension",["macro",71]],["map","index","50","dimension",["macro",81]],["map","index","51","dimension",["macro",82]],["map","index","52","dimension",["macro",83]],["map","index","53","dimension",["macro",84]],["map","index","54","dimension",["macro",85]],["map","index","55","dimension",["macro",86]],["map","index","56","dimension",["macro",87]],["map","index","57","dimension",["macro",88]],["map","index","58","dimension",["macro",89]],["map","index","59","dimension",["macro",90]],["map","index","60","dimension",["macro",91]],["map","index","61","dimension",["macro",92]],["map","index","62","dimension",["macro",93]],["map","index","63","dimension",["macro",94]],["map","index","64","dimension",["macro",95]],["map","index","65","dimension",["macro",96]],["map","index","66","dimension",["macro",97]],["map","index","67","dimension",["macro",98]],["map","index","68","dimension",["macro",99]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1017
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/s.amazon-adsystem.com\/iui3?d=forester-did\u0026ex-fargs=%3Fid%3Db621fe9d-1b5d-b4d7-2e93-04cce22e5135%26type%3D30%26m%3D1\u0026ex-fch=416613\u0026ex-src=https:\/\/www.usps.com\/\u0026ex-hargs=v%3D1.0%3Bc%3D7711809955067%3Bp%3DB621FE9D-1B5D-B4D7-2E93-04CCE22E5135",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",66],
      "tag_id":1074
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/s.amazon-adsystem.com\/iui3?d=forester-did\u0026ex-fargs=%3Fid%3D091606b5-3529-576e-5131-9670a6a3b260%26type%3D55%26m%3D1\u0026ex-fch=416613\u0026ex-src=https:\/\/www.usps.com\/\u0026ex-hargs=v%3D1.0%3Bc%3D7711809955067%3Bp%3D091606B5-3529-576E-5131-9670A6A3B260",
      "tag_id":1075
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/s.amazon-adsystem.com\/iui3?d=forester-did\u0026ex-fargs=%3Fid%3D091606b5-3529-576e-5131-9670a6a3b260%26type%3D55%26m%3D1\u0026ex-fch=416613\u0026ex-src=https:\/\/www.usps.com\/\u0026ex-hargs=v%3D1.0%3Bc%3D7711809955067%3Bp%3D091606B5-3529-576E-5131-9670A6A3B260",
      "tag_id":1076
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/s.amazon-adsystem.com\/iui3?d=forester-did\u0026ex-fargs=%3Fid%3Db621fe9d-1b5d-b4d7-2e93-04cce22e5135%26type%3D30%26m%3D1\u0026ex-fch=416613\u0026ex-src=https:\/\/www.usps.com\/\u0026ex-hargs=v%3D1.0%3Bc%3D7711809955067%3Bp%3DB621FE9D-1B5D-B4D7-2E93-04CCE22E5135",
      "tag_id":1077
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"\/\/www.amazon.com\/b\/?\u0026node=7253015011 --\u003E\u003Cimg height='1' width='1' border='0' alt='' src='https:\/\/s.amazon-adsystem.com\/iui3?d=forester-did\u0026ex-fargs=%3Fid%3D091606b5-3529-576e-5131-9670a6a3b260%26type%3D55%26m%3D1\u0026ex-fch=416613\u0026ex-src=https:\/\/www.usps.com\/\u0026ex-hargs=v%3D1.0%3Bc%3D7711809955067%3Bp%3D091606B5-3529-576E-5131-9670A6A3B260",
      "tag_id":1079
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"\/\/www.amazon.com\/b\/?\u0026node=7253015011 --\u003E\u003Cimg height='1' width='1' border='0' alt='' src='https:\/\/s.amazon-adsystem.com\/iui3?d=forester-did\u0026ex-fargs=%3Fid%3Db621fe9d-1b5d-b4d7-2e93-04cce22e5135%26type%3D30%26m%3D1\u0026ex-fch=416613\u0026ex-src=https:\/\/www.usps.com\/\u0026ex-hargs=v%3D1.0%3Bc%3D7711809955067%3Bp%3DB621FE9D-1B5D-B4D7-2E93-04CCE22E5135",
      "tag_id":1080
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/s.amazon-adsystem.com\/iu3",
      "vtp_cacheBusterQueryParam":"cb",
      "vtp_randomNumber":["macro",66],
      "tag_id":1081
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"\/\/secure.adnxs.com\/px?id=728725\u0026seg=5435229\u0026t=2",
      "tag_id":1082
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"\/\/secure.adnxs.com\/px?id=728726\u0026seg=5435230\u0026t=2",
      "tag_id":1083
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"\/\/cvt.mydas.mobi\/mmcvt\/conversion.js",
      "tag_id":1084
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"\/\/cvt.mydas.mobi\/handleConversion?goalId=54749",
      "tag_id":1085
    },{
      "function":"__twitter_website_tag",
      "once_per_event":true,
      "vtp_event_type":"PageView",
      "vtp_twitter_pixel_id":"nugcr",
      "tag_id":1086
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",144],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhanced Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Product Impressions",
      "vtp_eventLabel":["macro",106],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1127
    },{
      "function":"__twitter_website_tag",
      "once_per_event":true,
      "vtp_event_type":"PageView",
      "vtp_twitter_pixel_id":"nugm8",
      "tag_id":1135
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",146]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",61],
      "vtp_dimension":["list",["map","index","3","dimension",["macro",70]],["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1136
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Diagnostics",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"No Search Results",
      "vtp_eventLabel":["macro",147],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1137
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Customer Account Actions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Create Account",
      "vtp_eventLabel":["macro",19],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1138
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Customer Account Actions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Save to Favorites",
      "vtp_eventLabel":["template",["macro",19]," | ",["macro",148]],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1139
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":["template","Checkout Step ",["macro",149]],
      "vtp_eventLabel":["macro",19],
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","105","dimension",["macro",100]],["map","index","119","dimension",["macro",102]],["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]],["map","index","152","dimension",["macro",103]],["map","index","153","dimension",["macro",115]],["map","index","154","dimension",["macro",116]],["map","index","106","dimension",["macro",101]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1140
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":["macro",150],
      "vtp_eventLabel":["macro",152],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1141
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["template",["macro",18],["macro",130]]],["map","fieldName","location","value",["template",["macro",6],["macro",131]]]],
      "vtp_eventCategory":"Video Play",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":["macro",6],
      "vtp_eventLabel":["macro",49],
      "vtp_dimension":["list",["map","index","3","dimension",["macro",70]],["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1146
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["template",["macro",18],["macro",130]]],["map","fieldName","location","value",["template",["macro",6],["macro",131]]]],
      "vtp_eventCategory":"Gallery Element Clicks",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":["macro",6],
      "vtp_eventLabel":["macro",30],
      "vtp_dimension":["list",["map","index","3","dimension",["macro",70]],["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1147
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"978081151",
      "vtp_customParamsFormat":"NONE",
      "vtp_conversionLabel":"978081151",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":false,
      "vtp_url":["macro",65],
      "vtp_enableRdpCheckbox":true,
      "tag_id":1151
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Sticky Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":["macro",33],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1158
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Audit Tool Form Clicks",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":["macro",155],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1166
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Audit Tool Form Clicks",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":["macro",156],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1167
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",157],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":["macro",158],
      "vtp_eventLabel":"Modify and Submit",
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",134],
      "vtp_metric":["list",["map","index","2","metric",["macro",160]],["map","index","3","metric",["macro",161]],["map","index","4","metric",["macro",162]],["map","index","5","metric",["macro",163]],["map","index","6","metric",["macro",164]],["map","index","7","metric",["macro",165]],["map","index","8","metric",["macro",166]],["map","index","9","metric",["macro",167]],["map","index","10","metric",["macro",168]]],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]],["map","index","49","dimension",["macro",71]],["map","index","40","dimension",["macro",72]],["map","index","41","dimension",["macro",73]],["map","index","42","dimension",["macro",74]],["map","index","43","dimension",["macro",75]],["map","index","44","dimension",["macro",76]],["map","index","45","dimension",["macro",77]],["map","index","46","dimension",["macro",78]],["map","index","47","dimension",["macro",79]],["map","index","48","dimension",["macro",80]],["map","index","50","dimension",["macro",81]],["map","index","51","dimension",["macro",82]],["map","index","52","dimension",["macro",83]],["map","index","53","dimension",["macro",84]],["map","index","54","dimension",["macro",85]],["map","index","55","dimension",["macro",86]],["map","index","56","dimension",["macro",87]],["map","index","57","dimension",["macro",88]],["map","index","58","dimension",["macro",89]],["map","index","59","dimension",["macro",90]],["map","index","60","dimension",["macro",91]],["map","index","61","dimension",["macro",92]],["map","index","62","dimension",["macro",93]],["map","index","63","dimension",["macro",94]],["map","index","64","dimension",["macro",95]],["map","index","65","dimension",["macro",96]],["map","index","66","dimension",["macro",97]],["map","index","67","dimension",["macro",98]],["map","index","68","dimension",["macro",99]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1168
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",169],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":["macro",170],
      "vtp_eventLabel":"no bounce",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1173
    },{
      "function":"__ua",
      "metadata":["map"],
      "setup_tags":["list",["tag",280,0]],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":["macro",171],
      "vtp_eventCategory":"Interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Enter a Form Field",
      "vtp_eventLabel":["macro",172],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1189
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Mobile Form Button Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":["macro",173],
      "vtp_eventLabel":["macro",176],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1196
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"POBOL - Other Interactions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Advanced Filter Interaction",
      "vtp_eventLabel":["macro",158],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]],["map","index","49","dimension",["macro",71]],["map","index","40","dimension",["macro",72]],["map","index","41","dimension",["macro",73]],["map","index","42","dimension",["macro",74]],["map","index","43","dimension",["macro",75]],["map","index","44","dimension",["macro",76]],["map","index","45","dimension",["macro",77]],["map","index","46","dimension",["macro",78]],["map","index","47","dimension",["macro",79]],["map","index","48","dimension",["macro",80]],["map","index","50","dimension",["macro",81]],["map","index","51","dimension",["macro",82]],["map","index","52","dimension",["macro",83]],["map","index","53","dimension",["macro",84]],["map","index","54","dimension",["macro",85]],["map","index","55","dimension",["macro",86]],["map","index","56","dimension",["macro",87]],["map","index","57","dimension",["macro",88]],["map","index","58","dimension",["macro",89]],["map","index","59","dimension",["macro",90]],["map","index","60","dimension",["macro",91]],["map","index","61","dimension",["macro",92]],["map","index","62","dimension",["macro",93]],["map","index","63","dimension",["macro",94]],["map","index","64","dimension",["macro",95]],["map","index","65","dimension",["macro",96]],["map","index","66","dimension",["macro",97]],["map","index","67","dimension",["macro",98]],["map","index","68","dimension",["macro",99]],["map","index","155","dimension",["macro",177]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1198
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"POBOL - Other Interactions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Map Interaction",
      "vtp_eventLabel":["macro",158],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]],["map","index","49","dimension",["macro",71]],["map","index","40","dimension",["macro",72]],["map","index","41","dimension",["macro",73]],["map","index","42","dimension",["macro",74]],["map","index","43","dimension",["macro",75]],["map","index","44","dimension",["macro",76]],["map","index","45","dimension",["macro",77]],["map","index","46","dimension",["macro",78]],["map","index","47","dimension",["macro",79]],["map","index","48","dimension",["macro",80]],["map","index","50","dimension",["macro",81]],["map","index","51","dimension",["macro",82]],["map","index","52","dimension",["macro",83]],["map","index","53","dimension",["macro",84]],["map","index","54","dimension",["macro",85]],["map","index","55","dimension",["macro",86]],["map","index","56","dimension",["macro",87]],["map","index","57","dimension",["macro",88]],["map","index","58","dimension",["macro",89]],["map","index","59","dimension",["macro",90]],["map","index","60","dimension",["macro",91]],["map","index","61","dimension",["macro",92]],["map","index","62","dimension",["macro",93]],["map","index","63","dimension",["macro",94]],["map","index","64","dimension",["macro",95]],["map","index","65","dimension",["macro",96]],["map","index","66","dimension",["macro",97]],["map","index","67","dimension",["macro",98]],["map","index","68","dimension",["macro",99]],["map","index","155","dimension",["macro",177]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1202
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"POBOL - Home Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Reserve a New PO Box",
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]],["map","index","49","dimension",["macro",71]],["map","index","40","dimension",["macro",72]],["map","index","41","dimension",["macro",73]],["map","index","42","dimension",["macro",74]],["map","index","43","dimension",["macro",75]],["map","index","44","dimension",["macro",76]],["map","index","45","dimension",["macro",77]],["map","index","46","dimension",["macro",78]],["map","index","47","dimension",["macro",79]],["map","index","48","dimension",["macro",80]],["map","index","50","dimension",["macro",81]],["map","index","51","dimension",["macro",82]],["map","index","52","dimension",["macro",83]],["map","index","53","dimension",["macro",84]],["map","index","54","dimension",["macro",85]],["map","index","55","dimension",["macro",86]],["map","index","56","dimension",["macro",87]],["map","index","57","dimension",["macro",88]],["map","index","58","dimension",["macro",89]],["map","index","59","dimension",["macro",90]],["map","index","60","dimension",["macro",91]],["map","index","61","dimension",["macro",92]],["map","index","62","dimension",["macro",93]],["map","index","63","dimension",["macro",94]],["map","index","64","dimension",["macro",95]],["map","index","65","dimension",["macro",96]],["map","index","66","dimension",["macro",97]],["map","index","67","dimension",["macro",98]],["map","index","68","dimension",["macro",99]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1203
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"POBOL - Other Interactions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Reserve a New PO Box",
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]],["map","index","49","dimension",["macro",71]],["map","index","40","dimension",["macro",72]],["map","index","41","dimension",["macro",73]],["map","index","42","dimension",["macro",74]],["map","index","43","dimension",["macro",75]],["map","index","44","dimension",["macro",76]],["map","index","45","dimension",["macro",77]],["map","index","46","dimension",["macro",78]],["map","index","47","dimension",["macro",79]],["map","index","48","dimension",["macro",80]],["map","index","50","dimension",["macro",81]],["map","index","51","dimension",["macro",82]],["map","index","52","dimension",["macro",83]],["map","index","53","dimension",["macro",84]],["map","index","54","dimension",["macro",85]],["map","index","55","dimension",["macro",86]],["map","index","56","dimension",["macro",87]],["map","index","57","dimension",["macro",88]],["map","index","58","dimension",["macro",89]],["map","index","59","dimension",["macro",90]],["map","index","60","dimension",["macro",91]],["map","index","61","dimension",["macro",92]],["map","index","62","dimension",["macro",93]],["map","index","63","dimension",["macro",94]],["map","index","64","dimension",["macro",95]],["map","index","65","dimension",["macro",96]],["map","index","66","dimension",["macro",97]],["map","index","67","dimension",["macro",98]],["map","index","68","dimension",["macro",99]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1204
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Purchase",
      "vtp_eventLabel":["macro",19],
      "vtp_dimension":["list",["map","index","105","dimension",["macro",100]],["map","index","119","dimension",["macro",102]],["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]],["map","index","152","dimension",["macro",103]],["map","index","153","dimension",["macro",115]],["map","index","154","dimension",["macro",116]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1205
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Postal Store Home Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":["macro",179],
      "vtp_eventLabel":["macro",180],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1209
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"MSP Delivery Search Filtering",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":["macro",181],
      "vtp_eventLabel":["macro",182],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1211
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Postal Store Search Filter Selection",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":["macro",183],
      "vtp_eventLabel":["template",["macro",184]," | ",["macro",183]],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1236
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"ROM",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"usage",
      "vtp_eventLabel":["macro",154],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1237
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Chatbot",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Presented to User",
      "vtp_eventLabel":["macro",19],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1242
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Chatbot",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Engaged by User",
      "vtp_eventLabel":["macro",19],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1243
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Videos",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":["macro",187],
      "vtp_eventLabel":["macro",188],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1250
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",134],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"USPS Tracking Available Actions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Proof of Delivery",
      "vtp_eventLabel":"Expand Section",
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]],["map","index","49","dimension",["macro",71]],["map","index","40","dimension",["macro",72]],["map","index","41","dimension",["macro",73]],["map","index","42","dimension",["macro",74]],["map","index","43","dimension",["macro",75]],["map","index","44","dimension",["macro",76]],["map","index","45","dimension",["macro",77]],["map","index","46","dimension",["macro",78]],["map","index","47","dimension",["macro",79]],["map","index","48","dimension",["macro",80]],["map","index","50","dimension",["macro",81]],["map","index","51","dimension",["macro",82]],["map","index","52","dimension",["macro",83]],["map","index","53","dimension",["macro",84]],["map","index","54","dimension",["macro",85]],["map","index","55","dimension",["macro",86]],["map","index","56","dimension",["macro",87]],["map","index","57","dimension",["macro",88]],["map","index","58","dimension",["macro",89]],["map","index","59","dimension",["macro",90]],["map","index","60","dimension",["macro",91]],["map","index","61","dimension",["macro",92]],["map","index","62","dimension",["macro",93]],["map","index","63","dimension",["macro",94]],["map","index","64","dimension",["macro",95]],["map","index","65","dimension",["macro",96]],["map","index","66","dimension",["macro",97]],["map","index","67","dimension",["macro",98]],["map","index","68","dimension",["macro",99]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1261
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",134],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"USPS Tracking Available Actions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Tracking History",
      "vtp_eventLabel":"Expand Section",
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]],["map","index","49","dimension",["macro",71]],["map","index","40","dimension",["macro",72]],["map","index","41","dimension",["macro",73]],["map","index","42","dimension",["macro",74]],["map","index","43","dimension",["macro",75]],["map","index","44","dimension",["macro",76]],["map","index","45","dimension",["macro",77]],["map","index","46","dimension",["macro",78]],["map","index","47","dimension",["macro",79]],["map","index","48","dimension",["macro",80]],["map","index","50","dimension",["macro",81]],["map","index","51","dimension",["macro",82]],["map","index","52","dimension",["macro",83]],["map","index","53","dimension",["macro",84]],["map","index","54","dimension",["macro",85]],["map","index","55","dimension",["macro",86]],["map","index","56","dimension",["macro",87]],["map","index","57","dimension",["macro",88]],["map","index","58","dimension",["macro",89]],["map","index","59","dimension",["macro",90]],["map","index","60","dimension",["macro",91]],["map","index","61","dimension",["macro",92]],["map","index","62","dimension",["macro",93]],["map","index","63","dimension",["macro",94]],["map","index","64","dimension",["macro",95]],["map","index","65","dimension",["macro",96]],["map","index","66","dimension",["macro",97]],["map","index","67","dimension",["macro",98]],["map","index","68","dimension",["macro",99]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1262
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",134],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"USPS Tracking Available Actions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Text \u0026 Email Updates",
      "vtp_eventLabel":"Expand Section",
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]],["map","index","49","dimension",["macro",71]],["map","index","40","dimension",["macro",72]],["map","index","41","dimension",["macro",73]],["map","index","42","dimension",["macro",74]],["map","index","43","dimension",["macro",75]],["map","index","44","dimension",["macro",76]],["map","index","45","dimension",["macro",77]],["map","index","46","dimension",["macro",78]],["map","index","47","dimension",["macro",79]],["map","index","48","dimension",["macro",80]],["map","index","50","dimension",["macro",81]],["map","index","51","dimension",["macro",82]],["map","index","52","dimension",["macro",83]],["map","index","53","dimension",["macro",84]],["map","index","54","dimension",["macro",85]],["map","index","55","dimension",["macro",86]],["map","index","56","dimension",["macro",87]],["map","index","57","dimension",["macro",88]],["map","index","58","dimension",["macro",89]],["map","index","59","dimension",["macro",90]],["map","index","60","dimension",["macro",91]],["map","index","61","dimension",["macro",92]],["map","index","62","dimension",["macro",93]],["map","index","63","dimension",["macro",94]],["map","index","64","dimension",["macro",95]],["map","index","65","dimension",["macro",96]],["map","index","66","dimension",["macro",97]],["map","index","67","dimension",["macro",98]],["map","index","68","dimension",["macro",99]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1263
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",134],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"USPS Tracking Available Actions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Schedule Redelivery",
      "vtp_eventLabel":"Expand Section",
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]],["map","index","49","dimension",["macro",71]],["map","index","40","dimension",["macro",72]],["map","index","41","dimension",["macro",73]],["map","index","42","dimension",["macro",74]],["map","index","43","dimension",["macro",75]],["map","index","44","dimension",["macro",76]],["map","index","45","dimension",["macro",77]],["map","index","46","dimension",["macro",78]],["map","index","47","dimension",["macro",79]],["map","index","48","dimension",["macro",80]],["map","index","50","dimension",["macro",81]],["map","index","51","dimension",["macro",82]],["map","index","52","dimension",["macro",83]],["map","index","53","dimension",["macro",84]],["map","index","54","dimension",["macro",85]],["map","index","55","dimension",["macro",86]],["map","index","56","dimension",["macro",87]],["map","index","57","dimension",["macro",88]],["map","index","58","dimension",["macro",89]],["map","index","59","dimension",["macro",90]],["map","index","60","dimension",["macro",91]],["map","index","61","dimension",["macro",92]],["map","index","62","dimension",["macro",93]],["map","index","63","dimension",["macro",94]],["map","index","64","dimension",["macro",95]],["map","index","65","dimension",["macro",96]],["map","index","66","dimension",["macro",97]],["map","index","67","dimension",["macro",98]],["map","index","68","dimension",["macro",99]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1264
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",134],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"USPS Tracking Available Actions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Change Your Delivery Instructions",
      "vtp_eventLabel":"Expand Section",
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]],["map","index","49","dimension",["macro",71]],["map","index","40","dimension",["macro",72]],["map","index","41","dimension",["macro",73]],["map","index","42","dimension",["macro",74]],["map","index","43","dimension",["macro",75]],["map","index","44","dimension",["macro",76]],["map","index","45","dimension",["macro",77]],["map","index","46","dimension",["macro",78]],["map","index","47","dimension",["macro",79]],["map","index","48","dimension",["macro",80]],["map","index","50","dimension",["macro",81]],["map","index","51","dimension",["macro",82]],["map","index","52","dimension",["macro",83]],["map","index","53","dimension",["macro",84]],["map","index","54","dimension",["macro",85]],["map","index","55","dimension",["macro",86]],["map","index","56","dimension",["macro",87]],["map","index","57","dimension",["macro",88]],["map","index","58","dimension",["macro",89]],["map","index","59","dimension",["macro",90]],["map","index","60","dimension",["macro",91]],["map","index","61","dimension",["macro",92]],["map","index","62","dimension",["macro",93]],["map","index","63","dimension",["macro",94]],["map","index","64","dimension",["macro",95]],["map","index","65","dimension",["macro",96]],["map","index","66","dimension",["macro",97]],["map","index","67","dimension",["macro",98]],["map","index","68","dimension",["macro",99]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1265
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",134],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"USPS Tracking Available Actions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":["macro",189],
      "vtp_eventLabel":"Expand Section",
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]],["map","index","49","dimension",["macro",71]],["map","index","40","dimension",["macro",72]],["map","index","41","dimension",["macro",73]],["map","index","42","dimension",["macro",74]],["map","index","43","dimension",["macro",75]],["map","index","44","dimension",["macro",76]],["map","index","45","dimension",["macro",77]],["map","index","46","dimension",["macro",78]],["map","index","47","dimension",["macro",79]],["map","index","48","dimension",["macro",80]],["map","index","50","dimension",["macro",81]],["map","index","51","dimension",["macro",82]],["map","index","52","dimension",["macro",83]],["map","index","53","dimension",["macro",84]],["map","index","54","dimension",["macro",85]],["map","index","55","dimension",["macro",86]],["map","index","56","dimension",["macro",87]],["map","index","57","dimension",["macro",88]],["map","index","58","dimension",["macro",89]],["map","index","59","dimension",["macro",90]],["map","index","60","dimension",["macro",91]],["map","index","61","dimension",["macro",92]],["map","index","62","dimension",["macro",93]],["map","index","63","dimension",["macro",94]],["map","index","64","dimension",["macro",95]],["map","index","65","dimension",["macro",96]],["map","index","66","dimension",["macro",97]],["map","index","67","dimension",["macro",98]],["map","index","68","dimension",["macro",99]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1266
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Tooltip Interactions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":["template",["macro",19]," | ",["macro",190]],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1267
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Scroll Tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":["macro",191],
      "vtp_eventLabel":["macro",172],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1323
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Internal Link Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":["macro",6],
      "vtp_eventLabel":"Adopt Household Final Submit",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1334
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Internal Link Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":["macro",6],
      "vtp_eventLabel":"Adopt Letter Final Submit",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1335
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Stamps Pages",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Stamp Releases by Year",
      "vtp_eventLabel":["template","Select: ",["macro",192]],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1336
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Stamps Pages",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":["template","Stamp Releases Available Now | ",["macro",194]],
      "vtp_eventLabel":["template","Select: ",["macro",30]],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1337
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Stamps Pages",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":["template","Stamp Hero Story | ",["macro",195]],
      "vtp_eventLabel":["template","Click Buy Now: ",["macro",196]],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1338
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Stamps Pages",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":["template","Related Stamp Products | ",["macro",195]],
      "vtp_eventLabel":["template","Click: ",["macro",62]],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1339
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Stamps Pages",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":["template","Stamp Releases Available Now | ",["macro",194]],
      "vtp_eventLabel":"Click to See More Stamps in Same Year",
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1340
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Stamps Pages",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":["template","Stamp Hero Story | ",["macro",195]],
      "vtp_eventLabel":"Click to See More",
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1341
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Postal Store Auto Suggest",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":["macro",30],
      "vtp_eventLabel":["macro",197],
      "vtp_dimension":["list",["map","index","97","dimension",["macro",197]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1342
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"App Downloads",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Informed Delivery App",
      "vtp_eventLabel":["macro",198],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1349
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCrossDomain":true,
      "vtp_acceptIncoming":true,
      "vtp_linkerDomains":["macro",132],
      "vtp_enableCookieOverrides":false,
      "vtp_formDecoration":false,
      "vtp_urlPosition":"query",
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "vtp_enableCookieFlagsFeature":false,
      "vtp_enableUrlPassthroughFeature":false,
      "tag_id":1350
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["template",["macro",18],"\/",["macro",46]]],["map","fieldName","title","value",["template",["macro",195],": ",["macro",46]]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",61],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1353
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",157],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":["macro",158],
      "vtp_eventLabel":["macro",177],
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",134],
      "vtp_metric":["list",["map","index","134","metric",["macro",199]],["map","index","135","metric",["macro",200]],["map","index","136","metric",["macro",201]],["map","index","137","metric",["macro",202]],["map","index","138","metric",["macro",203]],["map","index","139","metric",["macro",204]],["map","index","140","metric",["macro",205]],["map","index","141","metric",["macro",206]],["map","index","142","metric",["macro",207]]],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]],["map","index","49","dimension",["macro",71]],["map","index","40","dimension",["macro",72]],["map","index","41","dimension",["macro",73]],["map","index","42","dimension",["macro",74]],["map","index","43","dimension",["macro",75]],["map","index","44","dimension",["macro",76]],["map","index","45","dimension",["macro",77]],["map","index","46","dimension",["macro",78]],["map","index","47","dimension",["macro",79]],["map","index","48","dimension",["macro",80]],["map","index","50","dimension",["macro",81]],["map","index","51","dimension",["macro",82]],["map","index","52","dimension",["macro",83]],["map","index","53","dimension",["macro",84]],["map","index","54","dimension",["macro",85]],["map","index","55","dimension",["macro",86]],["map","index","56","dimension",["macro",87]],["map","index","57","dimension",["macro",88]],["map","index","58","dimension",["macro",89]],["map","index","59","dimension",["macro",90]],["map","index","60","dimension",["macro",91]],["map","index","61","dimension",["macro",92]],["map","index","62","dimension",["macro",93]],["map","index","63","dimension",["macro",94]],["map","index","64","dimension",["macro",95]],["map","index","65","dimension",["macro",96]],["map","index","66","dimension",["macro",97]],["map","index","67","dimension",["macro",98]],["map","index","68","dimension",["macro",99]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1379
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["template","\/passport-scheduler",["macro",208]]],["map","fieldName","title","value",["macro",209]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",61],
      "vtp_dimension":["list",["map","index","3","dimension",["macro",70]],["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1456
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Product Detail",
      "vtp_eventLabel":["macro",19],
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1458
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Postal Store Product Detail Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Scroll Interaction",
      "vtp_eventLabel":"You May Also Like",
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1459
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Main Nav",
      "vtp_eventLabel":["macro",30],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1460
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Main Nav",
      "vtp_eventLabel":"Logo",
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1461
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Header Nav",
      "vtp_eventLabel":["macro",30],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1462
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Footer Nav",
      "vtp_eventLabel":["macro",30],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1463
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Footer Nav",
      "vtp_eventLabel":"Logo",
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1466
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Footer Nav",
      "vtp_eventLabel":["macro",210],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1467
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Main Nav",
      "vtp_eventLabel":"Responsive Main Nav Toggle",
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1468
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Main Nav",
      "vtp_eventLabel":["template","Responsive Menuitem Toggle | ",["macro",30]],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1469
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Main Nav",
      "vtp_eventLabel":"Responsive Search Toggle",
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1471
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Mobile Main Nav",
      "vtp_eventLabel":"Mobile Main Nav Toggle",
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1472
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Mobile Main Nav",
      "vtp_eventLabel":["macro",30],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1473
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Mobile Main Nav",
      "vtp_eventLabel":"Logo",
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1474
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Mobile Footer Nav",
      "vtp_eventLabel":["macro",30],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1475
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Postal Store Nav Bar",
      "vtp_eventLabel":["macro",30],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1476
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Main Nav",
      "vtp_eventLabel":["template",["macro",211]," | ",["macro",30]],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1477
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Main Nav",
      "vtp_eventLabel":["template","Responsive Menuitem Toggle | ",["macro",212]],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1478
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Main Nav",
      "vtp_eventLabel":["template",["macro",213]," | ",["macro",214]],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1479
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Postal Store Product Detail Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Scroll Interaction",
      "vtp_eventLabel":"Recently Viewed",
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1481
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Postal Store Product Detail Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Scroll Interaction",
      "vtp_eventLabel":"Product Detail Tabs",
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1482
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Postal Store Product Detail Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Click Interaction",
      "vtp_eventLabel":"You May Also Like",
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1483
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Postal Store Product Detail Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Click Interaction",
      "vtp_eventLabel":"Recently Viewed",
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1484
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Postal Store Product Detail Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Click Interaction",
      "vtp_eventLabel":"Product Detail Tabs",
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1485
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["template","\/vpv\/zip-code-lookup\/",["macro",43]]],["map","fieldName","title","value",["template",["macro",195],": VPV: ",["macro",43]]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",61],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]],["map","index","21","dimension",["template","tools.usps.com\/vpv\/zip-code-lookup\/",["macro",43]]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1487
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["template","\/vpv\/zip-code-lookup\/",["macro",44],"\/",["macro",215]]],["map","fieldName","title","value",["template",["macro",195],": VPV: ",["macro",44],"\/",["macro",215]]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",61],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]],["map","index","21","dimension",["template","tools.usps.com\/vpv\/zip-code-lookup\/",["macro",44],"\/",["macro",215]]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1488
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Page Outage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Page Not Found",
      "vtp_eventLabel":["template","Page Not Found | ",["macro",6]],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1491
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Page Outage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":["macro",216],
      "vtp_eventLabel":["template","Doc Referrer (to 404)  |  ",["macro",217]],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1492
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_metric":["list",["map","index","20","metric",["macro",218]]],
      "vtp_gaSettings":["macro",61],
      "vtp_dimension":["list",["map","index","3","dimension",["macro",70]],["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]],["map","index","160","dimension",["macro",219]],["map","index","161","dimension",["macro",220]],["map","index","162","dimension",["macro",221]],["map","index","163","dimension",["macro",222]],["map","index","164","dimension",["macro",218]],["map","index","165","dimension",["macro",223]],["map","index","166","dimension",["macro",224]],["map","index","167","dimension",["template",["macro",225]," | ",["macro",226]]],["map","index","168","dimension",["macro",227]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1493
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1496
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",18]],["map","fieldName","title","value",["template",["macro",195]," | ",["macro",18]]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",61],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]],["map","index","21","dimension",["macro",6]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1520
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"978081151",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":false,
      "vtp_url":["macro",65],
      "vtp_enableRdpCheckbox":true,
      "tag_id":1529
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"978081151",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":false,
      "vtp_url":["macro",65],
      "vtp_enableRdpCheckbox":true,
      "tag_id":1530
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"POBOL - Other Interactions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Image Interaction",
      "vtp_eventLabel":["macro",67],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]],["map","index","49","dimension",["macro",71]],["map","index","40","dimension",["macro",72]],["map","index","41","dimension",["macro",73]],["map","index","42","dimension",["macro",74]],["map","index","43","dimension",["macro",75]],["map","index","44","dimension",["macro",76]],["map","index","45","dimension",["macro",77]],["map","index","46","dimension",["macro",78]],["map","index","47","dimension",["macro",79]],["map","index","48","dimension",["macro",80]],["map","index","50","dimension",["macro",81]],["map","index","51","dimension",["macro",82]],["map","index","52","dimension",["macro",83]],["map","index","53","dimension",["macro",84]],["map","index","54","dimension",["macro",85]],["map","index","55","dimension",["macro",86]],["map","index","56","dimension",["macro",87]],["map","index","57","dimension",["macro",88]],["map","index","58","dimension",["macro",89]],["map","index","59","dimension",["macro",90]],["map","index","60","dimension",["macro",91]],["map","index","61","dimension",["macro",92]],["map","index","62","dimension",["macro",93]],["map","index","63","dimension",["macro",94]],["map","index","64","dimension",["macro",95]],["map","index","65","dimension",["macro",96]],["map","index","66","dimension",["macro",97]],["map","index","67","dimension",["macro",98]],["map","index","68","dimension",["macro",99]],["map","index","155","dimension",["macro",177]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1537
    },{
      "function":"__ua",
      "metadata":["map"],
      "setup_tags":["list",["tag",280,0]],
      "teardown_tags":["list",["tag",279,0]],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Form Submit",
      "vtp_eventLabel":["macro",231],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1539
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"Test CNS transaction_Purchase",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Test CNS transaction_Purchase",
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-80133954-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1540
    },{
      "function":"__ua",
      "metadata":["map"],
      "teardown_tags":["list",["tag",281,2]],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Application",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","162","metric",["macro",233]],["map","index","163","metric",["macro",234]],["map","index","164","metric",["macro",236]],["map","index","165","metric",["macro",237]]],
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":["macro",19],
      "vtp_eventLabel":["macro",238],
      "vtp_dimension":["list",["map","index","170","dimension",["macro",232]],["map","index","171","dimension",["macro",239]],["map","index","172","dimension",["macro",240]],["map","index","173","dimension",["macro",235]],["map","index","174","dimension",["macro",241]],["map","index","175","dimension",["macro",242]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1541
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":["macro",243],
      "vtp_eventLabel":["macro",251],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]],["map","index","114","dimension",["macro",252]],["map","index","115","dimension",["macro",254]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1542
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"File Download",
      "vtp_eventLabel":["macro",251],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1543
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Impression",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Element Visibility",
      "vtp_eventLabel":["template",["macro",53]," | ",["macro",54]],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1545
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",255],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":["macro",256],
      "vtp_eventLabel":["macro",257],
      "vtp_dimension":["list",["map","index","80","dimension",["macro",258]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1567
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",255],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":["macro",256],
      "vtp_eventLabel":["macro",257],
      "vtp_dimension":["list",["map","index","80","dimension",["macro",258]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1568
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",255],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":["macro",256],
      "vtp_eventLabel":["macro",257],
      "vtp_dimension":["list",["map","index","80","dimension",["macro",258]],["map","index","75","dimension",["macro",259]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1569
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",255],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":["macro",256],
      "vtp_eventLabel":["macro",257],
      "vtp_dimension":["list",["map","index","80","dimension",["macro",258]],["map","index","70","dimension",["template",["macro",260]," | ",["macro",261]]],["map","index","71","dimension",["macro",262]],["map","index","72","dimension",["macro",263]],["map","index","73","dimension",["macro",264]],["map","index","74","dimension",["macro",265]],["map","index","76","dimension",["macro",266]],["map","index","77","dimension",["macro",267]],["map","index","78","dimension",["macro",268]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1570
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",255],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":["macro",256],
      "vtp_eventLabel":["macro",257],
      "vtp_dimension":["list",["map","index","80","dimension",["macro",258]],["map","index","79","dimension",["macro",269]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1571
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",255],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":["macro",256],
      "vtp_eventLabel":["macro",257],
      "vtp_dimension":["list",["map","index","80","dimension",["macro",258]],["map","index","79","dimension",["macro",269]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1572
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",255],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":["macro",256],
      "vtp_eventLabel":["macro",257],
      "vtp_dimension":["list",["map","index","80","dimension",["macro",258]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1573
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":["macro",270],
      "vtp_eventCategory":["macro",255],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":["macro",256],
      "vtp_eventLabel":["macro",271],
      "vtp_dimension":["list",["map","index","13","dimension",["macro",272]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1584
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Impression",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Medallia Popup",
      "vtp_eventLabel":["macro",274],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]],["map","index","23","dimension",["macro",273]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1587
    },{
      "function":"__ua",
      "metadata":["map"],
      "setup_tags":["list",["tag",280,0]],
      "teardown_tags":["list",["tag",279,0]],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"Enter a Form Field",
      "vtp_eventLabel":["macro",275],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1592
    },{
      "function":"__ua",
      "metadata":["map"],
      "teardown_tags":["list",["tag",281,2]],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Application",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","162","metric",["macro",233]],["map","index","163","metric",["macro",234]],["map","index","164","metric",["macro",236]],["map","index","165","metric",["macro",237]]],
      "vtp_gaSettings":["macro",61],
      "vtp_eventAction":"IVS",
      "vtp_eventLabel":["macro",276],
      "vtp_dimension":["list",["map","index","170","dimension",["macro",232]],["map","index","171","dimension",["macro",239]],["map","index","172","dimension",["macro",240]],["map","index","173","dimension",["macro",235]],["map","index","174","dimension",["macro",241]],["map","index","175","dimension",["macro",242]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1597
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-K2FRZL4","nickname","Floodlight Tags"]],
      "vtp_boundaries":["list",["zb","_eq",["macro",277],"true",false,false]],
      "vtp_enableTypeRestrictions":true,
      "vtp_whitelistedTypes":["list",["map","typeId","hl"],["map","typeId","sdl"],["map","typeId","fsl"],["map","typeId","cl"],["map","typeId","tl"],["map","typeId","jel"],["map","typeId","ytl"],["map","typeId","lcl"],["map","typeId","evl"],["map","typeId","vis"],["map","typeId","ctv"],["map","typeId","remm"],["map","typeId","smm"],["map","typeId","c"],["map","typeId","d"],["map","typeId","e"],["map","typeId","f"],["map","typeId","j"],["map","typeId","k"],["map","typeId","r"],["map","typeId","u"],["map","typeId","v"],["map","typeId","dbg"],["map","typeId","ev"],["map","typeId","cid"],["map","typeId","aev"],["map","typeId","gas"],["map","typeId","flc"],["map","typeId","html"],["map","typeId","gclidw"]],
      "tag_id":1598
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-P983HPP","nickname","imresearchcenter.com"]],
      "vtp_boundaries":["list",["zb","_re",["macro",6],"uspsimrc.mrmclient.com|imresearchcenter",false,true]],
      "vtp_enableTypeRestrictions":true,
      "vtp_whitelistedTypes":["list",["map","typeId","awct"],["map","typeId","gcs"],["map","typeId","ac360"],["map","typeId","flc"],["map","typeId","sp"],["map","typeId","fls"],["map","typeId","ts"],["map","typeId","ua"],["map","typeId","adm"],["map","typeId","opt"],["map","typeId","gclidw"],["map","typeId","ga"],["map","typeId","hl"],["map","typeId","sdl"],["map","typeId","fsl"],["map","typeId","cl"],["map","typeId","tl"],["map","typeId","jel"],["map","typeId","ytl"],["map","typeId","lcl"],["map","typeId","evl"],["map","typeId","vis"],["map","typeId","ctv"],["map","typeId","remm"],["map","typeId","smm"],["map","typeId","c"],["map","typeId","d"],["map","typeId","e"],["map","typeId","f"],["map","typeId","j"],["map","typeId","k"],["map","typeId","r"],["map","typeId","u"],["map","typeId","v"],["map","typeId","dbg"],["map","typeId","ev"],["map","typeId","cid"],["map","typeId","aev"],["map","typeId","gas"]],
      "tag_id":1599
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-NMSPBSH","nickname","uspsdelivers.com"]],
      "vtp_boundaries":["list",["zb","_re",["macro",6],"uspsdelivers.com|stage.uspscm.mrmclient.com|stage.usps-parcelpackaging.mrmclient.com|stage.uspsdelivers.mrmclient.com",false,true]],
      "vtp_enableTypeRestrictions":true,
      "vtp_whitelistedTypes":["list",["map","typeId","awct"],["map","typeId","gcs"],["map","typeId","ac360"],["map","typeId","flc"],["map","typeId","sp"],["map","typeId","fls"],["map","typeId","ts"],["map","typeId","ua"],["map","typeId","adm"],["map","typeId","opt"],["map","typeId","gclidw"],["map","typeId","ga"],["map","typeId","hl"],["map","typeId","sdl"],["map","typeId","fsl"],["map","typeId","cl"],["map","typeId","tl"],["map","typeId","jel"],["map","typeId","ytl"],["map","typeId","lcl"],["map","typeId","evl"],["map","typeId","vis"],["map","typeId","ctv"],["map","typeId","remm"],["map","typeId","smm"],["map","typeId","c"],["map","typeId","d"],["map","typeId","e"],["map","typeId","f"],["map","typeId","j"],["map","typeId","k"],["map","typeId","r"],["map","typeId","u"],["map","typeId","v"],["map","typeId","dbg"],["map","typeId","ev"],["map","typeId","cid"],["map","typeId","aev"],["map","typeId","gas"],["map","typeId","bzi"],["map","typeId","html"],["map","typeId","twitter_website_tag"]],
      "tag_id":1600
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-WJQB667","nickname","shipfromstore.com"]],
      "vtp_boundaries":["list",["zb","_cn",["macro",6],"uspsdelivers.com\/shipfromstore",false,false]],
      "vtp_enableTypeRestrictions":true,
      "vtp_whitelistedTypes":["list",["map","typeId","awct"],["map","typeId","gcs"],["map","typeId","ac360"],["map","typeId","flc"],["map","typeId","sp"],["map","typeId","fls"],["map","typeId","ts"],["map","typeId","ua"],["map","typeId","adm"],["map","typeId","opt"],["map","typeId","gclidw"],["map","typeId","ga"],["map","typeId","hl"],["map","typeId","sdl"],["map","typeId","fsl"],["map","typeId","cl"],["map","typeId","tl"],["map","typeId","jel"],["map","typeId","ytl"],["map","typeId","lcl"],["map","typeId","evl"],["map","typeId","vis"],["map","typeId","ctv"],["map","typeId","remm"],["map","typeId","smm"],["map","typeId","c"],["map","typeId","d"],["map","typeId","e"],["map","typeId","f"],["map","typeId","j"],["map","typeId","k"],["map","typeId","r"],["map","typeId","u"],["map","typeId","v"],["map","typeId","dbg"],["map","typeId","ev"],["map","typeId","cid"],["map","typeId","aev"],["map","typeId","gas"]],
      "tag_id":1601
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-57HSG42","nickname","deliverthefuture.com"]],
      "vtp_boundaries":["list",["zb","_re",["macro",6],"howwedeliver|fy18deliverthefuture",false,true]],
      "vtp_enableTypeRestrictions":false,
      "tag_id":1602
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-5CLKXVQ","nickname","Operation Santa 2018"]],
      "vtp_boundaries":["list",["zb","_re",["macro",6],"www.delivercheer.com|stage.usps-op-santa-adopter2018.mrmclient.com|uspsoperationsanta.com",false,true]],
      "vtp_enableTypeRestrictions":false,
      "tag_id":1603
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-KHXT6JW","nickname","USPIS.gov"]],
      "vtp_boundaries":["list",["zb","_eq",["macro",1],"uspis.gov",false,false]],
      "vtp_enableTypeRestrictions":true,
      "vtp_whitelistedTypes":["list",["map","typeId","awct"],["map","typeId","gcs"],["map","typeId","awcc"],["map","typeId","ac360"],["map","typeId","flc"],["map","typeId","sp"],["map","typeId","fls"],["map","typeId","ts"],["map","typeId","ua"],["map","typeId","gfct"],["map","typeId","adm"],["map","typeId","opt"],["map","typeId","gclidw"],["map","typeId","ga"],["map","typeId","hl"],["map","typeId","sdl"],["map","typeId","fsl"],["map","typeId","cl"],["map","typeId","tg"],["map","typeId","tl"],["map","typeId","jel"],["map","typeId","ytl"],["map","typeId","lcl"],["map","typeId","evl"],["map","typeId","vis"],["map","typeId","ctv"],["map","typeId","remm"],["map","typeId","smm"],["map","typeId","c"],["map","typeId","d"],["map","typeId","e"],["map","typeId","f"],["map","typeId","j"],["map","typeId","k"],["map","typeId","r"],["map","typeId","u"],["map","typeId","v"],["map","typeId","uv"],["map","typeId","dbg"],["map","typeId","ev"],["map","typeId","cid"],["map","typeId","aev"],["map","typeId","gas"]],
      "tag_id":1604
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_487",
      "tag_id":1605
    },{
      "function":"__hl",
      "tag_id":1606
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_1189",
      "tag_id":1607
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_1190",
      "tag_id":1608
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_1191",
      "tag_id":1609
    },{
      "function":"__cl",
      "tag_id":1610
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_1288",
      "tag_id":1611
    },{
      "function":"__cl",
      "tag_id":1612
    },{
      "function":"__fsl",
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_1327",
      "tag_id":1613
    },{
      "function":"__cl",
      "tag_id":1614
    },{
      "function":"__cl",
      "tag_id":1615
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_1352",
      "tag_id":1616
    },{
      "function":"__cl",
      "tag_id":1617
    },{
      "function":"__cl",
      "tag_id":1618
    },{
      "function":"__cl",
      "tag_id":1619
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_1492",
      "tag_id":1620
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_1494",
      "tag_id":1621
    },{
      "function":"__cl",
      "tag_id":1622
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_1537",
      "tag_id":1623
    },{
      "function":"__cl",
      "tag_id":1624
    },{
      "function":"__cl",
      "tag_id":1625
    },{
      "function":"__cl",
      "tag_id":1626
    },{
      "function":"__cl",
      "tag_id":1627
    },{
      "function":"__cl",
      "tag_id":1628
    },{
      "function":"__cl",
      "tag_id":1629
    },{
      "function":"__cl",
      "tag_id":1630
    },{
      "function":"__cl",
      "tag_id":1631
    },{
      "function":"__cl",
      "tag_id":1632
    },{
      "function":"__cl",
      "tag_id":1633
    },{
      "function":"__cl",
      "tag_id":1634
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_1806",
      "tag_id":1635
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_1808",
      "tag_id":1636
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_1810",
      "tag_id":1637
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_1811",
      "tag_id":1638
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_1815",
      "tag_id":1639
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_1816",
      "tag_id":1640
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_1817",
      "tag_id":1641
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_1837",
      "tag_id":1642
    },{
      "function":"__cl",
      "tag_id":1643
    },{
      "function":"__cl",
      "tag_id":1644
    },{
      "function":"__cl",
      "tag_id":1645
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_1915",
      "tag_id":1646
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":true,
      "vtp_useDomChangeListener":false,
      "vtp_elementSelector":".related-product-wrapper",
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_onScreenDuration":"50",
      "vtp_uniqueTriggerId":"2384666_2152",
      "tag_id":1647
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_2157",
      "tag_id":1648
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_2158",
      "tag_id":1649
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_2159",
      "tag_id":1650
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_2166",
      "tag_id":1651
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_2168",
      "tag_id":1652
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_2169",
      "tag_id":1653
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_2170",
      "tag_id":1654
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_2171",
      "tag_id":1655
    },{
      "function":"__cl",
      "tag_id":1656
    },{
      "function":"__cl",
      "tag_id":1657
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_2176",
      "tag_id":1658
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_2177",
      "tag_id":1659
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_2179",
      "tag_id":1660
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_2180",
      "tag_id":1661
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_2181",
      "tag_id":1662
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_2182",
      "tag_id":1663
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_2183",
      "tag_id":1664
    },{
      "function":"__cl",
      "tag_id":1665
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_2185",
      "tag_id":1666
    },{
      "function":"__cl",
      "tag_id":1667
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":true,
      "vtp_useDomChangeListener":false,
      "vtp_elementSelector":".recently-viewed-product-wrapper",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_onScreenDuration":"50",
      "vtp_uniqueTriggerId":"2384666_2189",
      "tag_id":1668
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":true,
      "vtp_useDomChangeListener":false,
      "vtp_elementSelector":".product-detail-tabs-wrapper",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_onScreenDuration":"50",
      "vtp_uniqueTriggerId":"2384666_2190",
      "tag_id":1669
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_2191",
      "tag_id":1670
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_2192",
      "tag_id":1671
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_2193",
      "tag_id":1672
    },{
      "function":"__hl",
      "tag_id":1673
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_2220",
      "tag_id":1674
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_2329",
      "tag_id":1675
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_2378",
      "tag_id":1676
    },{
      "function":"__cl",
      "tag_id":1677
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_2559",
      "tag_id":1678
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_2589",
      "tag_id":1679
    },{
      "function":"__cl",
      "tag_id":1680
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_2594",
      "tag_id":1681
    },{
      "function":"__cl",
      "tag_id":1682
    },{
      "function":"__fsl",
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_2596",
      "tag_id":1683
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_2598",
      "tag_id":1684
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"iframe[id^=\"kampyle\"]",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"5",
      "vtp_uniqueTriggerId":"2384666_2680",
      "tag_id":1685
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_elementSelector":"div[data-gtm-section]",
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2384666_2691",
      "tag_id":1686
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_2694",
      "tag_id":1687
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_2704",
      "tag_id":1688
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_2770",
      "tag_id":1689
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2384666_2771",
      "tag_id":1690
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" id=\"gtm-ecommerce-datalayer-purchase-clickNship-Desktop\"\u003E(function(){function g(){var e=document.getElementById(\"transNbr\");e\u0026\u0026e.innerText\u0026\u0026(c(),clearInterval(a),a=null)}function c(){var a=[],c=[];var b=document.getElementById(\"checkout-complete-table\");var f=b.querySelectorAll(\"tr td.fourth\");for(i=0;i\u003Cf.length;i++){b={};var d=f[0].innerText.trim().replace(\/\\n\/g,\", \");b.name=d;b.brand=\"USPS\";b.quantity=1;b.dimension102=d;c.push(d);a.push(b)}",["escape",["macro",279],8,16],"\u0026\u0026",["escape",["macro",280],8,16],"?dataLayer.push({event:\"ecomPurchase\",ecommerce:{purchase:{actionField:{id:",["escape",["macro",279],8,16],",\naffiliation:\"Click N Ship\",revenue:",["escape",["macro",280],8,16],",tax:null,shipping:\"0\",coupon:null},products:a}},loginStatus:null,accountType:null,customerID:",["escape",["macro",281],8,16],",accountStartDate:null,customerLTV:null,customerTransactions:null,pageName:null,pageSection:null,pageSubsection:null,pageCategoryNavId:null,pageCategoryId:null,productsPurchased:c.join(\", \"),paymentMethod:null,shipToZipCode:null}):",["escape",["macro",279],8,16],"||",["escape",["macro",280],8,16],"?",["escape",["macro",279],8,16],"?",["escape",["macro",280],8,16],"||dataLayer.push({event:\"ecomPurchaseFailed\",\nattributes:{eventAction:\"CNS Desktop - Order Total is invalid\",eventLabel:\"Order Total: \"+",["escape",["macro",282],8,16],"}}):dataLayer.push({event:\"ecomPurchaseFailed\",attributes:{eventAction:\"CNS Desktop - Transaction ID is invalid\",eventLabel:\"Transaction ID: \"+",["escape",["macro",278],8,16],"}}):dataLayer.push({event:\"ecomPurchaseFailed\",attributes:{eventAction:\"CNS Desktop - Both transaction ID and order total are invalid\",eventLabel:\"Order Total: \"+",["escape",["macro",282],8,16],"+\"Transaction ID: \"+",["escape",["macro",278],8,16],"}})}\nvar a=setInterval(g,500);setTimeout(function(){a\u0026\u0026(c(),clearInterval(a),a=null)},1E4)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":78
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" id=\"gtm-ecommerce-datalayer-purchase-clickNship-Mobile\"\u003E(function(){var e=[],f=[];var a={};var c=document.getElementById(\"product\").innerText.split(\":$\");var b=c[0].trim().replace(\/\\n\/g,\", \");a.name=b;a.price=c[1];a.quantity=1;a.brand=\"USPS\";a.dimension102=b;f.push(b);e.push(a);var d={};c=document.getElementById(\"ins\").innerText.split(\":$\");b=c[0];d.name=b;d.price=c[1];a.quantity=1;d.brand=\"USPS\";d.dimension102=b;f.push(b);e.push(d);",["escape",["macro",283],8,16],"?dataLayer.push({event:\"ecomPurchase\",ecommerce:{purchase:{actionField:{id:",["escape",["macro",284],8,16],",affiliation:\"Click N Ship\",\nrevenue:",["escape",["macro",283],8,16],",tax:null,shipping:\"0\",coupon:null},products:e}},loginStatus:null,accountType:null,customerID:null,accountStartDate:null,customerLTV:null,customerTransactions:null,pageName:null,pageSection:null,pageSubsection:null,pageCategoryNavId:null,pageCategoryId:null,productsPurchased:f.join(\", \"),paymentMethod:null,shipToZipCode:null}):dataLayer.push({event:\"ecomPurchaseFailed\",attributes:{eventAction:\"CNS Mobile - Order Total is invalid\",eventLabel:\"Order Total: \"+",["escape",["macro",285],8,16],"}})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":79
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"5453242\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E\u003Cnoscript\u003E\u003Cimg src=\"\/\/bat.bing.com\/action\/0?ti=5453242\u0026amp;Ver=2\" height=\"0\" width=\"0\" style=\"display:none; visibility: hidden;\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":945
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cimg src=\"https:\/\/trkn.us\/pixel\/c?ppt=557\u0026amp;g=dm_homepage\u0026amp;gid=2679\u0026amp;ord=",["escape",["macro",286],12],"\" height=\"0\" width=\"0\" border=\"0\"\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":946
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"5436245\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E\u003Cnoscript\u003E\u003Cimg src=\"\/\/bat.bing.com\/action\/0?ti=5436245\u0026amp;Ver=2\" height=\"0\" width=\"0\" style=\"display:none; visibility: hidden;\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1020
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript async type=\"text\/gtmscript\" id=\"_fed_an_ua_tag\" data-gtmsrc=\" https:\/\/dap.digitalgov.gov\/Universal-Federated-Analytics-Min.js?agency=USPS\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1021
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" id=\"gtm-ecommerce-datalayer-purchase-EDDM\"\u003E(function(){dataLayer.push({event:\"ecomPurchase\",ecommerce:{purchase:{actionField:{id:",["escape",["macro",287],8,16],",affiliation:\"Every Door Direct Mail\",revenue:",["escape",["macro",288],8,16],",tax:null,shipping:null,coupon:null}}},loginStatus:null,accountType:null,customerID:",["escape",["macro",289],8,16],",accountStartDate:null,customerLTV:null,customerTransactions:null,pageName:null,pageSection:null,pageSubsection:null,pageCategoryNavId:null,pageCategoryId:null,productsPurchased:null,paymentMethod:null,shipToZipCode:null})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1024
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\" id=\"gtm-ecommerce-datalayer-purchase-OPI\"\u003E(function(){var a=JSON.parse(",["escape",["macro",113],8,16],"),d=a.ns_product_id?a.ns_product_id.split(\",\"):null,c=a.product?a.product.split(\",\"):null,e=a.ns_product_price?a.ns_product_price.split(\",\"):null,f=a.ns_qty?a.ns_qty.split(\",\"):null,g=a.ns_product_grp?a.ns_product_grp.split(\",\"):null,h=a.product_description?a.product_description.split(\";\"):null,k=a.availability?a.availability.split(\",\"):null,l=[];for(i=0;i\u003Cc.length;i++){var b={};b.id=d[i]?d[i]:null;b.name=c[i]?c[i]:null;b.category=g[i]?g[i]:null;b.price=\ne[i]?e[i]:null;b.quantity=f[i]?+f[i]:null;b.brand=a.ns_brand?a.ns_brand:null;b.dimension101=k[i]?k[i]:null;b.dimension102=h[i]?h[i]:null;l.push(b)}dataLayer.push({event:\"ecomPurchase\",ecommerce:{purchase:{actionField:{id:a.ns_order_id,affiliation:\"Postal Store\",revenue:a.order_total,tax:null,shipping:a.order_shipping,coupon:null},products:l}},loginStatus:null,accountType:a.customer_type,customerID:a.crid,accountStartDate:a.account_startdate,customerLTV:null,customerTransactions:null,pageName:a.name,\npageSection:a.section,pageSubsection:a.sub_section,pageCategoryNavId:null,pageCategoryId:null,productsPurchased:a.product,paymentMethod:null,shipToZipCode:null})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1025
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\" id=\"gtm-ecommerce-datalayer-purchase-PFS\"\u003E(function(){var a=JSON.parse(",["escape",["macro",113],8,16],"),d=a.ns_product_id?a.ns_product_id.split(\",\"):null,c=a.product?a.product.split(\",\"):null,e=a.ns_product_price?a.ns_product_price.split(\",\"):null,f=a.ns_qty?a.ns_qty.split(\",\"):null,g=a.ns_product_grp?a.ns_product_grp.split(\",\"):null,h=a.product_description?a.product_description.split(\";\"):null,k=a.availability?a.availability.split(\",\"):null,l=[];for(i=0;i\u003Cc.length;i++){var b={};b.id=d[i]?d[i]:null;b.name=c[i]?c[i]:null;b.category=g[i]?g[i]:null;b.price=\ne[i]?e[i]:null;b.quantity=f[i]?+f[i]:null;b.brand=a.ns_brand?a.ns_brand:null;b.dimension101=k[i]?k[i]:null;b.dimension102=h[i]?h[i]:null;l.push(b)}dataLayer.push({event:\"ecomPurchase\",ecommerce:{purchase:{actionField:{id:a.ns_order_id,affiliation:\"Postal Store\",revenue:a.order_total,tax:null,shipping:a.order_shipping,coupon:null},products:l}},loginStatus:null,accountType:a.customer_type,customerID:a.crid,accountStartDate:a.account_startdate,customerLTV:null,customerTransactions:null,pageName:a.name,\npageSection:a.section,pageSubsection:a.sub_section,pageCategoryNavId:null,pageCategoryId:null,productsPurchased:a.product,paymentMethod:null,shipToZipCode:null})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1026
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" id=\"gtm-ecommerce-datalayer-purchase-PO-Boxes\"\u003E(function(){var c=[],e=[],a,f=document.querySelectorAll(\".fontStyleK1\")[1];for(a=0;2\u003Ea;a++){var b={};var d=f.innerText.split(\"\\n\")[a].split(\" (\");b.name=d[0];quantity=+d[1].match(\/\\d\/g).toString();b.quantity=quantity;price=document.querySelectorAll(\".fontStyleK1\")[4].innerText.split(\"\\n\")[a].split(\" \");b.price=price[0].replace(\/\\$|,\/g,\"\")\/quantity;e.push(d[0]);c.push(b)}dataLayer.push({event:\"ecomPurchase\",ecommerce:{purchase:{actionField:{id:document.querySelectorAll(\".fontStyleK1\")[3].innerText,\naffiliation:\"PO Boxes\",revenue:document.querySelectorAll(\".fontStyleK1\")[5].innerText.replace(\/\\$|,\/g,\"\"),variant:document.querySelectorAll(\".fontStyleK1\")[8].innerText,tax:null,shipping:null,coupon:null},products:c}},loginStatus:null,accountType:null,customerID:null,accountStartDate:null,customerLTV:null,customerTransactions:null,pageName:null,pageSection:null,pageSubsection:null,pageCategoryNavId:null,pageCategoryId:null,productsPurchased:c.join(\", \"),paymentMethod:null,shipToZipCode:null})})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1027
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\" id=\"gtm-ecommerce-datalayer-purchase-PUOD\"\u003E(function(){var a=JSON.parse(",["escape",["macro",113],8,16],"),d=a.ns_product_id?a.ns_product_id.split(\",\"):null,c=a.product?a.product.split(\",\"):null,e=a.ns_product_price?a.ns_product_price.split(\",\"):null,f=a.ns_qty?a.ns_qty.split(\",\"):null,g=a.ns_product_grp?a.ns_product_grp.split(\",\"):null,h=a.product_description?a.product_description.split(\";\"):null,k=a.availability?a.availability.split(\",\"):null,l=[];for(i=0;i\u003Cc.length;i++){var b={};b.id=d[i]?d[i]:null;b.name=c[i]?c[i]:null;b.category=g[i]?g[i]:null;b.price=\ne[i]?e[i]:null;b.quantity=f[i]?+f[i]:null;b.brand=a.ns_brand?a.ns_brand:null;b.dimension101=k[i]?k[i]:null;b.dimension102=h[i]?h[i]:null;l.push(b)}dataLayer.push({event:\"ecomPurchase\",ecommerce:{purchase:{actionField:{id:a.ns_order_id,affiliation:\"Postal Store\",revenue:",["escape",["macro",290],8,16],",tax:null,shipping:a.order_shipping,coupon:null},products:l}},loginStatus:null,accountType:a.customer_type,customerID:a.crid,accountStartDate:a.account_startdate,customerLTV:null,customerTransactions:null,pageName:a.name,\npageSection:a.section,pageSubsection:a.sub_section,pageCategoryNavId:null,pageCategoryId:null,productsPurchased:a.product,paymentMethod:null,shipToZipCode:null})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1028
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript id=\"gtm-hover-listener\" type=\"text\/gtmscript\"\u003E(function(k,n){function l(c){var a=c.target;a.__htimer=setTimeout(function(){e(a,\"mouseLeave\",d);dataLayer.push({event:\"hover\",attributes:{element:a}})},500);f(a,\"mouseleave\",d)}function d(a){a=a.target;clearTimeout(a.__htimer);a.__htimer=null;e(a,\"mouseleave\",d)}var g=[\"",["escape",["macro",291],7],"\"],f=",["escape",["macro",292],8,16],",e=",["escape",["macro",293],8,16],",a;for(a=0;a\u003Cg.length;a++){try{var h=k.querySelectorAll(g[a])}catch(c){if(",["escape",["macro",7],8,16],")throw\"DOMException: GTM Hover Listener - Invalid Query Selector in variable Constant - Hover Listener CSS Selectors; \"+\nc.message;}var b;for(b=0;b\u003Ch.length;b++){var m=h[b];f(m,\"mouseenter\",l)}}})(document,window);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1032
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript id=\"gtm-chtml-product-impressions-batcher\" type=\"text\/gtmscript\"\u003E(function(){function h(a){dataLayer.push({event:\"impressionsChunk\",ecommerce:{impressions:a}})}var c=",["escape",["macro",108],8,16],";if(c){var l=",["escape",["macro",294],8,16],",m=",["escape",["macro",295],8,16],",n=",["escape",["macro",296],8,16],",k=c.length,d=1,e=0,b=[],a;for(a=0;a\u003Ck;a++){var f=c[a];var g=l(m(f,d));d++;e+g\u003Cn?(e+=g,b.push(f)):(h(b),b=[f],d=1,e=g);a===k-1\u0026\u0026h(b)}}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1126
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nugm8\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1132
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,c,d,a){b.twq||(a=b.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1\",a.queue=[],t=c.createElement(d),t.async=!0,t.src=\"\/\/static.ads-twitter.com\/uwt.js\",s=c.getElementsByTagName(d)[0],s.parentNode.insertBefore(t,s))}(window,document,\"script\");twq(\"init\",\"nugm8\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1149
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1573723949529510\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1573723949529510\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1150
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"5453242\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E\u003Cnoscript\u003E\u003Cimg src=\"\/\/bat.bing.com\/action\/0?ti=5453242\u0026amp;Ver=2\" height=\"0\" width=\"0\" style=\"display:none; visibility: hidden;\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1152
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function a(){++b;2==b\u0026\u0026(c=!0);d()}function g(){e=!0;d()}function d(){c\u0026\u0026e\u0026\u0026!f\u0026\u0026(f=!0,dataLayer.push({event:\"GAEvent\",eventCategory:\"NoBounce\",eventAction:\"Time spent and page scrolled\"}))}var e=!1,c=!1,f=!1,b=0;setTimeout(g,3E4);window.addEventListener?window.addEventListener(\"scroll\",a,!1):window.attachEvent(\"onScroll\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1172
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript id=\"gtm-form-listener\" type=\"text\/gtmscript\"\u003E(function(c,l){function d(){function d(b){var a=b.target,d=a.className,e=a.id;d+=e;var g;if(g=m[e]||a.id)g=g.replace(\/^\\s+\/,\"\"),g=g.replace(\/\\s+$\/,\"\");var c=+new Date;b=b.type;var f=a.type;if(\"password\"!==f)if(\"SELECT\"===a.tagName){var k=a.options[a.selectedIndex];k=k.textContent||k.innerText}else k=\"checkbox\"===f||\"radio\"===f?a.checked:a.value;a=a.form\u0026\u0026a.form.action?a.form.action:\"No Form Target Detected\";var h;\"focus\"===b\u0026\u0026(n[d]=c);\"blur\"===b\u0026\u0026(h=c-(n[d]||c));dataLayer.push({event:\"form\"+l(b),\nattributes:{id:e,label:g,timestamp:c,timing:h,value:k,form:a}})}function l(b){return b.split(\/\\s|-|_\/g).map(function(a){a=a.toLowerCase().split(\"\");a[0]=a[0].toUpperCase();return a.join(\"\")}).join(\" \")}var e=c.getElementsByTagName(\"input\"),p=c.getElementsByTagName(\"label\"),q=c.body.textContent?\"textContent\":\"innerText\",m={},n={},b;for(b=0;b\u003Ce.length;b++){var f=e[b];h(f,\"blur\",d);h(f,\"focus\",d)}for(b=0;b\u003Cp.length;b++)e=p[b],(f=e.getAttribute(\"for\"))\u0026\u0026(m[f]=e[q])}var h=",["escape",["macro",297],8,16],";\"complete\"===\nc.readyState?d():h(l,\"load\",d)})(document,window);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1188
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.querySelector(\"#searchInput\");a\u0026\u0026a\u0026\u0026a.addEventListener(\"keyup\",function(a){13===a.keyCode\u0026\u0026window.dataLayer.push({event:\"enterToSearch\",enterElement:a.target})},!0)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1199
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" id=\"gtm-scroll-tracking\"\u003E(function(h,l,a){function q(){if(!h.querySelector||!h.body.getBoundingClientRect)return!1;a.dataLayerName=a.dataLayerName||\"dataLayer\";a.distances=a.distances||{};u();r(l,\"scroll\",y(u,500))}function v(k,a,f,b,d){var e;for(e=0;e\u003Ca.length;e++){var c=parseInt(a[e],10),g=\"%\"!==f?c+d:c\/100*b+d;c+=f;g\u003C=b+d\u0026\u0026(k[c]=g)}return k}function w(a,g){var k=parseInt(a,10),b=g\/k,d=[],e;for(e=1;e\u003Cb+1;e++)d.push(e*k);return d}function u(){var k=x(a.bottom),g=x(a.top);var f=h.body;var b=h.documentElement;f=Math.max(f.scrollHeight,\nf.offsetHeight,b.clientHeight,b.scrollHeight,b.offsetHeight);g\u0026\u0026(f-=g);k\u0026\u0026(f=k-(g||0));f-=5;b=g||0;var d=z()||{},e=[],c=[],m;if(a.distances.percentages\u0026\u0026(a.distances.percentages.each\u0026\u0026(e=e.concat(a.distances.percentages.each)),a.distances.percentages.every))for(m=0;m\u003Ca.distances.percentages.every.length;m++)e=w(a.distances.percentages.every[m],100),e=c.concat(e);if(a.distances.pixels\u0026\u0026(a.distances.pixels.each\u0026\u0026(c=c.concat(a.distances.pixels.each)),a.distances.pixels.every))for(m=0;m\u003Ca.distances.pixels.every.length;m++){var A=\nw(a.distances.pixels.every[m],f);c=c.concat(A)}d=v(d,e,\"%\",f,b);f=d=v(d,c,\"px\",f,b);b=void 0!==l.pageXOffset;d=\"CSS1Compat\"===(h.compatMode||\"\");b=b?l.pageYOffset:d?h.documentElement.scrollTop:h.body.scrollTop;b=parseInt(b,10);d=parseInt;c=\"CSS1Compat\"===h.compatMode?h.documentElement:h.body;c=c.clientHeight;b+=d(c,10);for(var p in f)if(d=f[p],b\u003Ed\u0026\u0026!n[p]\u0026\u0026d\u003C(k||Infinity)\u0026\u0026d\u003E(g||0))if(n[p]=!0,d=p,c=l.GoogleAnalyticsObject,\"undefined\"===typeof l[a.dataLayerName]||a.forceSyntax)if(\"function\"===typeof l[c]\u0026\u0026\n\"function\"===typeof l[c].getAll\u0026\u00262!==a.forceSyntax)l[c](\"send\",\"event\",a.category,d,a.label,{nonInteraction:1});else\"undefined\"!==typeof l._gaq\u0026\u00261!==a.forceSyntax\u0026\u0026l._gaq.push([\"_trackEvent\",a.category,d,a.label,0,!0]);else l[a.dataLayerName].push({event:\"scrollTracking\",attributes:{distance:d,label:a.label}})}function x(a){if(\"number\"===typeof a||parseInt(a,10))return parseInt(a,10);try{var k=1===a.nodeType?a:h.querySelector(a);return t(k)}catch(f){}}function y(a,g){var k,b,d,e=null,c=0,h=function(){c=\nnew Date;e=null;d=a.apply(k,b)};return function(){var f=new Date;c||(c=f);var m=g-(f-c);k=this;b=arguments;0\u003E=m?(clearTimeout(e),e=null,c=f,d=a.apply(k,b)):e||(e=setTimeout(h,m));return d}}function r(a,g,f){if(a.addEventListener)a.addEventListener(g,f);else if(a.attachEvent)a.attachEvent(\"on\"+g,function(b){f.call(a,b)});else if(\"undefined\"===typeof a[\"on\"+g]||null===a[\"on\"+g])a[\"on\"+g]=function(b){f.call(a,b)}}function t(a){a=a.getBoundingClientRect().top;var k=void 0!==l.pageYOffset?l.pageYOffset:\n(h.documentElement||h.body.parentNode||h.body).scrollTop;return a+k}var n={};!a.distances.percentages||!a.distances.percentages.every||a.distances.percentages.every instanceof Array||(a.distances.percentages.every=[a.distances.percentages.every]);!a.distances.pixels||!a.distances.pixels.every||a.distances.pixels.every instanceof Array||(a.distances.pixels.every=[a.distances.pixels.every]);var z=function(a){function g(){var d,e,c;f={};if(a.each)for(c=0;c\u003Ca.each.length;c++){var b=a.each[c];n[b]||(d=\nh.querySelector(b))\u0026\u0026(f[b]=t(d))}if(a.every)for(c=0;c\u003Ca.every.length;c++){b=a.every[c];var g=h.querySelectorAll(b);if(g.length\u0026\u0026!n[b+\":\"+(g.length-1)])for(e=0;e\u003Cg.length;e++){var k=b+\":\"+e;n[k]||(d=g[e],f[k]=t(d))}}}if(a){var f={},b=0;g();return function(){var a={},e;b++;10\u003Cb\u0026\u0026(g(),b=0);for(e in f)a[e]=f[e];return a}}}(a.distances.elements);\"loading\"!==h.readyState?q():h.addEventListener?r(h,\"DOMContentLoaded\",q):r(l,\"load\",q)})(document,window,{forceSyntax:!1,dataLayerName:!1,distances:{percentages:{each:[10,\n90],every:[25]},pixels:{each:[],every:[]},elements:{each:[],every:[]}},top:null,bottom:null,category:\"Scroll Tracking\",label:document.location.pathname});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1207
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" id=\"gtm-cookie-setter\"\u003E(function(g){var a=",["escape",["macro",298],8,16],",c=a.cookieName,d=encodeURIComponent(a.cookieValue),b=parseFloat(a.cookieExpires),e=a.cookieDomain;a=a.cookiePath||\"\/\";var f=\"\";isNaN(b)||0===b||(f=\"; Expires\\x3d\"+(new Date(+new Date+864E5*b)).toGMTString());\"undefined\"!==typeof c\u0026\u0026\"undefined\"!==typeof d\u0026\u0026(g.cookie=c+\"\\x3d\"+d+f+(e?\"; Domain\\x3d\"+e:\"\")+(a?\"; Path\\x3d\"+a:\"\"))})(document);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1238
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" id=\"gtm-cookie-remover\"\u003E(function(d){var a=",["escape",["macro",298],8,16],",b=a.cookieName,c=a.cookieDomain;a=a.cookiePath;\"undefined\"!==typeof b\u0026\u0026(d.cookie=b+\"\\x3d; Expires\\x3dThu, 01 Jan 1970 00:00:01 GMT\"+(c?\"; Domain\\x3d\"+c:\"\")+(a?\"; Path\\x3d\"+a:\"\"))})(document);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1239
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EenableIva();console.log(\"insert chatbot code\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1241
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EElement.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(a){a=(this.document||this.ownerDocument).querySelectorAll(a);for(var b=a.length;0\u003C=--b\u0026\u0026a.item(b)!==this;);return-1\u003Cb});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1246
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" id=\"gtm-youtube-tracking\"\u003E(function(h,f,k){function m(){var b=[].slice.call(h.getElementsByTagName(\"iframe\")).concat([].slice.call(h.getElementsByTagName(\"embed\"))),a;for(a=0;a\u003Cb.length;a++){var d=n(b[a]);if(d){d=b[a];var e=f.location,c=h.createElement(\"a\");c.href=d.src;c.hostname=\"www.youtube.com\";c.protocol=e.protocol;var g=\"\/\"===c.pathname.charAt(0)?c.pathname:\"\/\"+c.pathname;-1\u003Cc.search.indexOf(\"enablejsapi\")||(c.search=(0\u003Cc.search.length?c.search+\"\\x26\":\"\")+\"enablejsapi\\x3d1\");if(!(-1\u003Cc.search.indexOf(\"origin\"))\u0026\u0026-1===\ne.hostname.indexOf(\"localhost\")){var w=e.port?\":\"+e.port:\"\";e=e.protocol+\"%2F%2F\"+e.hostname+w;c.search=c.search+\"\\x26origin\\x3d\"+e}\"application\/x-shockwave-flash\"===d.type\u0026\u0026(e=h.createElement(\"iframe\"),e.height=d.height,e.width=d.width,g=g.replace(\"\/v\/\",\"\/embed\/\"),d.parentNode.parentNode.replaceChild(e,d.parentNode),d=e);c.pathname=g;d.src!==c.href+c.hash\u0026\u0026(d.src=c.href+c.hash);p(d)}}\"addEventListener\"in h\u0026\u0026h.addEventListener(\"load\",x,!0)}function n(b){b=b.src||\"\";return-1\u003Cb.indexOf(\"youtube.com\/embed\/\")||\n-1\u003Cb.indexOf(\"youtube.com\/v\/\")?!0:!1}function p(b){var a=YT.get(b.id);a||(a=new YT.Player(b,{}));\"undefined\"===typeof b.pauseFlag\u0026\u0026(b.pauseFlag=!1,a.addEventListener(\"onStateChange\",function(a){y(a,b)}))}function z(b){var a={};g.events[\"Watch to End\"]\u0026\u0026(a[\"Watch to End\"]=Math.min(b-3,Math.floor(.99*b)));if(g.percentageTracking){var d=[],e;g.percentageTracking.each\u0026\u0026(d=d.concat(g.percentageTracking.each));if(g.percentageTracking.every){var c=parseInt(g.percentageTracking.every,10),f=100\/c;for(e=1;e\u003C\nf;e++)d.push(e*c)}for(e=0;e\u003Cd.length;e++)f=d[e],c=f+\"%\",f=b*f\/100,a[c]=Math.floor(f)}return a}function y(b,a){var d=b.data,e=b.target,c=e.getVideoUrl();c=c.match(\/[?\u0026]v=([^\u0026#]*)\/)[1];var f=e.getPlayerState(),g=Math.floor(e.getDuration()),h=z(g);g={1:\"Play\",2:\"Pause\"};g=g[d];a.playTracker=a.playTracker||{};1!==f||a.timer?(clearInterval(a.timer),a.timer=!1):(clearInterval(a.timer),a.timer=setInterval(function(){var b=e,d=h,c=a.videoId,g=b.getCurrentTime(),f;b[c]=b[c]||{};for(f in d)d[f]\u003C=g\u0026\u0026!b[c][f]\u0026\u0026\n(b[c][f]=!0,q(c,f))},1E3));1===d\u0026\u0026(a.playTracker[c]=!0,a.videoId=c,a.pauseFlag=!1);if(!a.playTracker[a.videoId])return!1;if(2===d){if(a.pauseFlag)return!1;a.pauseFlag=!0}r[g]\u0026\u0026q(a.videoId,g)}function q(b,a){var d=\"https:\/\/www.youtube.com\/watch?v\\x3d\"+b,e=f.GoogleAnalyticsObject;if(\"undefined\"===typeof f[t]||g.forceSyntax)if(\"function\"===typeof f[e]\u0026\u0026\"function\"===typeof f[e].getAll\u0026\u00262!==g.forceSyntax)f[e](\"send\",\"event\",\"Videos\",a,d);else\"undefined\"!==typeof f._gaq\u0026\u00261!==A\u0026\u0026f._gaq.push([\"_trackEvent\",\n\"Videos\",a,d]);else f[t].push({event:\"youTubeTrack\",attributes:{videoUrl:d,videoAction:a}})}function u(b,a,d){if(b.addEventListener)b.addEventListener(a,d);else if(b.attachEvent)b.attachEvent(\"on\"+a,function(a){a.target=a.target||a.srcElement;d.call(b,a)});else if(\"undefined\"===typeof b[\"on\"+a]||null===b[\"on\"+a])b[\"on\"+a]=function(a){a.target=a.target||a.srcElement;d.call(b,a)}}function x(b){b=b.target||b.srcElement;var a=n(b);\"IFRAME\"===b.tagName\u0026\u0026a\u0026\u0026-1\u003Cb.src.indexOf(\"enablejsapi\")\u0026\u0026-1\u003Cb.src.indexOf(\"origin\")\u0026\u0026\np(b)}var g=k||{},A=g.forceSyntax||0,t=g.dataLayerName||\"dataLayer\",r={Play:!0,Pause:!0,\"Watch to End\":!0},l;k=h.createElement(\"script\");k.src=\"\/\/www.youtube.com\/iframe_api\";var v=h.getElementsByTagName(\"script\")[0];v.parentNode.insertBefore(k,v);for(l in g.events)g.events.hasOwnProperty(l)\u0026\u0026(r[l]=g.events[l]);f.onYouTubeIframeAPIReady=function(){var b=f.onYouTubeIframeAPIReady;return function(){b\u0026\u0026b.apply(this,arguments);navigator.userAgent.match(\/MSIE [67]\\.\/gi)||(\"loading\"!==h.readyState?m():h.addEventListener?\nu(h,\"DOMContentLoaded\",m):u(f,\"load\",m))}}()})(document,window,{events:{Play:!0,Pause:!0,\"Watch to End\":!0},percentageTracking:{every:25,each:[10,90]}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1249
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efor(var iframesArr=[].slice.call(document.getElementsByTagName(\"iframe\")),hostname=document.location.hostname,origin=encodeURIComponent(\"https:\/\/\"+hostname),i=0;i\u003CiframesArr.length;i++){var iframeDataSrc=iframesArr[i].getAttribute(\"data-src\");if(iframeDataSrc\u0026\u0026iframeDataSrc[i].indexOf(\"youtube.com\")){var updatedDataSrc=iframeDataSrc.concat(\"\\x26enablejsapi\\x3d1\\x26origin\\x3d\"+origin);iframeDataSrc=iframesArr[i].setAttribute(\"data-src\",updatedDataSrc)}};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1259
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EenableIva();console.log(\"insert chatbot code\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1271
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"533374513433337\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=533374513433337\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1281
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nugcr\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1282
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(b){if(!window.pintrk){window.pintrk=function(){window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var a=window.pintrk;a.queue=[];a.version=\"3.0\";a=document.createElement(\"script\");a.async=!0;a.src=b;b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)}}(\"https:\/\/s.pinimg.com\/ct\/core.js\");pintrk(\"load\",\"2621041933204\");pintrk(\"page\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/ct.pinterest.com\/v3\/?tid=2621041933204\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Epintrk(\"track\",\"pagevisit\");\u003C\/script\u003E\n  \u003Cnoscript\u003E\n    \u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/ct.pinterest.com\/v3\/?tid=2621041933204\u0026amp;event=pagevisit\u0026amp;noscript=1\"\u003E\n  \u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1283
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction getDomain(){return\"file:\"===window.location.protocol||\"about:\"===window.location.protocol?\"*\":window.location.protocol+\"\/\/\"+window.location.host}function launchIva(){var a={messageType:\"Launchiva\",message:{}};a.message.source=\"usps\";a.message.launchPointName=\"ChatNow\";a.message.launchParameter=\"\";a.message.breakPointName=\"largeDesktop\";window.postMessage(a,getDomain())}\nfunction launchIvaPon(a){var b={messageType:\"Launchiva\",message:{}};b.message.source=\"usps\";b.message.launchPointName=\"PointOfNeed\";b.message.launchParameter=a||\"test PON\";b.message.breakPointName=\"largeDesktop\";window.postMessage(b,getDomain())}function enableIva(){var a={messageType:\"EnableIva\",message:{}};a.message.source=\"usps\";a.message.breakPointName=\"largeDesktop\";window.postMessage(a,getDomain())}\nfunction launchIvaTracking(){var a={messageType:\"globalLaunch\",message:{}};a.message.source=\"usps\";window.postMessage(a,getDomain())};\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1321
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){setTimeout(function(){dataLayer.push({event:\"timeoutElapsed\"})},3E3)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1357
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efor(var params=",["escape",["macro",303],8,16],",x=document.getElementsByClassName(\"button\"),i=0;i\u003Cx.length;i++)x[i].href.match(\/.*promotool.*campaignId.*\/)\u0026\u00260\u003Cparams.length\u0026\u0026(x[i].href+=params);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1377
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/resources.digital-cloud-gov.medallia.com\/wdcgov\/2\/onsite\/embed.js\" async=\"async\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1486
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"setCookie\",attributes:{cookieName:\"mab_usps\",cookieValue:",["escape",["macro",307],8,16],"%100+1,cookieDomain:\"usps.com\",cookieExpires:1}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1489
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({medallia_ab:",["escape",["macro",308],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1490
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"Medallia_survey_launch\",Medallia_launch_on:\"click_calculate_dbcalc\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1517
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efor(var param=",["escape",["macro",309],8,16],",x=document.getElementsByClassName(\"btn\"),i=0;i\u003Cx.length;i++)x[i].href.match(\/.*promotool.*campaignId.*\/)\u0026\u00260\u003Cparam.length\u0026\u0026(x[i].href+=param);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1519
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/c.la1wx.salesforceliveagent.com\/content\/g\/js\/49.0\/deployment.js\"\u003E\u003C\/script\u003E\n\n\u003Cstyle\u003E\n              .sales360chat {\n                            position: fixed;\n                            bottom: 0;\n                            right: 0;\n                            width: 300px;\n                            z-index: 9999999;\n              }\n.sales360chat img {\n    max-width:100%;    \n}\n\n\u003C\/style\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar s360='\\x3ca class\\x3d\"sales360chat\" id\\x3d\"liveagent_button_online_573r000000000Rq\" style\\x3d\"display: none; border: 0px none;\" onclick\\x3d\"liveagent.startChat(\\'573r000000000Rq\\')\" href\\x3d\"#\"  \/\\x3e\\x3cimg alt\\x3d\"Get Online Assistance. Chat Now! Speech bubbles signifying two-way conversation.\" src\\x3d\"https:\/\/cat3-usps-sites.cs32.force.com\/publicgenericpages\/resource\/1538184549000\/IC3Online_new\" \/\\x3e\\x3c\/a\\x3e        \\x3ca class\\x3d\"sales360chat\" id\\x3d\"liveagent_button_offline_573r000000000Rq\" target\\x3d\"_blank\" style\\x3d\"display:none; border:0px none;\"  href\\x3d\"https:\/\/faq.usps.com\/s\/\"\\x3e\\x3cimg alt\\x3d\"Live Chat is Offline. Click here to find answers using our static frequently asked questions. Singular speech bubble indicating two-way conversation is not avaiable.\" src\\x3d\"https:\/\/cat3-usps-sites.cs32.force.com\/publicgenericpages\/resource\/1538184549000\/IC3Offline_new\" \/\\x3e\\x3c\/a\\x3e';\ndocument.body.insertAdjacentHTML(\"beforeend\",s360);window._laq||(window._laq=[]);\n0\u003C(new Date).getDay()\u0026\u00268\u003C(new Date).getHours()\u0026\u002620\u003E(new Date).getHours()?window._laq.push(function(){liveagent.showWhenOnline(\"573r000000000Rq\",document.getElementById(\"liveagent_button_online_573r000000000Rq\"))}):20==(new Date).getHours()\u0026\u002630\u003E(new Date).getMinutes()?window._laq.push(function(){liveagent.showWhenOnline(\"573r000000000Rq\",document.getElementById(\"liveagent_button_online_573r000000000Rq\"))}):window._laq.push(function(){liveagent.showWhenOffline(\"573r000000000Rq\",document.getElementById(\"liveagent_button_offline_573r000000000Rq\"))});\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Eliveagent.init(\"https:\/\/d.la1wx.salesforceliveagent.com\/chat\",\"572t0000000PAsr\",\"00Dr00000001vcb\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1531
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/c.la1wx.salesforceliveagent.com\/content\/g\/js\/49.0\/deployment.js\"\u003E\u003C\/script\u003E\n\n\u003Cstyle\u003E\n              .sales360chat {\n                            position: fixed;\n                            bottom: 0;\n                            right: 0;\n                            width: 300px;\n                            z-index: 9999999;\n              }\n.sales360chat img {\n    max-width:100%;    \n}\n\n\u003C\/style\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar s360='\\x3ca class\\x3d\"sales360chat\" id\\x3d\"liveagent_button_online_573r000000000Rq\" style\\x3d\"display: none; border: 0px none;\" onclick\\x3d\"liveagent.startChat(\\'573r000000000Rq\\')\" href\\x3d\"#\"  \/\\x3e\\x3cimg alt\\x3d\"Get Online Assistance. Chat Now! Speech bubbles signifying two-way conversation.\" src\\x3d\"https:\/\/cat3-usps-sites.cs32.force.com\/publicgenericpages\/resource\/1538184549000\/IC3Online_new\" \/\\x3e\\x3c\/a\\x3e        \\x3ca class\\x3d\"sales360chat\" id\\x3d\"liveagent_button_offline_573r000000000Rq\" target\\x3d\"_blank\" style\\x3d\"display:none; border:0px none;\"  href\\x3d\"https:\/\/faq.usps.com\/s\/\"\\x3e\\x3cimg alt\\x3d\"Live Chat is Offline. Click here to find answers using our static frequently asked questions. Singular speech bubble indicating two-way conversation is not avaiable.\" src\\x3d\"https:\/\/cat3-usps-sites.cs32.force.com\/publicgenericpages\/resource\/1538184549000\/IC3Offline_new\" \/\\x3e\\x3c\/a\\x3e';\ndocument.body.insertAdjacentHTML(\"beforeend\",s360);window._laq||(window._laq=[]);\n0\u003C(new Date).getDay()\u0026\u00268\u003C(new Date).getHours()\u0026\u002620\u003E(new Date).getHours()?window._laq.push(function(){liveagent.showWhenOnline(\"573r000000000Rq\",document.getElementById(\"liveagent_button_online_573r000000000Rq\"))}):20==(new Date).getHours()\u0026\u002630\u003E(new Date).getMinutes()?window._laq.push(function(){liveagent.showWhenOnline(\"573r000000000Rq\",document.getElementById(\"liveagent_button_online_573r000000000Rq\"))}):window._laq.push(function(){liveagent.showWhenOffline(\"573r000000000Rq\",document.getElementById(\"liveagent_button_offline_573r000000000Rq\"))});\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Eliveagent.init(\"https:\/\/d.la1wx.salesforceliveagent.com\/chat\",\"572t0000000PAsr\",\"00Dr00000001vcb\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1533
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/c.la1cx.salesforceliveagent.com\/content\/g\/js\/45.0\/deployment.js\"\u003E\u003C\/script\u003E\n\n\u003Cstyle\u003E\n\t.sales360chat {\n\t\tposition: fixed;\n\t\tbottom: 0;\n\t\tright: 0;\n\t\twidth: 300px;\n\t\tz-index: 9999999;\n\t}\n.sales360chat img {\n    max-width:100%;    \n}\n\n\u003C\/style\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar s360='\\x3ca class\\x3d\"sales360chat\" id\\x3d\"liveagent_button_online_573t0000000PAtV\" style\\x3d\"display: none; border: 0px none;\" onclick\\x3d\"liveagent.startChat(\\'573t0000000PAtV\\')\" href\\x3d\"#\"  \/\\x3e\\x3cimg alt\\x3d\"Get Online Assistance. Chat Now! Speech bubbles signifying two-way conversation.\" src\\x3d\"https:\/\/usps-sites.secure.force.com\/publicgenericpages\/resource\/1538184549000\/IC3Online_new\" \/\\x3e\\x3c\/a\\x3e  \\x3ca class\\x3d\"sales360chat\" id\\x3d\"liveagent_button_offline_573t0000000PAtV\" target\\x3d\"_blank\" style\\x3d\"display:none; border:0px none;\"  href\\x3d\"https:\/\/faq.usps.com\/s\/\"\\x3e\\x3cimg alt\\x3d\"Live Chat is Offline. Click here to find answers using our static frequently asked questions. Singular speech bubble indicating two-way conversation is not avaiable.\" src\\x3d\"https:\/\/usps-sites.secure.force.com\/publicgenericpages\/resource\/1538184549000\/IC3Offline_new\" \/\\x3e\\x3c\/a\\x3e';\ndocument.body.insertAdjacentHTML(\"beforeend\",s360);window._laq||(window._laq=[]);\n0\u003C(new Date).getUTCDay()\u0026\u002612\u003C=(new Date).getUTCHours()?window._laq.push(function(){liveagent.showWhenOnline(\"573t0000000PAtV\",document.getElementById(\"liveagent_button_online_573t0000000PAtV\"))}):0==(new Date).getUTCHours()\u0026\u002631\u003E(new Date).getUTCMinutes()?window._laq.push(function(){liveagent.showWhenOnline(\"573t0000000PAtV\",document.getElementById(\"liveagent_button_online_573t0000000PAtV\"))}):document.getElementById(\"liveagent_button_offline_573t0000000PAtV\").style.display=\"block\";\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Eliveagent.init(\"https:\/\/d.la1cx.salesforceliveagent.com\/chat\",\"572t0000000PAsr\",\"00Dj0000000GyYH\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1535
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar dataLayer=window.dataLayer||[];$('form[data-gtm-section\\x3d\"quicktools\"],form[data-gtm-section\\x3d\"premium\"]').find('button[type\\x3d\"submit\"]').on(\"click\",function(){var a=$(this).closest('form[data-gtm-section\\x3d\"quicktools\"],form[data-gtm-section\\x3d\"premium\"]');dataLayer.push({event:\"sectionFormSubmitted\",\"gtm.element.dataset.gtmLabel\":a.data(\"gtm-label\"),\"gtm.element.dataset.gtmSection\":a.data(\"gtm-section\"),\"gtm.element.dataset.gtmSubsection\":a.data(\"gtm-subsection\"),sectionFormURL:a.attr(\"action\")})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1589
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar dataLayer=window.dataLayer||[];\n$('form[data-gtm-section\\x3d\"quicktools\"],form[data-gtm-section\\x3d\"premium\"]').find('input[type\\x3d\"text\"]').on(\"focus\",function(){var a=$(this).closest('form[data-gtm-section\\x3d\"quicktools\"],form[data-gtm-section\\x3d\"premium\"]'),b=$(this).attr(\"id\");dataLayer.push({event:\"sectionFormFieldEntered\",\"gtm.element.dataset.gtmLabel\":a.data(\"gtm-label\"),\"gtm.element.dataset.gtmSection\":a.data(\"gtm-section\"),\"gtm.element.dataset.gtmSubsection\":a.data(\"gtm-subsection\"),sectionFormURL:a.attr(\"action\"),sectionFormField:b})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1590
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"setCookie\",attributes:{cookieName:\"tmab_usps\",cookieValue:",["escape",["macro",307],8,16],"%100+1,cookieDomain:\"usps.com\",cookieExpires:1}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1594
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"trackingmanageAB_test\",test_language:",["escape",["macro",59],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1595
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"Medallia_survey_launch\",Medallia_launch_on:\"ecommerce_impressions_present\",Medallia:{trackingcategory:",["escape",["macro",313],8,16],",trackingname:",["escape",["macro",314],8,16],",trackingid:",["escape",["macro",315],8,16],"}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1596
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){dataLayer.push({\"gtm.elementId\":void 0,\"gtm.elementUrl\":void 0,sectionFormURL:void 0,sectionFormField:void 0})})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1593
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){dataLayer.push({\"gtm.elementId\":void 0,\"gtm.elementUrl\":void 0,sectionFormURL:void 0,sectionFormField:void 0})})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1591
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){dataLayer.push({application:{selectedCheckbox:void 0}})})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1546
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_1190($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(www|es|zh)\\.usps\\.com(\/|\/welcome\\.htm)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_2770($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"gtm.js"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"my.usps.com\/go\/pages\/myusps\/applyNotificationsSettings.action"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"store.usps.com\/store\/pse\/"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"informeddelivery.usps.com\/box\/pages\/secure\/HomeAction_input.action?restart=1"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"packagemailbox"
    },{
      "function":"_cn",
      "arg0":["macro",67],
      "arg1":"button--primary"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"gtm.click"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"ecomAdd"
    },{
      "function":"_re",
      "arg0":["macro",68],
      "arg1":"^Data layer not on page$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":".*"
    },{
      "function":"_re",
      "arg0":["macro",68],
      "arg1":"^Data layer on page$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"ecomListClick"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"ecomListImpression"
    },{
      "function":"_re",
      "arg0":["macro",18],
      "arg1":"^\/go\/TrackConfirmAction.*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"ecomPromoClick"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"store.usps.com"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"ecomPromoImpression"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"ecomRemove"
    },{
      "function":"_re",
      "arg0":["macro",114],
      "arg1":"^(PFS|PUOD)|Package Intercept",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"ecomPurchase"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"cns\\.usps\\.com",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"ecomPurchaseFailed"
    },{
      "function":"_re",
      "arg0":["macro",120],
      "arg1":"pdf|docx?|xlsx?|txt",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_1189($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(www|es|zh|m)\\.usps\\.com(\/|\/welcome\\.htm|\/m\/home)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_487($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",122],
      "arg1":"span.tool_tip_text"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"hover"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"reg.usps.com\/entreg\/secure\/(identityconfirm|registrationportalsuccess)action_input",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",20],
      "arg1":"ips.usps.com\/ipsweb\/verification_error.xhtml",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",20],
      "arg1":"ips.usps.com\/ipsweb\/4verification_questions.xhtml",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",128],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_1191($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_2771($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"irresistiblemail.com"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"GAscreenview"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"calc(ea)?.usps.com",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"vpv"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"gtm.historyChange"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"GAeventError"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"GAeventInteraction"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"prodpx-promotool\\.usps\\.com\/promoreg\/confirmationView\\.do\\?campaignId=IRRPreHolidayMailBanners|prodpx-promotool\\.usps\\.com\/promoreg\/confirmationView\\.do",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"prodpx-promotool.usps.com\/promoreg\/campaignView.do?campaignId=IRRPreHolidayMailBanners"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"pe\\.usps\\.com|ibcalc\\.usps\\.com|dbcalc\\.usps\\.com|postcalc\\.usps\\.com|ircalc\\.usps\\.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"prodpx-promotool\\.usps\\.com\/promoreg\/campaignView\\.do\\?campaignId=PreHolidayShipping|uspsdelivers\\.com\/dm-registration-page-3\/\\?iom=",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"prodpx-promotool\\.usps\\.com\/promoreg\/confirmationView\\.do\\?campaignId=PreHolidayShipping|uspsdelivers\\.com\/dm-thank-you-3\/",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"prodpx-promotool.usps.com\/promoreg\/campaignView.do?campaignId=PreHolidayShipping"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"uspsdelivers.com\/dm-registration-page-3\/?iom="
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"prodpx-promotool.usps.com\/promoreg\/confirmationView.do?campaignId=PreHolidayShipping"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"uspsdelivers.com\/dm-thank-you-3\/"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"prodpx-promotool.usps.com\/promoreg\/confirmationView.do?campaignId=IRRPreHolidayMailBanners"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"usps.com\/ship\/mail-shipping-services.htm"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"calc-cat.\\.usps.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"calc-sit.\\.usps.com",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"impressionsChunk"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"pseStartChooseEnvelope"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"pseNextChooseStamp"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"pseNextReturnAddress"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"pseNextReviewTerms"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"pseAgree"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"noSearchResults"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"createAccount"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"saveToFavorites"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"ecomCheckout"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"my\\.usps\\.com.*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",150],
      "arg1":"^(Mobile )?((Header|Main|Footer) Nav|Quick Tools|Foresee)$",
      "ignore_case":true
    },{
      "function":"_css",
      "arg0":["macro",29],
      "arg1":"a,img#logo--main"
    },{
      "function":"_eq",
      "arg0":["macro",48],
      "arg1":"quick-tools--form-trackconfirm"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_1327($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_2596($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"irresistiblemail.com"
    },{
      "function":"_re",
      "arg0":["macro",49],
      "arg1":"(.*)?.gif",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"irresistiblemail.com\/gallery"
    },{
      "function":"_eq",
      "arg0":["macro",29],
      "arg1":"[object HTMLHeadingElement]"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"uspssupport.com\/ThankYou.aspx"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"uspssupport.com\/eddm.aspx"
    },{
      "function":"_eq",
      "arg0":["macro",153],
      "arg1":"Sticky Nav"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"uspsdelivers.com"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_1352($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/www.uspsdelivers.com\/audit-calculator\/?A631"
    },{
      "function":"_re",
      "arg0":["macro",154],
      "arg1":"zone-select|packageWeightInput"
    },{
      "function":"_re",
      "arg0":["macro",67],
      "arg1":".*switch.*|customForm-input-text float-right medium-width valid"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"availableActions"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"GAEvent"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"formFocus"
    },{
      "function":"_cn",
      "arg0":["macro",67],
      "arg1":"button-primary"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"\/m\/(mobile|shipping)|^https?:\/\/m.usps.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"^Filter Interaction$"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"^Map Interaction$"
    },{
      "function":"_re",
      "arg0":["macro",18],
      "arg1":"^\/manage\/po-boxes\\.htm$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"enterToSearch"
    },{
      "function":"_re",
      "arg0":["macro",67],
      "arg1":"searchBtn|icon-search",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_1492($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",18],
      "arg1":"^\/manageAccount.html$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_1494($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"requestWaitlist"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"usps\\.com\\\/store\\\/?(home)?\\\/?$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_1537($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",178],
      "arg1":"^(Mobile )?((Header|Main|Footer) Nav|Search|Quick Tools|Foresee)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_1288($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",29],
      "arg1":"#searchForm #autoSuggest a"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_1837($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"timeoutElapsed"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"usps\\.com\\\/store\\\/?",
      "ignore_case":true
    },{
      "function":"_css",
      "arg0":["macro",29],
      "arg1":".result-checkbox-filter-by-holder input"
    },{
      "function":"_re",
      "arg0":["macro",154],
      "arg1":"campaign-budget|closed-sale-rate|mail-type|mail-volume|product-margin|product-price|response-rate",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"uspsdelivers.com",
      "ignore_case":true
    },{
      "function":"_le",
      "arg0":["macro",186],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",109],
      "arg1":"1"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"[^-]tools.usps.com\/go\/TrackConfirmAction\\?",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"gtm.load"
    },{
      "function":"_le",
      "arg0":["macro",186],
      "arg1":"100"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(stage|dev|sit|cat)-tools.usps.com\/go\/TrackConfirmAction\\?",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"chatbotEngaged"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"youTubeTrack"
    },{
      "function":"_css",
      "arg0":["macro",29],
      "arg1":"div.panel-heading.collapser, div.panel-heading.collapser *"
    },{
      "function":"_re",
      "arg0":["macro",189],
      "arg1":"Proof of Delivery",
      "ignore_case":true
    },{
      "function":"_css",
      "arg0":["macro",29],
      "arg1":"a.tracking-history-collapser, a.tracking-history-collapser *"
    },{
      "function":"_re",
      "arg0":["macro",189],
      "arg1":"Text \u0026 Email Updates",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",189],
      "arg1":"Schedule Redelivery",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",189],
      "arg1":"Change Your Delivery Instructions",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",189],
      "arg1":"panel heading not found|Text \u0026 Email Updates|Change Your Delivery Instructions|Schedule Redelivery|Proof of Delivery",
      "ignore_case":true
    },{
      "function":"_css",
      "arg0":["macro",29],
      "arg1":"span.hint, span.hint *"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"usps.com\/howwedeliver",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"scrollTracking"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"uspsdelivers.com\/shipfromstore",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"delivercheer.com"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"www.uspsdelivers.com"
    },{
      "function":"_cn",
      "arg0":["macro",30],
      "arg1":"ADOPT THIS HOUSEHOLD"
    },{
      "function":"_cn",
      "arg0":["macro",30],
      "arg1":"ADOPT THIS LETTER"
    },{
      "function":"_css",
      "arg0":["macro",29],
      "arg1":"ul[class*=\"stamp-tabs\"], ul[class*=\"stamp-tabs\"] *"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_1806($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",29],
      "arg1":"ul[class*=\"stamp-releases\"], ul[class*=\"stamp-releases\"] *"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_1808($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"\/store.*product.+",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"www.usps.com\/stamps\/.+",
      "ignore_case":true
    },{
      "function":"_css",
      "arg0":["macro",29],
      "arg1":"div[class*=\"stamps-hero\"], div[class*=\"stamps-hero\"] *"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_1810($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",29],
      "arg1":"div[class*=\"slide-upsells\"], div[class*=\"slide-upsells\"] *"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_1817($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",29],
      "arg1":"div[class*=\"stamps-additional\"], div[class*=\"stamps-additional\"] *"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_1811($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",29],
      "arg1":"a[class*=\"stamp-releases-next\"], a[class*=\"stamp-releases-next\"] *"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_1815($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",29],
      "arg1":"a[id=\"sliderNext\"], a[id*=\"sliderNext\"] *"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_1816($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",30],
      "arg1":"Get it from Microsoft"
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"www.microsoft.com.*\/store",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"((stage|www)\\.)?uspsid.*\\.com.*",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",30],
      "arg1":"Get it on Google Play"
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"play.google.com\/store\/apps",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",30],
      "arg1":"Download from the App Store"
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"itunes.apple.com.*\/app",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"((stage|www|www.m)\\.)?uspsid.*\\.com.*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"vpvInformedDelivery"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"CNSpreferencesTracking"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"RCASvpv"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"ecomDetail"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_2152($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",29],
      "arg1":"#g-navigation nav a.menuitem"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_2166($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",29],
      "arg1":"#g-navigation a.global-logo"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_2157($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",29],
      "arg1":"#g-navigation a.mobile-logo"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_2170($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",29],
      "arg1":"#nav-utility #utility-header a"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_2158($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",29],
      "arg1":"footer nav a"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_2159($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",29],
      "arg1":"footer a.global-footer--logo-link"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_2168($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",29],
      "arg1":"footer .global-footer--social a"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_2169($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",29],
      "arg1":"#g-navigation a.mobile-hamburger"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_2171($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",28],
      "arg1":"in desktop mode"
    },{
      "function":"_css",
      "arg0":["macro",29],
      "arg1":"#g-navigation a.mobile-search"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_2176($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",29],
      "arg1":"header a.icon-hamburger"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_2177($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",29],
      "arg1":"nav .menu-item a"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_2179($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",29],
      "arg1":"header a.icon-logo-beak"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_2180($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",29],
      "arg1":".index-footer-item a"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_2181($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",29],
      "arg1":".store-navigation .store-navigation-categories a"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_2182($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",29],
      "arg1":"#g-navigation nav .menuheader ul li a"
    },{
      "function":"_css",
      "arg0":["macro",29],
      "arg1":"#g-navigation nav .menuheader ul .desktop-only a"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_2183($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",29],
      "arg1":"#g-navigation nav .qt-nav.menuheader ul li a"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_2185($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",29],
      "arg1":"#g-navigation nav li.menuheader"
    },{
      "function":"_css",
      "arg0":["macro",29],
      "arg1":"#g-navigation nav .menuheader ul li a *"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_2189($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_2190($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",29],
      "arg1":".related-product-wrapper a"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_2191($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",29],
      "arg1":".recently-viewed-product-wrapper a"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_2192($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",29],
      "arg1":".product-detail-tabs-wrapper a"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_2193($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"tools.usps.com\/zip-code-lookup",
      "ignore_case":true
    },{
      "function":"_css",
      "arg0":["macro",29],
      "arg1":"div.button-container, div.button-container *"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_2220($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",195],
      "arg1":"(file|page).*not found",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",216],
      "arg1":"^404.*Error$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"RCASconfirmation"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"RCAScancellation"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"\/faq\/s\/article\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_2378($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"prodpx-promotool.usps.com\/promoreg\/campaignView.do?campaignId=returnsfy17q2"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"prodpx-promotool.usps.com\/promoreg\/confirmationView.do?campaignId=returnsfy17q2"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"usps.com\/returns\/"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"calc.usps.com"
    },{
      "function":"_cn",
      "arg0":["macro",67],
      "arg1":"boxSize"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"prodpx-promotool.usps.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_2559($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"sectionFormSubmitted"
    },{
      "function":"_re",
      "arg0":["macro",49],
      "arg1":"www.facebook.com\/tr\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_2694($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"transaction_Purchase"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"application"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_2598($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_2704($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",228],
      "arg1":"no data",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_2691($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"cfoBack"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"cfoBackToCustomsFormHome"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"cfoInfoButton"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"cfoNextEnterCustomsInformation"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"cfoNextSelectAService"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"cfoNextPrintCustomsForms"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"cfoNextFinish"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"cfoNextReviewAndPrint"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"cfoStep3CustomsInformationInteraction"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"cfoStep4ReviewAndPrintInteraction"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"cfoStep5ThankYouInteraction"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"dropDownFocus"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"dropDownBlur"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_2680($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"sectionFormFieldEntered"
    },{
      "function":"_re",
      "arg0":["macro",21],
      "arg1":"ivsredirect=true|ivs=true",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",20],
      "arg1":"verification_enter_passcode.xhtml|verification_user_information.xhtml",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"ecomPurchaseInfoAvailable"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"cat-cns.usps.com\/m\/orderSummary",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"gtm.dom"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"cns.usps.com\/m\/orderSummary",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"my.usps.com\/mobileWeb\/pages\/myusps\/applyNotificationsSettings.action"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"store.usps.com\/store\/pse"
    },{
      "function":"_eq",
      "arg0":["macro",277],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"eddm\/customer\/orderSummary",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",18],
      "arg1":"\/store\/checkout\/confirmResponse|\/store\/m\/order-confirmation",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",114],
      "arg1":"Package Intercept",
      "ignore_case":true
    },{
      "function":"_sw",
      "arg0":["macro",114],
      "arg1":"PFS"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"\/poboxonline\/pages\/receipt",
      "ignore_case":true
    },{
      "function":"_sw",
      "arg0":["macro",114],
      "arg1":"PUOD"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"USPS Tracking"
    },{
      "function":"_eq",
      "arg0":["macro",108],
      "arg1":"undefined"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"reg\\.usps\\.com|cns.usps.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"pay.usps.com"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"setCookie"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"removeCookie"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"usps.com\/yourbusiness"
    },{
      "function":"_eq",
      "arg0":["macro",299],
      "arg1":"1"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"tools.usps.com\/go\/TrackConfirmAction\\?",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/store.usps.com\/store\/results\/stamps\/_\/N-9y93lv"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"store.usps.com\/store\/product\/buy-stamps\/christmas-carols-S_677304"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"store.usps.com\/store\/product\/buy-stamps\/the-snowy-day-S_676104"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"store.usps.com\/store\/results\/stamps\/holiday\/_\/N-9y93lvZ1mzlvsg"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"informeddelivery.usps.com\/box\/pages\/intro\/start.action"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"sit-tools.usps.com\/go\/TrackConfirmAction\\?",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"cat-tools.usps.com\/go\/TrackConfirmAction\\?",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"dev-tools.usps.com\/go\/TrackConfirmAction\\?",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"stage-tools.usps.com\/go\/TrackConfirmAction\\?",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",67],
      "arg1":"apply-filters-button"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"printerdirectory",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",304],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":".*dbcalc.*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"Medallia_survey_launch"
    },{
      "function":"_re",
      "arg0":["macro",305],
      "arg1":"ecommerce_impressions_present",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"pfsr.usps.com"
    },{
      "function":"_eq",
      "arg0":["macro",306],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",306],
      "arg1":"true"
    },{
      "function":"_sw",
      "arg0":["macro",33],
      "arg1":"javascript:Calculate"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)2384666_2329($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"usps.com\/howwedeliver"
    },{
      "function":"_eq",
      "arg0":["macro",310],
      "arg1":"chat"
    },{
      "function":"_eq",
      "arg0":["macro",311],
      "arg1":"chat"
    },{
      "function":"_eq",
      "arg0":["macro",312],
      "arg1":"chat"
    },{
      "function":"_eq",
      "arg0":["macro",57],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"tools\\.usps\\.com\/go\/TrackConfirmAction_input",
      "ignore_case":true
    }],
  "rules":[
    [["if",0,1,2],["add",0]],
    [["if",5],["add",1,18,84,117,139,140,141,142,143,144,145,252,256,266,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231]],
    [["if",5,8],["add",2]],
    [["if",9,10,11],["add",3]],
    [["if",12],["add",4]],
    [["if",15,16],["add",5]],
    [["if",15,17],["add",6]],
    [["if",19],["add",7]],
    [["if",20,21],["add",8]],
    [["if",22],["add",9]],
    [["if",24],["unless",23],["add",10]],
    [["if",24,25],["add",10]],
    [["if",23,24],["add",11]],
    [["if",26],["add",12]],
    [["if",1,27,28],["add",13],["block",125]],
    [["if",31,32],["add",14]],
    [["if",5,33,34],["add",15]],
    [["if",5,33,35],["add",15]],
    [["if",1,36,37],["add",16]],
    [["if",5,39],["add",17],["block",18,19]],
    [["if",40],["add",19]],
    [["if",41,42],["add",20]],
    [["if",39,43],["add",21]],
    [["if",44],["add",22]],
    [["if",45],["add",23]],
    [["if",5,46],["add",24]],
    [["if",5,47],["unless",48],["add",25]],
    [["if",5,49],["add",26]],
    [["if",5,50],["add",27]],
    [["if",5,51,52],["add",28,33]],
    [["if",5,53,54],["add",29,32,34]],
    [["if",5,47,55],["add",30]],
    [["if",5,51,52,56],["add",31]],
    [["if",5,57,58],["unless",48],["add",35,37]],
    [["if",59],["add",36]],
    [["if",60],["add",38]],
    [["if",61],["add",38]],
    [["if",62],["add",38]],
    [["if",63],["add",38]],
    [["if",64],["add",38]],
    [["if",65],["add",39]],
    [["if",66],["add",40]],
    [["if",67],["add",41]],
    [["if",68],["unless",23],["add",42]],
    [["if",25,68],["add",42]],
    [["if",11,69,70,71],["unless",29],["add",43]],
    [["if",72,73,74],["add",43]],
    [["if",11,76,77],["add",44]],
    [["if",11,78,79],["add",45]],
    [["if",5,80],["add",46,246,247,248]],
    [["if",5,81],["add",46,246,247,248]],
    [["if",1,82,83,84],["add",47]],
    [["if",11,85,86],["add",48]],
    [["if",11,85,87],["add",49]],
    [["if",88],["add",50]],
    [["if",89],["add",51]],
    [["if",90],["unless",29],["add",52]],
    [["if",11,91,92],["add",53]],
    [["if",93],["add",54]],
    [["if",94],["add",55]],
    [["if",95,96],["add",56]],
    [["if",1,95,97,98],["add",56]],
    [["if",1,97,99,100],["add",57]],
    [["if",101],["add",58]],
    [["if",1,102,103],["add",59]],
    [["if",108],["add",60]],
    [["if",11,109,110],["add",61]],
    [["if",11,111,112],["add",62]],
    [["if",113,114,115,116],["add",63,255]],
    [["if",114,116,117,118],["add",63,255]],
    [["if",119],["add",64]],
    [["if",120],["add",65]],
    [["if",11,121,122],["add",66]],
    [["if",11,123],["add",67]],
    [["if",11,121,124],["add",68]],
    [["if",11,121,125],["add",69]],
    [["if",11,121,126],["add",70]],
    [["if",11,121],["unless",127],["add",71]],
    [["if",11,128],["add",72]],
    [["if",129,130],["add",73]],
    [["if",130,131],["add",73]],
    [["if",130,132],["add",73]],
    [["if",130,133],["add",73]],
    [["if",11,134],["add",74]],
    [["if",11,135],["add",75]],
    [["if",1,136,137],["add",76]],
    [["if",1,138,139],["add",77]],
    [["if",1,140,141,142,143],["add",78]],
    [["if",1,140,141,144,145],["add",78]],
    [["if",1,146,147],["add",79]],
    [["if",1,148,149],["add",80]],
    [["if",1,150,151],["add",81]],
    [["if",1,106,107],["add",82],["block",59]],
    [["if",11,152,153,154],["add",83]],
    [["if",11,154,155,156],["add",83]],
    [["if",11,157,158,159],["add",83]],
    [["if",160],["add",85]],
    [["if",161],["add",86]],
    [["if",162],["add",87]],
    [["if",163],["add",88]],
    [["if",164,165],["add",89]],
    [["if",1,166,167],["add",90]],
    [["if",1,168,169],["add",91]],
    [["if",1,170,171],["add",91]],
    [["if",1,172,173],["add",92]],
    [["if",1,174,175],["add",93]],
    [["if",1,176,177],["add",94]],
    [["if",1,178,179],["add",95]],
    [["if",1,180,181],["add",96]],
    [["if",11,166],["unless",182],["add",97]],
    [["if",1,183,184],["add",98]],
    [["if",1,185,186],["add",99]],
    [["if",1,187,188],["add",100]],
    [["if",1,189,190],["add",101]],
    [["if",1,191,192],["add",102]],
    [["if",1,193,194],["add",103]],
    [["if",11,195],["add",104]],
    [["if",1,196,197],["add",104]],
    [["if",1,198,199],["add",104]],
    [["if",11,200],["add",105]],
    [["if",11,201],["unless",182],["add",106]],
    [["if",164,202],["add",107]],
    [["if",164,203],["add",108]],
    [["if",1,204,205],["add",109]],
    [["if",1,206,207],["add",110]],
    [["if",1,208,209],["add",111]],
    [["if",43,210],["add",112]],
    [["if",1,210,211,212],["add",113]],
    [["if",5,213],["add",114]],
    [["if",5,214],["add",115],["block",114]],
    [["if",215],["add",116]],
    [["if",216],["add",116]],
    [["if",1,217,218],["add",118]],
    [["if",5,219],["add",119,234,245]],
    [["if",5,220],["add",119,234,245]],
    [["if",5,221],["add",119,234]],
    [["if",5,57,58],["unless",222],["add",120]],
    [["if",11,223],["add",121]],
    [["if",73,224,225],["add",122]],
    [["if",226],["add",122]],
    [["if",25,229],["add",123]],
    [["if",230],["add",124]],
    [["if",1,3,231],["add",125]],
    [["if",1,3,27,232],["add",126]],
    [["if",164,233,234],["add",127]],
    [["if",235],["add",128]],
    [["if",236],["add",129]],
    [["if",237],["add",130]],
    [["if",238],["add",131]],
    [["if",239],["add",131]],
    [["if",240],["add",131]],
    [["if",241],["add",131]],
    [["if",242],["add",131]],
    [["if",243],["add",132]],
    [["if",244],["add",133]],
    [["if",245],["add",134]],
    [["if",246],["add",135]],
    [["if",247],["add",135]],
    [["if",164,248],["add",136]],
    [["if",249],["add",137]],
    [["if",5,250,251],["add",138]],
    [["if",252],["add",232,233]],
    [["if",253,254],["add",233]],
    [["if",254,255],["add",233]],
    [["if",3,5],["add",235,250,274,275],["block",252]],
    [["if",5,57,58],["unless",222,256,257],["add",236]],
    [["if",5,258],["add",237]],
    [["if",254,259],["add",238]],
    [["if",5,260,261],["add",239]],
    [["if",5,260,262],["add",240]],
    [["if",254,263],["add",241]],
    [["if",5,260,264],["add",242]],
    [["if",254,265],["add",243]],
    [["if",5],["unless",266],["add",244,278],["block",266]],
    [["if",83,254],["add",249]],
    [["if",5,267],["add",250]],
    [["if",254],["add",251]],
    [["if",269],["add",253]],
    [["if",270],["add",254]],
    [["if",5,271],["add",257,258,265]],
    [["if",116,272,273],["add",259]],
    [["if",5,274],["add",260,261,262]],
    [["if",5,275],["add",260,261,262]],
    [["if",5,276],["add",260,261,262]],
    [["if",5,277],["add",260,261,262]],
    [["if",5,278],["add",261,262]],
    [["if",5,279],["add",263]],
    [["if",5,280],["add",263]],
    [["if",5,115],["add",263]],
    [["if",5,281],["add",263]],
    [["if",5,282],["add",263]],
    [["if",11,283,284],["add",264]],
    [["if",5,285],["add",266]],
    [["if",286,287],["add",266]],
    [["if",287,288],["add",266]],
    [["if",5,290],["add",267]],
    [["if",254,291],["add",268]],
    [["if",1,286,292,293],["add",269]],
    [["if",5,294],["add",270]],
    [["if",5,295],["add",271]],
    [["if",5,296],["add",272]],
    [["if",5,297],["add",273]],
    [["if",3,5,298],["add",276]],
    [["if",5,299],["add",277]],
    [["if",0,1,3,4],["block",0]],
    [["if",5],["unless",6],["block",1]],
    [["if",5],["unless",7],["block",1]],
    [["if",13,14],["block",4,5,6,7,8,9]],
    [["if",15,17,18],["block",6]],
    [["if",1,29,30],["block",13,90,91,92,93,94,95,96,98,99,100,101,102,104]],
    [["if",1,3,36,38],["block",16]],
    [["if",3,11],["block",43,97,104,105,106]],
    [["if",3,73,75],["block",43]],
    [["if",1,104,105],["unless",69],["block",59]],
    [["if",3,130],["block",73]],
    [["if",73,227,228],["block",122]],
    [["if",254,268],["block",251]],
    [["if",5,289],["block",266]],
    [["if",5,286],["block",266]],
    [["if",5,268],["block",266]]]
},
"runtime":[[50,"__twitter_website_tag",[46,"a"],[50,"i",[46],[41,"l"],[3,"l",["d","twq"]],[22,[15,"l"],[46,[36,[15,"l"]]]],["h","twq",[51,"",[7],[52,"n",["d","twq.exe.apply"]],[22,[15,"n"],[46,["c","twq.exe.apply",[45],[15,"arguments"]]],[46,["c","twq.queue.push",[15,"arguments"]]]]],true],["h","twq.version","1",true],["h","twq.queue",[7],true],[52,"m",[51,"",[7]]],["e","https://static.ads-twitter.com/uwt.js",[15,"m"],[15,"m"],"twitter_website_tag"],[36,["d","twq"]]],[52,"b",["require","createArgumentsQueue"]],[52,"c",["require","callInWindow"]],[52,"d",["require","copyFromWindow"]],[52,"e",["require","injectScript"]],[52,"f",["require","makeString"]],[52,"g",["require","makeTableMap"]],[52,"h",["require","setInWindow"]],[41,"j"],[3,"j",["i"]],["j","init",["f",[17,[15,"a"],"twitter_pixel_id"]]],[52,"k",["g",[30,[17,[15,"a"],"event_parameters"],[7]],"param_table_key_column","param_table_value_column"]],[22,[1,[15,"k"],[2,[15,"k"],"hasOwnProperty",[7,"content_ids"]]],[46,[53,[41,"l"],[3,"l",[16,[15,"k"],"content_ids"]],[3,"l",[2,[2,[15,"l"],"split",[7,"\""]],"join",[7,"\u0027"]]],[41,"m"],[3,"m",[2,[2,[15,"l"],"slice",[7,[2,[15,"l"],"indexOf",[7,"["]],[2,[15,"l"],"indexOf",[7,"]"]]]],"split",[7,","]]],[3,"m",[2,[15,"m"],"map",[7,[51,"",[7,"n"],[36,[30,[16,[2,[15,"n"],"split",[7,"\u0027"]],1],""]]]]]],[43,[15,"k"],"content_ids",[15,"m"]]]]],["j","track",["f",[17,[15,"a"],"event_type"]],[15,"k"]],[2,[15,"a"],"gtmOnSuccess",[7]]]]
,"permissions":{"__twitter_website_tag":{"access_globals":{"keys":[{"key":"twq","read":true,"write":true,"execute":true},{"key":"twq.exe","read":true,"write":true,"execute":true},{"key":"twq.queue","read":true,"write":true,"execute":true},{"key":"twq.queue.push","read":true,"write":true,"execute":true},{"key":"twq.version","read":true,"write":true,"execute":false},{"key":"twq.exe.apply","read":true,"write":true,"execute":true}]},"inject_script":{"urls":["https:\/\/static.ads-twitter.com\/uwt.js"]}}}

,"security_groups":{
"nonGoogleScripts":["__twitter_website_tag"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ba,ca="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},da;if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var ha={Tf:!0},ia={};try{ia.__proto__=ha;ea=ia.Tf;break a}catch(a){}ea=!1}da=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ja=da,ka=function(a,b){a.prototype=ca(b.prototype);a.prototype.constructor=a;if(ja)ja(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]},ma=this||self,na=/^[\w+/_-]+[=]{0,2}$/,oa=null;var pa=function(a,b){this.a=a;this.i=b};var qa=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ra=function(){this.o={};this.m=!1;this.H={}};ra.prototype.get=function(a){return this.o["dust."+a]};ra.prototype.set=function(a,b){this.m||(a="dust."+a,this.H.hasOwnProperty(a)||(this.o[a]=b))};ra.prototype.has=function(a){return this.o.hasOwnProperty("dust."+a)};var ua=function(a){var b=[],c;for(c in a.o)a.o.hasOwnProperty(c)&&b.push(c.substr(5));return b};var h=function(a){this.i=new ra;this.a=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(qa(b)?this.a[Number(b)]=a[Number(b)]:this.i.set(b,a[b]))};ba=h.prototype;ba.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.a.length;c++){var d=this.a[c];null===d||void 0===d?b.push(""):d instanceof h?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
ba.set=function(a,b){if("length"==a){if(!qa(b))throw Error("RangeError: Length property must be a valid integer.");this.a.length=Number(b)}else qa(a)?this.a[Number(a)]=b:this.i.set(a,b)};ba.get=function(a){return"length"==a?this.length():qa(a)?this.a[Number(a)]:this.i.get(a)};ba.length=function(){return this.a.length};ba.bc=function(){for(var a=ua(this.i),b=0;b<this.a.length;b++)a.push(b+"");return new h(a)};
var va=function(a,b){if(qa(b))delete a.a[Number(b)];else{var c=a.i,d;d="dust."+b;c.m||c.H.hasOwnProperty(d)||delete c.o[d]}};ba=h.prototype;ba.pop=function(){return this.a.pop()};ba.push=function(a){return this.a.push.apply(this.a,Array.prototype.slice.call(arguments))};ba.shift=function(){return this.a.shift()};ba.splice=function(a,b,c){return new h(this.a.splice.apply(this.a,arguments))};ba.unshift=function(a){return this.a.unshift.apply(this.a,Array.prototype.slice.call(arguments))};
ba.has=function(a){return qa(a)&&this.a.hasOwnProperty(a)||this.i.has(a)};var wa=function(){function a(f,g){if(b[f]){if(b[f].Ub+g>b[f].max)throw Error("Quota exceeded");b[f].Ub+=g}}var b={},c=void 0,d=void 0,e={jh:function(f){c=f},ve:function(){c&&a(c,1)},lh:function(f){d=f},Ca:function(f){d&&a(d,f)},Gh:function(f,g){b[f]=b[f]||{Ub:0};b[f].max=g},Kg:function(f){return b[f]&&b[f].Ub||0},reset:function(){b={}},rg:a};e.onFnConsume=e.jh;e.consumeFn=e.ve;e.onStorageConsume=e.lh;e.consumeStorage=e.Ca;e.setMax=e.Gh;e.getConsumed=e.Kg;e.reset=e.reset;e.consume=e.rg;return e};var xa=function(a,b){this.H=a;this.P=function(c,d,e){return c.apply(d,e)};this.m=b;this.i=new ra;this.a=this.o=void 0};xa.prototype.add=function(a,b){ya(this,a,b,!1)};var ya=function(a,b,c,d){if(!a.i.m)if(a.H.Ca(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.H["dust."+b]=!0}else a.i.set(b,c)};
xa.prototype.set=function(a,b){this.i.m||(!this.i.has(a)&&this.m&&this.m.has(a)?this.m.set(a,b):(this.H.Ca(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};xa.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.m?this.m.get(a):void 0};xa.prototype.has=function(a){return!!this.i.has(a)||!(!this.m||!this.m.has(a))};var za=function(a){var b=new xa(a.H,a);a.o&&(b.o=a.o);b.P=a.P;b.a=a.a;return b};var Ca=function(){},Da=function(a){return"function"==typeof a},p=function(a){return"string"==typeof a},Ea=function(a){return"number"==typeof a&&!isNaN(a)},Ga=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},Ha=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ia=function(a,b){if(a&&Ga(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ka=function(a,b){if(!Ea(a)||
!Ea(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ma=function(a,b){for(var c=new La,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Na=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Pa=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Qa=function(a){return Math.round(Number(a))||0},Ra=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Sa=function(a){var b=[];if(Ga(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ta=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Ua=function(){return(new Date).getTime()},La=function(){this.prefix="gtm.";this.values={}};La.prototype.set=function(a,b){this.values[this.prefix+a]=b};La.prototype.get=function(a){return this.values[this.prefix+a]};
var Wa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Xa=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ya=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Za=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},$a=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},bb=function(a){for(var b=C,c=0;c<a.length-1;c++){if(!b.hasOwnProperty(a[c]))return;b=b[a[c]]}return b},cb=function(a,b){for(var c=
{},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},eb=function(a){var b=[];Na(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var fb=function(a,b){ra.call(this);this.a=a;this.P=b};ka(fb,ra);fb.prototype.toString=function(){return this.a};fb.prototype.bc=function(){return new h(ua(this))};fb.prototype.i=function(a,b){a.H.ve();return this.P.apply(gb(this,a),Array.prototype.slice.call(arguments,1))};var gb=function(a,b){var c=function(d,e){this.i=d;this.m=e};c.prototype.a=function(d){var e=this.m;return Ga(d)?hb(e,d):d};c.prototype.H=function(d){return ib(this.m,d)};c.prototype.o=function(){return b.H};return new c(a,b)};
fb.prototype.Fa=function(a,b){try{return this.i.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var ib=function(a,b){for(var c,d=0;d<b.length&&!(c=hb(a,b[d]),c instanceof pa);d++);return c},hb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof fb))throw Error("Attempting to execute non-function "+b[0]+".");return c.i.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.o;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};var jb=function(){ra.call(this)};ka(jb,ra);jb.prototype.bc=function(){return new h(ua(this))};var kb=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|Map|List)$/i,lb={Fn:"function",Map:"Object",List:"Array"},E=function(a,b,c){for(var d=0;d<b.length;d++){var e=kb.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],k=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==k){var n=typeof l;l instanceof fb?n="Fn":l instanceof h?n="List":l instanceof jb&&(n="Map");if(n!=k)throw Error("Error in "+
a+". Argument "+f+" has type "+n+", which does not match required type "+(lb[k]||k)+".");}}};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var mb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,nb=function(a){if(null==a)return String(a);var b=mb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},ob=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},pb=function(a){if(!a||"object"!=nb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!ob(a,"constructor")&&!ob(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||ob(a,b)},F=function(a,b){var c=b||("array"==nb(a)?[]:{}),d;for(d in a)if(ob(a,d)){var e=a[d];"array"==nb(e)?("array"!=nb(c[d])&&(c[d]=[]),c[d]=F(e,c[d])):pb(e)?(pb(c[d])||(c[d]={}),c[d]=F(e,c[d])):c[d]=e}return c};var rb=function(a,b){var c=[],d=[],e=function(g,k){for(var l=ua(g),m=0;m<l.length;m++)k[l[m]]=f(g.get(l[m]))},f=function(g){var k=Ha(c,g);if(-1<k)return d[k];if(g instanceof h){var l=[];c.push(g);d.push(l);for(var m=g.bc(),n=0;n<m.length();n++)l[m.get(n)]=f(g.get(m.get(n)));return l}if(g instanceof jb){var r={};c.push(g);d.push(r);e(g,r);return r}if(g instanceof fb){var t=function(){for(var q=Array.prototype.slice.call(arguments,0),u=0;u<q.length;u++)q[u]=qb(q[u],b);var v=b?b.H:wa(),w=new xa(v);b&&
(w.a=b.a);return f(g.i.apply(g,[w].concat(q)))};c.push(g);d.push(t);e(g,t);return t}switch(typeof g){case "boolean":case "number":case "string":case "undefined":return g;case "object":if(null===g)return null}};return f(a)},qb=function(a,b){var c=[],d=[],e=function(g,k){for(var l in g)g.hasOwnProperty(l)&&k.set(l,f(g[l]))},f=function(g){var k=Ha(c,g);if(-1<k)return d[k];if(Ga(g)||Pa(g)){var l=new h([]);c.push(g);d.push(l);for(var m in g)g.hasOwnProperty(m)&&l.set(m,f(g[m]));return l}if(pb(g)){var n=
new jb;c.push(g);d.push(n);e(g,n);return n}if("function"===typeof g){var r=new fb("",function(q){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=rb(this.a(u[v]),b);return f((0,this.m.P)(g,g,u))});c.push(g);d.push(r);e(g,r);return r}var t=typeof g;if(null===g||"string"===t||"number"===t||"boolean"===t)return g};return f(a)};var sb={control:function(a,b){return new pa(a,this.a(b))},fn:function(a,b,c){var d=this.m,e=this.a(b);if(!(e instanceof h))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.o().Ca(a.length+f.length);return new fb(a,function(){return function(g){var k=za(d);void 0===k.a&&(k.a=this.m.a);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=this.a(l[m]),l[m]instanceof pa)return l[m];for(var n=e.get("length"),r=
0;r<n;r++)r<l.length?k.add(e.get(r),l[r]):k.add(e.get(r),void 0);k.add("arguments",new h(l));var t=ib(k,f);if(t instanceof pa)return"return"===t.a?t.i:t}}())},list:function(a){var b=this.o();b.Ca(arguments.length);for(var c=new h,d=0;d<arguments.length;d++){var e=this.a(arguments[d]);"string"===typeof e&&b.Ca(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.o(),c=new jb,d=0;d<arguments.length-1;d+=2){var e=this.a(arguments[d])+"",f=this.a(arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Ca(g);c.set(e,f)}return c},undefined:function(){}};function tb(a,b){var c=hb(a,b);if(c instanceof pa||c instanceof fb||c instanceof h||c instanceof jb||null===c||void 0===c||"string"===typeof c||"number"===typeof c||"boolean"===typeof c)return c}var ub=function(){this.m=wa();this.a=new xa(this.m)},vb=function(a,b,c){var d=new fb(b,c);d.m=!0;a.a.set(b,d)};ub.prototype.$b=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.i(c)};ub.prototype.i=function(a){for(var b,c=0;c<arguments.length;c++)b=tb(this.a,arguments[c]);return b};
ub.prototype.o=function(a,b){var c=za(this.a);c.a=a;for(var d,e=1;e<arguments.length;e++)d=tb(c,arguments[e]);return d};var wb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var xb={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof h)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new h(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.i(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.i(a,this.get(e),e,this)&&d.push(this.get(e));return new h(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.i(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.i(a,this.get(e),e,this));return new h(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g==d)throw Error("TypeError: Reduce on List with no elements.");}for(var k=f;k<d;k++)this.has(k)&&(e=b.i(a,e,this.get(k),k,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var k=f;0<=k;k--)this.has(k)&&(e=b.i(a,e,this.get(k),k,this));return e},reverse:function(){for(var a=wb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):va(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new h(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.i(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=wb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.i(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):va(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var yb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),zb=new pa("break"),Bb=new pa("continue"),Cb=function(a,b){return this.a(a)+this.a(b)},Db=function(a,b){return this.a(a)&&this.a(b)},Eb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(!(c instanceof h))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"==typeof a){if(0<=Ha(yb,b))return qb(a[b].apply(a,wb(c)),this.m);throw Error("TypeError: "+b+" is not a function");}if(a instanceof h){if(a.has(b)){var d=a.get(b);if(d instanceof fb){var e=wb(c);e.unshift(this.m);return d.i.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=Ha(xb.supportedMethods,b)){var f=wb(c);f.unshift(this.m);
return xb[b].apply(a,f)}}if(a instanceof fb||a instanceof jb){if(a.has(b)){var g=a.get(b);if(g instanceof fb){var k=wb(c);k.unshift(this.m);return g.i.apply(g,k)}throw Error("TypeError: "+b+" is not a function");}if("toString"==b)return a instanceof fb?a.a:a.toString();if("hasOwnProperty"==b)return a.has.apply(a,wb(c))}throw Error("TypeError: Object has no '"+b+"' property.");},Fb=function(a,b){a=this.a(a);if("string"!=typeof a)throw Error("Invalid key name given for assignment.");var c=this.m;if(!c.has(a))throw Error("Attempting to assign to undefined value "+
b);var d=this.a(b);c.set(a,d);return d},Gb=function(a){var b=za(this.m),c=ib(b,Array.prototype.slice.apply(arguments));if(c instanceof pa)return c},Hb=function(){return zb},Ib=function(a){for(var b=this.a(a),c=0;c<b.length;c++){var d=this.a(b[c]);if(d instanceof pa)return d}},Jb=function(a){for(var b=this.m,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.a(arguments[c+1]);ya(b,d,e,!0)}}},Kb=function(){return Bb},Lb=function(a,b,c){var d=new h;b=this.a(b);for(var e=
0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.m.add(a,this.a(f))},Mb=function(a,b){return this.a(a)/this.a(b)},Nb=function(a,b){return this.a(a)==this.a(b)},Ob=function(a){for(var b,c=0;c<arguments.length;c++)b=this.a(arguments[c]);return b};
function Pb(a,b,c){if("string"==typeof b)for(var d=0;d<b.length;d++){var e=a(d),f=ib(e,c);if(f instanceof pa){if("break"==f.a)break;if("return"==f.a)return f}}else if(b instanceof jb||b instanceof h||b instanceof fb)for(var g=b.bc(),k=g.length(),l=0;l<k;l++){var m=a(g.get(l)),n=ib(m,c);if(n instanceof pa){if("break"==n.a)break;if("return"==n.a)return n}}}
var Qb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Pb(function(e){d.set(a,e);return d},b,c)},Rb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Pb(function(e){var f=za(d);ya(f,a,e,!0);return f},b,c)},Tb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Pb(function(e){var f=za(d);f.add(a,e);return f},b,c)},Ub=function(a){return this.m.get(this.a(a))},Vb=function(a,b){var c;a=this.a(a);b=this.a(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+
a+".");a instanceof jb||a instanceof h||a instanceof fb?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:qa(b)&&(c=a[b]));return c},Wb=function(a,b){return this.a(a)>this.a(b)},Xb=function(a,b){return this.a(a)>=this.a(b)},Yb=function(a,b){return this.a(a)===this.a(b)},Zb=function(a,b){return this.a(a)!==this.a(b)},$b=function(a,b,c){var d=[];this.a(a)?d=this.a(b):c&&(d=this.a(c));var e=this.H(d);if(e instanceof pa)return e},ac=function(a,b){return this.a(a)<this.a(b)},bc=function(a,b){return this.a(a)<=
this.a(b)},cc=function(a,b){return this.a(a)%this.a(b)},dc=function(a,b){return this.a(a)*this.a(b)},ec=function(a){return-this.a(a)},fc=function(a){return!this.a(a)},gc=function(a,b){return this.a(a)!=this.a(b)},hc=function(){return null},ic=function(a,b){return this.a(a)||this.a(b)},jc=function(a,b){var c=this.a(a);this.a(b);return c},kc=function(a){return this.a(a)},lc=function(a){return Array.prototype.slice.apply(arguments)},mc=function(a){return new pa("return",this.a(a))},nc=function(a,b,c){a=
this.a(a);b=this.a(b);c=this.a(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof fb||a instanceof h||a instanceof jb)&&a.set(b,c);return c},oc=function(a,b){return this.a(a)-this.a(b)},pc=function(a,b,c){a=this.a(a);var d=this.a(b),e=this.a(c);if(!Ga(d)||!Ga(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,k=0;k<d.length;k++)if(g||a===this.a(d[k]))if(f=this.a(e[k]),f instanceof pa){var l=f.a;if("break"==l)return;if("return"==
l||"continue"==l)return f}else g=!0;if(e.length==d.length+1&&(f=this.a(e[e.length-1]),f instanceof pa&&("return"==f.a||"continue"==f.a)))return f},qc=function(a,b,c){return this.a(a)?this.a(b):this.a(c)},rc=function(a){a=this.a(a);return a instanceof fb?"function":typeof a},sc=function(a){for(var b=this.m,c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}},tc=function(a,b,c,d){var e,f=this.a(d);if(this.a(c)&&(e=this.H(f),e instanceof pa)){if("break"==e.a)return;if("return"==
e.a)return e}for(;this.a(a);){e=this.H(f);if(e instanceof pa){if("break"==e.a)break;if("return"==e.a)return e}this.a(b)}},uc=function(a){return~Number(this.a(a))},vc=function(a,b){return Number(this.a(a))<<Number(this.a(b))},wc=function(a,b){return Number(this.a(a))>>Number(this.a(b))},xc=function(a,b){return Number(this.a(a))>>>Number(this.a(b))},yc=function(a,b){return Number(this.a(a))&Number(this.a(b))},zc=function(a,b){return Number(this.a(a))^Number(this.a(b))},Ac=function(a,b){return Number(this.a(a))|
Number(this.a(b))};var Cc=function(){this.a=new ub;Bc(this)};Cc.prototype.$b=function(a){return this.a.i(a)};
var Ec=function(a,b){return Dc.a.o(a,b)},Bc=function(a){var b=function(d,e){var f=a.a,g=String(e);sb.hasOwnProperty(d)&&vb(f,g||d,sb[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){vb(a.a,String(d),e)};c(0,Cb);c(1,Db);c(2,Eb);c(3,Fb);c(53,Gb);c(4,Hb);c(5,Ib);c(52,Jb);c(6,Kb);c(9,Ib);c(50,Lb);c(10,Mb);c(12,Nb);c(13,Ob);c(47,Qb);c(54,Rb);c(55,Tb);c(15,Ub);c(16,Vb);c(17,Vb);c(18,Wb);c(19,Xb);c(20,Yb);c(21,Zb);c(22,$b);c(23,ac);c(24,bc);c(25,cc);c(26,dc);c(27,
ec);c(28,fc);c(29,gc);c(45,hc);c(30,ic);c(32,jc);c(33,jc);c(34,kc);c(35,kc);c(46,lc);c(36,mc);c(43,nc);c(37,oc);c(38,pc);c(39,qc);c(40,rc);c(41,sc);c(42,tc);c(58,uc);c(57,vc);c(60,wc);c(61,xc);c(56,yc);c(62,zc);c(59,Ac)},Gc=function(){var a=Dc,b=Fc();vb(a.a,"require",b)},Hc=function(a,b){a.a.a.P=b};
var Ic=[],Jc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Kc=function(a){return Jc[a]},Lc=/[\x00\x22\x26\x27\x3c\x3e]/g;var Pc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Qc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Rc=function(a){return Qc[a]};Ic[7]=function(a){return String(a).replace(Pc,Rc)};
Ic[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Pc,Rc)+"'"}};var Yc=/['()]/g,Zc=function(a){return"%"+a.charCodeAt(0).toString(16)};Ic[12]=function(a){var b=
encodeURIComponent(String(a));Yc.lastIndex=0;return Yc.test(b)?b.replace(Yc,Zc):b};var $c=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,ad={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},bd=function(a){return ad[a]};Ic[16]=function(a){return a};var dd;
var ed=[],fd=[],gd=[],hd=[],id=[],jd={},kd,ld,md,nd=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},od=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=jd[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):dd(c,e,b)},qd=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=pd(a[e],b,c));
return d},rd=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=jd[b];return c?c.priorityOverride||0:0},pd=function(a,b,c){if(Ga(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(pd(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=ed[f];if(!g||b.gd(g))return;c[f]=!0;try{var k=qd(g,b,c);k.vtp_gtmEventId=b.id;d=od(k,b);md&&(d=md.ug(d,k))}catch(y){b.Ne&&b.Ne(y,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[pd(a[l],b,c)]=pd(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var r=pd(a[n],b,c);ld&&(m=m||r===ld.Nb);d.push(r)}return ld&&m?ld.xg(d):d.join("");case "escape":d=pd(a[1],b,c);if(ld&&Ga(a[1])&&"macro"===a[1][0]&&ld.Wg(a))return ld.qh(d);d=String(d);for(var t=2;t<a.length;t++)Ic[a[t]]&&(d=Ic[a[t]](d));return d;case "tag":var q=a[1];if(!hd[q])throw Error("Unable to resolve tag reference "+q+".");return d={Ae:a[2],
index:q};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=sd(u,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},sd=function(a,b,c){try{return kd(qd(a,b,c))}catch(d){JSON.stringify(a)}return 2};var td=function(){var a=function(b){return{toString:function(){return b}}};return{Kd:a("convert_case_to"),Ld:a("convert_false_to"),Md:a("convert_null_to"),Nd:a("convert_true_to"),Od:a("convert_undefined_to"),Zh:a("debug_mode_metadata"),ya:a("function"),tf:a("instance_name"),xf:a("live_only"),zf:a("malware_disabled"),Af:a("metadata"),$h:a("original_vendor_template_id"),Ef:a("once_per_event"),Td:a("once_per_load"),ae:a("setup_tags"),ce:a("tag_id"),de:a("teardown_tags")}}();var ud=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.i=a;this.a=c};ka(ud,Error);function vd(a,b){if(Ga(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)vd(a[c],b[c])}};var wd=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.m=a;this.i=b;this.a=[]};ka(wd,Error);var xd=function(a){var b=a.a.slice();a.i&&(b=a.i(b));return b};var zd=function(){return function(a,b){a instanceof wd||(a=new wd(a,yd));b&&a.a.push(b);throw a;}};function yd(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ea(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var Ad=null,Dd=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}var c=[],d=[];Ad=Bd(a);for(var e=0;e<fd.length;e++){var f=fd[e],g=Cd(f);if(g){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var m=[],n=0;n<hd.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Cd=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Ad(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=Ad(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},Bd=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=sd(gd[c],a));return b[c]}};var Ed=function(){this.a={}};function Fd(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(k){g="string"===typeof k?g+(": "+k):k instanceof Error?g+(": "+k.message):g+"."}if(!f)throw new ud(c,d,g);}}function Gd(a,b,c){return function(){var d=arguments[0];if(d){var e=a.a[d],f=a.a.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));Fd(e,b,d,g);Fd(f,b,d,g)}}}};var Kd=function(a){var b=Hd.B,c=this;this.i=new Ed;this.a={};var d={},e=Gd(this.i,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Na(a,function(f,g){var k={};Na(g,function(l,m){var n=Id(l,m);k[l]=n.assert;d[l]||(d[l]=n.L)});c.a[f]=function(l,m){var n=k[l];if(!n)throw Jd(l,{},"The requested permission "+l+" is not configured.");var r=Array.prototype.slice.call(arguments,0);n.apply(void 0,r);e.apply(void 0,r)}})},Nd=function(a){return Ld.a[a]||
function(){}};function Id(a,b){var c=nd(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=Jd;try{return od(c)}catch(d){return{assert:function(e){throw new ud(e,{},"Permission "+e+" is unknown.");},L:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function Jd(a,b,c){return new ud(a,b,c)};var Od=!1;var Pd={};Pd.Ph=Ra('');Pd.Dg=Ra('');var Qd=Od,Rd=Pd.Dg,Sd=Pd.Ph;
var fe=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},ge=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;fe(b,"/*")&&(b=b.slice(0,-2));fe(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var k=d[d.length-1];return a.lastIndexOf(k)===a.length-k.length},he=/^[a-z0-9-]+$/i,ie=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
je=function(a,b){var c;if(!(c="https:"!=a.protocol||a.port&&"443"!=a.port)){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!he.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var k;var l=a,m=b[g];if(!ie.exec(m))throw Error("Invalid Wildcard");var n=m.slice(8),r=n.slice(0,n.indexOf("/")),t;var q=l.hostname,u=r;if(0!==u.indexOf("*."))t=q.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=q.toLowerCase().indexOf(u.toLowerCase());
t=-1===v?!1:q.length===u.length?!0:q.length!==u.length+v?!1:"."===q[v-1]}if(t){var w=n.slice(n.indexOf("/"));k=ge(l.pathname+l.search,w)?!0:!1}else k=!1;if(k)return!0}return!1};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
function me(a){return""+a}
function ne(a,b){var c=[];return c};var oe=function(a,b){var c=new fb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.a(d[e]);return b.apply(this,d)});c.m=!0;return c},pe=function(a,b){var c=new jb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Da(e)?c.set(d,oe(a+"_"+d,e)):(Ea(e)||p(e)||"boolean"==typeof e)&&c.set(d,e)}c.m=!0;return c};var qe=function(a,b){E(this.i.a,["apiName:!string","message:?string"],arguments);var c={},d=new jb;return d=pe("AssertApiSubject",c)};var re=function(a,b){E(this.i.a,["actual:?*","message:?string"],arguments);var c={},d=new jb;return d=pe("AssertThatSubject",c)};function se(a){return function(){for(var b=[],c=this.m,d=0;d<arguments.length;++d)b.push(rb(arguments[d],c));return qb(a.apply(null,b))}}var ue=function(){for(var a=Math,b=te,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=se(a[e].bind(a)))}return c};var ve=function(a){var b;return b};var we=function(a){var b;return b};var xe=function(a){E(this.i.a,["uri:!string"],arguments);return encodeURI(a)};var ye=function(a){E(this.i.a,["uri:!string"],arguments);return encodeURIComponent(a)};var ze=function(a){E(this.i.a,["message:?string"],arguments);};var Ae=function(a,b){E(this.i.a,["min:!number","max:!number"],arguments);return Ka(a,b)};var Be=function(){return(new Date).getTime()};var Ce=function(a,b,c){var d=a.m.a;if(!d)throw Error("Missing program state.");d.fg.apply(null,Array.prototype.slice.call(arguments,1))};var De=function(){Ce(this,"read_container_data");var a=new jb;a.set("containerId",'GTM-MVCC8H');a.set("version",'570');a.set("environmentName",'');a.set("debugMode",Qd);a.set("previewMode",Sd);a.set("environmentMode",Rd);a.m=!0;return a};var Ee=function(a){return null===a?"null":a instanceof h?"array":a instanceof fb?"function":typeof a};var Fe=function(a){function b(c){return function(d){try{return c(d)}catch(e){(Qd||Sd)&&a.call(this,e.message)}}}return{parse:b(function(c){return qb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(rb(c))})}};var Ge=function(a){return Qa(rb(a,this.m))};var He=function(a){return Number(rb(a,this.m))};var Ie=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var Je=function(a,b,c){var d=null,e=!1;E(this.i.a,["tableObj:!List","keyColumnName:!string","valueColumnName:!string"],arguments);d=new jb;for(var f=0;f<a.length();f++){var g=a.get(f);g instanceof jb&&g.has(b)&&g.has(c)&&(d.set(g.get(b),g.get(c)),e=!0)}return e?d:null};var te="floor ceil round max min abs pow sqrt".split(" ");var Ke=function(){var a={};return{Lg:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Hh:function(b,c){a[b]=c},reset:function(){a={}}}},Le=function(a,b){E(this.i.a,["apiName:!string","mock:?*"],arguments);};var Me=function(){this.a={}};Me.prototype.get=function(a,b){var c=this.a.hasOwnProperty(a)?this.a[a]:void 0;return c};Me.prototype.add=function(a,b,c){if(this.a.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";this.a[a]=c?void 0:Da(b)?oe(a,b):pe(a,b)};function Ne(){var a={};return a};var G={fb:"_ee",Tc:"_syn",ci:"_uei",ai:"_pci",Hc:"event_callback",Mb:"event_timeout",K:"gtag.config",ja:"allow_ad_personalization_signals",Ic:"restricted_data_processing",cb:"allow_google_signals",ka:"cookie_expires",Lb:"cookie_update",eb:"session_duration",ma:"user_properties",xa:"transport_url",O:"ads_data_redaction"};G.Me=[G.ja,G.cb,G.Lb];G.Pe=[G.ka,G.Mb,G.eb];G.s="ad_storage",G.J="analytics_storage",G.Lh="region",G.Oh="wait_for_update";var C=window,I=document,Oe=navigator,Pe=I.currentScript&&I.currentScript.src,Qe=function(a,b){var c=C[a];C[a]=void 0===c?b:c;return C[a]},Re=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Se=function(a,b,c){var d=I.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Re(d,b);c&&(d.onerror=c);var e;if(null===oa)b:{var f=ma.document,g=f.querySelector&&f.querySelector("script[nonce]");
if(g){var k=g.nonce||g.getAttribute("nonce");if(k&&na.test(k)){oa=k;break b}}oa=""}e=oa;e&&d.setAttribute("nonce",e);var l=I.getElementsByTagName("script")[0]||I.body||I.head;l.parentNode.insertBefore(d,l);return d},Te=function(){if(Pe){var a=Pe.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Ue=function(a,b){var c=I.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=I.body&&I.body.lastChild||
I.body||I.head;d.parentNode.insertBefore(c,d);Re(c,b);void 0!==a&&(c.src=a);return c},Ve=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},We=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Xe=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},K=function(a){C.setTimeout(a,0)},Ye=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Ze=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},$e=function(a){var b=I.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},af=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},bf=function(a){Oe.sendBeacon&&Oe.sendBeacon(a)||Ve(a)},cf=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var df={},N=function(a,b){df[a]=df[a]||[];df[a][b]=!0},ef=function(a){for(var b=[],c=df[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var ff={},gf=function(a){return void 0==ff[a]?!1:ff[a]};var hf=[];function jf(){var a=Qe("google_tag_data",{});a.ics||(a.ics={entries:{},set:kf,update:lf,addListener:mf,notifyListeners:nf,active:!1});return a.ics}
function kf(a,b,c,d,e,f){var g=jf();g.active=!0;if(void 0!=b){var k=g.entries,l=k[a]||{},m=l.region,n=c&&p(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(n===e||(n===d?m!==e:!n&&!m)){var r=!!(f&&0<f&&void 0===l.update),t={region:n,initial:"granted"===b,update:l.update,quiet:r};k[a]=t;r&&C.setTimeout(function(){k[a]===t&&t.quiet&&(t.quiet=!1,of(a),nf(),N("TAGGING",2))},f)}}}
function lf(a,b){var c=jf();c.active=!0;if(void 0!=b){var d=pf(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=pf(a);f.quiet?(f.quiet=!1,of(a)):g!==d&&of(a)}}function mf(a,b){hf.push({ue:a,Gg:b})}function of(a){for(var b=0;b<hf.length;++b){var c=hf[b];Ga(c.ue)&&-1!==c.ue.indexOf(a)&&(c.Ve=!0)}}function nf(){for(var a=0;a<hf.length;++a){var b=hf[a];if(b.Ve){b.Ve=!1;try{b.Gg.call()}catch(c){}}}}
var pf=function(a){var b=jf().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},qf=function(a){return!(jf().entries[a]||{}).quiet},rf=function(){return gf("gtag_cs_api")?jf().active:!1},sf=function(a,b){jf().addListener(a,b)},tf=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!qf(b[e]))return!0;return!1}if(c()){var d=!1;sf(b,function(){d||c()||(d=!0,a())})}else a()},uf=function(a,b){if(!1===pf(b)){var c=!1;sf([b],function(){!c&&pf(b)&&(a(),c=!0)})}};var vf=[G.s,G.J],wf=function(a){var b=a[G.Lh];b&&N("GTM",40);var c=a[G.Oh];c&&N("GTM",41);for(var d=Ga(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<vf.length;f++){var g=vf[f],k=a[vf[f]],l=d[e];jf().set(g,k,l,"MA","MA-07",c)}},xf=function(a){for(var b=0;b<vf.length;b++){var c=vf[b],d=a[vf[b]];jf().update(c,d)}jf().notifyListeners()},yf=function(a){var b=pf(a);return void 0!=b?b:!0},zf=function(){for(var a=[],b=0;b<vf.length;b++){var c=pf(vf[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+
a.join("")},Af=function(a){uf(a,G.s)},Bf=function(a,b){tf(a,b)};var Df=function(a){return Cf?I.querySelectorAll(a):null},Ef=function(a,b){if(!Cf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!I.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Ff=!1;if(I.querySelectorAll)try{var Gf=I.querySelectorAll(":root");Gf&&1==Gf.length&&Gf[0]==I.documentElement&&(Ff=!0)}catch(a){}var Cf=Ff;var Hd={},T=null,Uf=Math.random();Hd.B="GTM-MVCC8H";Hd.Rb="6o0";Hd.Sd="";var Vf={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Wf="www.googletagmanager.com/gtm.js";
var Xf=Wf,Yf=null,Zf=null,$f=null,ag="//www.googletagmanager.com/a?id="+Hd.B+"&cv=570",bg={},cg={},dg=function(){var a=T.sequence||0;T.sequence=a+1;return a};
var eg=function(){return"&tc="+hd.filter(function(a){return a}).length},hg=function(){fg||(fg=C.setTimeout(gg,500))},gg=function(){fg&&(C.clearTimeout(fg),fg=void 0);void 0===ig||jg[ig]&&!kg&&!lg||(mg[ig]||ng.Yg()||0>=og--?(N("GTM",1),mg[ig]=!0):(ng.xh(),Ve(pg()),jg[ig]=!0,qg=rg=lg=kg=""))},pg=function(){var a=ig;if(void 0===a)return"";var b=ef("GTM"),c=ef("TAGGING");return[sg,jg[a]?"":"&es=1",tg[a],b?"&u="+b:"",c?"&ut="+c:"",eg(),kg,lg,rg,qg,"&z=0"].join("")},ug=function(){return[ag,"&v=3&t=t","&pid="+
Ka(),"&rv="+Hd.Rb].join("")},vg="0.005000">Math.random(),sg=ug(),wg=function(){sg=ug()},jg={},kg="",lg="",qg="",rg="",ig=void 0,tg={},mg={},fg=void 0,ng=function(a,b){var c=0,d=0;return{Yg:function(){if(c<a)return!1;Ua()-d>=b&&(c=0);return c>=a},xh:function(){Ua()-d>=b&&(c=0);c++;d=Ua()}}}(2,1E3),og=1E3,xg=function(a,b){if(vg&&!mg[a]&&ig!==a){gg();ig=a;qg=kg="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";tg[a]="&e="+c+"&eid="+a;hg()}},yg=function(a,b,c){if(vg&&!mg[a]&&
b){a!==ig&&(gg(),ig=a);var d,e=String(b[td.ya]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;kg=kg?kg+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var k=(jd[g]?"1":"2")+d;qg=qg?qg+"."+k:"&ti="+k;hg();2022<=pg().length&&gg()}},zg=function(a,b,c){if(vg&&!mg[a]){a!==ig&&(gg(),ig=a);var d=c+b;lg=lg?lg+
"."+d:"&epr="+d;hg();2022<=pg().length&&gg()}};var Ag={},Bg=new La,Cg={},Dg={},Gg={name:"dataLayer",set:function(a,b){F(cb(a,b),Cg);Eg()},get:function(a){return Fg(a,2)},reset:function(){Bg=new La;Cg={};Eg()}},Fg=function(a,b){if(2!=b){var c=Bg.get(a);if(vg){var d=Hg(a);c!==d&&N("GTM",5)}return c}return Hg(a)},Hg=function(a){var b=a.split("."),c=!1,d=void 0;return c?d:Ig(b)},Ig=function(a){for(var b=Cg,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Jg=function(a,b){Dg.hasOwnProperty(a)||(Bg.set(a,b),F(cb(a,b),Cg),Eg())},Eg=function(a){Na(Dg,function(b,c){Bg.set(b,c);F(cb(b,void 0),Cg);F(cb(b,c),Cg);a&&delete Dg[b]})},Kg=function(a,b,c){Ag[a]=Ag[a]||{};var d=1!==c?Hg(b):Bg.get(b);"array"===nb(d)||"object"===nb(d)?Ag[a][b]=F(d):Ag[a][b]=d},Lg=function(a,b){if(Ag[a])return Ag[a][b]},Mg=function(a,b){Ag[a]&&delete Ag[a][b]};var Pg=/:[0-9]+$/,Qg=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var k=f[g].split("=");if(decodeURIComponent(k[0]).replace(/\+/g," ")===b){var l=k.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},Tg=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Rg(a.protocol)||Rg(C.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
C.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||C.location.hostname).replace(Pg,"").toLowerCase());return Sg(a,b,c,d,e)},Sg=function(a,b,c,d,e){var f,g=Rg(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Ug(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(Pg,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||N("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Ha(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Qg(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Rg=function(a){return a?a.replace(":",
"").toLowerCase():""},Ug=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Vg=function(a){var b=I.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||N("TAGGING",1),c="/"+c);var d=b.hostname.replace(Pg,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},Wg=function(a){function b(m){var n=m.split("=")[0];return 0>d.indexOf(n)?m:n+"=0"}function c(m){return m.split("&").map(b).filter(function(n){return void 0!=
n}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),e=Vg(a),f=a.split(/[?#]/)[0],g=e.search,k=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===k[0]&&(k=k.substring(1));g=c(g);k=c(k);""!==g&&(g="?"+g);""!==k&&(k="#"+k);var l=""+f+g+k;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};function Xg(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),k=g[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var Zg=function(a,b,c,d){return Yg(d)?Xg(a,String(b||document.cookie),c):[]},bh=function(a,b,c,d,e){if(Yg(e)){var f=$g(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=ah(f,function(g){return g.Xb},b);if(1===f.length)return f[0].id;f=ah(f,function(g){return g.Bb},c);return f[0]?f[0].id:void 0}}};function ch(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=Zg(b,f,!1,d).indexOf(c)}
var gh=function(a,b,c,d){function e(w,y,x){if(null==x)return delete k[y],w;k[y]=x;return w+"; "+y+"="+x}function f(w,y){if(null==y)return delete k[y],w;k[y]=!0;return w+"; "+y}if(!Yg(c.Ea))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=dh(b),g=a+"="+b);var k={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.gh);g=e(g,"samesite",
c.Bh);c.Eh&&(g=f(g,"secure"));var m=c.domain;if("auto"===m){for(var n=eh(),r=void 0,t=!1,q=0;q<n.length;++q){var u="none"!==n[q]?n[q]:void 0,v=e(g,"domain",u);v=f(v,c.flags);try{d&&d(a,k)}catch(w){r=w;continue}t=!0;if(!fh(u,c.path)&&ch(v,a,b,c.Ea))return 0}if(r&&!t)throw r;return 1}m&&"none"!==m&&(g=e(g,"domain",m));g=f(g,c.flags);d&&d(a,k);return fh(m,c.path)?1:ch(g,a,b,c.Ea)?0:1},hh=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return gh(a,b,c)};
function ah(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var k=a[g],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function $g(a,b,c){for(var d=[],e=Zg(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),k=g.shift();if(!b||-1!==b.indexOf(k)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),Xb:1*l[0]||1,Bb:1*l[1]||1}))}}return d}
var dh=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},ih=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,jh=/(^|\.)doubleclick\.net$/i,fh=function(a,b){return jh.test(document.location.hostname)||"/"===b&&ih.test(a)},eh=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;jh.test(e)||ih.test(e)||a.push("none");
return a},Yg=function(a){if(!gf("gtag_cs_api")||!a||!rf())return!0;if(!qf(a))return!1;var b=pf(a);return null==b?!0:!!b};var kh=function(){for(var a=Oe.userAgent+(I.cookie||"")+(I.referrer||""),b=a.length,c=C.history.length;0<c;)a+=c--^b++;var d=1,e,f,g;if(a)for(d=0,f=a.length-1;0<=f;f--)g=a.charCodeAt(f),d=(d<<6&268435455)+g+(g<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ua()/1E3)].join(".")},oh=function(a,b,c,d,e){var f=mh(b);return bh(a,f,nh(c),d,e)},ph=function(a,b,c,d){var e=""+mh(c),f=nh(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},mh=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},nh=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function qh(a,b,c){var d,e=a.zb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Ua())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var rh=["1"],sh={},wh=function(a){var b=th(a.prefix);sh[b]||uh(b,a.path,a.domain)||(vh(b,kh(),a),uh(b,a.path,a.domain))};function vh(a,b,c){var d=ph(b,"1",c.domain,c.path),e=qh(c);e.Ea="ad_storage";hh(a,d,e)}function uh(a,b,c){var d=oh(a,b,c,rh,"ad_storage");d&&(sh[a]=d);return d}function th(a){return(a||"_gcl")+"_au"};var xh=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function yh(){for(var a=zh,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Ah(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var zh,Bh;function Ch(a){zh=zh||Ah();Bh=Bh||yh();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),g=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|g>>4,n=(g&15)<<2|k>>6,r=k&63;e||(r=64,d||(n=64));b.push(zh[l],zh[m],zh[n],zh[r])}return b.join("")}
function Dh(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Bh[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}zh=zh||Ah();Bh=Bh||yh();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=k&&(c+=String.fromCharCode(g<<6&192|k)))}};var Eh;var Ih=function(){var a=Fh,b=Gh,c=Hh(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){We(I,"mousedown",d);We(I,"keyup",d);We(I,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Jh=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Hh().decorators.push(f)},Kh=function(a,b,c){for(var d=Hh().decorators,e={},f=0;f<d.length;++f){var g=
d[f],k;if(k=!c||g.forms)a:{var l=g.domains,m=a,n=!!g.sameHost;if(l&&(n||m!==I.location.hostname))for(var r=0;r<l.length;r++)if(l[r]instanceof RegExp){if(l[r].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[r])||n&&0<=l[r].indexOf(m)){k=!0;break a}k=!1}if(k){var t=g.placement;void 0==t&&(t=g.fragment?2:1);t===b&&Ya(e,g.callback())}}return e},Hh=function(){var a=Qe("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Lh=/(.*?)\*(.*?)\*(.*)/,Mh=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Nh=/^(?:www\.|m\.|amp\.)+/,Oh=/([^?#]+)(\?[^#]*)?(#.*)?/;function Ph(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Rh=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Ch(String(d))))}var e=b.join("*");return["1",Qh(e),e].join("*")},Qh=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Eh)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,k=0;8>k;k++)g=
g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}Eh=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Eh[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Th=function(){return function(a){var b=Vg(C.location.href),c=b.search.replace("?",""),d=Qg(c,"_gl",!1,!0)||"";a.query=Sh(d)||{};var e=Tg(b,"fragment").match(Ph("_gl"));a.fragment=Sh(e&&e[3]||"")||{}}},Uh=function(a){var b=Th(),c=Hh();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(Ya(d,e.query),a&&Ya(d,e.fragment));return d},
Sh=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Lh.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var k=g[3],l;a:{for(var m=g[2],n=0;n<b;++n)if(m===Qh(k,n)){l=!0;break a}l=!1}if(l){for(var r={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)r[t[q]]=Dh(t[q+1]);return r}}}}catch(u){}};
function Vh(a,b,c,d){function e(n){var r=n,t=Ph(a).exec(r),q=r;if(t){var u=t[2],v=t[4];q=t[1];v&&(q=q+u+v)}n=q;var w=n.charAt(n.length-1);n&&"&"!==w&&(n+="&");return n+m}d=void 0===d?!1:d;var f=Oh.exec(c);if(!f)return"";var g=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+g+k+l}
function Wh(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Kh(b,1,c),e=Kh(b,2,c),f=Kh(b,3,c);if(Za(d)){var g=Rh(d);c?Xh("_gl",g,a):Yh("_gl",g,a,!1)}if(!c&&Za(e)){var k=Rh(e);Yh("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){Yh(m,n,r,void 0);break a}if("form"===r.tagName.toLowerCase()){Xh(m,n,r);break a}}"string"==typeof r&&Vh(m,n,r,void 0)}}
function Yh(a,b,c,d){if(c.href){var e=Vh(a,b,c.href,void 0===d?!1:d);xh.test(e)&&(c.href=e)}}
function Xh(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var k=e[g];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=I.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=Vh(a,b,c.action);xh.test(m)&&(c.action=m)}}}
var Fh=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Wh(e,e.hostname)}}catch(g){}},Gh=function(a){try{if(a.action){var b=Tg(Vg(a.action),"host");Wh(a,b)}}catch(c){}},Zh=function(a,b,c,d){Ih();Jh(a,b,"fragment"===c?2:1,!!d,!1)},$h=function(a,b){Ih();Jh(a,[Sg(C.location,"host",!0)],b,!0,!0)},ai=function(){var a=I.location.hostname,b=Mh.exec(I.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Nh,""),l=e.replace(Nh,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},bi=function(a,b){return!1===a?!1:a||b||ai()};var ci=/^\w+$/,di=/^[\w-]+$/,ei=/^~?[\w-]+$/,fi={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},gi=function(){if(!gf("gtag_cs_api")||!rf())return!0;var a=pf("ad_storage");return null==a?!0:!!a},hi=function(a,b){qf("ad_storage")?gi()?a():uf(a,"ad_storage"):b?N("TAGGING",3):tf(function(){hi(a,!0)},["ad_storage"])},ki=function(a){var b=[];if(!I.cookie)return b;var c=Zg(a,I.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=ii(c[d]);e&&-1===Ha(b,e)&&b.push(e)}return ji(b)};
function li(a){return a&&"string"==typeof a&&a.match(ci)?a:"_gcl"}
var ni=function(){var a=Vg(C.location.href),b=Tg(a,"query",!1,void 0,"gclid"),c=Tg(a,"query",!1,void 0,"gclsrc"),d=Tg(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Qg(e,"gclid",!1,void 0);c=c||Qg(e,"gclsrc",!1,void 0)}return mi(b,c,d)},mi=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(di))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":gf("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},pi=function(a){var b=ni();hi(function(){return oi(b,a)})};
function oi(a,b,c){function d(m,n){var r=qi(m,e);r&&(hh(r,n,f),g=!0)}b=b||{};var e=li(b.prefix);c=c||Ua();var f=qh(b,c,!0);f.Ea="ad_storage";var g=!1,k=Math.round(c/1E3),l=function(m){return["GCL",k,m].join(".")};a.aw&&(!0===b.wi?d("aw",l("~"+a.aw[0])):d("aw",l(a.aw[0])));a.dc&&d("dc",l(a.dc[0]));a.gf&&d("gf",l(a.gf[0]));a.ha&&d("ha",l(a.ha[0]));a.gp&&d("gp",l(a.gp[0]));return g}
var si=function(a,b){var c=Uh(!0);hi(function(){for(var d=li(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==fi[f]){var g=qi(f,d),k=c[g];if(k){var l=Math.min(ri(k),Ua()),m;b:{for(var n=l,r=Zg(g,I.cookie,void 0,"ad_storage"),t=0;t<r.length;++t)if(ri(r[t])>n){m=!0;break b}m=!1}if(!m){var q=qh(b,l,!0);q.Ea="ad_storage";hh(g,k,q)}}}}oi(mi(c.gclid,c.gclsrc),b)})},qi=function(a,b){var c=fi[a];if(void 0!==c)return b+c},ri=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function ii(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var ti=function(a,b,c,d,e){if(Ga(b)){var f=li(e),g=function(){for(var k={},l=0;l<a.length;++l){var m=qi(a[l],f);if(m){var n=Zg(m,I.cookie,void 0,"ad_storage");n.length&&(k[m]=n.sort()[n.length-1])}}return k};hi(function(){Zh(g,b,c,d)})}},ji=function(a){return a.filter(function(b){return ei.test(b)})},ui=function(a,b){for(var c=li(b.prefix),d={},e=0;e<a.length;e++)fi[a[e]]&&(d[a[e]]=fi[a[e]]);hi(function(){Na(d,function(f,g){var k=Zg(c+g,I.cookie,void 0,"ad_storage");if(k.length){var l=k[0],m=ri(l),
n={};n[f]=[ii(l)];oi(n,b,m)}})})};function vi(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var wi=function(){function a(e,f,g){g&&(e[f]=g)}var b=["aw","dc"];if(rf()){var c=ni();if(vi(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);$h(function(){return d},3);$h(function(){var e={};return e._up="1",e},1)}}},xi=function(){var a;if(gi()){for(var b=[],c=I.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Ad:f[1],value:f[2]})}var g={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(g[b[k].Ad]||(g[b[k].Ad]=[]),g[b[k].Ad].push({timestamp:l[1],Ig:l[2]}))}a=g}else a={};return a};var yi=/^\d+\.fls\.doubleclick\.net$/;function zi(a,b){qf(G.s)?yf(G.s)?a():Af(a):b?N("GTM",42):Bf(function(){zi(a,!0)},[G.s])}function Ai(a){var b=Vg(C.location.href),c=Tg(b,"host",!1);if(c&&c.match(yi)){var d=Tg(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Bi(a,b,c){if("aw"==a||"dc"==a){var d=Ai("gcl"+a);if(d)return d.split(".")}var e=li(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!yf(G.s)&&c,g;g=ni()[a]||[];if(0<g.length)return f?["0"]:g}var k=qi(a,e);return k?ki(k):[]}
var Ci=function(a){var b=Ai("gac");if(b)return!yf(G.s)&&a?"0":decodeURIComponent(b);var c=xi(),d=[];Na(c,function(e,f){for(var g=[],k=0;k<f.length;k++)g.push(f[k].Ig);g=ji(g);g.length&&d.push(e+":"+g.join(","))});return d.join(";")},Di=function(a,b){var c=ni().dc||[];zi(function(){wh(b);var d=sh[th(b.prefix)],e=!1;if(d&&0<c.length){var f=T.joined_au=T.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var k=0;k<c.length;k++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[k]+"&auiddc="+d;bf(l);e=f[g]=
!0}}null==a&&(a=e);if(a&&d){var m=th(b.prefix),n=sh[m];n&&vh(m,n,b)}})};var Ei=/[A-Z]+/,Fi=/\s/,Gi=function(a){if(p(a)&&(a=Ta(a),!Fi.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Ei.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],C:d}}}}},Ii=function(a){for(var b={},c=0;c<a.length;++c){var d=Gi(a[c]);d&&(b[d.id]=d)}Hi(b);var e=[];Na(b,function(f,g){e.push(g)});return e};
function Hi(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.C[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Ji=function(){var a=!1;return a};var Li=function(a,b,c,d){return(2===Ki()||d||"http:"!=C.location.protocol?a:b)+c},Ki=function(){var a=Te(),b;if(1===a)a:{var c=Xf;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=I.getElementsByTagName("script"),k=0;k<g.length&&100>k;k++){var l=g[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var Zi=function(a){return yf(G.s)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=Wg(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})};var $i=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),aj={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},bj={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},cj="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var ej=function(a){var b=Fg("gtm.whitelist");b&&N("GTM",9);var c=b&&$a(Sa(b),aj),d=Fg("gtm.blacklist");d||(d=Fg("tagTypeBlacklist"))&&N("GTM",3);d?
N("GTM",8):d=[];dj()&&(d=Sa(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Ha(Sa(d),"google")&&N("GTM",2);var e=d&&$a(Sa(d),bj),f={};return function(g){var k=g&&g[td.ya];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=cg[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>Ha(c,k))if(l&&0<l.length)for(var r=
0;r<l.length;r++){if(0>Ha(c,l[r])){N("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=Ha(e,k);if(q)t=q;else{var u=Ma(e,l||[]);u&&N("GTM",10);t=u}}var v=!m||t;v||!(0<=Ha(l,"sandboxedScripts"))||c&&-1!==Ha(c,"sandboxedScripts")||(v=Ma(e,cj));return f[k]=v}},dj=function(){return $i.test(C.location&&C.location.hostname)};var fj={ug:function(a,b){b[td.Kd]&&"string"===typeof a&&(a=1==b[td.Kd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(td.Md)&&null===a&&(a=b[td.Md]);b.hasOwnProperty(td.Od)&&void 0===a&&(a=b[td.Od]);b.hasOwnProperty(td.Nd)&&!0===a&&(a=b[td.Nd]);b.hasOwnProperty(td.Ld)&&!1===a&&(a=b[td.Ld]);return a}};var gj={active:!0,isWhitelisted:function(){return!0}},hj=function(a){var b=T.zones;!b&&a&&(b=T.zones=a());return b};var ij=function(){};var jj=!1,kj=0,lj=[];function mj(a){if(!jj){var b=I.createEventObject,c="complete"==I.readyState,d="interactive"==I.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){jj=!0;for(var e=0;e<lj.length;e++)K(lj[e])}lj.push=function(){for(var f=0;f<arguments.length;f++)K(arguments[f]);return 0}}}function nj(){if(!jj&&140>kj){kj++;try{I.documentElement.doScroll("left"),mj()}catch(a){C.setTimeout(nj,50)}}}var oj=function(a){jj?a():lj.push(a)};var pj={},qj={},rj=function(a,b,c,d){if(!qj[a]||Vf[b]||"__zone"===b)return-1;var e={};pb(d)&&(e=F(d,e));e.id=c;e.status="timeout";return qj[a].tags.push(e)-1},sj=function(a,b,c,d){if(qj[a]){var e=qj[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function tj(a){for(var b=pj[a]||[],c=0;c<b.length;c++)b[c]();pj[a]={push:function(d){d(Hd.B,qj[a])}}}
var wj=function(a,b,c){qj[a]={tags:[]};Da(b)&&uj(a,b);c&&C.setTimeout(function(){return tj(a)},Number(c));return vj(a)},uj=function(a,b){pj[a]=pj[a]||[];pj[a].push(Xa(function(){return K(function(){b(Hd.B,qj[a])})}))};function vj(a){var b=0,c=0,d=!1;return{add:function(){c++;return Xa(function(){b++;d&&b>=c&&tj(a)})},eg:function(){d=!0;b>=c&&tj(a)}}};var xj=function(){function a(d){return!Ea(d)||0>d?0:d}if(!T._li&&C.performance&&C.performance.timing){var b=C.performance.timing.navigationStart,c=Ea(Gg.get("gtm.start"))?Gg.get("gtm.start"):0;T._li={cst:a(c-b),cbt:a(Zf-b)}}};var Bj={},Cj=function(){return C.GoogleAnalyticsObject&&C[C.GoogleAnalyticsObject]},Dj=!1;
var Ej=function(a){C.GoogleAnalyticsObject||(C.GoogleAnalyticsObject=a||"ga");var b=C.GoogleAnalyticsObject;if(C[b])C.hasOwnProperty(b)||N("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);C[b]=c}xj();return C[b]},Fj=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Cj();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Hj=function(a){},Gj=function(){return C.GoogleAnalyticsObject||"ga"};
var Ij=function(a,b){return function(){var c=Cj(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),k=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",k,!0),f.set("_x_19",void 0,!0),e(f))})}}};var Nj=function(){return!1},Oj=function(){var a={};return function(b,c,d){}};function Pj(a,b,c,d){var e=hd[a],f=Qj(a,b,c,d);if(!f)return null;var g=pd(e[td.ae],c,[]);if(g&&g.length){var k=g[0];f=Pj(k.index,{F:f,D:1===k.Ae?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Qj(a,b,c,d){function e(){if(f[td.zf])k();else{var w=qd(f,c,[]),y=rj(c.id,String(f[td.ya]),Number(f[td.ce]),w[td.Af]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var z=Ua()-B;yg(c.id,hd[a],"5");sj(c.id,y,"success",z);g()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var z=Ua()-B;yg(c.id,hd[a],"6");sj(c.id,y,"failure",z);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;yg(c.id,f,"1");var A=function(){var z=Ua()-B;yg(c.id,f,"7");sj(c.id,y,"exception",z);x||(x=!0,k())};var B=Ua();try{od(w,c)}catch(z){A(z)}}}var f=hd[a],g=b.F,k=b.D,l=b.terminate;if(c.gd(f))return null;var m=pd(f[td.de],c,[]);if(m&&m.length){var n=m[0],r=Pj(n.index,{F:g,D:k,terminate:l},c,d);if(!r)return null;g=r;k=2===n.Ae?l:r}if(f[td.Td]||f[td.Ef]){var t=f[td.Td]?id:c.Jh,q=g,u=k;if(!t[a]){e=Xa(e);var v=Rj(a,t,e);g=v.F;k=v.D}return function(){t[a](q,u)}}return e}
function Rj(a,b,c){var d=[],e=[];b[a]=Sj(d,e,c);return{F:function(){b[a]=Tj;for(var f=0;f<d.length;f++)d[f]()},D:function(){b[a]=Uj;for(var f=0;f<e.length;f++)e[f]()}}}function Sj(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Tj(a){a()}function Uj(a,b){b()};var Xj=function(a,b){for(var c=[],d=0;d<hd.length;d++)if(a.Ab[d]){var e=hd[d];var f=b.add();try{var g=Pj(d,{F:f,D:f,terminate:f},a,d);g?c.push({df:d,We:rd(e),$b:g}):(Vj(d,a),f())}catch(l){f()}}b.eg();c.sort(Wj);for(var k=0;k<c.length;k++)c[k].$b();return 0<c.length};function Wj(a,b){var c,d=b.We,e=a.We;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.df,k=b.df;f=g>k?1:g<k?-1:0}return f}
function Vj(a,b){if(!vg)return;var c=function(d){var e=b.gd(hd[d])?"3":"4",f=pd(hd[d][td.ae],b,[]);f&&f.length&&c(f[0].index);yg(b.id,hd[d],e);var g=pd(hd[d][td.de],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Yj=!1,Zj=function(a,b,c,d,e){if("gtm.js"==b){if(Yj)return!1;Yj=!0}xg(a,b);var f=wj(a,d,e);Kg(a,"event",1);Kg(a,"ecommerce",1);Kg(a,"gtm");var g={id:a,name:b,gd:ej(c),Ab:[],Jh:[],Ne:function(){N("GTM",6)}};g.Ab=Dd(g);var k=Xj(g,f);"gtm.js"!==b&&"gtm.sync"!==b||Hj(Hd.B);if(!k)return k;for(var l=0;l<g.Ab.length;l++)if(g.Ab[l]){var m=hd[l];if(m&&!Vf[String(m[td.ya])])return!0}return!1};function bk(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return Vg(""+c+b).href}}function ck(a,b){return dk()?bk(a,b):void 0}
function dk(){var a=!1;return a};var ek=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.a={};this.globalConfig={};this.F=function(){};this.D=function(){};this.eventId=void 0},fk=function(a){var b=new ek;b.eventModel=a;return b},gk=function(a,b){a.targetConfig=b;return a},hk=function(a,b){a.containerConfig=b;return a},ik=function(a,b){a.a=b;return a},jk=function(a,b){a.globalConfig=b;return a},kk=function(a,b){a.F=b;return a},lk=function(a,b){a.D=b;return a};
ek.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.a[a])return this.a[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var mk=function(a){function b(e){Na(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Na(c,function(e){d.push(e)});return d};var nk;if(3===Hd.Rb.length)nk="g";else{var ok="G";nk=ok}
var pk={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:nk,OPT:"o"},qk=function(a){var b=Hd.B.split("-"),c=b[0].toUpperCase(),d=pk[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Hd.Rb.length){var g="w";f="2"+g}else f="";return f+d+Hd.Rb+e};function rk(){var a=!1;a=rf();return a}
function sk(a,b,c){function d(r){var t;T.reported_gclid||(T.reported_gclid={});t=T.reported_gclid;var q=f+(r?"gcu":"gcs");if(!t[q]){t[q]=!0;var u=[],v=function(B,z){z&&u.push(B+"="+encodeURIComponent(z))},w="https://www.google.com";if(rf()){var y=yf(G.s);v("gcs",zf());r&&v("gcu","1");v("rnd",n);if((!f||g&&"aw.ds"!==g)&&yf(G.s)){var x=ki("_gcl_aw");v("gclaw",x.join("."))}v("url",String(C.location).split(/[?#]/)[0]);v("dclid",tk(b,k));!y&&b&&(w="https://pagead2.googlesyndication.com")}
"1"===Uh(!1)._up&&v("gtm_up","1");v("gclid",tk(b,f));v("gclsrc",g);v("gtm",qk(!c));var A=w+"/pagead/landing?"+u.join("&");bf(A)}}var e=ni(),f=e.gclid||"",g=e.gclsrc,k=e.dclid||"",l=!a&&(!f||g&&"aw.ds"!==g?!1:!0),m=rk();if(l||m){var n=""+kh();m?Bf(function(){d();yf(G.s)||Af(function(){return d(!0)})},[G.s]):d()}}
function tk(a,b){var c=a&&!yf(G.s);if(b&&c)return"0";return b}
var Dk=function(a){return!(void 0===a||null===a||0===(a+"").length)},Ek=function(a,b){var c;if(2===b.ba)return a("ord",Ka(1E11,1E13)),!0;if(3===b.ba)return a("ord","1"),a("num",Ka(1E11,1E13)),!0;if(4===b.ba)return Dk(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.ba)c="1";else if(6===b.ba)c=b.vd;else return!1;Dk(c)&&a("qty",c);Dk(b.Vb)&&a("cost",b.Vb);Dk(b.transactionId)&&a("ord",b.transactionId);return!0},Gk=function(a,b,c){function d(A,B,z){r.hasOwnProperty(A)||(B=String(B),n.push(";"+A+"="+(z?
B:Fk(B))))}var e=a.$c,f=a.yd,g=a.protocol;g+=f?"//"+e+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";var k=";",l=!0;l=yf(G.s);var m=!l&&a.Cb;m&&(g="https://ade.googlesyndication.com/ddm/activity",k="/",f=!1);var n=[k,"src="+Fk(e),";type="+Fk(a.cd),";cat="+Fk(a.rb)],r=a.zg||{};Na(r,function(A,B){n.push(";"+Fk(A)+"="+Fk(B+""))});if(Ek(d,a)){Dk(a.Cc)&&d("u",a.Cc);Dk(a.Bc)&&d("tran",a.Bc);
d("gtm",qk());rf()&&(d("gcs",zf()),c&&d("gcu","1"));"1"===Uh(!1)._up&&d("gtm_up","1");!1===a.ag&&d("npa","1");if(a.Zc){var t=void 0===a.Cb?!0:!!a.Cb,q=Bi("dc",a.Qa,t);q&&q.length&&d("gcldc",q.join("."));var u=Bi("aw",a.Qa,t);u&&u.length&&d("gclaw",u.join("."));var v=Ci(t);v&&d("gac",v);wh({prefix:a.Qa,
zb:a.wg,domain:a.vg,flags:a.gi});var w=sh[th(a.Qa)];w&&d("auiddc",w)}Dk(a.rd)&&d("prd",a.rd,!0);Na(a.Cd,function(A,B){d(A,B)});n.push(b||"");if(Dk(a.oc)){var y=a.oc||"";m&&(y=Wg(y));d("~oref",y)}var x=g+n.join("")+"?";f?Ue(x,a.F):Ve(x,a.F,a.D)}else K(a.D)},Fk=encodeURIComponent,Hk=function(a,b){var c=!1;c=!0;c&&rf()?Bf(function(){Gk(a,b);yf(G.s)||
Af(function(){Gk(a,b,!0)})},[G.s]):Gk(a,b)};function xl(){var a=T;return a.gcq=a.gcq||new yl}
var zl=function(a,b,c){xl().register(a,b,c)},Al=function(a,b,c,d){xl().push("event",[b,a],c,d)},Bl=function(a,b){xl().push("config",[a],b)},Cl={},Dl=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.a=!1},El=function(a,b,c,d,e){this.type=a;this.m=b;this.da=c||"";this.a=d;this.i=e},yl=function(){this.m={};this.i={};this.a=[]},Fl=function(a,b){var c=Gi(b);return a.m[c.containerId]=a.m[c.containerId]||new Dl},Gl=function(a,b,c){if(b){var d=Gi(b);if(d&&1===
Fl(a,b).status){Fl(a,b).status=2;var e={};vg&&(e.timeoutId=C.setTimeout(function(){N("GTM",38);hg()},3E3));a.push("require",[e],d.containerId);Cl[d.containerId]=Ua();if(Ji()){}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",k=("http:"!=C.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=ck(c,g)||k;Se(l)}}}},Hl=function(a,b,c,d){if(d.da){var e=Fl(a,d.da),f=e.m;if(f){var g=F(c),k=F(e.targetConfig[d.da]),l=F(e.containerConfig),m=F(e.i),n=F(a.i),r=Fg("gtm.uniqueEventId"),t=Gi(d.da).prefix,q=lk(kk(jk(ik(hk(gk(fk(g),k),l),m),n),function(){
zg(r,t,"2");}),function(){zg(r,t,"3");});try{zg(r,t,"1");f(d.da,b,d.m,q)}catch(u){zg(r,t,"4");}}}};
yl.prototype.register=function(a,b,c){if(3!==Fl(this,a).status){Fl(this,a).m=b;Fl(this,a).status=3;c&&(Fl(this,a).i=c);var d=Gi(a),e=Cl[d.containerId];if(void 0!==e){var f=T[d.containerId].bootstrap,g=d.prefix.toUpperCase();T[d.containerId]._spx&&(g=g.toLowerCase());var k=Fg("gtm.uniqueEventId"),l=g,m=Ua()-f;if(vg&&!mg[k]){k!==ig&&(gg(),ig=k);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);rg=rg?rg+","+n:"&cl="+n}delete Cl[d.containerId]}this.flush()}};
yl.prototype.push=function(a,b,c,d){var e=Math.floor(Ua()/1E3);Gl(this,c,b[0][G.xa]||this.i[G.xa]);this.a.push(new El(a,e,c,b,d));d||this.flush()};
yl.prototype.flush=function(a){for(var b=this;this.a.length;){var c=this.a[0];if(c.i)c.i=!1,this.a.push(c);else switch(c.type){case "require":if(3!==Fl(this,c.da).status&&!a)return;vg&&C.clearTimeout(c.a[0].timeoutId);break;case "set":Na(c.a[0],function(l,m){F(cb(l,m),b.i)});break;case "config":var d=c.a[0],e=!!d[G.wc];delete d[G.wc];var f=Fl(this,c.da),g=Gi(c.da),k=g.containerId===g.id;e||(k?f.containerConfig={}:f.targetConfig[c.da]={});f.a&&e||Hl(this,G.K,d,c);f.a=!0;delete d[G.fb];k?F(d,f.containerConfig):
F(d,f.targetConfig[c.da]);break;case "event":Hl(this,c.a[1],c.a[0],c)}this.a.shift()}};var Il=function(a){};var Jl=function(a,b){return!0};var Kl=function(a,b){var c;E(this.i.a,["path:!string"],[a]);Ce(this,"access_globals","execute",a);for(var d=a.split("."),e=C,f=e[d[0]],g=1;f&&g<d.length;g++)e=f,f=f[d[g]];if("function"!==nb(f))return;for(var k=[],l=1;l<arguments.length;l++)k.push(rb(arguments[l],this.m));var m=(0,this.m.P)(f,e,k);c=qb(m,this.m);void 0===c&&void 0!==m&&N("GTM",45);return c};var Ll=function(a){};var Ml=function(a,b){var c;var d=qb(c,this.m);void 0===d&&void 0!==c&&N("GTM",45);return d};var Nl=function(a){var b;E(this.i.a,["path:!string"],arguments);Ce(this,"access_globals","read",a);var c=a.split("."),d=C,e;for(e=0;e<c.length-1;e++)if(d=d[c[e]],null==d)return;b=d[c[e]];var f=qb(b,this.m);void 0===f&&void 0!==b&&N("GTM",45);return f};var Ol=function(a,b){var c=null;E(this.i.a,["functionPath:!string","arrayPath:!string"],arguments);Ce(this,"access_globals","readwrite",a);Ce(this,"access_globals","readwrite",b);var d=a.split("."),e=bb(d),f=d[d.length-1];if(void 0===e)throw Error("Path "+a+" does not exist.");var g=e[f];if(g&&!Da(g))return null;if(g)return qb(g,this.m);var k;g=function(){if(!Da(k.push))throw Error("Object at "+b+" in window is not an array.");k.push.call(k,
arguments)};e[f]=g;var l=b.split("."),m=bb(l),n=l[l.length-1];if(void 0===m)throw Error("Path "+l+" does not exist.");k=m[n];void 0===k&&(k=[],m[n]=k);c=function(){g.apply(g,Array.prototype.slice.call(arguments,0))};return qb(c,this.m)};var Pl=function(a){var b;return qb(b,this.m)};var Ql=function(a){var b;return b};var Rl=function(a,b){b=void 0===b?!0:b;var c;return c};var Sl=function(a,b){var c;return c};var Tl=function(a,b){var c;return c};var Ul=function(a){var b="";return b};var Vl=function(a){var b="";return b};var Wl=function(a,b){};var Xl={},Yl=function(a,b,c,d){E(this.i.a,["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);Ce(this,"inject_script",a);var e=this.m,f=function(){b instanceof fb&&b.Fa(e)},g=function(){c instanceof fb&&c.Fa(e)};if(!d){Se(a,f,g);return}var k=d;Xl[k]?(Xl[k].onSuccess.push(f),Xl[k].onFailure.push(g)):(Xl[k]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=Xl[k].onSuccess,m=0;m<l.length;m++)K(l[m]);l.push=function(n){K(n);
return 0}},g=function(){for(var l=Xl[k].onFailure,m=0;m<l.length;m++)K(l[m]);Xl[k]=null},Se(a,f,g));};var Zl=function(){return!1},$l={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var am=function(){};var bm=function(a,b){var c=!1;return c};var cm=function(){var a="";return a};var dm=function(){var a="";return a};var em=function(a,b,c){};var fm=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var gm=function(a,b,c){E(this.i.a,["path:!string","value:?*","overrideExisting:?boolean"],arguments);Ce(this,"access_globals","readwrite",a);var d=a.split("."),e=C,f;for(f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;if(void 0===e[d[f]]||c)return e[d[f]]=rb(b,this.m),!0;return!1};var hm=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var im=function(a,b,c){var d=this;};var jm={},km={};jm.getItem=function(a){var b=null;return b};
jm.setItem=function(a,b){};
jm.removeItem=function(a){};jm.clear=function(){};var lm=function(a){var b;return b};var Fc=function(){var a=new Me;Ji()?(a.add("injectHiddenIframe",Ca),a.add("injectScript",Ca)):(a.add("injectHiddenIframe",Wl),a.add("injectScript",Yl));var b=em;a.add("Math",ue());a.add("TestHelper",Ne());a.add("addEventCallback",Il);a.add("aliasInWindow",Jl);a.add("assertApi",qe);a.add("assertThat",re);a.add("callInWindow",
Kl);a.add("callLater",Ll);a.add("copyFromDataLayer",Ml);a.add("copyFromWindow",Nl);a.add("createArgumentsQueue",Ol);a.add("createQueue",Pl);a.add("decodeUri",ve);a.add("decodeUriComponent",we);a.add("encodeUri",xe);a.add("encodeUriComponent",ye);a.add("fail",ze);a.add("fromBase64",Ql,!("atob"in C));a.add("generateRandom",Ae);a.add("getContainerVersion",De);a.add("getCookieValues",Rl);a.add("getQueryParameters",Sl);a.add("getReferrerQueryParameters",Tl);a.add("getReferrerUrl",Ul);a.add("getTimestamp",
Be);a.add("getType",Ee);a.add("getUrl",Vl);a.add("localStorage",$l,!Zl());a.add("logToConsole",am);a.add("makeInteger",Ge);a.add("makeNumber",He);a.add("makeString",Ie);a.add("makeTableMap",Je);a.add("mock",Le);a.add("queryPermission",bm);a.add("readCharacterSet",cm);a.add("readTitle",dm);a.add("sendPixel",b);a.add("setCookie",fm);a.add("setInWindow",gm);a.add("sha256",im);a.add("toBase64",lm,!("btoa"in C));a.add("JSON",Fe(function(c){var d=this.m.a;
d&&d.log.call(this,"error",c)}));a.add("templateStorage",jm);return function(c){var d;if(a.a.hasOwnProperty(c))d=a.get(c,this);else throw Error(c+" is not a valid API name.");return d}};var Dc,Ld;
function mm(){var a=data.runtime||[],b=data.runtime_lines;Dc=new Cc;nm();dd=function(e,f,g){om(f);var k=new jb;Na(f,function(q,u){var v=qb(u);void 0===v&&void 0!==u&&N("GTM",44);k.set(q,v)});Dc.a.a.o=zd();var l={fg:Nd(e),eventId:void 0!==g?g.id:void 0,Zb:e,log:function(){}};if(Nj()){var m=Oj(),n=void 0,r=void 0;l.fa={i:{},a:function(q,u,v){1===u&&(n=q);7===u&&(r=v);m(q,u,v)},m:Ke()};l.log=function(q,u){if(n){var v=Array.prototype.slice.call(arguments,1);m(n,4,{level:q,source:r,message:v})}}}var t=Ec(l,
[e,k]);Dc.a.a.o=void 0;t instanceof pa&&"return"===t.a&&(t=t.i);return rb(t)};Gc();for(var c=0;c<a.length;c++){var d=a[c];if(!Ga(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&vd(d,b[c]);Dc.$b(d)}}function om(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Da(b)&&(a.gtmOnSuccess=function(){K(b)});Da(c)&&(a.gtmOnFailure=function(){K(c)})}
function nm(){var a=Dc;T.SANDBOXED_JS_SEMAPHORE=T.SANDBOXED_JS_SEMAPHORE||0;Hc(a,function(b,c,d){T.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{T.SANDBOXED_JS_SEMAPHORE--}})}function pm(a){void 0!==a&&Na(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");cg[e]=cg[e]||[];cg[e].push(b)}})};var qm=["HA","GF","GP","G"],rm="G".split(/,/);rm.push("DC");rm.push("UA");rm.push("AW");
var sm=null,tm={},um={},vm,wm=!1;function xm(a,b){var c={event:a};b&&(c.eventModel=F(b),b[G.Hc]&&(c.eventCallback=b[G.Hc]),b[G.Mb]&&(c.eventTimeout=b[G.Mb]));return c}
var Cm={config:function(a){},event:function(a){var b=a[1];if(p(b)&&!(3<a.length)){var c;if(2<a.length){if(!pb(a[2])&&void 0!=a[2])return;c=a[2]}var d=xm(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return wm=!0,{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=Ld.i;d.a[b]?d.a[b].push(c):
d.a[b]=[c]}},set:function(a){var b;2==a.length&&pb(a[1])?b=F(a[1]):3==a.length&&p(a[1])&&(b={},pb(a[2])||Ga(a[2])?b[a[1]]=F(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}};
Cm.consent=function(a){if(3===a.length){var b=function(){c&&F(a[2],{subcommand:a[1]})};N("GTM",39);var c=!1;var d=a[1];if("default"===d){b();wf(a[2]);return}if("update"===d){b();xf(a[2]);return}}};
var Dm={policy:!0},Em=function(a,b){if(a.length&&p(a[0])){var c=Cm[a[0]];if(c&&(!b||!Dm[a[0]]))return c(a)}};var Fm=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Hm=function(a){var b=Gm(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Im=!1,Jm=[];function Km(){if(!Im){Im=!0;for(var a=0;a<Jm.length;a++)K(Jm[a])}}var Lm=function(a){Im?K(a):Jm.push(a)};var bn=function(a){if(an(a))return a;this.a=a};bn.prototype.Og=function(){return this.a};var an=function(a){return!a||"object"!==nb(a)||pb(a)?!1:"getUntrustedUpdateValue"in a};bn.prototype.getUntrustedUpdateValue=bn.prototype.Og;var cn=[],dn=!1,en=function(a){return C["dataLayer"].push(a)},fn=function(a){var b=T["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function gn(a){var b=a._clear;Na(a,function(f,g){"_clear"!==f&&(b&&Jg(f,void 0),Jg(f,g))});Yf||(Yf=a["gtm.start"]);var c=a.event,d=a["gtm.uniqueEventId"];if(!c)return!1;d||(d=dg(),a["gtm.uniqueEventId"]=d,Jg("gtm.uniqueEventId",d));$f=c;var e=hn(a);$f=null;switch(c){case "gtm.init":N("GTM",19),e&&N("GTM",20)}return e}
function hn(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=T.zones;d=e?e.checkState(Hd.B,c):gj;return d.active?Zj(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function jn(){for(var a=!1;!dn&&0<cn.length;){dn=!0;delete Cg.eventModel;Eg();var b=cn.shift();if(null!=b){var c=an(b);if(c){var d=b;b=an(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var g=e[f],k=Fg(g,1);if(Ga(k)||pb(k))k=F(k);Dg[g]=k}}try{if(Da(b))try{b.call(Gg)}catch(q){}else if(Ga(b)){var l=b;if(p(l[0])){var m=
l[0].split("."),n=m.pop(),r=l.slice(1),t=Fg(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,r)}catch(q){}}}else{if(Pa(b)&&(b=Em(b,c),!b)){dn=!1;continue}a=gn(b)||a}}finally{c&&Eg(!0)}}dn=!1}return!a}function kn(){var a=jn();try{Fm(C["dataLayer"],Hd.B)}catch(b){}return a}
var mn=function(){var a=Qe("dataLayer",[]),b=Qe("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};oj(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Lm(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<T.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new bn(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);cn.push.apply(cn,e);if(300<
this.length)for(N("GTM",4);300<this.length;)this.shift();var k="boolean"!==typeof g||g;return jn()&&k};var d=a.slice(0);cn.push.apply(cn,d);ln()&&K(kn)},ln=function(){var a=!0;return a};var nn={};nn.Nb=new String("undefined");
var on=function(a){this.a=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===nn.Nb?b:a[d]);return c.join("")}};on.prototype.toString=function(){return this.a("undefined")};on.prototype.valueOf=on.prototype.toString;nn.Nf=on;nn.Sc={};nn.xg=function(a){return new on(a)};var pn={};nn.yh=function(a,b){var c=dg();pn[c]=[a,b];return c};nn.we=function(a){var b=a?0:1;return function(c){var d=pn[c];if(d&&"function"===typeof d[b])d[b]();pn[c]=void 0}};nn.Wg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};nn.qh=function(a){if(a===nn.Nb)return a;var b=dg();nn.Sc[b]=a;return'google_tag_manager["'+Hd.B+'"].macro('+b+")"};nn.hh=function(a,b,c){a instanceof nn.Nf&&(a=a.a(nn.yh(b,c)),b=Ca);return{ed:a,F:b}};var qn=function(a,b,c){function d(f,g){var k=f[g];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Ye(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},rn=function(a){T.hasOwnProperty("autoEventsSettings")||(T.autoEventsSettings={});var b=T.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},sn=function(a,b,c){rn(a)[b]=c},tn=function(a,b,c,d){var e=rn(a),f=Wa(e,b,d);e[b]=c(f)},un=function(a,b,c){var d=rn(a);return Wa(d,b,c)};var vn=["input","select","textarea"],wn=["button","hidden","image","reset","submit"],xn=function(a){var b=a.tagName.toLowerCase();return!Ia(vn,function(c){return c===b})||"input"===b&&Ia(wn,function(c){return c===a.type.toLowerCase()})?!1:!0},yn=function(a){return a.form?a.form.tagName?a.form:I.getElementById(a.form):af(a,["form"],100)},zn=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(xn(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var An=!!C.MutationObserver,Bn=void 0,Cn=function(a){if(!Bn){var b=function(){var c=I.body;if(c)if(An)(new MutationObserver(function(){for(var e=0;e<Bn.length;e++)K(Bn[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;We(c,"DOMNodeInserted",function(){d||(d=!0,K(function(){d=!1;for(var e=0;e<Bn.length;e++)K(Bn[e])}))})}};Bn=[];I.body?b():K(b)}Bn.push(a)};
var Nn=function(){var a=I.body,b=I.documentElement||a&&a.parentElement,c,d;if(I.compatMode&&"BackCompat"!==I.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};N("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},On=function(a){var b=Nn(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,0)+
Math.max(e.right-d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0},Pn=function(a){if(I.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!C.getComputedStyle)return!0;var c=C.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var k=g.indexOf("opacity(");0<=k&&(g=g.substring(k+8,g.indexOf(")",k)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-
1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=C.getComputedStyle(d,null))}return!1};var Qn=[],Rn=!(!C.IntersectionObserver||!C.IntersectionObserverEntry),Sn=function(a,b,c){for(var d=new C.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<Qn.length;f++)if(!Qn[f])return Qn[f]=d,f;return Qn.push(d)-1},Tn=function(a,b,c){function d(k,l){var m={top:0,bottom:0,right:0,left:0,width:0,
height:0},n={boundingClientRect:k.getBoundingClientRect(),intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:k,time:Ua()};K(function(){return a(n)})}for(var e=[],f=[],g=0;g<b.length;g++)e.push(0),f.push(-1);c.sort(function(k,l){return k-l});return function(){for(var k=0;k<b.length;k++){var l=On(b[k]);if(l>e[k])for(;f[k]<c.length-1&&l>=c[f[k]+1];)d(b[k],l),f[k]++;else if(l<e[k])for(;0<=f[k]&&l<=c[f[k]];)d(b[k],l),f[k]--;e[k]=l}}},Un=function(a,b,c){for(var d=0;d<c.length;d++)1<
c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(Rn){var e=!1;K(function(){e||Tn(a,b,c)()});return Sn(function(f){e=!0;for(var g={Za:0};g.Za<f.length;g={Za:g.Za},g.Za++)K(function(k){return function(){return a(f[k.Za])}}(g))},b,c)}return C.setInterval(Tn(a,b,c),1E3)},Vn=function(a){Rn?0<=a&&a<Qn.length&&Qn[a]&&(Qn[a].disconnect(),Qn[a]=void 0):C.clearInterval(a)};var Xn=C.clearTimeout,Yn=C.setTimeout,U=function(a,b,c){if(Ji()){b&&K(b)}else return Se(a,b,c)},Zn=function(){return C.location.href},$n=function(a){return Tg(Vg(a),"fragment")},ao=function(a){return Ug(Vg(a))},V=function(a,b){return Fg(a,b||2)},bo=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=en(a)):d=en(a);return d},co=function(a,b){C[a]=b},W=function(a,b,c){b&&(void 0===C[a]||c&&!C[a])&&(C[a]=
b);return C[a]},eo=function(a,b,c){return Zg(a,b,void 0===c?!0:!!c)},fo=function(a,b){if(Ji()){b&&K(b)}else Ue(a,b)},go=function(a){return!!un(a,"init",!1)},ho=function(a){sn(a,"init",!0)},io=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Xf;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";U(Li("https://","http://",c))},jo=function(a,b){var c=a[b];return c};
var ko=nn.hh;function Ho(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var Io=new La;function Jo(a,b){function c(g){var k=Vg(g),l=Tg(k,"protocol"),m=Tg(k,"host",!0),n=Tg(k,"port"),r=Tg(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Ko(a){return Lo(a)?1:0}
function Lo(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Ga(c)){for(var d=0;d<c.length;d++)if(Ko({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var g=0;g<f.length;g++)if(b[f[g]]){e=b[f[g]](c);break a}}catch(t){}}e=!1}return e;case "_ew":return Ho(b,c);case "_eq":return String(b)==String(c);
case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var k;k=String(b).split(",");return 0<=Ha(k,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var l;var m=a.ignore_case?"i":void 0;try{var n=String(c)+m,r=Io.get(n);r||(r=new RegExp(c,m),Io.set(n,r));l=r.test(b)}catch(t){l=!1}return l;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Jo(b,c)}return!1};var Mo=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var No={},Oo=encodeURI,X=encodeURIComponent,Po=Ve;var Qo=function(a,b){if(!a)return!1;var c=Tg(Vg(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Ro=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};No.Xg=function(){var a=!1;return a};function jq(){return C.gaGlobal=C.gaGlobal||{}}var kq=function(){var a=jq();a.hid=a.hid||Ka();return a.hid};var tq=window,uq=document,vq=function(a){var b=tq._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===tq["ga-disable-"+a])return!0;try{var c=tq.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Xg("AMP_TOKEN",String(uq.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return uq.getElementById("__gaOptOutExtension")?!0:!1};function yq(a,b){delete b.eventModel[G.fb];if(a!==G.K){var c=b.getWithConfig(G.mc);if(Ga(c)){N("GTM",26);for(var d={},e=0;e<c.length;e++){var f=c[e],g=b.getWithConfig(f);void 0!==g&&(d[f]=g)}b.eventModel=d}}Aq(b.eventModel)}var Aq=function(a){Na(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[G.ma]||{};Na(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Dq=function(a,b,c){Al(b,c,a)},Eq=function(a,b,c){Al(b,c,a,!0)},Gq=function(a,b){};
function Fq(a,b){}var Z={b:{}};Z.b.ctv=["google"],function(){(function(a){Z.__ctv=a;Z.__ctv.g="ctv";Z.__ctv.h=!0;Z.__ctv.priorityOverride=0})(function(){return"570"})}();

Z.b.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.g="jsm";Z.__jsm.h=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.b.flc=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;Hk(b,c)}(function(b){Z.__flc=b;Z.__flc.g="flc";Z.__flc.h=!0;Z.__flc.priorityOverride=0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=Ro(b.vtp_customVariable||[],"key","value")||{},e={rb:b.vtp_activityTag,Zc:c,Qa:b.vtp_conversionCookiePrefix||void 0,Vb:void 0,ba:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,$c:b.vtp_advertiserId,cd:b.vtp_groupTag,D:b.vtp_gtmOnFailure,F:b.vtp_gtmOnSuccess,
oc:b.vtp_useImageTag?void 0:b.vtp_url,protocol:"",vd:void 0,yd:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,Bc:b.vtp_transactionVariable,transactionId:void 0,Cc:b.vtp_userVariable,Cd:d};var f=!yf(G.s)&&void 0!=V(G.O)&&!1!==V(G.O);e.Cb=f;if(b.vtp_enableAttribution){var g=b.vtp_attributionFields||[];if(g.length){U("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(e,W("google_attr").build([Ro(g,
"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();
Z.b.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.g="sp";Z.__sp.h=!0;Z.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure,d=function(){var f=W("google_trackConversion");if(Da(f)){var g={};"DATA_LAYER"==a.vtp_customParamsFormat?g=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(g=Ro(a.vtp_customParams,
"key","value"));var k={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(g.event=a.vtp_eventName),a.vtp_eventValue&&(k.value=a.vtp_eventValue),a.vtp_eventItems&&(k.items=a.vtp_eventItems));var l={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:g,google_gtag_event_data:k,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:qk()};a.vtp_rdp&&(l.google_restricted_data_processing=!0);a.vtp_userId&&(l.google_user_id=a.vtp_userId);
f(l)||c()}else c()},e=function(){U(b,d,c)};if(rf()){Bf(function(){yf(G.s)?e():Af(e)},[G.s]);return}xj();e()})}();Z.b.c=["google"],function(){(function(a){Z.__c=a;Z.__c.g="c";Z.__c.h=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();
Z.b.d=["google"],function(){(function(a){Z.__d=a;Z.__d.g="d";Z.__d.h=!0;Z.__d.priorityOverride=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=Df(a.vtp_elementSelector);e&&0<e.length&&(b=e[0])}else b=I.getElementById(a.vtp_elementId);b&&(d?c=Ye(b,d):c=Ze(b));return Ta(String(b&&c))})}();
Z.b.e=["google"],function(){(function(a){Z.__e=a;Z.__e.g="e";Z.__e.h=!0;Z.__e.priorityOverride=0})(function(a){return String(Lg(a.vtp_gtmEventId,"event"))})}();
Z.b.f=["google"],function(){(function(a){Z.__f=a;Z.__f.g="f";Z.__f.h=!0;Z.__f.priorityOverride=0})(function(a){var b=V("gtm.referrer",1)||I.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Tg(Vg(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):ao(String(b)):String(b)})}();
Z.b.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=qn(c,"gtm.click");bo(d)}}(function(b){Z.__cl=b;Z.__cl.g="cl";Z.__cl.h=!0;Z.__cl.priorityOverride=0})(function(b){if(!go("cl")){var c=W("document");We(c,"click",a,!0);ho("cl")}K(b.vtp_gtmOnSuccess)})}();
Z.b.j=["google"],function(){(function(a){Z.__j=a;Z.__j.g="j";Z.__j.h=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=W(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Z.b.k=["google"],function(){(function(a){Z.__k=a;Z.__k.g="k";Z.__k.h=!0;Z.__k.priorityOverride=0})(function(a){return eo(a.vtp_name,V("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.b.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.g="access_globals";Z.__access_globals.h=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],k=0;k<c.length;k++){var l=c[k],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(n,r,t){if(!p(t))throw d(n,{},"Key must be a string.");if("read"===r){if(-1<Ha(e,t))return}else if("write"===r){if(-1<Ha(f,t))return}else if("readwrite"===r){if(-1<Ha(f,t)&&-1<Ha(e,t))return}else if("execute"===r){if(-1<Ha(g,t))return}else throw d(n,{},"Operation must be either 'read', 'write', or 'execute', was "+r);throw d(n,{},"Prohibited "+r+" on global variable: "+
t+".");},L:a}})}();Z.b.r=["google"],function(){(function(a){Z.__r=a;Z.__r.g="r";Z.__r.h=!0;Z.__r.priorityOverride=0})(function(a){return Ka(a.vtp_min,a.vtp_max)})}();
Z.b.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.g="u";Z.__u.h=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=V("gtm.url",1);c=c||Zn();var d=b[a("vtp_component")];if(!d||"URL"==d)return ao(String(c));var e=Vg(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Ga(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var n=0;n<m.length;n++){var r=Tg(e,"QUERY",void 0,void 0,m[n]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=Tg(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.b.v=["google"],function(){(function(a){Z.__v=a;Z.__v.g="v";Z.__v.h=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=V(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.b.ua=["google"],function(){var a,b={},c=function(e){Bf(function(){d(e)},[G.J,G.s])},d=function(e){var f={},g={},k={},l={},m={};if(e.vtp_gaSettings){var n=e.vtp_gaSettings;F(Ro(n.vtp_fieldsToSet,"fieldName","value"),g);F(Ro(n.vtp_contentGroup,"index","group"),k);F(Ro(n.vtp_dimension,"index","dimension"),l);F(Ro(n.vtp_metric,"index","metric"),m);e.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var r=F(n);e=F(e,r)}F(Ro(e.vtp_fieldsToSet,
"fieldName","value"),g);F(Ro(e.vtp_contentGroup,"index","group"),k);F(Ro(e.vtp_dimension,"index","dimension"),l);F(Ro(e.vtp_metric,"index","metric"),m);yf(G.J)||(g.storage="none"),yf(G.s)||(g.allowAdFeatures=!1,g.storeGac=!1);var t=Ej(e.vtp_functionName);if(Da(t)){var q="",u="";e.vtp_setTrackerName&&"string"==typeof e.vtp_trackerName?""!==e.vtp_trackerName&&(u=e.vtp_trackerName,q=u+"."):(u="gtm"+dg(),
q=u+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,
storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},y=function(Q){var S=[].slice.call(arguments,0);S[0]=q+S[0];t.apply(window,S)},x=function(Q,S){return void 0===S?S:Q(S)},A=function(Q,S){if(S)for(var Ja in S)S.hasOwnProperty(Ja)&&y("set",Q+Ja,S[Ja])},B=function(){var Q=function(Kq,Mk,Lq){if(!pb(Mk))return!1;for(var Md=Wa(Object(Mk),Lq,[]),lh=0;Md&&lh<Md.length;lh++)y(Kq,Md[lh]);return!!Md&&0<Md.length},S;
if(e.vtp_useEcommerceDataLayer){var Ja=!1;Ja||(S=V("ecommerce",1))}else e.vtp_ecommerceMacroData&&(S=e.vtp_ecommerceMacroData.ecommerce);if(!pb(S))return;S=Object(S);var ab=Wa(g,"currencyCode",S.currencyCode);void 0!==ab&&y("set","&cu",ab);Q("ec:addImpression",S,"impressions");if(Q("ec:addPromo",S[S.promoClick?"promoClick":"promoView"],"promotions")&&
S.promoClick){y("ec:setAction","promo_click",S.promoClick.actionField);return}for(var Fa="detail checkout checkout_option click add remove purchase refund".split(" "),Va="refund purchase remove checkout checkout_option add click detail".split(" "),db=0;db<Fa.length;db++){var Ab=S[Fa[db]];if(Ab){Q("ec:addProduct",Ab,"products");y("ec:setAction",Fa[db],Ab.actionField);if(vg)for(var Sb=0;Sb<Va.length;Sb++){var Vc=S[Va[Sb]];if(Vc){Vc!==Ab&&N("GTM",13);break}}break}}},
z=function(Q,S,Ja){var ab=0;if(Q)for(var Fa in Q)if(Q.hasOwnProperty(Fa)&&(Ja&&v[Fa]||!Ja&&void 0===v[Fa])){var Va=w[Fa]?Ra(Q[Fa]):Q[Fa];"anonymizeIp"!=Fa||Va||(Va=void 0);S[Fa]=Va;ab++}return ab},D={name:u};e.vtp_transportUrl&&(g._x_19=e.vtp_transportUrl);z(g,D,!0);t("create",
e.vtp_trackingId||f.trackingId,D);y("set","&gtm",qk(!0));rf()&&y("set","&gcs",zf());g._x_19&&(null==Pe&&delete g._x_19,g._x_20&&!b[u]&&(b[u]=!0,t(Ij(u,g._x_20))));e.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(Q,S){void 0!==e[S]&&y("set",Q,e[S])})("nonInteraction","vtp_nonInteraction");A("contentGroup",
k);A("dimension",l);A("metric",m);var H={};z(g,H,!1)&&y("set",H);var L;e.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var Q=g&&g.hitCallback;Da(Q)&&Q();e.vtp_gtmOnSuccess()});if("TRACK_EVENT"==e.vtp_trackType){e.vtp_enableEcommerce&&
(y("require","ec","ec.js"),B());var O={hitType:"event",eventCategory:String(e.vtp_eventCategory||f.category),eventAction:String(e.vtp_eventAction||f.action),eventLabel:x(String,e.vtp_eventLabel||f.label),eventValue:x(Qa,e.vtp_eventValue||f.value)};z(L,O,!1);y("send",O);}else if("TRACK_SOCIAL"==e.vtp_trackType){}else if("TRACK_TRANSACTION"==e.vtp_trackType){}else if("TRACK_TIMING"==e.vtp_trackType){}else if("DECORATE_LINK"==e.vtp_trackType){}else if("DECORATE_FORM"==e.vtp_trackType){}else if("TRACK_DATA"==e.vtp_trackType){}else{e.vtp_enableEcommerce&&(y("require","ec","ec.js"),B());if(e.vtp_doubleClick||"DISPLAY_FEATURES"==e.vtp_advertisingFeaturesType){var aa="_dc_gtm_"+String(e.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:aa})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==e.vtp_advertisingFeaturesType){var Ba="_dc_gtm_"+String(e.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,
"");y("require","adfeatures",{cookieName:Ba})}L?y("send","pageview",L):y("send","pageview");e.vtp_autoLinkDomains&&Fj(q,e.vtp_autoLinkDomains,!!e.vtp_useHashAutoLink,!!e.vtp_decorateFormsAutoLink);}if(!a){var Aa=e.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";e.vtp_useInternalVersion&&!e.vtp_useDebugVersion&&(Aa="internal/"+Aa);a=!0;var Oa=ck(g._x_19,"/analytics.js"),
ta=Li("https:","http:","//www.google-analytics.com/"+Aa,g&&g.forceSSL);U("analytics.js"===Aa&&Oa?Oa:ta,function(){var Q=Cj();Q&&Q.loaded||e.vtp_gtmOnFailure();},e.vtp_gtmOnFailure)}}else K(e.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.g="ua";Z.__ua.h=!0;Z.__ua.priorityOverride=0}();

Z.b.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__inject_script=b;Z.__inject_script.g="inject_script";Z.__inject_script.h=!0;Z.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!p(f))throw d(e,{},"Script URL must be a string.");try{if(je(Vg(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},L:a}})}();


Z.b.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.g="cid";Z.__cid.h=!0;Z.__cid.priorityOverride=0})(function(){return Hd.B})}();

Z.b.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"];(function(b){Z.__gclidw=b;Z.__gclidw.g="gclidw";Z.__gclidw.h=!0;Z.__gclidw.priorityOverride=100})(function(b){K(b.vtp_gtmOnSuccess);var c,d,e,f;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain,b.vtp_enableCookieFlagsFeature&&(f=b.vtp_cookieFlags));var g=null;b.vtp_enableCookieUpdateFeature&&(g=!0,void 0!==b.vtp_cookieUpdate&&(g=!!b.vtp_cookieUpdate));var k={prefix:e,path:c,domain:d,flags:f};b.vtp_enableCrossDomainFeature&&
(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||ai())&&si(a,k));pi(k);ui(["aw","dc"],k);Di(g,k);var l=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var m=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");ti(a,m,b.vtp_urlPosition,!!b.vtp_formDecoration,l)}var n=V(G.O);sk(!1,void 0!=n&&!1!==n);b.vtp_enableUrlPassthroughFeature&&
b.vtp_enableUrlPassthrough&&wi()})}();

Z.b.aev=["google"],function(){function a(q,u){var v=Lg(q,"gtm");if(v)return v[u]}function b(q,u,v,w){w||(w="element");var y=q+"."+u,x;if(n.hasOwnProperty(y))x=n[y];else{var A=a(q,w);if(A&&(x=v(A),n[y]=x,r.push(y),35<r.length)){var B=r.shift();delete n[B]}}return x}function c(q,u,v){var w=a(q,t[u]);return void 0!==w?w:v}function d(q,u){if(!q)return!1;var v=e(Zn());Ga(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<u.length;y++)if(u[y]instanceof RegExp){if(u[y].test(q))return!1}else{var x=
u[y];if(0!=x.length){if(0<=e(q).indexOf(x))return!1;w.push(e(x))}}return!Qo(q,w)}function e(q){m.test(q)||(q="http://"+q);return Tg(Vg(q),"HOST",!0)}function f(q,u,v){switch(q){case "SUBMIT_TEXT":return b(u,"FORM."+q,g,"formSubmitElement")||v;case "LENGTH":var w=b(u,"FORM."+q,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(u,"id",v);case "INTERACTED_FIELD_NAME":return l(u,"name",v);case "INTERACTED_FIELD_TYPE":return l(u,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(u,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(u,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function g(q){switch(q.tagName.toLowerCase()){case "input":return Ye(q,"value");case "button":return Ze(q);default:return null}}function k(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var u=0,v=0;v<q.elements.length;v++)xn(q.elements[v])&&u++;return u}}function l(q,u,v){var w=a(q,"interactedFormField");return w&&Ye(w,u)||v}var m=/^https?:\/\//i,n={},r=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Z.__aev=q;Z.__aev.g="aev";Z.__aev.h=!0;Z.__aev.priorityOverride=0})(function(q){var u=q.vtp_gtmEventId,v=q.vtp_defaultValue,w=q.vtp_varType;switch(w){case "TAG_NAME":var y=a(u,"element");return y&&y.tagName||
v;case "TEXT":return b(u,w,Ze)||v;case "URL":var x;a:{var A=String(a(u,"elementUrl")||v||""),B=Vg(A),z=String(q.vtp_component||"URL");switch(z){case "URL":x=A;break a;case "IS_OUTBOUND":x=d(A,q.vtp_affiliatedDomains);break a;default:x=Tg(B,z,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return x;case "ATTRIBUTE":var D;if(void 0===q.vtp_attribute)D=c(u,w,v);else{var H=q.vtp_attribute,L=a(u,"element");D=L&&Ye(L,H)||v||""}return D;case "MD":var O=q.vtp_mdValue,R=b(u,"MD",Jn);return O&&R?Mn(R,O)||
v:R||v;case "FORM":return f(String(q.vtp_component||"SUBMIT_TEXT"),u,v);default:return c(u,w,v)}})}();
Z.b.gas=["google"],function(){function a(b,c,d){b.vtp_fieldsToSet=b.vtp_fieldsToSet||[];var e=b[c];void 0!==e&&(b.vtp_fieldsToSet.push({fieldName:d,value:e}),delete b[c])}(function(b){Z.__gas=b;Z.__gas.g="gas";Z.__gas.h=!0;Z.__gas.priorityOverride=0})(function(b){var c=F(b),d=c;d[td.ya]=null;d[td.tf]=null;c=d;a(c,"vtp_cookieDomain","cookieDomain");a(c,"vtp_transportUrl","_x_19");return c})}();


Z.b.hl=["google"],function(){function a(f){return f.target&&f.target.location&&f.target.location.href?f.target.location.href:Zn()}function b(f,g){We(f,"hashchange",function(k){var l=a(k);g({source:"hashchange",state:null,url:ao(l),S:$n(l)})})}function c(f,g){We(f,"popstate",function(k){var l=a(k);g({source:"popstate",state:k.state,url:ao(l),S:$n(l)})})}function d(f,g,k){var l=g.history,m=l[f];if(Da(m))try{l[f]=function(n,r,t){m.apply(l,[].slice.call(arguments,0));k({source:f,state:n,url:ao(Zn()),
S:$n(Zn())})}}catch(n){}}function e(){var f={source:null,state:W("history").state||null,url:ao(Zn()),S:$n(Zn())};return function(g){var k=f,l={};l[k.source]=!0;l[g.source]=!0;if(!l.popstate||!l.hashchange||k.S!=g.S){var m={event:"gtm.historyChange","gtm.historyChangeSource":g.source,"gtm.oldUrlFragment":f.S,"gtm.newUrlFragment":g.S,"gtm.oldHistoryState":f.state,"gtm.newHistoryState":g.state};m["gtm.oldUrl"]=f.url,m["gtm.newUrl"]=g.url;
f=g;bo(m)}}}(function(f){Z.__hl=f;Z.__hl.g="hl";Z.__hl.h=!0;Z.__hl.priorityOverride=0})(function(f){var g=W("self");if(!go("hl")){var k=e();b(g,k);c(g,k);d("pushState",g,k);d("replaceState",g,k);ho("hl")}K(f.vtp_gtmOnSuccess)})}();
Z.b.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.g="remm";Z.__remm.h=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=0;f<c.length;f++){var g=c[f].key||"";d&&(g="^"+g+"$");var k=new RegExp(g,e);if(k.test(b)){var l=c[f].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();

Z.b.fsl=[],function(){function a(){var e=W("document"),f=c(),g=HTMLFormElement.prototype.submit;We(e,"click",function(k){var l=k.target;if(l&&(l=af(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&Ye(l,"value")){var m;l.form?l.form.tagName?m=l.form:m=I.getElementById(l.form):m=af(l,["form"],100);m&&f.store(m,l)}},!1);We(e,"submit",function(k){var l=k.target;if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,n=b(l)&&!m,r=f.get(l),t=!0;if(d(l,function(){if(t){var q;
r&&(q=e.createElement("input"),q.type="hidden",q.name=r.name,q.value=r.value,l.appendChild(q));g.call(l);q&&l.removeChild(q)}},m,n,r))t=!1;else return m||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,l=b(k),m=!0;d(k,function(){m&&g.call(k)},!1,l)&&(g.call(k),m=!1)}}function b(e){var f=e.target;return f&&"_self"!==f&&"_parent"!==f&&"_top"!==f?!1:!0}function c(){var e=[],f=function(g){return Ia(e,function(k){return k.form===
g})};return{store:function(g,k){var l=f(g);l?l.button=k:e.push({form:g,button:k})},get:function(g){var k=f(g);return k?k.button:null}}}function d(e,f,g,k,l){var m=un("fsl",g?"nv.mwt":"mwt",0),n;n=g?un("fsl","nv.ids",[]):un("fsl","ids",[]);if(!n.length)return!0;var r=qn(e,"gtm.formSubmit",n),t=e.action;t&&t.tagName&&(t=e.cloneNode(!1).action);r["gtm.elementUrl"]=t;l&&(r["gtm.formSubmitElement"]=l);if(k&&m){if(!bo(r,fn(f),m))return!1}else bo(r,function(){},m||2E3);return!0}(function(e){Z.__fsl=e;Z.__fsl.g=
"fsl";Z.__fsl.h=!0;Z.__fsl.priorityOverride=0})(function(e){var f=e.vtp_waitForTags,g=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(f){var m=function(r){return Math.max(k,r)};tn("fsl","mwt",m,0);g||tn("fsl","nv.mwt",m,0)}var n=function(r){r.push(l);return r};tn("fsl","ids",n,[]);g||tn("fsl","nv.ids",n,[]);go("fsl")||(a(),ho("fsl"));K(e.vtp_gtmOnSuccess)})}();Z.b.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.g="smm";Z.__smm.h=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Ro(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



Z.b.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.g="paused";Z.__paused.h=!0;Z.__paused.priorityOverride=0})(function(a){K(a.vtp_gtmOnFailure)})}();

Z.b.zone=[],function(){function a(r){for(var t=r.vtp_boundaries||[],q=0;q<t.length;q++)if(!t[q])return!1;return!0}function b(r){var t=Hd.B,q=t+":"+r.vtp_gtmTagId,u=V("gtm.uniqueEventId")||0,v=hj(function(){return new g}),w=a(r),y=r.vtp_enableTypeRestrictions?r.vtp_whitelistedTypes.map(function(H){return H.typeId}):null;y=y&&$a(y,f);if(v.registerZone(q,u,w,y))for(var x=r.vtp_childContainers.map(function(H){return H.publicId}),A=0;A<x.length;A++){var B=String(x[A]);if(v.registerChild(B,t,q)){var z=
0!==B.indexOf("GTM-");if(z){var D=function(H,L){bo(arguments)};D("js",new Date);m?(D("config",B),l||io(B,z)):function(H,L,O){Em(arguments,!1)}("config",B,{})}else io(B,z)}}}var c={active:!1,isWhitelisted:function(){return!1}},d={active:!0,isWhitelisted:function(){return!0}},e={zone:!0,cn:!0,css:!0,ew:!0,eq:!0,ge:!0,gt:!0,lc:!0,le:!0,lt:!0,re:!0,sw:!0,um:!0},f={cl:["ecl"],ecl:["cl"],ehl:["hl"],hl:["ehl"]},g=function(){this.a={};this.i={}};g.prototype.checkState=function(r,t){var q=this.a[r];if(!q)return d;
var u=this.checkState(q.Se,t);if(!u.active)return c;for(var v=[],w=0;w<q.Hd.length;w++){var y=this.i[q.Hd[w]];y.yb(t)&&v.push(y)}return v.length?{active:!0,isWhitelisted:function(x,A){A=A||[];if(!u.isWhitelisted(x,A))return!1;for(var B=0;B<v.length;++B)if(v[B].isWhitelisted(x,A))return!0;return!1}}:c};g.prototype.unregisterChild=function(r){delete this.a[r]};g.prototype.registerZone=function(r,t,q,u){var v=this.i[r];if(v)return v.m(t,q),!1;if(!q)return!1;this.i[r]=new k(t,u);return!0};g.prototype.registerChild=
function(r,t,q){var u=this.a[r];if(!u&&T[r]||u&&u.Se!==t)return!1;if(u)return u.Hd.push(q),!1;this.a[r]={Se:t,Hd:[q]};return!0};var k=function(r,t){this.a=[{eventId:r,yb:!0}];this.i=null;if(t){this.i={};for(var q=0;q<t.length;q++)this.i[t[q]]=!0}};k.prototype.m=function(r,t){var q=this.a[this.a.length-1];r<=q.eventId||q.yb!=t&&this.a.push({eventId:r,yb:t})};k.prototype.yb=function(r){if(!this.a||0==this.a.length)return!1;for(var t=this.a.length-1;0<=t;t--)if(this.a[t].eventId<=r)return this.a[t].yb;
return!1};k.prototype.isWhitelisted=function(r,t){t=t||[];if(!this.i||e[r]||this.i[r])return!0;for(var q=0;q<t.length;++q)if(this.i[t[q]])return!0;return!1};var l=!1;var m=!0;var n=function(r){b(r);K(r.vtp_gtmOnSuccess)};Z.__zone=n;Z.__zone.g="zone";Z.__zone.h=!0;Z.__zone.priorityOverride=0}();
Z.b.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=I.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Re(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];k.firstChild;)r.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,r,l,g)()}else d.insertBefore(k,null),l()}else f()}catch(t){K(g)}}}var c=function(d){if(I.body){var e=
d.vtp_gtmOnFailure,f=ko(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.ed,k=f.F;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,k,e):a(I.body,$e(g),k,e)()}else Yn(function(){c(d)},
200)};Z.__html=c;Z.__html.g="html";Z.__html.h=!0;Z.__html.priorityOverride=0}();

Z.b.dbg=["google"],function(){(function(a){Z.__dbg=a;Z.__dbg.g="dbg";Z.__dbg.h=!0;Z.__dbg.priorityOverride=0})(function(){return!1})}();


Z.b.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.g="img";Z.__img.h=!0;Z.__img.priorityOverride=0})(function(a){var b=$e('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}Po(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();


Z.b.lcl=[],function(){function a(){var c=W("document"),d=0,e=function(f){var g=f.target;if(g&&3!==f.which&&!(f.Vg||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;g=af(g,["a","area"],100);if(!g)return f.returnValue;var k=f.defaultPrevented||!1===f.returnValue,l=un("lcl",k?"nv.mwt":"mwt",0),m;m=k?un("lcl","nv.ids",[]):un("lcl","ids",[]);if(m.length){var n=qn(g,"gtm.linkClick",m);if(b(f,g,c)&&!k&&l&&g.href){var r=String(jo(g,"rel")||""),t=!!Ia(r.split(" "),function(v){return"noreferrer"===v.toLowerCase()});
t&&N("GTM",36);var q=W((jo(g,"target")||"_self").substring(1)),u=!0;if(bo(n,fn(function(){var v;if(v=u&&q){var w;a:if(t){var y;try{y=new MouseEvent(f.type)}catch(x){if(!c.createEvent){w=!1;break a}y=c.createEvent("MouseEvents");y.initEvent(f.type,!0,!0)}y.Vg=!0;f.target.dispatchEvent(y);w=!0}else w=!1;v=!w}v&&(q.location.href=jo(g,"href"))}),l))u=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else bo(n,function(){},l||2E3);return!0}}};We(c,"click",e,!1);We(c,"auxclick",e,!1)}
function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=jo(d,"href"),g=f.indexOf("#"),k=jo(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===g)return!1;if(0<g){var l=ao(f),m=ao(e.location);return l!==m}return!0}(function(c){Z.__lcl=c;Z.__lcl.g="lcl";Z.__lcl.h=!0;Z.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);if(!f||
0>=f)f=2E3;var g=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(f,m)};tn("lcl","mwt",k,0);e||tn("lcl","nv.mwt",k,0)}var l=function(m){m.push(g);return m};tn("lcl","ids",l,[]);e||tn("lcl","nv.ids",l,[]);go("lcl")||(a(),ho("lcl"));K(c.vtp_gtmOnSuccess)})}();
Z.b.evl=["google"],function(){function a(){var f=Number(V("gtm.start"))||0;return(new Date).getTime()-f}function b(f,g,k,l){function m(){if(!Pn(f.target)){g.has(d.Qb)||g.set(d.Qb,""+a());g.has(d.Kc)||g.set(d.Kc,""+a());var r=0;g.has(d.Sb)&&(r=Number(g.get(d.Sb)));r+=100;g.set(d.Sb,""+r);if(r>=k){var t=qn(f.target,"gtm.elementVisibility",[g.a]),q=On(f.target);t["gtm.visibleRatio"]=Math.round(1E3*q)/10;t["gtm.visibleTime"]=k;t["gtm.visibleFirstTime"]=Number(g.get(d.Kc));t["gtm.visibleLastTime"]=Number(g.get(d.Qb));
bo(t);l()}}}if(!g.has(d.hb)&&(0==k&&m(),!g.has(d.Ka))){var n=W("self").setInterval(m,100);g.set(d.hb,n)}}function c(f){f.has(d.hb)&&(W("self").clearInterval(Number(f.get(d.hb))),f.i(d.hb))}var d={hb:"polling-id-",Kc:"first-on-screen-",Qb:"recent-on-screen-",Sb:"total-visible-time-",Ka:"has-fired-"},e=function(f,g){this.element=f;this.a=g};e.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.a)};e.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.a)};e.prototype.set=function(f,g){this.element.setAttribute("data-gtm-vis-"+f+this.a,g)};e.prototype.i=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.a)};(function(f){Z.__evl=f;Z.__evl.g="evl";Z.__evl.h=!0;Z.__evl.priorityOverride=0})(function(f){function g(){var y=!1,x=null;if("CSS"===l){try{x=Df(m)}catch(H){N("GTM",46)}y=!!x&&v.length!=x.length}else if("ID"===l){var A=I.getElementById(m);A&&(x=[A],y=1!=v.length||v[0]!==A)}x||(x=[],y=0<v.length);if(y){for(var B=0;B<v.length;B++){var z=
new e(v[B],q);c(z)}v=[];for(var D=0;D<x.length;D++)v.push(x[D]);0<=w&&Vn(w);0<v.length&&(w=Un(k,v,[t]))}}function k(y){var x=new e(y.target,q);y.intersectionRatio>=t?x.has(d.Ka)||b(y,x,r,"ONCE"===u?function(){for(var A=0;A<v.length;A++){var B=new e(v[A],q);B.set(d.Ka,"1");c(B)}Vn(w);if(n&&Bn)for(var z=0;z<Bn.length;z++)Bn[z]===g&&Bn.splice(z,1)}:function(){x.set(d.Ka,"1");c(x)}):(c(x),"MANY_PER_ELEMENT"===u&&x.has(d.Ka)&&(x.i(d.Ka),x.i(d.Sb)),x.i(d.Qb))}var l=f.vtp_selectorType,m;"ID"===l?m=String(f.vtp_elementId):
"CSS"===l&&(m=String(f.vtp_elementSelector));var n=!!f.vtp_useDomChangeListener,r=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,t=(Number(f.vtp_onScreenRatio)||50)/100,q=f.vtp_uniqueTriggerId,u=f.vtp_firingFrequency,v=[],w=-1;g();n&&Cn(g);K(f.vtp_gtmOnSuccess)})}();


var Hq={};Hq.macro=function(a){if(nn.Sc.hasOwnProperty(a))return nn.Sc[a]},Hq.onHtmlSuccess=nn.we(!0),Hq.onHtmlFailure=nn.we(!1);Hq.dataLayer=Gg;Hq.callback=function(a){bg.hasOwnProperty(a)&&Da(bg[a])&&bg[a]();delete bg[a]};function Iq(){T[Hd.B]=Hq;Ya(cg,Z.b);ld=ld||nn;md=fj}
function Jq(){ff.gtm_3pds=!0;ff.gtag_cs_api=!0;T=C.google_tag_manager=C.google_tag_manager||{};if(T[Hd.B]){var a=T.zones;a&&a.unregisterChild(Hd.B);}else{for(var b=data.resource||
{},c=b.macros||[],d=0;d<c.length;d++)ed.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)hd.push(e[f]);for(var g=b.predicates||[],k=0;k<g.length;k++)gd.push(g[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],r={},t=0;t<n.length;t++)r[n[t][0]]=Array.prototype.slice.call(n[t],1);fd.push(r)}jd=Z;kd=Ko;var q=data.permissions||{},u=data.sandboxed_scripts,v=data.security_groups;mm();Ld=new Kd(q);if(void 0!==u)for(var w=["sandboxedScripts"],y=0;y<u.length;y++){var x=u[y].replace(/^_*/,"");
cg[x]=w}pm(v);Iq();mn();jj=!1;kj=0;if("interactive"==I.readyState&&!I.createEventObject||"complete"==I.readyState)mj();else{We(I,"DOMContentLoaded",mj);We(I,"readystatechange",mj);if(I.createEventObject&&I.documentElement.doScroll){var A=!0;try{A=!C.frameElement}catch(H){}A&&nj()}We(C,"load",mj)}Im=!1;"complete"===I.readyState?Km():We(C,"load",Km);
a:{if(!vg)break a;C.setInterval(wg,864E5);}Zf=(new Date).getTime();}}
(function(a){a()})(Jq);

})()
