


var arrayOfQuotes = [
 `   'author': 'Jim Rohn' 
     'quote' 'Beware of what you become in pursuit of what you want.'`
    ,
`    'author': 'Epictetus'
     'quote' 'It\'s not what happens to you, but how you react to it that matters.'`
    ,
`    'author': 'Frank Sinatra', 
     'quote' 'The best revenge is massive success.'`
    ,
`    'author' : 'Wayne Gretzy', 
     'quote' 'You miss 100% of the shots you don\'t take.'`
    ,
`    'author' : 'Nelson Mandela', 
     'quote' 'Resentment is like drinking poison and waiting for your enemies to die.'`
    ,
`    'author' : 'Elbert Hubbard', 
     'quote' 'Do not take life too seriously. You will not get out alive.'`
    ,
   
   ` “Don’t walk in front of me… I may not follow
    Don’t walk behind me… I may not lead
    Walk beside me… just be my friend”
    ― Albert Camus`,

    `“Always forgive your enemies; nothing annoys them so much.”
    ― Oscar Wilde`,
    `
    “Live as if you were to die tomorrow. Learn as if you were to live forever.”
    ― Mahatma Gandhi`,

    `“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”
    ― Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeches`,
    
    
];
function addQuote() {
var x = Math.floor(Math.random() * 10);
console.log(x);

document.getElementById('viewQoute').innerHTML= arrayOfQuotes[x];

}
































