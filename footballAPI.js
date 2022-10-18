const matchVideos = new Map()

fetch(
    "https://www.scorebat.com/video-api/v3/feed/?token=MjkxNzdfMTY2NTQ4ODE1Nl9jMWZlM2QxZmNiODMzMTE3MmQ1MWU2MTAzMjZkNDMwY2NiMjUxZTQ0"
)
    .then((response) => response.json())
    .then((response) => {
        data = response.response;
        console.log(data);
        if ("content" in document.createElement("template")) {
            data.forEach((info) => {
                addCard(info);
            });
        }
    });

function addCard(card) {
    const template = document
        .getElementById("card-template")
        .content.cloneNode(true);
    template.querySelector(".card-title").innerText = card.title;
    template.querySelector(".card-text").innerText = card.competition;
    template.getElementById("thumbnail").src = card.thumbnail;
    template.getElementById("matchDetails").href = card.matchviewUrl;
    
    //store the video embed codes and when you click the button, show the matching one
    template.getElementById("matchVideoButton").setAttribute('onclick', 'showVideo("'+card.videos[0].id+'")');
    matchVideos.set(card.videos[0].id, card.videos[0].embed)
    
    document.querySelector("#car-list").appendChild(template);
    //template.getElementById("thumbnail").src = card.videos[0].embed;
    //var videoEmbed = card.videos[0].embed;
    //console.log(videoEmbed);
}

function showVideo(embedId)
{
    document.getElementById('matchVideo').innerHTML = matchVideos.get(embedId)
}

//this function just changes the nav link to show if you're logged in or not
function checkLogin() {
    let username = localStorage.getItem("name");
    if (username) {
        document.getElementById('loginLink').setAttribute('href', '#');
        document.getElementById('loginLink').innerText = 'Hello '+username;
    }
    else
    {
        document.getElementById('loginLink').setAttribute('href', 'login.html');
        document.getElementById('loginLink').innerText = 'Login';
    }
}

window.onload = checkLogin;