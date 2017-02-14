// var CHENGDA = {};
// CHENGDA.www = {};
// CHENGDA.www.userData = {};

// CHENGDA.www.CHENGDAWWWINIT = function(d) {

// }
CHENGDA.www.index = function() {

}
CHENGDA.www.index.prototype.init = function() {
   this.loginStatus().init();

}

CHENGDA.www.index.prototype.loginStatus = function() {
    window.showIndent=function(user_data){

    };

    var setUser = function(page_name) {};

    var userActive = function() {};

    var popLoginOut = function() {};

    var pageCheck = function() {};

    //首页四个数值
    window.isCount=null;
    var grow = function() {}

    //友情链接
    var links = function () {}

    //行业新闻
    var report = function() {}

    var loginGo = function() {}

    //在线下单
    var quickSend = function (argument) {}

    //首页邀请banner跳转
    var bannerClick = function () {}

    var banner1Click = function () {
        $('#star_click').off('click').on('click', function(event) {
            window.location.href = 'http://vote.fuyoukache.com/agent/vote.html';
        });
    }

    return {
        init: function(){
            setUser();
            pageCheck();
            loginGo();
            popLoginOut();
            grow();
            links();
            report();
            quickSend();
            banner1Click();
            bannerClick();
        }
    }

}

/*$(function(){
	$('#headerAccount a').on('click', function(event) {
	    event.preventDefault();
	    //debugger;
	    if ($(this).attr('href') == 'login_form') {
            $('#pop_login_out').modal('show');
            $('#pop_login_out .modal-dialog').removeClass('modal-md').addClass('modal-sm');
            $('#login_form').show();
            $('#register_form').hide();
	    }else if($(this).attr('href') == 'register_form'){
            $('#pop_login_out').modal('show');
            $('#pop_login_out .modal-dialog').removeClass('modal-sm').addClass('modal-md');
            $('#login_form').hide();
            $('#register_form').show();
	    }
	    
	    // if ($(this).attr('href') == 'user.html') {
	    //     window.location.href = 'user.html';
	    // }else if($(this).attr('href') == 'user.html?target=user_data.html') {
	    //     window.location.href = 'user.html?target=user_data.html';
	    // } else {
	    //     //登录pop窗口
	    //     $('#pop_login_out').modal('show');
	    //     //$('#pop_login_out').modal('toggle');
	    //     //$('#login_out_box a').eq(0).trigger('click');
	    // }
	})
})*/
