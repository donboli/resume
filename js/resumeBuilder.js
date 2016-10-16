var bio = {
  name: "Wolfgang Becker",
  role: "Web Developer",
  contacts: {
    mobile: "+52 1 222 765 4633",
    email: "juan.becker2@gmail.com",
    github: "donboli",
    twitter: null,
    location: "Puebla, Mexico"
  },
  welcomeMessage: "Hi, I'm a web developer with 2 years of experience using the Ruby on Rails framework. I've recently become more interested in front-end development frameworks, such as React. Overall, I'm always keen on learning new technologies.",
  skills: [
    "HTML", "CSS", "Javascript"
  ],
  bio_pic: "images/me.jpg",

  display: function() {
    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
    var formattedBioPic = HTMLbioPic.replace('%data%', bio.bio_pic);

    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);

    if (bio.contacts.twitter) {
      var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    }

    var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);

    if (bio.contacts.blog) {
      var formattedBlog = HTMLblog.replace('%data%', bio.contacts.blog);
    }

    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);

    var formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

    $("#header").append(formattedName);
    $("#header").append(formattedRole);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMessage);

    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedBlog);
    $("#topContacts").append(formattedLocation);

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
      url: "https://courses.edx.org/certificates/4f142509922c4cc4a9d3a5ee1f331f50"
    },
    {
      title: "HTML5 Part 2: Advanced Techniques for Designing HTML5 Apps",
      school: "edX",
      dates: "December 2015 - January 2016",
      url: "https://courses.edx.org/certificates/9eafdeb1e4e740fa9c325a5359032c10"
    }
  ],

  display: function() {
    education.schools.forEach(function(school) {
      $("#education").append(HTMLschoolStart);

      var formattedName = HTMLschoolName.replace("%data%", school.name);
      var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
      var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
      var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
      var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors.join(", "));

      $(".education-entry:last").append(formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor);
    });

    $("#education").append(HTMLonlineClasses);

    for (var i = 0; i < education.online_classes.length; i++) {
      $("#education").append(HTMLschoolStart);

      var formattedTitle = HTMLonlineTitle.replace("%data%", education.online_classes[i].title);
      var formattedSchool = HTMLonlineSchool.replace("%data%", education.online_classes[i].school);
      var formattedDates = HTMLonlineDates.replace("%data%", education.online_classes[i].dates);
      var formattedURL = HTMLonlineURL.replace("%data%", education.online_classes[i].url);

      $(".education-entry:last").append(formattedTitle + formattedSchool + formattedDates + formattedURL);
    }
  }
};

var work = {
  jobs: [
    {
      employer: "lalala",
      title: "Ruby Developer",
      location: "Puebla",
      dates: "January 2014 - Future",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, harum."
    },
    {
      employer: "lololo",
      title: "Ruby on Rails Developer",
      location: "Buenos Aires",
      dates: "2013 - December 12, 2014",
      description: "Laborum praesentium facilis nobis consectetur pariatur molestiae, officiis."
    }
  ],

  display: function() {
    for (job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

      $(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription);
    }

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
      dates: "5 October 2016",
      description: "A fully responsive portfolio page",
      image: "images/portfolio.png"
    },
    {
      title: "aassddd",
      dates: "December 2015 - March 2016",
      description: "Lorem ipsum dolor sit amet.",
      image: null
    }
  ],

  display: function() {
    for (var i = 0; i < projects.projects.length; i++) {
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

      if (projects.projects[i].image) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].image);
      } else {
        var formattedImage = "";
      }

      $(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription + formattedImage);
    }
  }
};

bio.display();
projects.display();
work.display();
education.display();

$("#mapDiv").append(googleMap);