const twitterBtn     = document.getElementById('twitter');
const whatsappBtn     = document.getElementById('whatsapp');
const facebookBtn     = document.getElementById('facebook');
const instagramBtn     = document.getElementById('instagram');
const downloadBtn     = document.getElementById('download');
const quoteContainer     = document.getElementById('quote-container');
const quoteText     = document.getElementById('quote');
const greetingText     = document.getElementById('greeting');
const quote = quoteText.innerText;
const greeting = greetingText.innerText;
var site = "To get Covid_19 Handbook,\
Click Here to get...\
https://aadil-rashid.github.io/Eid-Mubarak/";
    
function ButtonClick() {
    var link = document.createElement('a');
    link.href = "covid_19 Handbook.pdf";
    link.download = "covid_19 Handbook.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);    
}

function show_alert() {
    alert("You can support the cause, by sharing it while Covid_19 Handbook being downloading... Share-Please...");
           
}

// Tweet Quote
function tweetQuote() {    
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${greeting} - ${site}`;
    window.open(twitterUrl, '_blank');
}

// Facebook Post
function facebookPost() {
    const facebookUrl = `https://developers.facebook.com/docs?text=${quote} - ${greeting} - ${site}`;
    window.open(facebookUrl, '_blank');

}

//whatsapp post 
function whatsappPost() {
    // <a target="_blank" href="https://web.whatsapp.com/send?text=www.google.com" data-action="share/whatsapp/share">Share via Whatsapp web</a>
    const whatsappUrl = `https://web.whatsapp.com/send?text=${quote} - ${greeting} - ${site}`;
    window.open(whatsappUrl, '_blank');
}


// FB.ui({
//     method: 'share',""
//     href: 'https://developers.facebook.com/docs/',
//   }, function(response){});

// Event Listeners
twitterBtn.addEventListener('click', tweetQuote);
facebookBtn.addEventListener('click', facebookPost);
whatsappBtn.addEventListener('click', whatsappPost);
