const twitterBtn     = document.getElementById('twitter');
const whatsappBtn     = document.getElementById('whatsapp');
const facebookBtn     = document.getElementById('facebook');
const instagramBtn     = document.getElementById('instagram');
const downloadBtn     = document.getElementById('download');
const quoteContainer     = document.getElementById('quote-container');
const quoteText     = document.getElementById('quote');
const greetingText     = document.getElementById('greeting');
    
function ButtonClick() {
    var link = document.createElement('a');
    link.href = "covid_19 Handbook.pdf";
    link.download = "covid_19 Handbook.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
