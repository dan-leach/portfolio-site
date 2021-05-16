var projects = [
    {
      name: "Feedback Tool",
      shortDesc: "A web app that allows session facilitators to gather anonymous feedback on their teaching from attendees.",
      longDesc: "I created the Feedback Tool to develop my experience with the Vue JS framework which allows the tool to function as a single page application more easily. It also provided a useful function which I felt was needed for gathering teaching session feedback. Gathering feedback is required for evidencing teaching in medical portfolios but can be burdonsome to collect. By making feedback easier to request and provide, and reliably anonymous, I hope to increase how easily and frequently useful feedback on teaching sessions is given.",
      path: "feedback_tool",
      viewable: true,
      techs: [
        {
            name: "Vue JS",
            icon: "fab fa-vuejs",
            link: "http://vuejs.org"
        },
        {
            name: "Bootstrap 4",
            icon: "fab fa-bootstrap",
            link: "http://getbootstrap.com"
        },
        {
            name: "PHP",
            icon: "fab fa-php",
            link: "http://php.net"
        },
        {
            name: "MySQL",
            icon: "fas fa-database",
            link: "http://mysql.com"
        },
        {
            name: "FPDF",
            icon: "fas fa-file-pdf",
            link: "http://fpdf.org/"
        },
        {
            name: "PHP Mailer",
            icon: "fas fa-envelope",
            link: "http://phpmailer.github.io"
        },
      ],
      links: [
        {
            name: "Visit Feedback Tool",
            link: "http://feedback.danleach.uk",
            icon: "fas fa-globe"
        },
        {
            name: "View on Github",
            link: "http:/github.com/dan-leach/feedback-tool",
            icon: "fab fa-github-square"
        },
      ],
      screenshots: [
        {
          title: "Landing page",
          desc: "From this landing page, users can either create a new session or provide feedback for an existing session."
        },
        {
          title: "Create new session form",
          desc: "Using this form a session facilitator can enter the detail required to create a new feedback form."
        },
        {
          title: "Share feedback request options",
          desc: "The session facilitator can invite attendees to provide feedback by copying the invitation text with link into an email to send out, copying just a link without the full invite text, or by displaying a QR code in their presentation."
        },
        {
          title: "Feedback form",
          desc: "Session attendees will be taken directly to this feedback form by using one of the link methods from the previous screenshot. Here they provide comments on the session and indicate an overall score using the slider."
        },
        {
          title: "Certificate of attendance",
          desc: "Unless this option was disabled by the session facilitator when creating the session, attendees can download a certificate of attendance after providing their feedback."
        },
      ]
    },
    {
      name: "DKA Calculator",
      shortDesc: "A registered medical device which generates patient-specific care pathways for children with diabetic ketoacidosis.",
      longDesc: "I created the DKA Calculator in collaboration with Dr John Barton (Consultant Paediatric Endocrinologist) and the British Society for Paediatric Endocrinology and Diabetes to address errors seen in clinical practice related to calculations of fluid rates given to children with diabetic ketoacidosis (DKA). The tool generates a PDF care pathway dynamically using javascript in the client browser to avoid the issue of transmission of patient identifiable data. Non-patient identifying data is stored in a secure database for potential future audit projects.",
      path: "dka_calculator",
      viewable: true,
      techs: [
        {
            name: "Javascript",
            icon: "fab fa-js",
            link: "http://javascript.com"
        },
        {
            name: "Bootstrap 3",
            icon: "fab fa-bootstrap",
            link: "http://getbootstrap.com"
        },
        {
            name: "PHP",
            icon: "fab fa-php",
            link: "http://php.net"
        },
        {
            name: "MySQL",
            icon: "fas fa-database",
            link: "http://mysql.com"
        },
      ],
      links: [
        {
            name: "Visit DKA Calculator",
            link: "http://dka-calculator.co.uk",
            icon: "fas fa-globe"
        },
        {
            name: "View on Github",
            link: "http:/github.com/dan-leach/dka-calculator",
            icon: "fab fa-github-square"
        },
      ],
      screenshots: [
          {
              title: "Landing page",
              desc: "The welcome message and start of the patient details for seen after accepting the disclaimer."
          },
          {
              title: "Data collection form",
              desc: "The form that gathers the patient details and required variables for generating the patient-specific care pathway. Entries are validated on entry."
          },
          {
              title: "Weight safety warning",
              desc: "Example of safety warning for patient weight entered which is greater than 2 standard deviations from the mean for the patient's age, with option to override."
          },
          {
              title: "Confirmation of weight safety override",
              desc: "Confirmation message that user is required to accept to proceed when using a weight that is greater than 2 standard deviations from the mean for the patient's age."
          },
          {
              title: "Generate protocol page",
              desc: "Page seen after submitting data collection form, confirming successful logging of non-patient identifing data, showing (optional) working of calculated variables, and a button to start generating the protocol for download."              
          },
          {
              title: "Protocol title page",
              desc: "The first page of the dynamically generated PDF document containing the care pathway for the details provided."
          },
          {
              title: "Protocol fluids page",
              desc: "Example page from the body of the protocol showing fluid calculations using the data entered by the user (weight, pH, shocked/non-shocked protocol arm)."
          },
          {
              title: "Disclaimer",
              desc: "Disclaimer seen by the user on first arriving at the site which must be accepted before use."
          }
      ]
    },
    {
      name: "Paeds Hub",
      shortDesc: "A online repository of interactive learning modules for trainee paediatricians using a learning management system.",
      path: "paeds_hub",
      viewable: false,
      techs: [
        {
            name: "Wordpress",
            icon: "fab fa-wordpress",
            link: "http://wordpress.org"
        },
        {
            name: "LearnDash",
            icon: "fas fa-graduation-cap",
            link: "http://learndash.com"
        },
        {
            name: "PHP",
            icon: "fab fa-php",
            link: "http://php.net"
        },
      ],
      links: [
        {
            name: "Visit Paeds Hub",
            link: "http://paedshub.co.uk",
            icon: "fas fa-globe"
        },
      ],
    },
    {
        name: "The Mood Monitor",
        shortDesc: "A web app built for the quality improvement team on the Children's Ward in Bath. Collects anonymous submissions of morale indicators and comments, and displays these in a admin dashboard.",
        longDesc: "I built this web app for the Improving Together team on the Children's Ward at the Royal United Hospitals NHS Foundation Trust. Retention of staff, especially nurses, was identified as a key area in need of improvement. The Mood Monitor allowed quick, anonymous reporting of morale by staff members. The Improving Together team could access an admin dashboard showing useful parameters tracked by time, and with comments where applicable, to allow rapid identification of issues affecting staff morale.",
        path: "the_mood_monitor",
        viewable: true,
        techs: [
            {
                name: "Javascript",
                icon: "fab fa-js",
                link: "http://javascript.com"
            },
            {
                name: "PHP",
                icon: "fab fa-php",
                link: "http://php.net"
            },
            {
                name: "MySQL",
                icon: "fas fa-database",
                link: "http://mysql.com"
            },
        ],
        links: [
            {
                name: "Deprecated",
                link: "",
                icon: "fas fa-unlink"
            },
            {
                name: "View on Github",
                link: "http:/github.com/dan-leach/the-mood-monitor",
                icon: "fab fa-github-square"
            },
        ],
        screenshots: [
            {
              title: "Landing Page",
              desc: "The landing page which was accessed at themoodmonitor.co.uk - QR codes pointing to this page were placed in appropriate locations around the ward."
            },
            {
              title: "Submission of morale indicator",
              desc: "Here a user has selected the 'Happy Face' morale indicator, and has an option to add a comment before submitting."
            },
            {
              title: "Confirmation of submission",
              desc: ""
            },
            {
              title: "Admin dashboard (example data) - Quick look",
              desc: "The admin dashboard required a password to access. The first section 'Quick Look' showed some overview data from recent days to allow management to respond quickly to changes in morale indicators."
            },
            {
              title: "Admin dashboard (example data) - Detailed mood data",
              desc: "More detailed data on mood indicator submissions appears further down the admin dashboard."
            },
            {
              title: "Admin dashboard (example data) - Detailed comments data and detailed engagement data",
              desc: "Listed all comments received divided by type, starting with most recent. Also showed engagement data by day over the last month, and by month over the last year."
            },
            {
              title: "Admin dashboard (example data) - Plain data output",
              desc: "Showed a plain output of the submitted data which could be downloaded as an Excel workbook for further analysis if required."
            }
        ]
    },
    {
        name: "Rota Manager",
        shortDesc: "An spreadsheet tool for managing medical rotas, this workbook automatically highlights gaps and locum shifts in advance, creates a outlook email with a weekly rota, amongst other functions for efficient rota management.",
        longDesc: "I created the Rota Manager workbook during my time managing the Paediatric rota at the Royal United Hospitals Bath NHS Foundation Trust. During the coronavirus pandemic frequent unplanned changes to the rota were required, which made keeping on top of the rota challenging. The Rota Manager automatically identifies gaps where staffing falls below minimum levels, produces a weekly rota email and syncronises data between workbooks for different grades on the rota.",
        path: "rota_manager",
        viewable: true,
        techs: [
            {
                name: "Excel",
                icon: "fas fa-file-excel",
                link: "http://office.live.com"
            },
            {
                name: "VBA",
                icon: "fas fa-file-excel",
                link: "http://docs.microsoft.com/en-gb/office/vba/api/overview/"
            },
        ],
        links: [
            {
                name: "Download Rota Manager",
                link: "/resources/Rota_Manager_v2.3.xlsm",
                icon: "fas fa-download"
            },
        ],
        screenshots: [
            {
              title: "Title Page",
              desc: "Create a new rota sheet, for example for the next rotation of doctors moving into the department, delete an old rota sheet which is no longer required, or view various help topics."
            },
            {
              title: "Main rota view",
              desc: "This main view is where the rota itself is kept, and can be edited. Weekends, bank holidays and the current date are automatically highlighted. To the left a list of gaps and locum shifts are automatically identified."
            },
            {
              title: "Rota settings - General settings",
              desc: "From this screen you can change the rota name, start and end date, and rota type."
            },
            {
              title: "Rota settings - Gap finder settings",
              desc: "From this screen you set the minimum staffing levels below which gaps will be automatically identified on the main rota view."
            },
            {
              title: "Rota settings - Bank holidays",
              desc: "From this screen you provide the dates of bank holidays which allows them to be highlighted on the rota, and for leave calculation purposes."
            },
            {
              title: "Rota - Leave tally",
              desc: "Allows you to enter the leave allowance (and any adjustments) for each slot. Time off in lieu, and days taken are automatically identified allowing automatic calculation of days of leave left to take."
            },
            {
              title: "Rota - Shift tally",
              desc: "Allows you to quickly compare the number of different shift types that each individual is working, optionally pro-rated for less-than-full-time individuals."
            },
            {
              title: "Weekly rota",
              desc: "Automatic weekly rota generated for any chosen week, with names and shift type divided into areas of work."
            },
            {
              title: "Weekly rota settings - General settings",
              desc: "Allows you to choose which week is to generate the weekly rota for, and to change which zones are used to identify shifts."
            },
            {
              title: "Weekly rota settings - Import from workbooks",
              desc: "Allows you to specify which other workbooks contain rota data to import into a weekly rota for multiple grades."
            },
            {
              title: "Weekly rota settings - Email settings",
              desc: "Allows you to specify the message template for the weekly rota."
            },
            {
              title: "Weekly rota settings - Webpage settings",
              desc: "Allows you to specify the filename which the automatically generated webpage is saved as."
            },
            {
              title: "Weekly rota email",
              desc: "An example of a weekly rota email which was automatically generated as an outlook item ready to be sent."
            },
        ]
    },
    {
        name: "SIFT Calculator",
        shortDesc: "Produces a step-by-step plan with pre-calculated milk volumes based on the SIFT trial, using a neonate's weight and certain clinical characteristics, with input validation and rounding.",
        longDesc: "An Excel spreadsheet Produces a step-by-step plan with pre-calculated milk volumes based on the SIFT trial, using a neonate's weight and certain clinical characteristics, with input validation and rounding.",
        path: "sift_calculator",
        viewable: true,
        techs: [
            {
                name: "Excel",
                icon: "fas fa-file-excel",
                link: "http://office.live.com"
            },
            {
                name: "VBA",
                icon: "fas fa-file-excel",
                link: "http://docs.microsoft.com/en-gb/office/vba/api/overview/"
            },
        ],
        links: [
            {
                name: "Download Sift Calculator",
                link: "/resources/SIFT.xlsx",
                icon: "fas fa-download"
            },
        ],
        screenshots: [
            {
              title: "Before completion",
              desc: "User is required to select from three options which then provides guidelines for initial feeds before starting on the SIFT ladder proper."
            },
            {
              title: "After completion",
              desc: "An example protocol has been generated."
            },
        ]
    },
    {
        name: "Hedgehog Handover",
        shortDesc: "This tool tracked neonates on intravenous antibiotics at Southmead Hospital NICU and produced schedules for medication administration, blood sampling and auto-generated discharge letters.",
        longDesc: "My first significant coding project. I created an access database with VBA to keep track of babies on the postnatal wards at North Bristol NHS Trust who were receiving IV antibiotics due to risk factors for infection. The database allowed users to add new patients, record blood results, and would generate a daily schedule for antibiotic administration and for blood tests to prevent these being missed.",
        path: "hedgehog_handover",
        viewable: true,
        techs: [
            {
                name: "Access",
                icon: "fas fa-database",
                link: "https://support.microsoft.com/en-gb/access?ui=en-US&rs=en-GB&ad=GB"
            },
            {
                name: "VBA",
                icon: "fas fa-database",
                link: "http://docs.microsoft.com/en-gb/office/vba/api/overview/"
            },
        ],
        links: [
            {
                name: "Deprecated",
                link: "",
                icon: "fas fa-unlink"
            },
        ],
        screenshots: [
            {
              title: "Dashboard",
              desc: "After authenticating this was the dashboard that users would see. From here they could generate PDF schedules for existing patients, add new patients, add results, discharge patients and generate discharge letters, amongst other functions."
            },
            {
              title: "Current patients",
              desc: "An example of the PDF that could be generated to show current patients on treatment with useful details for the reviewing doctor."
            },
            {
              title: "Summary of treatment",
              desc: "An example discharge letter for a baby who completed treatment."
            },
            {
              title: "Poster",
              desc: "A poster presentation about Hedgehog Handover with further details."
            },
        ]
    },
    {
        name: "Paediatric CPR Scribe",
        shortDesc: "An android app that recorded events with timings during paediatric resuscitation episodes, including prompts for reassessment and drug administration.",
        longDesc: "",
        path: "paediatric_cpr_scribe",
        viewable: false,
        techs: [
            {
                name: "MIT App Inventor 2",
                icon: "fas fa-code",
                link: "http://appinventor.mit.edu/"
            },
        ],
        links: [
            {
                name: "Deprecated",
                link: "",
                icon: "fas fa-unlink"
            },
        ],
        screenshots: [
            {
              title: "",
              desc: ""
            },
        ]
    },
]

var projectTemplate = {
    name: "",
    shortDesc: "",
    longDesc: "",
    path: "",
    viewable: true,
    techs: [
        {
            name: "",
            icon: "",
            link: ""
        },
      ],
      links: [
        {
            name: "",
            link: "",
            icon: ""
        },
      ],
      screenshots: [
        {
          title: "",
          desc: ""
        },
      ]
}

const Home = {
    data: function() {
        return {
            projects: projects
        }
    },
    template: '\
        <section id="home">\
            <div class="row header">\
                <div class="col-sm-2" style="max-width:150px">\
                    <img src="avatar.png" class="img-fluid">\
                </div>\
                <div class="col-sm-10">\
                    <h2>My digital portfolio</h2>\
                    This is where I keep a record of digital projects that I\'ve been involved in.\
                    <ul class="nav">\
                        <li class="nav-item">\
                            <a class="nav-link" href="mailto:web@danleach.uk"><i class="fas fa-envelope"></i> web@danleach.uk</a>\
                        </li>\
                        <li class="nav-item">\
                            <a class="nav-link" href="/"><i class="fas fa-globe"></i> danleach.uk</a>\
                        </li>\
                        <li class="nav-item">\
                            <a class="nav-link" href="http:/github.com/dan-leach"><i class="fab fa-github-square"></i> dan-leach</a>\
                        </li>\
                    </ul>\
                </div>\
            </div>\
            <br><br>\
            <div class="card-deck">\
                <div v-for="project in projects" class="card rotated mb-4" style="min-width:30%" v-bind:id="project.path + '+"'_card'"+'">\
                    <img class="card-img-top" v-bind:id="project.path + '+"'_card_img'"+'" v-bind:src="'+"'img/'"+' + project.path + '+"'_logo.png'"+'" v-bind:alt="project.name + '+"' logo'"+'">\
                    <div class="card-body">\
                        <h4 class="card-title">{{project.name}}</h4>\
                        <span v-for="(tech, index) in project.techs"><span v-if="index !== 0"> | </span><a v-bind:href="tech.link" v-bind:class="tech.icon"></a></span>\
                        <hr>\
                        <span v-for="(link, index) in project.links"><a v-bind:href="link.link"> <i v-bind:class="link.icon"></i>&nbsp;{{link.name}}</a><br></span>\
                        <hr>\
                        <p class="card-text">{{project.shortDesc}}</p>\
                        <button v-bind:id="'+"'btn_view_'"+' + project.path" class="btn btn-primary" @click="$router.push('+"'/projects/'"+'+project.path)" v-if="project.viewable">See more details about this project...</button>\
                        <button v-bind:id="'+"'btn_view_'"+' + project.path" class="btn btn-secondary" v-if="!project.viewable">More details coming soon...</button>\
                    </div>\
                </div>\
                <!--add as many spacer cards below to make up to multiples of 3-->\
                <div class="card mb-4" style="min-width:30%;border:none">\
                </div>\
            </div>\
        </section>\
    '
}

const ProjectViewer = {
    props: ['path'],
    computed: {
        project: function(){
            var x;
            for (x in projects) {
                if (projects[x].path == this.$props.path){
                    return projects[x]
                }
            }
            this.$router.push('/404')
        }
    },
    template: '\
        <section id="projectViewer">\
            <button type="button" class="btn btn-info" @click="$router.push(' + "'/'" + ')">Return to project gallery</button><br>\
            <br>\
            /projects/{{path}}\
            <h2>{{project.name}}</h2>\
            <span v-for="(link, index) in project.links"><a v-bind:href="link.link" v-bind:class="link.icon"></a>&nbsp;{{link.name}}<br></span><br>\
                Technologies used:<br>\
                <span v-for="(tech, index) in project.techs"><span v-if="index !== 0"> | </span><a v-bind:href="tech.link" v-bind:class="tech.icon"></a>&nbsp;{{tech.name}}</span><br>\
                <br>\
                {{project.longDesc}}<br>\
                <br><br>\
                <div class="card">\
                    <h4 class="card-header">Screenshot gallery</h4>\
                    <div id="gallery" class="carousel slide" data-ride="carousel">\
                      <div class="carousel-inner">\
                        <div class="carousel-item" :class="{ active: index==0 }" v-for="(screenshot, index) in project.screenshots">\
                            <img data-enlargeable style="cursor: zoom-in" v-bind:src="' + "'img/'" + ' + project.path + ' + "'_'" + ' + (index + 1) + ' + "'.png'" + '" v-bind:alt="screenshot.title + ' + "' - '" + ' + screenshot.desc">\
                            <div class="card-footer" id="caption">\
                                <h5>{{index + 1}}/{{project.screenshots.length}} {{screenshot.title}}</h5>\
                                <p>{{screenshot.desc}}</p>\
                            </div>\
                        </div>\
                      </div>\
                      <a class="carousel-control-prev" style="color:black" href="#gallery" data-slide="prev">\
                        <span class="fas fa-arrow-left fa-2x"></span>\
                      </a>\
                      <a class="carousel-control-next" style="color:black" href="#gallery" data-slide="next">\
                        <span class="fas fa-arrow-right fa-2x"></span>\
                      </a>\
                    </div>\
                </div>\
            </section>\
    '
}

const PageNotFound = {
    template: '\
        <section id="PageNotFound">\
            <h2>Page not found</h2>\
            (Error 404)<br>\
            <br>\
            I\'m sorry, the page you requested doesn\'t exist. Why not go back to my home page and see if you can find what you\'re looking for there...<br>\
            <br>\
            <button type="button" class="btn btn-info" @click="$router.push(' + "'/'" + ')">Go to home page</button><br>\
        </section>\
    '
}

const routes = [
  { 
      path: '/',
      component: Home
  },
  {
      path: '/projects/:path',
      component: ProjectViewer,
      props: true
  },
  {
      path: '*',
      component: PageNotFound
  }
];

const router = new VueRouter({
  routes: routes
});

const app = new Vue({
  router: router
}).$mount('#app');

rotate = $('.rotated').css({
    transform: 'rotateY(90deg)',
})
rotate = $('.header').css({
    transform: 'rotateY(90deg)',
})

function showGallery(){
    
    var loader = document.getElementById("loader");
    loader.style.display = "none";
    
    //https://tobiasahlin.com/moving-letters/
    anime.timeline({loop: false})
      .add({
        targets: '.ml5 .line',
        opacity: [0.5,1],
        scaleX: [0, 1],
        easing: "easeInOutExpo",
        duration: 700
      }).add({
        targets: '.ml5 .line',
        duration: 600,
        easing: "easeOutExpo",
        translateY: function(el, i) { return -0.625 + 0.625*2*i + "em"}
      }).add({
        targets: '.ml5 .ampersand',
        opacity: [0,1],
        scaleY: [0.5, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=600'
      }).add({
        targets: '.ml5 .letters-left',
        opacity: [0,1],
        translateX: ["0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=300'
      }).add({
        targets: '.ml5 .letters-right',
        opacity: [0,1],
        translateX: ["-0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=600'
      });
      
    setTimeout(function(){ 
        rotate = $('.rotated').css({
            transform: 'rotateY(0deg)',
            transition: 'transform 0.6s',
            transformStyle: 'preserve-3d'
        })
        rotate = $('.header').css({
            transform: 'rotateY(0deg)',
            transition: 'transform 0.6s',
            transformStyle: 'preserve-3d'
        })
    }, 1000);
}

$('img[data-enlargeable]').addClass('img-enlargeable').click(function() {
  var src = $(this).attr('src');
  var alt = $(this).attr('alt');
  var modal;

  function removeModal() {
    modal.remove();
    $('body').off('keyup.modal-close');
  }
  modal = $('<div><h5 style="color:black; text-align:center; background-color:white; position:fixed; bottom:0px">'+alt+'</h5></div>').css({
    background: 'RGBA(255,255,255) url(' + src + ') no-repeat top',
    backgroundSize: 'contain',
    width: '100%',
    height: '100%',
    position: 'fixed',
    zIndex: '10000',
    top: '0',
    left: '0',
    cursor: 'zoom-out'
  }).click(function() {
    removeModal();
  }).appendTo('body');
  //handling ESC
  $('body').on('keyup.modal-close', function(e) {
    if (e.key === 'Escape') {
      removeModal();
    }
  });
});