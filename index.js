document.querySelectorAll(".nav-link").forEach(function (navLink) {
  navLink.addEventListener("click", function () {
    document.querySelector(".navbar-collapse").classList.remove("show");
    document.getElementById("checkbox").checked = false;
  });
});

const profile = document.getElementById("myProfile");
const headEle1 = document.querySelector(".about-head");
const textEle1 = document.querySelector(".about-text");
const skillsHead = document.querySelector(".skills-head");
const skillsList = document.querySelector(".skills");
const options = {
  rootMargin: "-100px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      profile.classList.add("show-profile");
      headEle1.classList.add("show1");
      textEle1.classList.add("show1");
      skillsHead.classList.add("show1");
      skillsList.classList.add("show1");
    }
  });
}, options);

observer.observe(profile);
observer.observe(headEle1);
observer.observe(skillsHead);
observer.observe(skillsList);

let formEl = document.querySelector("form");

function sendEmail() {
  let userName = document.getElementById("name").value;
  let userMail = document.getElementById("email").value;
  let userMessage = document.getElementById("message").value;
  const bodyMessage = `Full Name: ${userName} <br> UserMail: ${userMail} <br> Message: ${userMessage}`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "ramkumar.dev9869@gmail.com",
    Password: "CE05D91F07E49FC77690690A1821C9FF8D48",
    To: "ramkumar.dev9869@gmail.com",
    From: `${userMail}`,
    Subject: "This is the subject",
    Body: bodyMessage,
  }).then((message) =>
    swal({
      title: "Good job!",
      text: "Email Sent Successfully!",
      icon: "success",
      button: "Ok",
    })
  );
}

function clearForn() {
  const inputs = document.getElementsByClassName("form-control");
  for (let input of inputs) {
    console.log((input.value = ""));
  }
}

formEl.addEventListener("submit", function (event) {
  event.preventDefault();
  sendEmail();
  clearForn();
});
