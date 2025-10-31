/* OfflineServer Saved Projects Loader */
var debounce = false;

function getUrlParams(fromElement) {
    const params = {};
    const queryString = fromElement.substring(1);
    const regex = /([^&=]+)=([^&]*)/g;
    let m;
    while ((m = regex.exec(queryString))) {
        params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    return params;
}

function getParam(fromElementValue) {
    return getUrlParams(fromElementValue);
}

const container = document.body;
const excludedKeys = ["username", "htmlelementsfilefield", "ideas", "pwHint"];

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!excludedKeys.includes(key)) {
        var value = localStorage.getItem(key);
        var info = getParam(key.slice(11));
        console.log(info);

        var div = document.createElement("div");
        div.className = "savedProject";

        // Use class instead of ID to avoid duplication
        var url = `https://mark6132014.github.io/offlineserver/online/server/editor/community/viewer?${key.slice(12)}`;
        div.innerHTML = `
            <span class="projectid" style="display: none;">${key}</span>
            <span class="url" style="display: none;">${url}</span>
        `;

        container.appendChild(div);
		div.innerHTML += `
			<p class="title" style="cursor: pointer;" onclick="location.assign('${decodeURIComponent(div.querySelector('.url').innerText)}');">${info.name}</p>
			<p class="by" style="cursor: pointer;" onclick="location.assign('${div.querySelector('.url').innerText}');">By: ${info.by}</p>
			<img class="delete" src="trash.png" onclick="localStorage.removeItem('${key}'); location.reload();" style="height: 32px; width: 32px; position: absolute; top: 8px; right: 8px; cursor: pointer;">
            <img class="share" src="share.png" onclick="navigator.clipboard.writeText(decodeURIComponent('${document.querySelector(".url").innerText}')); alert('Copied to clipboard!');" style="height: 32px; width: 32px; position: absolute; bottom: 8px; right: 8px; cursor: pointer;">
		`;
        container.innerHTML += "<br>";
		
		console.log(div);
    }
}
