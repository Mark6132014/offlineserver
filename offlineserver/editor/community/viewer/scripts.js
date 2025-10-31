        function getUrlParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const regex = /([^&=]+)=([^&]*)/g;
    let m;
    while (m = regex.exec(queryString)) {
        params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    return params;
}
    function getParam() {
    const param = getUrlParams();
	document.querySelector("#name").innerHTML = decodeURIComponent(param.name);
	document.querySelector("#by").innerHTML = "By: " + decodeURIComponent(param.by);
	document.querySelector("#webpage").src = decodeURIComponent(param.site);
}
      getParam();
	  
const saveImg = document.querySelector("#save img");
const savedKey = `savedState_${location.search}`;
const saved = localStorage.getItem(savedKey);

// Set initial image based on saved state
if (saved) {
    saveImg.src = "./saved.png";
}

let debounce = false;
// Add click listener
document.querySelector("#save").addEventListener("click", () => {
    const currentSrc = saveImg.src.split("/").pop(); // Get just the filename

    if (currentSrc === "saved.png") {
        localStorage.removeItem(savedKey);
        saveImg.src = "./save.png";
		if (debounce == false) {
			debounce = true;
			document.querySelector(".notification span").innerHTML = "Removed Saved Project";
			document.querySelector(".notification a").innerHTML = "Look at Saved Stuff";
			document.querySelector(".notification a").href = "../saved/index.html";
			document.querySelector(".notification").style.display = "block";
			setTimeout(() => {
				document.querySelector(".notification").style.bottom = "20px";
				setTimeout(() => {
					document.querySelector(".notification").style.bottom = "-200px";
					setTimeout(() => {
						document.querySelector(".notification").style.display = "none";
						debounce = false;
					}, 600);
				}, 5000);
			}, 200);
		} else {
			console.log("Wait for debounce to return false again");
		}
    } else if (currentSrc === "save.png") {
        if (location.search) {
            localStorage.setItem(savedKey, true);
            saveImg.src = "./saved.png";
			if (debounce == false) {
				debounce = true;
				document.querySelector(".notification span").innerHTML = "Saved Project";
				document.querySelector(".notification a").innerHTML = "Look at Saved Stuff";
				document.querySelector(".notification a").href = "../saved/index.html";
				document.querySelector(".notification").style.display = "block";
				setTimeout(() => {
					document.querySelector(".notification").style.bottom = "20px";
					setTimeout(() => {
						document.querySelector(".notification").style.bottom = "-200px";
						setTimeout(() => {
							document.querySelector(".notification").style.display = "none";
							debounce = false;
						}, 600);
					}, 5000);
				}, 200);
		} else {
			console.log("Wait for debounce to return false again");
		}
        }
    }
});
document.querySelector("#share").addEventListener("click", () => {
	navigator.clipboard.writeText(location.href);
	if (debounce == false) {
		debounce = true;
		document.querySelector(".notification span").innerHTML = "Copied link to clipboard";
		document.querySelector(".notification a").innerHTML = "Copy again";
		document.querySelector(".notification a").href = "javascript:alert('Already copied to clipboard');";
		document.querySelector(".notification").style.display = "block";
		setTimeout(() => {
			document.querySelector(".notification").style.bottom = "20px";
			setTimeout(() => {
				document.querySelector(".notification").style.bottom = "-200px";
				setTimeout(() => {
					document.querySelector(".notification").style.display = "none";
					debounce = false;
				}, 600);
			}, 5000);
		}, 200);
		} else {
			console.log("Wait for debounce to return false again");
		}
});
document.querySelector("#createPostBtn").addEventListener("click", () => {
	let postName = document.querySelector("#createPostName").value;
	let projectPath = document.querySelector("#createProjectPath").value;
	let byName = localStorage.getItem("username");
	let projectSite = `https://mark6132014.github.io/offlineserver/online/server/editor/community/viewer?name=${encodeURIComponent(postName)}&by=${encodeURIComponent(byName)}&site=${projectPath}`;
	let apiURL = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(projectSite)}`;
	fetch(apiURL).then(response => response.text()).then(data => document.querySelector("#output").innerHTML = data).catch(error => console.log("Error"));
	setTimeout(() => {
		let outputURL = document.querySelector("#output").innerHTML;
		let outputID = outputURL.slice(20)
		document.querySelector("#link").innerHTML = "ID: " + outputID + "<br>Here is the whole link: https://mark6132014.github.io/offlineserver/online/server/editor/community/sq?id=" + outputID;
	}, 2000);
});
document.querySelector("#viewPost").addEventListener("click", () => {
	let postInput = document.querySelector("#postID").value;
	location.assign("https://mark6132014.github.io/offlineserver/online/server/editor/community/sq?id=" + postInput);
});