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
    if(getName == 'choose intern') {
        alert("Please select an intern")
    }
    if(getNumber == ''){
        alert("Please input a mobile number")
    }
    if(getAmount == ''){
        alert("Please input amount")
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ "Code": getNetwork, "Amount": getAmount, "PhoneNumber": getNumber, "SecretKey": "hfucj5jatq8h" });

    var requestOptions = {
        method: 'POST',
        headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json; charset=UTF-8", "Access-Control-Allow-Origin": "https://sodiadrhain.github.io"},
        body: raw,
        redirect: 'follow'
    };

    fetch("https://sandbox.wallets.africa/bills/airtime/purchase", requestOptions)
        .then(data => {data.json()})
        .then(res => {console.log(res)})
        .catch(error => console.log('error', error));
    
}
