// 切换主题
function toggleTheme() {
    const currentTheme = getCookie("theme") || "system";
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCookie("theme", newTheme, 365);
    if (newTheme === "dark") {
        window.location.href = "newtab-dark.html";
    } else {
        window.location.href = "newtab.html";
    }
}

// 跟随系统主题
function followSystemTheme() {
    setCookie("theme", "system", 365);
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (systemPrefersDark) {
        window.location.href = "newtab-dark.html";
    } else {
        window.location.href = "newtab.html";
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
    const selectedEngine = getCookie("searchEngine") || "google";
    document.getElementById("search-engine").value = selectedEngine;
    updateSearchEngine();

    const selectedTheme = getCookie("theme") || "system";
    if (selectedTheme === "system") {
        followSystemTheme();
    } else {
        updateTheme(selectedTheme);
    }

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

// 更新主题
// function updateTheme(theme) {
//     if (theme === "dark") {
//         document.body.style.backgroundColor = "black";
//         document.body.style.color = "white";
//         document.getElementById("theme-toggle").textContent = "Switch to Light Mode";
//     } else {
//         document.body.style.backgroundColor = "white";
//         document.body.style.color = "black";
//         document.getElementById("theme-toggle").textContent = "Switch to Dark Mode";
//     }
//     setCookie("theme", theme, 365);
// }

// 切换主题
// function toggleTheme() {
//     const currentTheme = getCookie("theme") || "system";
//     const newTheme = currentTheme === "light" ? "dark" : "light";
//     updateTheme(newTheme);
//     setCookie("theme", newTheme, 365);
// }

// 跟随系统主题
// function followSystemTheme() {
//     const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
//     if (systemPrefersDark) {
//         updateTheme("dark");
//     } else {
//         updateTheme("light");
//     }
//     setCookie("theme", "system", 365);
// }

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

// 监听主题切换按钮
document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

// 监听跟随系统主题按钮
document.getElementById("system-theme").addEventListener("click", followSystemTheme);

// 初始化
document.getElementById("search-engine").addEventListener("change", updateSearchEngine);
window.onload = initPage;