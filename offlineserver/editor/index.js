document.getElementById("openFile").addEventListener("click", () => {
	var file = prompt("File Location (In your computer, need file path please):");
	location.assign("offlineserver-openfile://" + file);
});
document.getElementById("previewWebsite").addEventListener("click", () => {
	alert("Remember to save your files before previewing or the changes will not show up!");
	document.getElementById("previewWebpage").src = "http://127.0.0.1";
	document.getElementById("previewWebpage").style.display = "block";
	document.getElementById("stopPreviewingWebsite").style.display = "block";
	location.assign("#previewWebpage");
});
document.getElementById("stopPreviewingWebsite").addEventListener("click", () => {
	document.getElementById("previewWebpage").src = "blank.html";
	document.getElementById("stopPreviewingWebsite").style.display = "none";
	document.getElementById("previewWebpage").style.display = "none";
});
document.getElementById("importFile").addEventListener("click", () => {
	var file2 = prompt("Enter File Name to import to website:");
	console.log("offlineserver-import://" + file2);
	location.assign("offlineserver-import://" + file2);
});
document.getElementById("createFolder").addEventListener("click", () => {
	var folderName = prompt("Folder Name:");
	console.log("offlineserver-createfolder://" + folderName);
	location.assign("offlineserver-createfolder://" + folderName);
});
document.getElementById("setUpDomainBTN").addEventListener("click", () => {
	var domainName = document.getElementById("domainName").value;
	var domainEnd = document.getElementById("domainExtension").value;
	alert("Your Free Domain:\nhttp://" + domainName + "." + domainEnd);
	alert("Your Free Domain with subdomain:\nhttp://" + domainName + ".offlineserver." + domainEnd);
	alert("Reminder: you can change this anytime.");
	location.assign("offlineserver-webdomain://" + domainName + "," + domainEnd);
});
document.getElementById("settingBtn").addEventListener("click", () => {
	document.querySelector(".applications").style.display = "flex";
	document.querySelector(".applications").style.opacity = 0;
	setTimeout(() => {
		document.querySelector(".applications").style.opacity = 1;
	}, 10);
});
document.getElementById("importSSL").addEventListener("click", () => {
	var sslLocation = prompt("Type in the local file path of the certificate you want to import:");
});
document.getElementById("copyFile").addEventListener("click", () => {
	var fileDestinationCopy = prompt("Type in the file path to copy your file to a folder:");
	var copyFolderDestinaiton = prompt("Type in the folder name, if it is a subfolder do file/to for example instead.");
	location.assign("offlineserver-copy://" + fileDestinationCopy + "," + copyFolderDestinaiton);
});
function handleDownload() {
    if (!navigator.onLine) {
      alert("You are offline. You cannot download this file.");
	  let downloadOffline = prompt("Would you like to download OfflineServer offline.");
	  if (downloadOffline.toLowerCase() == "y" || "yes") {
		  location.assign("http://admin.offlineserver.net/editor/offlineserver.zip");
	  }
	  if (downloadOffline.toLowerCase() == "n" || "no") {
		  alert("Download Canceled");
	  }
    } else {
      location.assign("https://mark6132014.github.io/offlineserver/OfflineServer%20Professional.zip");
    }
}
document.getElementById("savePWHINT").addEventListener("click", () => {
	var passwordHint = document.getElementById("passwordHintInput").value;
	localStorage.setItem("pwHint", passwordHint);
	alert("LocalStorage Password Hint Saved.");
});
document.getElementById("saveUSERNAME").addEventListener("click", () => {
	var usernameOfflineserver = document.getElementById("offlineserverUsername").value;
	localStorage.setItem("username", usernameOfflineserver);
	alert("LocalStorage Username Saved.");
});

var passwordhintLS = localStorage.getItem("pwHint");
if (passwordhintLS) {
	document.getElementById("PWHINT").innerHTML = localStorage.getItem("pwHint");
	document.getElementById("defaultPasswordHint").innerHTML = "Your default password hint is: " + localStorage.getItem("pwHint");
}
var usernameLS = localStorage.getItem("username");
if (usernameLS) {
	document.getElementById("welcomeText").innerHTML = "Welcome, " + usernameLS + ". Log In to your OfflineServer to get started.";
	document.getElementById("welcomeTextSettings").innerHTML = "Hey, " + usernameLS + "!";
}
function login() {
	var inputUsername = document.getElementById("username").value;
	var inputPassword = document.getElementById("password").value;
	var rightUsername = document.getElementById("rightUser").innerHTML;
	var rightPassword = document.getElementById("rightPW").innerHTML;
	if (inputUsername == rightUsername) {
		console.log("Username is right");
		if (inputPassword == rightPassword) {
			console.log("Password is right");
			console.log("Credentials are right");
			document.querySelector(".login").style.opacity = 0;
			setTimeout(() => {
				document.querySelector(".login").style.display = "none";
			}, 200)
		} else {
			alert("Password is incorrect.");
		}
	} else {
		alert("Username is incorrect.");
	}
}
function updateDNP() {
	document.getElementById("domainNamePreview").innerHTML = document.querySelector("#domainName").value + "." + document.querySelector("#domainExtension").value;
}
if (location.search == "?loggedOut=true") {
	document.getElementById("loggedOut").style.display = "block";
}
setInterval(updateDNP, 10);



/* Progress Bar */
var oldPercentage = 0;
var newPercentage = 0;
var finish = 100;
var number = Math.floor(Math.random()*100);
var percentageUpdater;
var limit = 10;
var underPercentage = 0;
function updatePercentage(actionA) {
    percentageUpdater = setInterval(() => {
        number = Math.floor(Math.random()*101);
		document.querySelector(".progressBar").style.display = "block";
		document.querySelector(".progressBarB").style.display = "none";
        if (number >= newPercentage) {
            newPercentage = number;
            document.querySelector(".progressBar marquee .progress").style.width = newPercentage + "%";
            finished(actionA);
        } else if (newPercentage == finish) {
            finished(actionA);
        } else {
            underPercentage += 1;
            if (underPercentage == limit) {
                newPercentage += 1;
                underPercentage = 0;
                document.querySelector(".progressBar marquee .progress").style.width = newPercentage + "%";
            }
        }
    }, 150);
}
function finishedAction(actionC) {
    actionC();
}
function finished(actionB) {
    if (newPercentage == finish) {
        clearInterval(percentageUpdater);
		document.querySelector(".progressBar marquee .progress").style.width = "0%";
		document.querySelector(".progressBar").style.display = "none";
		oldPercentage = 0;
		newPercentage = 0;
		underPercentage = 0;
        console.log(newPercentage);
        finishedAction(actionB);
    }
}
function prepareProgress(duration, action) {
	document.querySelector(".progressBar").style.display = "none";
	document.querySelector(".progressBarB").style.display = "block";
	setTimeout(() => {
		document.querySelector(".progressBarB").style.display = "none";
		setTimeout(action, 100);
	}, duration);
}
function makeLoading(LoadingType, durationA, actionA) {
	location.assign("#downloading");
	if (LoadingType == "progress") {
		document.querySelector(".progressBar marquee .progress").style.width = "0%";
		updatePercentage(actionA); 
	}
	if (LoadingType == "prepare") {
		prepareProgress(durationA, actionA);
	}
}
function downloadLinkFunc(linkName, filepath) {
	document.querySelector(".downloadLinks").style.display = "none";
	document.querySelector("#downloadOfflineWeb").onclick = () => {
		location.assign(filepath);
		document.querySelector("#downloadReady").style.display = "none";
		document.querySelector(".downloadLinks").style.display = "block";
	};
	document.querySelector("#importOfflineWeb").onclick = () => {
		makeLoading("prepare", 5000, () => {
		document.querySelector(".progressBar").style.display = "block";
		document.querySelector("#downloadReady").style.display = "none";
		document.querySelector(".downloadLinks").style.display = "none";
		setTimeout(() => {
			makeLoading("progress", null, () => {
				document.querySelector("#downloadReady").style.display = "none";
				document.querySelector(".downloadLinks").style.display = "block";
				setTimeout(() => {
					let url = "http://" + linkName;
					window.open(url, "_blank").focus();
				}, 1000);
			});
		}, 2000);
	});
	};
	makeLoading("prepare", 10000, () => {
		document.querySelector(".progressBar").style.display = "block";
		setTimeout(() => {
			makeLoading("progress", null, () => {
				console.log(linkName + " is ready to be downloaded or imported");
				location.assign("#downloadReady");
				setTimeout(() => {
					document.querySelector("#downloadReady").style.display = "block";
					location.assign("#");
				}, 1000);
			});
		}, 2000);
	});
}