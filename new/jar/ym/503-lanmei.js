{
  "author": "Tangsan99999",
  "ua": "",
  "homeUrl": "https://lanmeiguojiang.com/index.php",
  "dcVipFlag": "true",
  "pCfgJs": "https://lanmeiguojiang.com/static/js/playerconfig.js",
  "pCfgJsR": "[\\W|\\S|.]*?MacPlayerConfig.player_list[\\W|\\S|.]*?=([\\W|\\S|.]*?),MacPlayerConfig.downer_list",
  "dcShow2Vip": {},
  "dcPlayUrl": "true",
  "cateNode": "//ul[@class='stui-header__menu']/li/a[contains(@href, 'type') and not(contains(@href,'24'))]",
  "cateName": "/text()",
  "cateId": "/@href",
  "cateIdR": "/vod/type/id/(\\w+).html",
  "cateManual": {},
  "homeVodNode": "//div[@class='stui-vodlist__box']/a",
  "homeVodName": "/@title",
  "homeVodId": "/@href",
  "homeVodIdR": "/vod/detail/id/(\\w+).html",
  "homeVodImg": "/@data-original",
  "homeVodImgR": "\\S+(http\\S+)",
  "homeVodMark": "/span[@class='pic-text text-right']/b/text()",
  "cateUrl": "https://lanmeiguojiang.com/index.php/vod/show/area/{area}/by/{by}/id/{cateId}/page/{catePg}/year/{year}.html",
  "cateVodNode": "//div[@class='stui-vodlist__box']/a",
  "cateVodName": "/@title",
  "cateVodId": "/@href",
  "cateVodIdR": "/vod/detail/id/(\\w+).html",
  "cateVodImg": "/@data-original",
  "cateVodImgR": "\\S+(http\\S+)",
  "cateVodMark": "/span[@class='pic-text text-right']/b/text()",
  "dtUrl": "https://lanmeiguojiang.com/index.php/vod/detail/id/{vid}.html",
  "dtNode": "//body",
  "dtName": "//div[contains(@class,'stui-content__detail')]/h1/text()",
  "dtNameR": "",
  "dtImg": "//div[contains(@class,'stui-content__thumb')]/a/img/@data-original",
  "dtImgR": "\\S+(http\\S+)",
  "dtCate": "//p[contains(@class,'data')][1]/text()",
  "dtCateR": "\\S+：(\\S+)",
  "dtYear": "//p[contains(@class,'data')][5]/text()",
  "dtYearR": "\\S+：(\\S+)",
  "dtArea": "//p[contains(@class,'data')][3]/text()",
  "dtAreaR": "\\S+：(\\S+)",
  "dtMark": "//p[contains(@class,'data')][4]/text()",
  "dtDirector": "//p[contains(text(), '导演')]/a/text()",
  "dtActor": "///p[contains(text(), '主演')]/a/following-sibling::*/text()",
  "dtDesc": "//span[@class='detail-content']/text()",
  "dtFromNode": "//ul[contains(@class,'nav nav-tabs')]/li/a",
  "dtFromName": "/text()",
  "dtFromNameR": "",
  "dtUrlNode": "//div[contains(@class,'tab-content')]/div",
  "dtUrlSubNode": "/ul/li/a",
  "dtUrlId": "/@href",
  "dtUrlIdR": "/index.php/vod/play/id/(\\S+).html",
  "dtUrlName": "/text()",
  "dtUrlNameR": "",
  "playUrl": "https://lanmeiguojiang.com/index.php/vod/play/id/{playUrl}.html",
  "playUa": "",
  "searchUrl": "https://lanmeiguojiang.com/index.php/ajax/suggest?mid=1&wd={wd}&limit=10",
  "scVodNode": "json:list",
  "scVodName": "name",
  "scVodId": "id",
  "scVodIdR": "",
  "scVodImg": "pic",
  "scVodMark": "",
  "filter": {
    "32": [
      {
        "key": "area",
        "name": "地区",
        "value": [
          {"n": "全部","v": ""},
          {"n": "大陆","v": "大陆"},
          {"n": "香港","v": "香港"},
          {"n": "台湾","v": "台湾"},
          {"n": "美国","v": "美国"},
          {"n": "法国","v": "法国"},
          {"n": "英国","v": "英国"},
          {"n": "日本","v": "日本"},
          {"n": "韩国","v": "韩国"},
          {"n": "德国","v": "德国"},
          {"n": "泰国","v": "泰国"},
          {"n": "印度","v": "印度"},
          {"n": "意大利","v": "意大利"},
          {"n": "西班牙","v": "西班牙"}
        ]
      },
      {
        "key": "year",
        "name": "年份",
        "value": [
          {"n": "全部","v": ""},
          {"n": "2022","v": "2022"},
          {"n": "2021","v": "2021"},
          {"n": "2020","v": "2020"},
          {"n": "2019","v": "2019"},
          {"n": "2018","v": "2018"},
          {"n": "2017","v": "2017"},
          {"n": "2016","v": "2016"},
          {"n": "2008","v": "2008"},
          {"n": "2000","v": "2000"},
          {"n": "1997","v": "1997"},
          {"n": "1980","v": "1980"}
        ]
      },
      {
        "key": "by",
        "name": "排序",
        "value": [
          {"n": "时间","v": "time"},
          {"n": "人气","v": "hits"},
          {"n": "评分","v": "score"}
        ]
      }
    ],
    "23": [
      {
        "key": "area",
        "name": "地区",
        "value": [
          {"n": "全部","v": ""},
          {"n": "大陆","v": "大陆"},
          {"n": "香港","v": "香港"},
          {"n": "台湾","v": "台湾"},
          {"n": "美国","v": "美国"},
          {"n": "法国","v": "法国"},
          {"n": "英国","v": "英国"},
          {"n": "日本","v": "日本"},
          {"n": "韩国","v": "韩国"},
          {"n": "德国","v": "德国"},
          {"n": "泰国","v": "泰国"},
          {"n": "印度","v": "印度"},
          {"n": "意大利","v": "意大利"},
          {"n": "西班牙","v": "西班牙"}
        ]
      },
      {
        "key": "year",
        "name": "年份",
        "value": [
          {"n": "全部","v": ""},
          {"n": "2022","v": "2022"},
          {"n": "2021","v": "2021"},
          {"n": "2020","v": "2020"},
          {"n": "2019","v": "2019"},
          {"n": "2018","v": "2018"},
          {"n": "2017","v": "2017"},
          {"n": "2016","v": "2016"},
          {"n": "2008","v": "2008"},
          {"n": "2000","v": "2000"},
          {"n": "1997","v": "1997"},
          {"n": "1980","v": "1980"}
        ]
      },
      {
        "key": "by",
        "name": "排序",
        "value": [
          {"n": "时间","v": "time"},
          {"n": "人气","v": "hits"},
          {"n": "评分","v": "score"}
        ]
      }
    ],
    "1": [
      {
        "key": "cateId",
        "name": "分类",
        "value": [
          {"n": "全部","v": ""},
          {"n": "动作片","v": "6"},
          {"n": "喜剧片","v": "7"},
          {"n": "爱情片","v": "8"},
          {"n": "科幻片","v": "9"},
          {"n": "恐怖片","v": "10"},
          {"n": "剧情片","v": "11"},
          {"n": "战争片","v": "12"},
          {"n": "动画片","v": "20"},
          {"n": "纪录片","v": "25"}
        ]
      },
      {
        "key": "area",
        "name": "地区",
        "value": [
          {"n": "全部","v": ""},
          {"n": "大陆","v": "大陆"},
          {"n": "香港","v": "香港"},
          {"n": "台湾","v": "台湾"},
          {"n": "美国","v": "美国"},
          {"n": "法国","v": "法国"},
          {"n": "英国","v": "英国"},
          {"n": "日本","v": "日本"},
          {"n": "韩国","v": "韩国"},
          {"n": "德国","v": "德国"},
          {"n": "泰国","v": "泰国"},
          {"n": "印度","v": "印度"},
          {"n": "意大利","v": "意大利"},
          {"n": "西班牙","v": "西班牙"}
        ]
      },
      {
        "key": "year",
        "name": "年份",
        "value": [
          {"n": "全部","v": ""},
          {"n": "2022","v": "2022"},
          {"n": "2021","v": "2021"},
          {"n": "2020","v": "2020"},
          {"n": "2019","v": "2019"},
          {"n": "2018","v": "2018"},
          {"n": "2017","v": "2017"},
          {"n": "2016","v": "2016"},
          {"n": "2008","v": "2008"},
          {"n": "2000","v": "2000"},
          {"n": "1997","v": "1997"},
          {"n": "1980","v": "1980"}
        ]
      },
      {
        "key": "by",
        "name": "排序",
        "value": [
          {"n": "时间","v": "time"},
          {"n": "人气","v": "hits"},
          {"n": "评分","v": "score"}
        ]
      }
    ],
    "2": [
      {
        "key": "cateId",
        "name": "分类",
        "value": [
          {"n": "全部","v": ""},
          {"n": "国产剧","v": "13"},
          {"n": "港台剧","v": "14"},
          {"n": "日韩剧","v": "15"},
          {"n": "欧美剧","v": "16"},
          {"n": "其他剧","v": "21"}
        ]
      },
      {
        "key": "area",
        "name": "地区",
        "value": [
          {"n": "全部","v": ""},
          {"n": "内地","v": "内地"},
          {"n": "韩国","v": "韩国"},
          {"n": "香港","v": "香港"},
          {"n": "台湾","v": "台湾"},
          {"n": "日本","v": "日本"},
          {"n": "美国","v": "美国"},
          {"n": "泰国","v": "泰国"},
          {"n": "英国","v": "英国"},
          {"n": "新加坡","v": "新加坡"},
          {"n": "其他","v": "其他"}
        ]
      },
      {
        "key": "year",
        "name": "年份",
        "value": [
          {"n": "全部","v": ""},
          {"n": "2022","v": "2022"},
          {"n": "2021","v": "2021"},
          {"n": "2020","v": "2020"},
          {"n": "2019","v": "2019"},
          {"n": "2018","v": "2018"},
          {"n": "2017","v": "2017"},
          {"n": "2016","v": "2016"},
          {"n": "2008","v": "2008"},
          {"n": "2000","v": "2000"},
          {"n": "1997","v": "1997"},
          {"n": "1980","v": "1980"}
        ]
      },
      {
        "key": "by",
        "name": "排序",
        "value": [
          {"n": "时间","v": "time"},
          {"n": "人气","v": "hits"},
          {"n": "评分","v": "score"}
        ]
      }
    ],
    "4": [
      {
        "key": "cateId",
        "name": "分类",
        "value": [
          {"n": "全部","v": ""},
          {"n": "bilibili","v": "5"},
          {"n": "日韩动漫","v": "27"},
          {"n": "国创动漫","v": "28"}
        ]
      },
      {
        "key": "area",
        "name": "地区",
        "value": [
          {"n": "全部","v": ""},
          {"n": "大陆","v": "大陆"},
          {"n": "香港","v": "香港"},
          {"n": "台湾","v": "台湾"},
          {"n": "美国","v": "美国"},
          {"n": "法国","v": "法国"},
          {"n": "英国","v": "英国"},
          {"n": "日本","v": "日本"},
          {"n": "韩国","v": "韩国"},
          {"n": "德国","v": "德国"},
          {"n": "泰国","v": "泰国"},
          {"n": "印度","v": "印度"},
          {"n": "意大利","v": "意大利"},
          {"n": "西班牙","v": "西班牙"},
          {"n": "加拿大","v": "加拿大"},
          {"n": "其他","v": "其他"}
        ]
      },
      {
        "key": "year",
        "name": "年份",
        "value": [
          {"n": "全部","v": ""},
          {"n": "2022","v": "2022"},
          {"n": "2021","v": "2021"},
          {"n": "2020","v": "2020"},
          {"n": "2019","v": "2019"},
          {"n": "2018","v": "2018"},
          {"n": "2017","v": "2017"},
          {"n": "2016","v": "2016"},
          {"n": "2008","v": "2008"},
          {"n": "2000","v": "2000"},
          {"n": "1997","v": "1997"},
          {"n": "1980","v": "1980"}
        ]
      },
      {
        "key": "by",
        "name": "排序",
        "value": [
          {"n": "时间","v": "time"},
          {"n": "人气","v": "hits"},
          {"n": "评分","v": "score"}
        ]
      }
    ],
    "3": [
      {
        "key": "area",
        "name": "地区",
        "value": [
          {"n": "全部","v": ""},
          {"n": "内地","v": "内地"},
          {"n": "港台","v": "港台"},
          {"n": "日韩","v": "日韩"},
          {"n": "欧美","v": "欧美"}
        ]
      },
      {
        "key": "year",
        "name": "年份",
        "value": [
          {"n": "全部","v": ""},
          {"n": "2022","v": "2022"},
          {"n": "2021","v": "2021"},
          {"n": "2020","v": "2020"},
          {"n": "2019","v": "2019"},
          {"n": "2018","v": "2018"},
          {"n": "2017","v": "2017"},
          {"n": "2016","v": "2016"},
          {"n": "2008","v": "2008"},
          {"n": "2000","v": "2000"},
          {"n": "1997","v": "1997"},
          {"n": "1980","v": "1980"}
        ]
      },
      {
        "key": "by",
        "name": "排序",
        "value": [
          {"n": "时间","v": "time"},
          {"n": "人气","v": "hits"},
          {"n": "评分","v": "score"}
        ]
      }
    ]
  }
}
