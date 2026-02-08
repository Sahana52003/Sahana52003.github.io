document.addEventListener("DOMContentLoaded", function () {
  new Typed(".text", {
    strings: ["Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
  });
});

function downloadResume() {
    const link = document.createElement('a');
    link.href = 'Sahana_Resume.pdf';
    link.download = 'Sahana_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


function openGmail() {
  const emailParts = ["sahananreddy52003", "@", "gmail", ".", "com"];
  const email = emailParts.join("");

  const url =
    "https://mail.google.com/mail/?view=cm&fs=1" +
    //"&to=" + encodeURIComponent(email) +
    "&su=" + encodeURIComponent("Subject") +
    "&body=" + encodeURIComponent("Hello,");

  window.open(url, "_blank");
}




// function sendEmail(){
// emailjs.init({
//   publicKey: '6AgXv6C903fI2ftu2',
// });


// const name=document.getElementById('firstname').value.trim();
// const lastname=document.getElementById('lastname').value.trim();
// const email=document.getElementById('email').value.trim();
// const mobile=document.getElementById('mobile').value.trim();
// const message=document.getElementById('message').value.trim();

// const params={
//   from_name:name,
//   from_lastname:lastname,
//   from_email:email,
//   mobile:mobile,
//   message:message,
// };
// emailjs.send('service_wppurlh', 'template_s87ydfe', params).then(function(){
//   alert('Email sent');
// })
// .catch(function(){
//   alert('Failed to send!');
// });


// }




const educationSection = document.getElementById("education");
const showBtn = document.getElementById("showEducationBtn");

showBtn.addEventListener("click", () => {
    educationSection.classList.remove("hidden-section");
    educationSection.classList.add("show-section");
    educationSection.scrollIntoView({ behavior: "smooth" });
});

// Hide Education when scrolling past it
window.addEventListener("scroll", () => {
    const rect = educationSection.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Completely out of viewport
    if (rect.bottom < 0 || rect.top > windowHeight) {
        educationSection.classList.remove("show-section");
        educationSection.classList.add("hidden-section");
    }
});


// function sendEmail() {
//   const button = document.getElementById("sendBtn");

//   const params = {
//     from_name: document.getElementById("firstname").value.trim(),
//     from_lastname: document.getElementById("lastname").value.trim(),
//     from_email: document.getElementById("email").value.trim(),
//     mobile: document.getElementById("mobile").value.trim(),
//     message: document.getElementById("message").value.trim(),
//   };

//   button.innerText = "Sending...";
//   button.disabled = true;

//   emailjs
//     .send("service_wppurlh", "template_s87ydfe", params)
//     .then((response) => {
//       console.log("SUCCESS!", response.status, response.text);

//       button.innerText = "Message Sent ✓";
//       button.style.backgroundColor = "#28a745";

//       setTimeout(() => {
//         button.innerText = "Message Me";
//         button.disabled = false;
//         button.style.backgroundColor = "";
//       }, 400);
//     })
//     .catch((error) => {
//       console.error("FAILED...", error);

//       button.innerText = "Failed! Try Again";
//       button.disabled = false;
//       button.style.backgroundColor = "#dc3545";
//     });
// }



function sendEmail() {
  const button = document.getElementById("sendBtn");

  const params = {
    from_name: document.getElementById("firstname").value,
    from_email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  button.innerText = "Sending...";
  button.disabled = true;

  emailjs
    .send("service_wppurlh", "template_s87ydfe", params)
    .then(() => {
      button.innerText = "Message Sent ✓";
      button.style.backgroundColor = "#28a745";

      setTimeout(() => {
        button.innerText = "Send Message";
        button.disabled = false;
        button.style.backgroundColor = "";
        document.querySelector("form").reset();
      }, 1500);
    })
    .catch(() => {
      button.innerText = "Failed! Try Again";
      button.style.backgroundColor = "#dc3545";
      button.disabled = false;
    });
}









const canvas = document.getElementById("sparkleCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const colors = ["#111", "#1a1a1a", "#222"];

const sparkles = [];

class Sparkle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.alpha = Math.random();
        this.speed = Math.random() * 0.4 + 0.1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
        this.y -= this.speed;
        this.alpha += Math.random() * 0.05 - 0.02;

        if (this.alpha <= 0 || this.y < 0) {
            this.reset();
            this.y = canvas.height;
        }
    }

  draw() {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;

    ctx.shadowBlur = 8;
    ctx.shadowColor = "rgba(255,255,255,0.15)"; // subtle glow

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
}

}

function init(count = 250) {
    for (let i = 0; i < count; i++) {
        sparkles.push(new Sparkle());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    sparkles.forEach(s => {
        s.update();
        s.draw();
    });
    requestAnimationFrame(animate);
}

init();
animate();


