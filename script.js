const twitterBtn     = document.getElementById('twitter');
const whatsappBtn     = document.getElementById('whatsapp');
const downloadBtn     = document.getElementById('download');
const quoteContainer     = document.getElementById('quote-container');
const quoteText     = document.getElementById('quote');
const greetingText     = document.getElementById('greeting');
const quote = quoteText.innerText ;
const greeting = greetingText.innerText;
var site = "To get Covid_19 Handbook, Click to the below link... https://aadil-rashid.github.io/Eid-Mubarak/";
  
    
var quoteArray = [
    "On this Eid, I wish you and your family Allah's blessings and May we all be protected from this pandemic.",
    "Wishing you and your family a very happy, prosperous and blissful Eid Day!",
    "May Allah forgive all your sins and accept your sacrifice and put an ease to all your suffering!",
    "Avoid touching your eyes, mouth and nose immediately after using an alcohol-based hand sanitizer, as it can cause irritation",
    "Remember that washing your hands with soap and water is also effective against COVID-19. Please Take Care Of yourself for your loved once",
    "Cover your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately and wash your hands. Avoid touching eyes, nose and mouth.",
    "May this Eid bring joy and love to your heart and create all the opportunities of success for you!",
    "May you continue to grow wiser and more charming every day! May this Eid bring happiness in your heart and to your family",
    "May your sacrifice get answered, and Allah (SWT) bless you with his uncountable blessings!",
    "May God bless us all and make us all devout and honorable Muslims.",
    "Dear Mama and Abu, I feel so lucky to have parents like you to spend the day with. You have been the reason why every Eid day seems like a day I spend in heaven."

]  

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quoteArray.length));
    document.getElementById('quote').innerHTML = quoteArray[randomNumber];

    // Reduce font size for long quotes
    if(data.quoteText.length > 80) {
        quoteText.classList.add("long-quote");
    }else {
        quoteText.classList.remove("long-quote");
    }
    
    // quoteText.innerText = data.quoteText;

 

}

function ButtonClick() {
    var link = document.createElement('a');
    link.href = "covid_19 Handbook.pdf";
    link.download = "covid_19 Handbook.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);    
}
function show_alert() {
    alert("Support the Cause, by sharing while 'Covid_19 Handbook' is being downloading... Share-Please...");
           
}

// Tweet Quote
function tweetQuote() {    
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${greeting} - ${site}`;
    window.open(twitterUrl, '_blank');
}

function whatsappPost() {
    // <a target="_blank" href="https://web.whatsapp.com/send?text=www.google.com" data-action="share/whatsapp/share">Share via Whatsapp web</a>
    const whatsappUrl = `https://api.whatsapp.com/send?text=${quote}  - ${greeting} - ${site}`;
    window.open(whatsappUrl, '_blank');
}

// https://twitter.com/share?url=[post-url]&text=[post-title]&via=[via]&hashtags=[hashtags]
// https://www.facebook.com/sharer.php?u=[post-url]
// https://api.whatsapp.com/send?text=[post-title] [post-url]


twitterBtn.addEventListener('click', tweetQuote);
whatsappBtn.addEventListener('click', whatsappPost);

newQuote();