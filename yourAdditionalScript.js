var myHeaders = new Headers();
myHeaders.append("Authorization", "App 5ffbc2ea6f28b1c554204881f9c63820-e89144f5-0ee7-4ab5-8101-76f2b49814a2");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Accept", "application/json");

var raw = JSON.stringify({
    "messages": [
        {
            "destinations": [{"to":"94771283038"},{"to":"94778253056"}],
            "from": "ServiceSMS",
            "text": "Hello,\n\nThis is a test message from Infobip. Have a nice day!"
        }
    ]
});

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};

fetch("https://xl2g2e.api.infobip.com/sms/2/text/advanced", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));