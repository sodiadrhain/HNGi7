pNetwork = (key) => {
    var pAirtel = document.getElementById('p-network-airtel')
    var pMtn = document.getElementById('p-network-mtn')
    var pGlo = document.getElementById('p-network-glo')
    var p9mobile = document.getElementById('p-network-9mobile')
   if(key == '9mobile') {
       p9mobile.className = "change-bg"
       pAirtel.className = ""
       pMtn.className = ""
       pGlo.className = ""
   } else if(key == 'airtel') {
       pAirtel.className = "change-bg"
       p9mobile.className = ""
       pMtn.className = ""
       pGlo.className = ""
   } else if(key == 'mtn') {
       pMtn.className = "change-bg"
       pAirtel.className = ""
       p9mobile.className = ""
       pGlo.className = ""
   } else if(key == 'glo') {
       pGlo.className = "change-bg"
       pAirtel.className = ""
       pMtn.className = ""
       p9mobile.className = ""
   }

   document.getElementById('get-network').className = key

}

send = () => {
    var getName = document.getElementById('p-name')
    getName = getName.options[getName.selectedIndex].text
    var getNetwork = document.getElementById('get-network').className
    var getAmount = document.getElementById('p-amount').value
    var getNumber = document.getElementById('p-number').value
    if (getNetwork == '') {
        alert("Please choose a network provider")
    }
    else if(getName == 'choose intern') {
        alert("Please select an intern")
    }
     else if(getNumber == ''){
        alert("Please input a mobile number")
    }
    else if(getAmount == ''){
        alert("Please input amount")
    }
    else {
    document.getElementById("sent-show").style.display = "none"
    document.getElementById("not-send").style.display = "block"
    document.getElementById("send-name").innerText = getName
    document.getElementById("send-amount").innerText = getAmount
    document.getElementById("send-number").innerText = getNumber

        const url = 'https://sandbox.wallets.africa/bills/airtime/purchase'


        var raw = JSON.stringify({ "Code": getNetwork, "Amount": getAmount, "PhoneNumber": getNumber, "SecretKey": "apisecret" });


        var request = {
            credentials: 'same-origin',
            method: 'POST',
            body: raw,
            headers: new Headers({
                'User-agent': 'Mozilla/4.0 Customer User Agent',
                'Autorization': ''
            })
        };

/*         fetch("https://sandbox.wallets.africa/bills/airtime/purchase", request)
            .then((resp) => resp.json())
            .then(function (data) {
                console.log(data)
            }).catch(function (error) {
                console.log(error)
            })
 */

        console.log({ response: { "Code": getNetwork, "Amount": getAmount, "PhoneNumber": getNumber, "Status": "Transfer Successful" }})


    }

/*     var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ "Code": "airtel", "Amount": 100, "PhoneNumber": "07068260000", "SecretKey": "apisecret" });

    var requestOptions = {
        method: 'POST',
        headers: new Headers(),
        body: raw,
        redirect: 'follow',
        mode: 'no-cors'
    };

    let raww = { "Code": "airtel", "Amount": 100, "PhoneNumber": "07068260000", "SecretKey": "apisecret" }

    let sss = {
        name: "sss"
    } */

}
