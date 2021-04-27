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
            link: "http:/github.com/dan-leach",
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
      path: "dka_calculator",
      viewable: false,
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
            link: "http:/github.com/dan-leach",
            icon: "fab fa-github-square"
        },
      ],
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
        longDesc: "",
        path: "the_mood_monitor",
        viewable: false,
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
                name: "Visit The Mood Monitor ",
                link: "http://themoodmonitor.co.uk",
                icon: "fas fa-globe"
            },
            {
                name: "View on Github",
                link: "http:/github.com/dan-leach",
                icon: "fab fa-github-square"
            },
        ],
        screenshots: [
            {
              title: "",
              desc: ""
            },
        ]
    },
    {
        name: "Rota Manager",
        shortDesc: "An spreadsheet tool for managing medical rotas, this workbook automatically highlights gaps and locum shifts in advance, creates a outlook email with a weekly rota, amongst other functions for efficient rota management.",
        longDesc: "",
        path: "rota_manager",
        viewable: false,
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
                name: "Download Rota Manager (coming soon)",
                link: "",
                icon: "fas fa-download"
            },
        ],
        screenshots: [
            {
              title: "",
              desc: ""
            },
        ]
    },
    {
        name: "SIFT Calculator",
        shortDesc: "Produces a step-by-step plan with pre-calculated milk volumes based on the SIFT trial, using a neonate's weight and certain clinical characteristics, with input validation and rounding.",
        longDesc: "",
        path: "sift_calculator",
        viewable: false,
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
                name: "Download Sift Calculator (coming soon)",
                link: "",
                icon: "fas fa-download"
            },
        ],
        screenshots: [
            {
              title: "",
              desc: ""
            },
        ]
    },
    {
        name: "Hedgehog Handover",
        shortDesc: "This tool tracked neonates on intravenous antibiotics at Southmead Hospital NICU and produced schedules for medication administration, blood sampling and auto-generated discharge letters.",
        longDesc: "",
        path: "hedgehog_handover",
        viewable: false,
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
              title: "",
              desc: ""
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
            <div class="row">\
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
                <div v-for="project in projects" class="card mb-4" style="min-width:30%">\
                    <img class="card-img-top" v-bind:src="'+"'img/'"+' + project.path + '+"'_logo.png'"+'" v-bind:alt="project.name + '+"' logo'"+'">\
                    <div class="card-body">\
                        <h4 class="card-title">{{project.name}}</h4>\
                        <span v-for="(tech, index) in project.techs"><span v-if="index !== 0"> | </span><a v-bind:href="tech.link" v-bind:class="tech.icon"></a></span>\
                        <hr>\
                        <span v-for="(link, index) in project.links"><a v-bind:href="link.link" v-bind:class="link.icon"></a>&nbsp;{{link.name}}<br></span>\
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
                            <img  v-bind:src="' + "'img/'" + ' + project.path + ' + "'_'" + ' + (index + 1) + ' + "'.png'" + '" v-bind:alt="project.name + ' + "'screenshot'" + '">\
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
