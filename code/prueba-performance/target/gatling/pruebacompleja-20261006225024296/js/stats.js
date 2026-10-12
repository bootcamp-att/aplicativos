var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "60",
        "ok": "60",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "96",
        "ok": "96",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2808",
        "ok": "2808",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1093",
        "ok": "1093",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "963",
        "ok": "963",
        "ko": "-"
    },
    "percentiles1": {
        "total": "855",
        "ok": "855",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2053",
        "ok": "2053",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2390",
        "ok": "2390",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2597",
        "ok": "2597",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 30,
    "percentage": 50
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 30,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.615",
        "ok": "4.615",
        "ko": "-"
    }
},
contents: {
"req_1--login-en-aut-1926864324": {
        type: "REQUEST",
        name: "1. Login en Authelia",
path: "1. Login en Authelia",
pathFormatted: "req_1--login-en-aut-1926864324",
stats: {
    "name": "1. Login en Authelia",
    "numberOfRequests": {
        "total": "30",
        "ok": "30",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1344",
        "ok": "1344",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2808",
        "ok": "2808",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2033",
        "ok": "2033",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "284",
        "ok": "284",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2060",
        "ok": "2060",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2143",
        "ok": "2143",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2426",
        "ok": "2426",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2704",
        "ok": "2704",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 30,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.308",
        "ok": "2.308",
        "ko": "-"
    }
}
    },"req_2--get--api-v1---1674695068": {
        type: "REQUEST",
        name: "2. GET /api/v1/products/1",
path: "2. GET /api/v1/products/1",
pathFormatted: "req_2--get--api-v1---1674695068",
stats: {
    "name": "2. GET /api/v1/products/1",
    "numberOfRequests": {
        "total": "30",
        "ok": "30",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "96",
        "ok": "96",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "366",
        "ok": "366",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "152",
        "ok": "152",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "61",
        "ok": "61",
        "ko": "-"
    },
    "percentiles1": {
        "total": "131",
        "ok": "131",
        "ko": "-"
    },
    "percentiles2": {
        "total": "166",
        "ok": "166",
        "ko": "-"
    },
    "percentiles3": {
        "total": "264",
        "ok": "264",
        "ko": "-"
    },
    "percentiles4": {
        "total": "348",
        "ok": "348",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 30,
    "percentage": 100
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.308",
        "ok": "2.308",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
