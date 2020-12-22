function getMoneyTokens(){

    fetch('/rewards/fetch', {method: 'get'}
    ).then(response => response.json()
    ).then(data => {
        if (data.hasOwnProperty('error')) {
        } else if (data.hasOwnProperty('rewards')) {
            let moneyHTML = `<table id="money">`;
            for(let r of data.rewards){
                moneyHTML += `<tr id="${r.id}" onclick=console.log(this.id);>`+
                    `<td>${r.id}</td>`+
                    `<td>${r.value}</td>`+
                    `</tr>`;
            }
            moneyHTML+=`</table>`;
            document.getElementById("money").innerHTML = moneyHTML;

        }
    });
}

function handleEvent(e) {
    console.log("Clicked")
}


function getVideo(){
    let video = document.querySelector("#videoElement");

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                video.srcObject = stream;
            })
            .catch(function (err0r) {
                console.log("Something went wrong!");
            });
    }
}

function stop(e) {
    let stream = video.srcObject;
    let tracks = stream.getTracks();

    for (let i = 0; i < tracks.length; i++) {
        let track = tracks[i];
        track.stop();
    }

    video.srcObject = null;
}

function runThese(){
    getVideo();
    //clickCell();
    getMoneyTokens();
}
