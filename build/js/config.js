var config_urls=window.location.href;
var config_type=(config_urls.indexOf("t1")<=0 && config_urls.indexOf("t2")<=0 && config_urls.indexOf("t3")<=0 && config_urls.indexOf("d1")<=0 && config_urls.indexOf("d2")<=0 && config_urls.indexOf("d3")<=0 && config_urls.indexOf("r1")<=0 && config_urls.indexOf("r2")<=0 && config_urls.indexOf("r3")<=0) ? true : false;
if(config_type){
	BASE_API_URL = 'http://dev2.cargocn.cn/cargocn-cloud-server';
}else{
	//BASE_API_URL = 'http://'+config_urls.substr(7,2)+'pc.fuyoukache.com';
    BASE_API_URL = 'http://dev2.cargocn.cn/cargocn-cloud-server';
}

CITYDATA = {
    "status": "S",
    "msg": "",
    "carLength": {
        "1": {
            "value": "4.2",
            "desc": ""
        },
        "2": {
            "value": "5.2",
            "desc": ""
        },
        "3": {
            "value": "5.8",
            "desc": ""
        },
        "4": {
            "value": "6.2",
            "desc": ""
        },
        "5": {
            "value": "6.8",
            "desc": ""
        },
        "6": {
            "value": "7.2",
            "desc": ""
        },
        "7": {
            "value": "8.5",
            "desc": ""
        },
        "8": {
            "value": "9.6",
            "desc": ""
        },
        "9": {
            "value": "12.5",
            "desc": ""
        },
        "10": {
            "value": "13.5",
            "desc": ""
        },
        "11": {
            "value": "16.5",
            "desc": ""
        },
        "12": {
            "value": "17.5",
            "desc": ""
        },
        "13": {
            "value": "18.5",
            "desc": ""
        }
    },
    "carModel": {
        "1": {
            "value": "厢式车",
            "desc": ""
        },
        "2": {
            "value": "平板车",
            "desc": ""
        },
        "3": {
            "value": "高低板车",
            "desc": ""
        },
        "4": {
            "value": "高栏车",
            "desc": ""
        },
        "5": {
            "value": "中栏车",
            "desc": ""
        },
        "6": {
            "value": "低栏车",
            "desc": ""
        },
        "7": {
            "value": "危险品车",
            "desc": ""
        },
        "8": {
            "value": "冷藏车",
            "desc": ""
        },
        "9": {
            "value": "集装箱",
            "desc": ""
        },
        "10": {
            "value": "自卸货车",
            "desc": ""
        },
        "11": {
            "value": "其他车型",
            "desc": ""
        }
    },
    "useType": {
        "1": {
            "value": "整车",
            "desc": ""
        },
        "2": {
            "value": "拼车",
            "desc": ""
        }
    }
};

/*
 $.ajax({
 url: BASE_API_URL+'/common/config',
 cache: true,
 async: false,
 type: 'GET',
 dataType: 'json',
 success: function(back){
 if (back.status == 'S') {
 CITYDATA = back;
 CITYDATA.quoteType = {
 "2": {"value": "已报价", "desc": ""},
 "1": {"value": "待报价", "desc": ""},
 "3": {"value": "已忽略", "desc": ""}
 }
 CITYDATA.useType = {
 "1": {"value": "整车", "desc": ""},
 "2": {"value": "拼车", "desc": ""}
 }
 } else {
 alert(back.msg);
 }
 }
 });*/
