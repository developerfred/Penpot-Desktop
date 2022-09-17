webview = document.querySelector('webview')
var penpotEmbed = document.getElementById('penpot');


// CSS Injection
penpotEmbed.addEventListener('dom-ready', function () {
    penpotEmbed.insertCSS(`
    html.windows [data-for-os=mac], html.windows [data-for-os=linux] {display: none;}
    html.mac [data-for-os=windows], html.mac [data-for-os=linux] {display: none;}
    html.linux [data-for-os=mac], html.linux [data-for-os=windows] {display: none;}
    `
)})

function inc() {
    setTimeout(() => {
        penpotEmbed.executeJavaScript(`
        var OS="Unknown";
        if (navigator.userAgent.indexOf("Win")!=-1) OS="Windows";
        if (navigator.userAgent.indexOf("Mac")!=-1) OS="MacOS";
        if (navigator.userAgent.indexOf("X11")!=-1) OS="UNIX";
        if (navigator.userAgent.indexOf("Linux")!=-1) OS="Linux";
    
        if (navigator.userAgent.indexOf == 'MacOS') { // Move away from traffic light buttons
            document.querySelector("#app > section > div.dashboard-sidebar > div > div.sidebar-content > div.sidebar-team-switch").style.marginTop = '54px';
            document.querySelector("#workspace > header > div.left-area").style.marginLeft = '100px'
        }
        else if (navigator.userAgent.indexOf == 'Windows'){ // Move away from titlebar buttons
            document.querySelector("#app > section > div.dashboard-content > header > a").style.marginRight = '150px';
        }
        else {}
        `
    )}, 2500);
    setTimeout(() => {
        inc()
    }, 5000);
}

inc()



