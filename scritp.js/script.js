document.addEventListener("DOMContentLoaded", function () {
  new Typed(".text", {
    strings: ["Frontend Developer", "Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
  });
});

function downloadResume() {
    const link = document.createElement('a');
    link.href = 'SAHANA-N_Resume.pdf'; // Path to your resume
    link.download = 'SAHANA-N_Resume.pdf'; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}