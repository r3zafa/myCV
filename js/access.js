let input; 
let password="accessMyCV"; 
input=prompt('Passwort eingeben',''); 

if (input==password) {
    alert('Danke, das Passwort war richtig! Drücken Sie auf OK, um fortzufahren!'); 
    window.location="./home.html"; 

}
else { 
    window.location="./login.html"; 
} 