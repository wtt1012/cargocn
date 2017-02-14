function getUrlParam(t) {
    var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)")
      , n = window.location.search.substr(1).match(e);
    return null != n ? unescape(n[2]) : ""
}
function getCookie(t) {
    for (var e = t + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
        for (var o = n[r]; " " == o.charAt(0); )
            o = o.substring(1, o.length);
        if (0 == o.indexOf(e))
            return unescape(o.substring(e.length, o.length))
    }
    return !1
}
function clearCookie(t) {
    setCookie(t, "", -1)
}
function setCookie(t, e, n) {
    n = n || 0;
    var r = "";
    if (0 != n) {
        var o = new Date;
        o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3),
        r = "; expires=" + o.toGMTString()
    }
    document.cookie = t + "=" + escape(e) + r + "; path=/"
}
CHENGDA = {},
CHENGDA.www = {},
CHENGDA.www.userData = {},
CHENGDA.www.FYCKWWWINIT = function(d) {
    var g = function(a) {
        switch (a) {
        case "quote-detail":
        case "quote-list":
            $("#mainMenu>li").eq(2).addClass("active");
            break;
        case "order-quote-list":
        case "pay":
        case "order-detail":
        case "order-list":
            $("#mainMenu>li").eq(3).addClass("active");
            break;
        case "quote-create":
            $("#mainMenu>li").eq(1).addClass("active");
            break;
        case "user":
            $("#mainMenu>li").eq(4).addClass("active")
        }
    }
      , j = function(a) {
        try {
            JSON.parse(Base64.decode(getCookie("access_token"))).data.token;
        } catch (e) {
            clearCookie("access_token");
        }
        if (getCookie("access_token")) {
            var i = JSON.parse(Base64.decode(getCookie("access_token")));
            if (i.data.check_status == 0) {
                var k = "user.html"
            } else {
                var k = "user.html"
            }
            $("#headerAccount a").attr({
                href: k
            }).html('<i class="fa fa-user"></i> ' + (i.data.name ? i.data.name : i.data.mobile)),
            $("#logout a").attr({
                href: "logout.html"
            }).html('<i class="fa fa-sign-out"></i> 退出')
        } else {
            $("#headerAccount a").attr({
                href: "login.html"
            }).html('<i class="fa fa-sign-in"></i> 登录'),
            $("#logout a").attr({
                href: "register.html"
            }).html('<i class="fa fa-user-plus"></i> 申请加入'),
            $("#logout").off("click")
        }
        f()
    }
      , f = function() {
        $("#logout a").on("click", function(a) {
            if (a.preventDefault(),
            "logout.html" == $(this).attr("href")) {
                var i = getCookie("access_token") ? JSON.parse(Base64.decode(getCookie("access_token"))).data.token : null;
                $.ajax({
                    url: BASE_API_URL + "/user/logout",
                    type: "POST",
                    dataType: "JSON",
                    data: {
                        token: i
                    }
                }).done(function(e) {
                    "Y" == e.status && ($("#headerAccount a").attr({
                        href: "login.html"
                    }).html('<i class="fa fa-sign-in"></i> 登录'),
                    $("#logout a").attr({
                        href: "register.html"
                    }).html('<i class="fa fa-user-plus"></i> 申请加入'),
                    $("#logout").off("click"),
                    clearCookie("access_token"),
                    window.location.href = "index.html")
                })
            } else {
                $("#pop_login_out").modal("toggle"),
                $("#login_out_box a").eq(1).trigger("click")
            }
        }),
        $("#headerAccount a").on("click", function(a) {
            a.preventDefault(),
            "user.html" == $(this).attr("href") || "user.html?target=user_data.html" == $(this).attr("href") ? window.location.href = $(this).attr("href") : ($("#pop_login_out").modal("toggle"),
            $("#login_out_box a").eq(0).trigger("click"))
        })
    }
      , h = function() {
        $("#login_out_box").off("click").on("click", "a", function(a) {
            a.preventDefault();
            var i = this;
            $.ajax({
                url: $(this).attr("href"),
                type: "GET",
                dataType: "html"
            }).done(function(e) {
                $("#popular10").html(e),
                $(i).parent("li").addClass("active").siblings().removeClass("active")
            })
        })
    }
      , c = function() {
        $("#mainMenu").off("click").on("click", 'a[class="n"]', function(e) {
            switch (e.preventDefault(),
            $(this).attr("href")) {
            case "quote-detail.html":
            case "quote-list.html":
            case "order-quote-list.html":
            case "pay.html":
            case "order-detail.html":
            case "order-list.html":
            case "user.html":
                if ($(this).attr("href") == "user.html") {
                    window.location.href = $(this).attr("href")
                }
                var a = getCookie("access_token") ? JSON.parse(Base64.decode(getCookie("access_token"))) : null;
                if (a != null) {
                    if (a.data.check_status != 1) {
                        showIndent(a)
                    } else {
                        window.location.href = $(this).attr("href")
                    }
                } else {
                    $("#pop_login_out").modal("toggle");
                    $("#login_out_box a").eq(0).trigger("click")
                }
                break;
            case "index.html":
            case "quote-create.html":
                window.location.href = $(this).attr("href")
            }
        })
    }
      , b = function(a) {
        var e = document.createElement("script");
        e.src = "js/" + a + ".js?_=" + Math.random();
        document.getElementsByTagName("head")[0].appendChild(e);
        e.src = "js/" + a + ".js?_=" + Math.random();
        document.getElementsByTagName("head")[0].appendChild(e);
        $.ajax({
            url: "pub_header.html",
            type: "get",
            dataType: "html",
            success: function(i) {
                $("#header").html(i);
                c();
                g(a);
                j(a);
                h()
            }
        });
        $.ajax({
            url: "pub_bottom.html",
            type: "get",
            dataType: "html",
            success: function(i) {
                $("#footer").html(i)
            }
        })
    };
    return {
        init: function(a) {
            b(a)
        }
    }
}()