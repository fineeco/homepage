"use strict";var doTranslate=function(){$(".fineeco-section").localize(),$(".chippoly-section").localize(),$(".valuechain-section").localize()},changeStyleByLng=function(){var e=i18next.language;if("en-US"===e)$(".title-first").attr("class","title-first lng-en"),$(".title-second").attr("class","title-second lng-en");else{if("ko-KR"!==e)return!1;$(".title-first").attr("class","title-first lng-ko"),$(".title-second").attr("class","title-second lng-ko")}};$(document).ready(function(){$("#fullpage").fullpage({css3:!0,navigation:!0,navigationPosition:"right",fixedElements:"#nav",scrollBar:!0}),i18next.loadNamespaces("index",function(){i18next.setDefaultNamespace("index"),doTranslate(),changeStyleByLng()})});