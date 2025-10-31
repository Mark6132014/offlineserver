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
document.getElementById("tipsBtn").addEventListener("click", () => {
	document.querySelector(".TipsApplications").style.display = "flex";
	document.querySelector(".TipsApplications").style.opacity = 0;
	setTimeout(() => {
		document.querySelector(".TipsApplications").style.opacity = 1;
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
                        let urlSuffix = linkName;
						let url = "http://admin.offlineserver.net/editor/" + urlSuffix;


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

function getMonthInText(number) {
            if (number == 1) {
                return "January"
            }
            if (number == 2) {
                return "February"
            }
            if (number == 3) {
                return "March"
            }
            if (number == 4) {
                return "April"
            }
            if (number == 5) {
                return "May"
            }
            if (number == 6) {
                return "June"
            }
            if (number == 7) {
                return "July"
            }
            if (number == 8) {
                return "August"
            }
            if (number == 9) {
                return "September"
            }
            if (number == 10) {
                return "October"
            }
            if (number == 11) {
                return "November"
            }
            if (number == 12) {
                return "December"
            }
        }
var ideas = {
	halloween: [
		{
			name: "Halloween Marquee",
			desc: "Put any text that celebrates Halloween! Make sure it sounds spooky, though!",
			url: "./webframes/tips/halloween/marquee.html"
		},
		{
			name: "Lightning",
			desc: "Celebrate Halloween with some lightning as a fresh start!",
			url: "./webframes/tips/halloween/lightning.html"
		}
	],
	christmas: [
		{
			name: "Christmas Santa Claus Presentation",
			desc: "Celebrate Christmas by making a text to speech presentation of santa claus riding on his sleigh on christmas night!",
			url: "./webframes/tips/christmas/asfolder/christmassite/index.html#christmasCheer"
		}
	]
};
var month = getMonthInText(new Date().getMonth()+1);
document.getElementById("eventAnnounce").innerHTML = "Today is the month of " + month + "!";
if (month == "October") {
	document.getElementById("eventBanner").src = "./img/halloween.png";
	let randomIdea = ideas.halloween[Math.floor(Math.random()*ideas.halloween.length)];
	document.getElementById("ideaFrame").src = randomIdea.url;
	document.getElementById("ideaTitle").innerHTML = randomIdea.name;
	document.getElementById("ideaDesc").innerHTML = randomIdea.desc;
}
else if (month == "November") {
	document.getElementById("eventBanner").src = "./img/christmas.png";
	let randomIdea = ideas.christmas[Math.floor(Math.random()*ideas.halloween.length)];
	document.getElementById("ideaFrame").src = randomIdea.url;
	document.getElementById("ideaTitle").innerHTML = randomIdea.name;
	document.getElementById("ideaDesc").innerHTML = randomIdea.desc;
}
else if (month == "December") {
	document.getElementById("eventBanner").src = "./img/christmas.png";
	let randomIdea = ideas.christmas[Math.floor(Math.random()*ideas.halloween.length)];
	document.getElementById("ideaFrame").src = randomIdea.url;
	document.getElementById("ideaTitle").innerHTML = randomIdea.name;
	document.getElementById("ideaDesc").innerHTML = randomIdea.desc;
}
else {
	document.getElementById("eventBanner").src = "./img/regular.png";
	let randomIdea = {
		name: "No Idea",
		desc: "There are currently no ideas to give you this month, we will make more in future updates or maybe next month!",
		url: "./no-idea.html"
	};
	document.getElementById("ideaFrame").src = randomIdea.url;
	document.getElementById("ideaTitle").innerHTML = randomIdea.name;
	document.getElementById("ideaDesc").innerHTML = randomIdea.desc;
}
function changeTemplateView(url) {
	document.getElementById("templateViewer").src = url;
	location.assign("#templateViewer");
}
/* Always put this at the bottom */
var watermarkDisplay = document.querySelector("#watermarkDisplay");
var watermarkTitle = document.querySelector("#currentWatermark");
var importWatermark = document.querySelector("#importWatermark");
setInterval(() => {
	console.clear();
	watermarkDisplay.style.opacity = 1;
	setTimeout(() => {
		watermarkDisplay.style.opacity = 0;
		setTimeout(() => {
			watermarkDisplay.src = "../watermarks/marquee.html";
			watermarkTitle.innerHTML = "Current Watermark: Marquee";
			importWatermark.href = "#marqueeWatermarkImport";
			setTimeout(() => {
				watermarkDisplay.style.opacity = 1;
				setTimeout(() => {
					watermarkDisplay.style.opacity = 0;
					setTimeout(() => {
						watermarkDisplay.src = "../watermarks/crazy.html";
						watermarkTitle.innerHTML = "Current Watermark: Stupid CRAZY"
						importWatermark.href = "#crazyWatermarkImport";
						setTimeout(() => {
							watermarkDisplay.style.opacity = 1;
							setTimeout(() => {
								watermarkDisplay.style.opacity = 0;
								setTimeout(() => {
									watermarkDisplay.src = "../watermarks/regular.html";
									watermarkTitle.innerHTML = "Current Watermark: Regular"
									importWatermark.href = "#regularWatermarkImport";
									setTimeout(() => {
										console.log("Animation started over again!");
										console.clear();
									}, 200);
								}, 300);
							}, 7000);
						}, 200);
					}, 300);
				}, 7000);
			}, 200);
		}, 300);
	}, 7000);
}, 25000);
/* OfflineServer Community comes to life */
document.querySelector(".offlineserverCommunity #createPostBtn").addEventListener("click", () => {
	let postName = document.querySelector(".offlineserverCommunity #createPostName").value;
	let projectPath = document.querySelector(".offlineserverCommunity #createProjectPath").value;
	let byName = localStorage.getItem("username");
	let projectSite = `https://mark6132014.github.io/offlineserver/online/server/editor/community/viewer?name=${postName}&by=${byName}&site=${projectPath}`;
	let apiURL = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(projectSite)}`;
	fetch(apiURL).then(response => response.text()).then(data => document.querySelector(".offlineserverCommunity #output").innerHTML = data).catch(error => console.log("Error"));
	setTimeout(() => {
		let outputURL = document.querySelector(".offlineserverCommunity #output").innerHTML;
		let outputID = outputURL.slice(20)
		document.querySelector(".offlineserverCommunity #link").innerHTML = "ID: " + outputID + "<br>Here is the whole link: https://mark6132014.github.io/offlineserver/online/server/editor/community/sq?id=" + outputID;
	}, 2000);
});
document.querySelector(".offlineserverCommunity #viewPost").addEventListener("click", () => {
	let postInput = document.querySelector(".offlineserverCommunity #postID").value;
	document.querySelector(".offlineserverCommunity #postViewer").src = "https://mark6132014.github.io/offlineserver/online/server/editor/community/sq?id=" + postInput;
});
/* OfflineServer is always the best free web server out there. Have a good day! */