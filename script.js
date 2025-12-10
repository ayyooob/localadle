function sendmail(){
    let parms={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        mobile:document.getElementById("number").value,
        postcode:document.getElementById("postcode").value,
        message:document.getElementById("message").value
    }

    emailjs.send("service_yc41xp5","template_gx1nbyo",parms).then(alert("email sent!!!"))
}