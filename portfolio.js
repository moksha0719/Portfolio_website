const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

    //send email
const form = document.getElementById('sendme');
const responseMsg = document.getElementById('responseMsg');

    form.addEventListener('submit', function(e) {
      e.preventDefault();


      responseMsg.textContent = 'Thank you for your message!';
      form.reset();
    });


