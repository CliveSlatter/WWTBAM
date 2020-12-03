function getMoneyTokens(){

    fetch('/rewards/fetch', {method: 'get'}
    ).then(response => response.json()
    ).then(data => {
        if (data.hasOwnProperty('error')) {
        } else if (data.hasOwnProperty('rewards')) {
            let moneyHTML = `<table>`;
            for(let r of data.rewards){
                moneyHTML += `<tr>`+
                    `<td>${r.id}</td>`+
                    `<td>${r.value}</td>`+
                    `</tr>`;
            }
            moneyHTML+=`</table>`;
            document.getElementById("money").innerHTML = moneyHTML;
        }
    });
}