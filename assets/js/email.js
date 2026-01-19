// EmailJS //
function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "sharwaan.thapa@gmail.com",
        Password : "08/Sep/1991",
        To : 'sharwaan.thapa@hotmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name:" + document.getElementById("name").value
            +"<bar> Email:" + document.getElementById("email").value
            +"<bar> Phone no:" + document.getElementById("phone").value
            +"<bar> Massage:" + document.getElementById("massage").value
    }).then(
    message => alert("Message Sent SuccesFully")
    );
}