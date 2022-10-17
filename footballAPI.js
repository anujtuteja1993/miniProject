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
    document.querySelector("#car-list").appendChild(template);
    //template.getElementById("thumbnail").src = card.videos[0].embed;
    var videoEmbed = card.videos[0].embed;
    console.log(videoEmbed);
}