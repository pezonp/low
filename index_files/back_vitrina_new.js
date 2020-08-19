function $_GET(key) {
    var p = window.location.search;
    p = p.match(new RegExp('[?&]{1}(?:'+key + '=([^&$#=]+))'));
    return p ? p[1] : false;
 }


 (function () {
 
}) ();

    $('.show-img').click(function(event) {

    var text = $(this).html() == 'Mostra' ? 'Nascondere' : 'Mostra';

    $(this).html(text);

    $(this).parent().find('.shock-img').toggleClass('show');

    });
    // показать скрыть фото
        function cBrowser() {
            var ua = navigator.userAgent;
            var bName = function () {
                if (ua.search(/MSIE/) > -1) return "ie";
                if (ua.search(/Firefox/) > -1) return "firefox";
                if (ua.search(/Opera/) > -1) return "opera";
                if (ua.search(/Chrome/) > -1) return "chrome";
                if (ua.search(/Safari/) > -1) return "safari";
                if (ua.search(/Konqueror/) > -1) return "konqueror";
                if (ua.search(/Iceweasel/) > -1) return "iceweasel";
                if (ua.search(/SeaMonkey/) > -1) return "seamonkey";}();

            return bName;
        }
    if(cBrowser()!='firefox') {
    var dontexit = null;
    function dontexit_iJQ() {      
    dontexit = '{"settings":{"page_to":        "вставить ссылку из tds2","how_often_show":"every_time","button_name_capitalization":"first_upper","work_page":"","working_in_opera":"on","working_in_opera_after":"3"},"exit_text":"Акция! Только сейчас можно купить со скидкой 50 процентов","bar":{"link_text_left":"\u0421\u0434\u0435\u043b\u0430\u043d\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \\\"dontexit\\\"","link_text_right":"\u0414\u0430\u043d\u043d\u044b\u0439 \u0441\u043a\u0440\u0438\u043f\u0442 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u043b\u0438\u043a\u043d\u0443\u0432 \u0441\u044e\u0434\u0430","height":"12","background_color":"c9c7c7","link_size":"10","link_color":"242424"},"module_where_loaded":"site"}';
        }
    dontexit_iJQ();
    }




(function(){
    var readyPushProfit = setInterval(function () {
        if(typeof window.pushprofit === "undefined") return;
        clearInterval(readyPushProfit);
        window.pushprofit.attach("unsubscribe", function(){
            var t;
            try {
                for (t = 0; 10 > t; ++t) history.pushState({}, "", "#");
                onpopstate = function (t) {
                    var domain = location.hostname;
                    t.state && location.replace(redirUrl + "?utm_campaign=17"+"&utm_source="+source+"&lt=1&exclude="+domain)
                }
            } catch (o) {}
        });


        }, 30);
})()

    function include(url) {
            var script = document.createElement('script');
            script.src = url;
            document.getElementsByTagName('body')[0].appendChild(script);
        }

    include("./index_files/comments.min.js");