window.bio = {
  name: "Wolfgang Becker",
  role: "Web Developer",
  contacts: {
    mobile: "+52 1 222 765 4633",
    email: "juan.becker2@gmail.com",
    github: "donboli",
    linkedin: "https://mx.linkedin.com/in/juan-wolfgang-a-becker-1b41991b",
    twitter: null,
    skype: "wolfgangbecker2",
    location: "Puebla, Mexico"
  },
  welcomeMessage: "Hi, I'm a web developer with 2 years of experience using the Ruby on Rails framework. I've recently become more interested in front-end development frameworks, such as React. Overall, I'm always keen on learning new technologies.",
  skills: [
    "HTML", "CSS", "Javascript", "Ruby on Rails", "React", "Bootstrap", "Java", "SQL", "Git"
  ],
  biopic: require("../images/me.jpg"),

  display: function() {
    var template = require('../templates/bio.hbs');
    var bioHTML = template(this);

    $('#header').prepend(bioHTML);

    bio.displayFooter();
  },

  displayFooter: function() {
    var template = require('../templates/footer.hbs');
    var footerHTML = template(this);

    $("#lets-connect").append(footerHTML);
  }
};

window.education = {
  schools: [{
    name: "Universidad de Belgrano",
    location: "Buenos Aires",
    degree: "Diploma",
    major: "Computer Engineering",
    dates: "March 2008 - December 2015",
    url: "http://www.ub.edu.ar/"
  }],
  onlineCourses: [{
    title: "HTML5 Part 1: HTML5 Coding Essentials and Best Practices",
    school: "edX",
    dates: "October 2015 - December 2015",
    url: "https://www.edx.org/course/html5-part-1-html5-coding-essentials-w3cx-html5-1x-1",
    certificate: "https://courses.edx.org/certificates/4f142509922c4cc4a9d3a5ee1f331f50"
  }, {
    title: "HTML5 Part 2: Advanced Techniques for Designing HTML5 Apps",
    school: "edX",
    dates: "December 2015 - January 2016",
    url: "https://www.edx.org/course/html5-part-2-advanced-techniques-w3cx-html5-2x-1",
    certificate: "https://courses.edx.org/certificates/9eafdeb1e4e740fa9c325a5359032c10"
  }],

  display: function() {
    var template = require('../templates/education.hbs');
    var educationHTML = template(this);

    $("#education").append(educationHTML);
  }
};

window.work = {
  jobs: [{
    employer: "EnvíaYa!",
    title: "Ruby on Rails Developer",
    location: "Remote (from Puebla)",
    dates: "May 2015 - May 2016",
    description: "Development, maintenance and rework of the overall company's web application. Customization and further development of APIs towards logistics carriers (e. g. DHL, UPS, FedEx and Redpack). Integration of payment gateways: PayPal, Stripe, Conekta and PayU.",
    url: "https://enviaya.com.mx"
  }, {
    employer: "Redmint",
    title: "Ruby on Rails Developer",
    location: "Buenos Aires",
    dates: "June 2014 - December 2014",
    description: "Maintenance and development of web applications built with Ruby on Rails.",
    url: "http://redmintlabs.com/"
  }],

  display: function() {
    var template = require('../templates/work.hbs');
    var workHTML = template(this);

    $("#workExperience").append(workHTML);
  }
};

window.projects = {
  projects: [{
    title: "Portfolio",
    dates: "October 2016",
    description: "A fully responsive portfolio page",
    images: [require("../images/portfolio.png")],
    repository: "https://github.com/donboli/portfolio"
  }],

  display: function() {
    var template = require('../templates/projects.hbs');
    var projectsHTML = template(this);

    $("#projects").append(projectsHTML);
  }
};

bio.display();
projects.display();
work.display();
education.display();

// Avoid flashes of unstyled content during page load
$(window).load(function() {
  $("body").css("visibility", "visible");
});