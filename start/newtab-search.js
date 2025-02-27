// 搜索引擎对应的URL和图片
const searchEngines = {
    google: {
        url: "https://www.google.com/search?q=",
        img: "./icons/searchlogo/Google.png"
    },
    bing: {
        url: "https://www.bing.com/search?q=",
        img: "./icons/searchlogo/Bing.png"
    },
    baidu: {
        url: "https://www.baidu.com/s?word=",
        img: "./icons/searchlogo/Baidu.png"
    },
    sougou: {
        url: "https://www.sogou.com/web?query=",
        img: "./icons/searchlogo/Sougou.png"
    },
    sousuo360: {
        url: "https://www.so.com/s?q=",
        img: "./icons/searchlogo/360.png"
    },
    quark: {
        url: "https://quark.sm.cn/s?q=",
        img: "./icons/searchlogo/Quark.png"
    },
    duckduckgo: {
        url: "https://duckduckgo.com/?q=",
        img: "./icons/searchlogo/Duckduckgo.png"
    }
};


// 初始化页面
function initPage() {
    const selectedEngine = getCookie("searchEngine") || "baidu";
    document.getElementById("search-engine").value = selectedEngine;
    updateSearchEngine();


    // 自动聚焦到输入框
    document.getElementById("search-query").focus();
}

// 更新搜索引擎和图片
function updateSearchEngine() {
    const engine = document.getElementById("search-engine").value;
    document.getElementById("engine-image").src = searchEngines[engine].img;
    setCookie("searchEngine", engine, 365);
}

// 执行搜索
function performSearch() {
    const engine = document.getElementById("search-engine").value;
    const query = document.getElementById("search-query").value;
    if (query) {
        window.location.href = searchEngines[engine].url + encodeURIComponent(query);
    }
}

// 设置cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// 获取cookie
function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// 监听回车键
document.getElementById("search-query").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        performSearch();
    }
});

// 初始化
document.getElementById("search-engine").addEventListener("change", updateSearchEngine);
window.onload = initPage;