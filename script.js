// ================================
// GAME POPULARITY CHART
// ================================

const gameNames = [
    "GTA V",
    "Minecraft",
    "Valorant",
    "RDR2",
    "EA Sports FC",
    "Cyberpunk 2077"
];

const popularityData = [
    95,
    92,
    88,
    90,
    82,
    86
];


const chartArea = document.getElementById("gameChart");

if (chartArea) {

    new Chart(chartArea, {

        type: "bar",

        data: {

            labels: gameNames,

            datasets: [{
                label: "Popularity Score",
                data: popularityData,
                borderWidth: 1
            }]

        },

        options: {

            responsive: true,

            scales: {

                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: "Popularity Score"
                    }
                },

                x: {
                    title: {
                        display: true,
                        text: "Games"
                    }
                }

            }

        }

    });

}


// ================================
// DYNAMIC MESSAGE
// ================================

const messages = [

    "🎮 Gaming continues to grow with new technologies and experiences.",

    "🤖 AI is becoming an important technology in modern game development.",

    "🏆 Competitive gaming and esports continue to attract players worldwide.",

    "🌍 Open-world games give players more freedom to explore virtual worlds.",

    "💻 PC and console gaming continue to offer different experiences for players."

];


let messageIndex = 0;


function changeMessage() {

    const messageElement =
        document.getElementById("dynamicMessage");

    messageIndex++;

    if (messageIndex >= messages.length) {
        messageIndex = 0;
    }

    messageElement.textContent =
        messages[messageIndex];

}