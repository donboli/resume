var bio = {
  name: "Wolfgang Becker",
  role: "Web Developer",
  contacts: {
    mobile: "+52 1 222 765 4633",
    email: "juan.becker2@gmail.com",
    github: "donboli",
    linkedin: "https://mx.linkedin.com/in/juan-wolfgang-a-becker-1b41991b",
    twitter: null,
    location: "Puebla, Mexico"
  },
  welcomeMessage: "Hi, I'm a web developer with 2 years of experience using the Ruby on Rails framework. I've recently become more interested in front-end development frameworks, such as React. Overall, I'm always keen on learning new technologies.",
  skills: [
    "HTML", "CSS", "Javascript", "Ruby on Rails", "React", "Bootstrap", "Java", "SQL", "Git"
  ],
  bio_pic: "images/me.jpg",

  display: function() {
    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
    var formattedBioPic = HTMLbioPic.replace('%data%', bio.bio_pic);

    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);

    var formattedTwitter = "";
    if (bio.contacts.twitter) {
      formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    }

    var formattedGithub = HTMLgithub.replace("#", "https://github.com/" + bio.contacts.github).replace('%data%', bio.contacts.github);
    var formattedLinkedin = HTMLlinkedin.replace("#", bio.contacts.linkedin).replace('%data%', bio.name);
    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

    $("#header").append(formattedName + formattedRole + formattedBioPic + formattedWelcomeMessage);

    $("#topContacts").append(formattedMobile + formattedEmail + formattedTwitter + formattedGithub + formattedLinkedin + formattedLocation);

    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
      }
    }
  }
};

var education = {
  schools: [
    {
      name: "Universidad de Belgrano",
      location: "Buenos Aires",
      degree: "Diploma",
      majors: ["Computer Engineering"],
      dates: "March 2008 - December 2015",
      url: "http://www.ub.edu.ar/"
    }
  ],
  online_classes: [
    {
      title: "HTML5 Part 1: HTML5 Coding Essentials and Best Practices",
      school: "edX",
      dates: "October 2015 - December 2015",
      url: "https://www.edx.org/course/html5-part-1-html5-coding-essentials-w3cx-html5-1x-1",
      certificate: "https://courses.edx.org/certificates/4f142509922c4cc4a9d3a5ee1f331f50"
    },
    {
      title: "HTML5 Part 2: Advanced Techniques for Designing HTML5 Apps",
      school: "edX",
      dates: "December 2015 - January 2016",
      url: "https://www.edx.org/course/html5-part-2-advanced-techniques-w3cx-html5-2x-1",
      certificate: "https://courses.edx.org/certificates/9eafdeb1e4e740fa9c325a5359032c10"
    }
  ],

  display: function() {
    education.schools.forEach(function(school) {
      $("#education").append(HTMLschoolStart);

      var formattedName = HTMLschoolName.replace("#", school.url).replace("%data%", school.name);
      var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
      var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
      var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
      var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors.join(", "));

      $(".education-entry:last").append(formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor);
    });

    $("#education").append(HTMLonlineClasses);

    education.online_classes.forEach(function(online_class) {
      $("#education").append(HTMLschoolStart);

      var formattedTitle = HTMLonlineTitle.replace("#", online_class.url).replace("%data%", online_class.title);
      var formattedSchool = HTMLonlineSchool.replace("%data%", online_class.school);
      var formattedDates = HTMLonlineDates.replace("%data%", online_class.dates);

      if (online_class.certificate) {
        var formattedURL = HTMLonlineURL.replace("#", online_class.certificate).replace("%data%", "Certificate");
      }

      $(".education-entry:last").append(formattedTitle + formattedSchool + formattedDates + formattedURL);
    });
  }
};

var work = {
  jobs: [
    {
      employer: "EnvíaYa!",
      title: "Ruby on Rails Developer",
      location: "Remote (from Puebla)",
      dates: "May 2015 - May 2016",
      description: "Development, maintenance and rework of the overall company's web application. Customization and further development of APIs towards logistics carriers (e. g. DHL, UPS, FedEx and Redpack). Integration of payment gateways: PayPal, Stripe, Conekta and PayU.",
      url: "https://enviaya.com.mx"
    },
    {
      employer: "Redmint",
      title: "Ruby on Rails Developer",
      location: "Buenos Aires",
      dates: "June 2014 - December 2014",
      description: "Maintenance and development of web applications built with Ruby on Rails.",
      url: "http://redmintlabs.com/"
    }
  ],

  display: function() {
    work.jobs.forEach(function(job) {
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace("#", job.url).replace("%data%", job.employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
      var formattedDates = HTMLworkDates.replace("%data%", job.dates);
      var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
      var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

      $(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription);
    });

    // $("#main").append(internationalizeButton);

    var inName = function(name) {
      var names = name.trim().split(" ");
      return names[0][0].toUpperCase() + names[0].slice(1).toLowerCase() + " " + names[1].toUpperCase();
    };
  }
};


var projects = {
  projects: [
    {
      title: "Portfolio",
      dates: "October 2016",
      description: "A fully responsive portfolio page",
      images: ["images/portfolio.png"],
      repository: "https://github.com/donboli/portfolio"
    }
  ],

  display: function() {
    projects.projects.forEach(function(project) {
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("#", project.repository).replace("%data%", project.title);
      var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);

      var formattedImage = "";
      project.images.forEach(function(image) {
        formattedImage += HTMLprojectImage.replace("%data%", image);
      });

      $(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription + formattedImage);
    });
  }
};

bio.display();
projects.display();
work.display();
education.display();

$("#mapDiv").append(googleMap);