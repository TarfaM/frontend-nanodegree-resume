/****************************************************************************************************************
Developer Name:Tarfa M.AlMowinea
Email:tarfa.mansour@gmail.com
Date:2017-Aug
Project Name:Online Resume Project
****************************************************************************************************************/

/**********************************************Object creation*************************************************/
var work = {
    "jobs": [{
            "employer": "STC",
            "title": "Senior Deevloper",
            "location": "Riyadh",
            "dates": "2014 - Now",
            "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum "
        },
        {
            "employer": "TCS",
            "title": "IT Engineer",
            "location": "Riyadh",
            "dates": "2012- 2014",
            "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum  "
        }
    ] ,

      display: function()
      {
        var formattedEmployer;
        var formattedTitle;
        var formattedLocation;
        var formattedDates;
        var formattedDescription;
        var formattedJobDetails;
        for (var works in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[works].employer);
            formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[works].title);
            formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[works].location);
            formattedDates = HTMLworkDates.replace("%data%", work.jobs[works].dates);
            formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[works].description);
            formattedJobDetails = formattedEmployer + formattedTitle + formattedLocation + formattedDates +
            formattedDescription;
            $(".work-entry:last").append(formattedJobDetails);
        }

      }
};

var project = {
    "projects": [{
        "title": " Expert Sustem-AI",
        "dates": "2012-2012 ",
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum ",
        "projectURL": "http://via.placeholder.com",
        "images": ["http://via.placeholder.com/150x150", "http://via.placeholder.com/150x150", "http://via.placeholder.com/150x150"]
    }, {
        "title": " Tissue Bank System",
        "dates": "2013 ",
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum ",
        "projectURL": "http://via.placeholder.com",
        "images": ["http://via.placeholder.com/150x150", "http://via.placeholder.com/150x150", "http://via.placeholder.com/150x150"]
    }],
    display: function() {
        var formattedProjectDates;
        var formattedProjectTitle;
        var formattedProjectImage;
        var formattedProjectDescription;
        for (var proj in project.projects)
            {
            $("#projects").append(HTMLprojectStart);
            formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.projects[proj].title);
            $(".project-entry:last").append(formattedProjectTitle);
            formattedProjectDates = HTMLprojectDates.replace("%data%", project.projects[proj].dates);
            $(".project-entry:last").append(formattedProjectDates);
            formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.projects[proj].description);
            $(".project-entry:last").append(formattedProjectDescription);
            //print more than one img
            if (project.projects[proj].images.length > 0)
                {
                for (var image in project.projects[proj].images)
                    {
                    formattedProjectImage = HTMLprojectImage.
                    replace("%data%", project.projects[proj].images[image]);
                    $(".project-entry:last").append(formattedProjectImage);
                    }
                }
              }// End project loop
    }//End display function
};

var bio = {
    "name": "Tarfa Mansour",
    "role": "Siebel Developer",
    "skills": ["Reading", "Drawing", "writing", "cooking"],
    "contacts": {
        "mobileNumber": "029334232",
        "emailAddress": "tarfa.mansour@gmail.com",
        "githubUsername": "TarfaM",
        "twitter": "@Tarfa",
        "location": "Riyadh"
    },
    "welcomeMessage": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "biopic": "images/fry.jpg",
    display: function() {
      var formattedName = HTMLheaderName.replace("%data%", bio.name);
      var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
      var biopicInfo;
      var welcomeMessageInfo;
      var mobileNumberInfo;
      var emailAddressInfo;
      var githubUserInfo;
      var twitterInfo;
      var locationInfo;
      $("#header").prepend(formattedName + formattedRole);
      biopicInfo = HTMLbioPic.replace("%data%", bio.biopic);
      $("#header").append(biopicInfo);
      welcomeMessageInfo = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
      $("#header").append(welcomeMessageInfo);
      mobileNumberInfo = HTMLmobile.replace("%data%", bio.contacts.mobileNumber);
      $("#topContacts").append(mobileNumberInfo);
      $("#footerContacts").append(mobileNumberInfo);
      emailAddressInfo = HTMLemail.replace("%data%", bio.contacts.emailAddress);
      $("#topContacts").append(emailAddressInfo);
      $("#footerContacts").append(emailAddressInfo);
       githubUserInfo = HTMLgithub.replace("%data%", bio.contacts.githubUsername);
      $("#topContacts").append(githubUserInfo);
      $("#footerContacts").append(githubUserInfo);
      twitterInfo = HTMLtwitter.replace("%data%", bio.contacts.twitter);
      $("#topContacts").append(twitterInfo);
      $("#footerContacts").append(twitterInfo);
      locationInfo = HTMLlocation.replace("%data%", bio.contacts.location);
      $("#topContacts").append(locationInfo);
      $("#footerContacts").append(locationInfo);
      $("#header").append(HTMLskillsStart);
      for (var n = 0; bio.skills.length > n; n++)
          {
          var formattedSkill;
          formattedSkill = HTMLskills.replace("%data%", bio.skills[n]);
          $("#skills").append(formattedSkill);
        }// End bio loop
    }//End display function
};

var education = {
    "schools": [{
            "name": "Arab Open University",
            "location": "Riyadh",
            "degree": "BSc",
            "majors": "Information Technology and Computing - Information Technology and Computing (ITC) Pathway",
            "dates": "2008-2012",
            "url": "www.arabou.edu.com"
        },
        {
            "name": "Prince Sultan University",
            "location": "Riyadh",
            "degree": "Track: IT Developer",
            "majors": "Microsoft Certification & Training program",
            "dates": "2013-2014",
            "url": "http://info.psu.edu.sa/"
        }
    ],
    "onlineCourses": [{
            "title": "Fornt-end development",
            "school": "Udicity",
            "dates": "2017",
            "url": "www.udicity.com"
        },
        {
            "title": "IOS-development",
            "school": "Udemy",
            "dates": "2017",
            "url": "www.Udemy.com"
        }
    ] ,
  display: function()
   {
     var formattedSchoolName;
     var formattedSchoolDegree;
     var formattedSchoolDates;
     var formattedSchoolLocation;
     var formattedSchoolMajor;
     var formattedSchoolurl;
     $("#education").append(HTMLschoolStart);
   for (var edu in education.schools)
      {
         formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[edu].name);
         formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
         $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
         formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
         $(".education-entry:last").append(formattedSchoolDates);
         formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
         $(".education-entry:last").append(formattedSchoolLocation);
         formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].majors);
         $(".education-entry:last").append(formattedSchoolMajor);
         formattedSchoolurl = HTMLonlineURL.replace("%data%", education.schools[edu].url);
         $(".education-entry:last").append(formattedSchoolurl);
     }// End education loop
     //End display
  }
};
/**********************************************End Object creation*************************************************/
/**********************************************Function creation*************************************************/

var DisplayOnlineClasses = function() {
    var formattedOnlineTitle;
    var formattedOnlineSchool;
    var formattedOnlineDates;
    var formattedOnlineURL;
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    for (var eduOnline in education.onlineCourses)
      {
        formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[eduOnline].title);
        formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[eduOnline].school);
        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
        formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[eduOnline].dates);
        $(".education-entry:last").append(formattedOnlineDates);
        formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[eduOnline].url);
        $(".education-entry:last").append(formattedOnlineURL);
      }
};
/**********************************************End Function creation*************************************************/
bio.display();
education.display();
work.display();
project.display();
DisplayOnlineClasses();
$("#mapDiv").append(googleMap);
