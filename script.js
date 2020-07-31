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
    "On this Eid, I wish you and your family a Happy Eid Mubarak.",
    "Wishing you and your family a very happy, prosperous and blissful Eid Day!",
    "May Allah forgive all your sins and accept your sacrifice and put an ease to all your suffering!",
    "Avoid touching your eyes, mouth and nose immediately after using an alcohol-based hand sanitizer, as it can cause irritation",
    "Remember that washing your hands with soap and water is also effective against COVID-19. Please Take Care Of yourself for your loved once",
    "Cover your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately and wash your hands. Avoid touching eyes, nose and mouth.",
    "May this Eid bring joy and love to your heart and create all the opportunities of success for you!",
    "May you continue to grow wiser and more charming every day! May this Eid bring happiness in your heart and to your family",
    "May God bless us all and make us all devout and True Muslims. Take care of Poor around you.",
    "Dear Mama and Abu Jee, Thank-you for everything, and I Love you both... \"Eid-Mubarak\" ",
    "May the sacrifice of Eid ul Adha strengthen your faith in Allah and light up your world with countless blessings. Happy Eid!!",
    "Wear protective equipment: faceMask, gloves; while distributing Qurbani meat, Be Safe and Protect others as well.",
    "May Allah keep you away from harm and troubles. May all your sin be forgiven and may you be blessed with peaceful life for each day ahead.",
    "I wish you all a very happy and peaceful EID. May Allah accept your good deeds, forgive your transgression and ease the suffering of all the people around the globe. Ammen!",
    "Allah (SWT) obliges us to protect and care for ourselves and one another. Maintain Social distancing where ever you go.",
    "Part of being a person is about helping others. Take care of Poor around you.",
    "No shadows to depress you. Only joys to surround you. Allah himself to bless you. These are my wishes for you.",
    "May Allah fulfil all your prayers and bless you with his kindness. Remember me in your prayers. ",
    "On this blessed occasion of Eid, wishing you and your family joy, happiness, peace and prosperity!",
    "Warm greetings and Eid Mubarak to everyone. May this Eid-al-adha, the Almighty shower His blessings on each one of us.",
    "Maintain Social Distancing to Protect yourself and others, have a Happy, Healthy and Safe Eid",
    
]  

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quoteArray.length));
    document.getElementById('quote').innerHTML = quoteArray[randomNumber];
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

    const whatsappUrl = `https://api.whatsapp.com/send?text=${quote}  - ${greeting} - ${site}`;
    window.open(whatsappUrl, '_blank');
}

twitterBtn.addEventListener('click', tweetQuote);
whatsappBtn.addEventListener('click', whatsappPost);

newQuote();