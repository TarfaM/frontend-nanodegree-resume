/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$("#main").append(["Tarfa"]);

var thought = "GoodDay";
var newThought =thought.replace("Day","Morning");
console.log(thought);
console.log(newThought);
var name="Tarfa Mansour"
//
// function inName(name){
// name = name.trim().split(" ");
// console.log(name)
// name[1] = name[1].toUpperCase();
// name[0] = name[0].slice(0,1).toUpperCase();
// name[0].slice(1).toLowerCase() ;
// return name[0] +" "+name[1];
// $('#main').append();
//  }
// name =inName(name);
// $("#main").append(skils);
//create one object
// var bio = {
// "name" : "TarfaMansour",
// "age" :  23 ,
// "skills" : skils
// };
// var work1 = {
//      employer: "",
//      title: "System Engineer",
//      location: "USA" ,
//      dates: "2013" ,
//      description: "doing "
// };
// var education1 = {
//      currentPostion: "",
//      title: "System Engineer",
//      employer: "STC" ,
//      yearsWorked: "2013" ,
//      city: "doing "
// };
// var education23 ={};
// education23["name"] ="Toto";
// var work ={};
// work.position ="develoepr";
// work.employer ="Udicity";
// work.years = 90;
// bio.city="Riyadh";
// bio["city"]="Riyadh";
// work["positoin"] ="IT support";
//JSONs
var educ = {
"school" :[
{
  "name":"TarfaUnvirtst",
  "city":"USA",
  "degree":"BA",
  "major":["IT" , "ARA"],
}
,{
  "name":"NouraUniversity",
  "city":"USA",
  "degree":"BA",
  "major":["IT" , "ARA"],
}
]
};
//For the project
var work = {
"jobs" : [
    {
    "employer" : "STC"  ,
    "title" : "Senior Deevloper"  ,
    "location" : "Riyadh"  ,
    "dates": "2014 - Now"  ,
    "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum "
    } ,
    {
    "employer" : "TCS"  ,
    "title" : "IT Engineer"  ,
    "location" : "Riyadh"  ,
    "dates": "2012- 2014"  ,
    "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum  "
    }
        ]

          };
      var project = {
"projects": [{
          "title" : " Expert Sustem-AI"  ,
          "dates": "2012-2012 "  ,
          "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum " ,
          "projectURL" : "http://via.placeholder.com"  ,
          "images": [ "http://via.placeholder.com/150x150" ,"http://via.placeholder.com/150x150","http://via.placeholder.com/150x150"]
          },{
            "title" : " Tissue Bank System"  ,
            "dates": "2013 "  ,
            "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum " ,
            "projectURL" : "http://via.placeholder.com"  ,
            "images":[ "http://via.placeholder.com/150x150" ,"http://via.placeholder.com/150x150","http://via.placeholder.com/150x150"]
}] ,

display: function () {
  console.log("Hi this is display function");
  var formattedProjectDates;
  var formattedProjectTitle;
  var formattedProjectImage;

  var formattedProjectDates;
  var formattedProjectDescription;
  var formattedProjectDetails;
  for (key in project.projects){
      console.log("--"+project.projects[key]);//working but brelow not worki
          $("#projects").append(HTMLprojectStart);
          formattedProjectTitle=HTMLprojectTitle.replace("%data%" ,project.projects[key].title);
$(".project-entry:last").append(formattedProjectTitle);

          formattedProjectDates =HTMLprojectDates.replace("%data%" , project.projects[key].dates);
 $(".project-entry:last").append(formattedProjectDates);

          formattedProjectDescription =HTMLprojectDescription.replace("%data%" ,project.projects[key].description);
$(".project-entry:last").append(formattedProjectDescription);
        //formattedProjectDetails =formattedProjectTitle+formattedProjectDates  +formattedProjectDescription+formattedProjectImage;
//print more than one img
if(project.projects[key].images.length>0){
  for(image in project.projects[key].images)
        {
  formattedProjectImage =HTMLprojectImage.
  replace("%data%" ,project.projects[key].images[image]);
 $(".project-entry:last").append(formattedProjectImage);
                                              }
        }
//$(".project-entry:last").append(formattedProjectDetails);

        }
}};
/*
var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';
*/

var bio = {
          "name" : "Tarfa Mansour"  ,
          "role": "Siebel Developer"  ,
          "skills":[ "Reading" ,"Drawing" , "writting","cooking"] ,
          "contacts" : {
            "mobileNumber": "029334232",
            "emailAddress" : "tarfa.mansour@gmial.com",
            "githubUsername" : "TarfaM" ,
            "twitter":"@Tarfa",
            "location":"Riyadh"
          } ,
          "welcomeMessage": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit." ,
          "biopic" : "images/fry.jpg"  ,

      };
          var education = {
            "schools": [{
              "name" :"AOU",
              "location": "Riyadh",
               "degree":"BSc" ,
               "majors":"Information Technology and Computing - Information Technology and Computing (ITC) Pathway" ,
               "dates":"2008-2012" ,
               "url" :"www.arabou.edu.com"},
               {
                 "name" :"PSU-E4E",
                 "location": "Riyadh",
                  "degree":"Track: IT Developer" ,
                  "majors":"Microsoft Certification & Training program" ,
                  "dates":"2013-2014" ,
                  "url" :"http://info.psu.edu.sa/"}
             ],
               "onlineCourses": [
                 {
                  "title":"Fornt-end development",
                  "school":"Udicity",
                  "dates":"2017" ,
                  "url" : "www.udicity.com"
                } ,
                {
                 "title":"IOS-development",
                 "school":"Udemy",
                 "dates":"2017" ,
                 "url" : "www.Udemy.com"
                }
              ]
          };





/*
      if (bio.skills.length>0)
      {
// alert("I am an alert box!");
$("#header").append(HTMLskillsStart);
var formattedSkill =HTMLskills.replace("%data%" ,bio.skills[0]);
$("#header").append(formattedSkill);
 formattedSkill =HTMLskills.replace("%data%" ,bio.skills[1]);
 $("#header").append(formattedSkill);
 formattedSkill =HTMLskills.replace("%data%" ,bio.skills[2]);
 $("#header").append(formattedSkill);
 formattedSkill =HTMLskills.replace("%data%" ,bio.skills[3]);
 $("#header").append(formattedSkill);
}
*/
  //use for loop
//Contact - info


// prepend





// var skils =["skil 1" , "skil 31" , "skil 19" , "skil 14"];


// $("#header").append(formattedName);
var formattedName=HTMLheaderName.replace("%data%" ,bio.name);

var formattedRole = HTMLheaderRole.replace("%data%" ,bio.role);
//$("#header").append(formattedRole);
$("#header").prepend(formattedName+formattedRole);
var Contactinfo =HTMLbioPic.replace("%data%" ,bio.biopic);
// $("#topContacts").append(HTMLcontactGeneric);
$("#header").append(Contactinfo);
var Contactinfo =HTMLwelcomeMsg.replace("%data%" ,bio.welcomeMessage);
$("#header").append(Contactinfo);
var Contactinfo =HTMLmobile.replace("%data%" ,bio.contacts.mobileNumber);
$("#topContacts").append(Contactinfo);
$("#footerContacts").append(Contactinfo);
var Contactinfo =HTMLemail.replace("%data%" ,bio.contacts.emailAddress);
$("#topContacts").append(Contactinfo);
$("#footerContacts").append(Contactinfo);
var Contactinfo =HTMLgithub.replace("%data%" ,bio.contacts.githubUsername);
$("#topContacts").append(Contactinfo);
$("#footerContacts").append(Contactinfo);
var Contactinfo =HTMLtwitter.replace("%data%" ,bio.contacts.twitter);
$("#topContacts").append(Contactinfo);
$("#footerContacts").append(Contactinfo);
var Contactinfo =HTMLlocation.replace("%data%" ,bio.contacts.location);

$("#topContacts").append(Contactinfo);
$("#footerContacts").append(Contactinfo);
// $("#header").append(Contactinfo);
var formattedSkill;
$("#header").append(HTMLskillsStart);
for (var n = 0 ; bio.skills.length>n;n++){
formattedSkill =HTMLskills.replace("%data%" ,bio.skills[n]);
$("#skills").append(formattedSkill);}

//console.log(work.Job[0].employer);



var displayWork = function (){
  var formattedEmployer;
  var formattedTitle;
  var formattedLocation;
  var formattedDates;
  var formattedDescription;
  var formattedJobDetails;
  for (key in work.jobs){
          console.log("--"+work.jobs[key].employer);//working but brelow not working
          $("#workExperience").append(HTMLworkStart);
          formattedEmployer =HTMLworkEmployer.replace("%data%" ,work.jobs[key].employer);
          formattedTitle =HTMLworkTitle.replace("%data%" ,work.jobs[key].title);
          formattedLocation =HTMLworkLocation.replace("%data%" ,work.jobs[key].location);
          formattedDates =HTMLworkDates.replace("%data%" ,work.jobs[key].dates);
          formattedDescription =HTMLworkDescription.replace("%data%" ,work.jobs[key].description);

          formattedJobDetails =formattedEmployer + formattedTitle +formattedLocation+ formattedDates
           +formattedDescription;

          $(".work-entry:last").append(formattedJobDetails);
  }

}

var displayEdu = function (){
  var formattedSchoolStart;
  var formattedSchoolName;
  var formattedSchoolDegree;
  var formattedSchoolDates;
  var formattedSchoolLocation;
  var formattedSchoolMajor;
  var formattedSchoolDetails
 var formattedSchoolurl;

   $("#education").append(HTMLschoolStart);

  for (key in education.schools){
          //console.log("--"+education.schools[key].name);//working but brelow not working

          formattedSchoolName =HTMLschoolName.replace("%data%" ,education.schools[key].name);
  $(".education-entry:last").append(formattedSchoolName);
  formattedSchoolDegree =HTMLschoolDegree.replace("%data%" ,education.schools[key].degree);
$(".education-entry:last").append(formattedSchoolDegree);
        formattedSchoolDates =HTMLschoolDates.replace("%data%" ,education.schools[key].dates);
$(".education-entry:last").append(formattedSchoolDates);
          formattedSchoolLocation =HTMLschoolLocation.replace("%data%" ,education.schools[key].location);
$(".education-entry:last").append(formattedSchoolLocation);
          formattedSchoolMajor =HTMLschoolMajor.replace("%data%" ,education.schools[key].majors);
$(".education-entry:last").append(formattedSchoolMajor);
formattedSchoolurl =HTMLonlineURL.replace("%data%" ,education.schools[key].url);
$(".education-entry:last").append(formattedSchoolurl);
  }


}

var displayEducOnline = function(){

  //Online courses
  var formattedOnlineTitle;
  var formattedOnlineSchool;
  var formattedOnlineDates;
  var formattedOnlineURL;


  for (key in education.onlineCourses){
          //console.log("--"+education.schools[key].name);//working but brelow not working

          formattedOnlineTitle =HTMLonlineTitle.replace("%data%" ,education.onlineCourses[key].title);
//  $(".education-entry:last").append(formattedOnlineTitle);
  formattedOnlineSchool =HTMLonlineSchool.replace("%data%" ,education.onlineCourses[key].school);
  $(".education-entry:last").append(formattedOnlineTitle+formattedOnlineSchool);
        formattedOnlineDates =HTMLonlineDates.replace("%data%" ,education.onlineCourses[key].dates);
  $(".education-entry:last").append(formattedOnlineDates);
          formattedOnlineURL =HTMLonlineURL.replace("%data%" ,education.onlineCourses[key].url);
  $(".education-entry:last").append(formattedOnlineURL);

        }

}
displayWork();
project.display();
displayEdu();
displayEducOnline();
$("#education").append(HTMLonlineClasses);
// $("#education").prepend(HTMLonlineClasses);
// createMapMarker(placeData);
// $("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);


 //end function
/*

"employer" : "TCS"  ,
"title" : "IT Engineer"  ,
"location" : "KSA"  ,
"dates": "2012"  ,
"description": "Develop the system "

var HTMLworkStart ;
var HTMLworkEmployer ;
var HTMLworkTitle  ;
var HTMLworkDates   ;
var HTMLworkLocation  ;
var HTMLworkDescription  ;

*/
// var cameron ={};
// cameron.job ="course dev";
//
// var makeCouse = function() {
// console.log("Made a course");
// }
//
// var course = 0;
// while(cameron.job ==="course dev")
// {
// makeCouse();
// course++;
//   if (course===10){cameron.job ="learning speclilist";}
// }
//
// console.log(cameron.job);
//console.log(work.Job[0].employer);
//console.log(work.Job[0].employer);
