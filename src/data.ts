import { Project, Techno, CompanyGroup, Language, FieldRecord } from './ints';


export const technos: Techno[] = [
    {
        name: "TypeScript/ES6+",
        years: 5,
        knowledge: 1
    },
    {
        name: "HTML",
        years: 20,
        knowledge: 1
    },
    {
        name: "Web API",
        years: 18,
        knowledge: 1
    },
    {
        name: "SCSS/CSS",
        years: 20,
        knowledge: 1
    },
    {
        name: "Angular2+",
        years: 4,
        knowledge: 1
    },

    {
        name: "C#/.NET",
        years: 15,
        knowledge: 2
    },
    {
        name: "ES5",
        years: 10,
        knowledge: 2
    },
    {
        name: "ASP.NET",
        years: 10,
        knowledge: 2
    },
    {
        name: "Mongo DB",
        years: 3,
        knowledge: 2
    },
    {
        name: "MS SQL",
        years: 10,
        knowledge: 2
    },

    {
        name: "Node.js",
        years: 2,
        knowledge: 3
    },
    {
        name: "Vue",
        years: 1,
        knowledge: 3
    },
    {
        name: "Angular.js",
        years: 1,
        knowledge: 3
    },
    {
        name: "Mapbox + Leaflet",
        years: 2,
        knowledge: 3
    },
    {
        name: "Facebook API",
        years: 5,
        knowledge: 3
    },
    {
        name: "Azure",
        years: 3,
        knowledge: 3
    },
    {
        name: "jQuery",
        years: 4,
        knowledge: 3
    },
    {
        name: "Delphi",
        years: 5,
        knowledge: 3
    },



]

export const projects: Project[] = [
    {
        startMonth: 12,
        startYear: 2017,
        endMonth: 4,
        endYear: 2020,

        projectGroup: "FJ4",

        logo: "allianz.png",
        company: "Allianz",
        employed: false,

        position: "Angular technical lead",
        locations: ["Prague"],
        description: `Architect and technical lead of Portfolio and Products SPA Angular based frontend.`
    },
    {
        startMonth: 5,
        startYear: 2017,
        endMonth: 11,
        endYear: 2017,

        projectGroup: "eBrokers",

        logo: "ebrokers.png",
        company: "e-Brokers",
        employed: false,

        position: "Senior Frontend Developer",
        locations: ["Frankfurt"],
        description: `SPA Angular application for gas and electricity market trading.`
    },
    {
        startMonth: 9,
        startYear: 2015,
        endMonth: 4,
        endYear: 2017,

        projectGroup: "FJ1",

        logo: "gloobster.svg",
        company: "Gloobster.com",
        employed: false,

        position: "Founder",
        locations: ["Frankfurt"],
        description: `Travel startup offering long term fly ticket search and a wide range of supportive social network features.`
    },
    {
        startMonth: 1,
        startYear: 2014,
        endMonth: 8,
        endYear: 2015,

        projectGroup: "AGT",

        logo: "agt.png",
        company: "AGT Int.",
        employed: true,

        position: "Senior Developer",
        locations: ["Darmstadt", "Tel Aviv"],
        description: `Mybitat is a joint venture of Samsung and AGT to Improve Ability of the Elderly to Live at Home Longer with Enhanced Quality of Life. 															
                                        Our team was working on supporting tools for sensor collected data evaluation. I was working mostly on frontend development tasks.`
    },
    {
        startMonth: 9,
        startYear: 2014,
        endMonth: 12,
        endYear: 2015,

        projectGroup: "AGT",

        logo: "agt.png",
        company: "AGT Int.",
        employed: true,

        position: "Senior Developer",
        locations: ["Darmstadt"],
        description: "Video anomaly detection tool and several other tools for visualization and support of big data field."
    },
    {
        startMonth: 10,
        startYear: 2013,
        endMonth: 9,
        endYear: 2014,

        projectGroup: "AGT",

        logo: "agt.png",
        company: "AGT Int.",
        employed: true,

        position: "Senior Developer",
        locations: ["Darmstadt", "Abu Dhabi"],
        description: `Urban Shield is a large public security and smart city enterprise solution for Abu Dhabi emirate. 
                                        Collects, process and evaluate thousands of sensors data all around the city. 
                                        Possibly the biggest project I ever took part of. 
                                        On the project, I performed multiple tasks including integration, development, analysis, architecture, refactoring and big data experiments. I was also often visiting customer's site to supervise deployment and test process.`
    },
    {
        startMonth: 1,
        startYear: 2013,
        endMonth: 8,
        endYear: 2013,

        projectGroup: "FJ2",

        logo: "simplias.png",
        company: "Simplias GMBH",
        employed: false,

        position: "Senior Developer",
        locations: ["Munich"],
        description: `Mobile field reporting management project. 
                                            I worked as a developer of the management web application. It is developed as Backbone SPA`,
        url: "http://www.mobilefieldreport.com"
    },
    {
        startMonth: 6,
        startYear: 2011,
        endMonth: 1,
        endYear: 2013,

        projectGroup: "FJ2",

        logo: "cid.svg",
        company: "CID GMBH",
        employed: false,

        position: "Senior Developer",
        locations: ["Gelnhausen"],
        description: `I worked as a developer of a web crawler application. The web crawler component is a part of a larger solution called Topic Analyst. I was responsible mainly for development and partially for deployment and maintenance. My other duties included investigation and analysis of crawling mechanisms and algorithms.`,
    },
    {
        startMonth: 3,
        startYear: 2010,
        endMonth: 6,
        endYear: 2011,

        projectGroup: "FJP",

        logo: "bgs.png",
        company: "Be a Golf Star",
        employed: false,

        position: "CTO",
        locations: ["Prague"],
        description: `Online golf manager game. An unsuccessful startup in the gaming industry.
                                        On this project, I worked as a CTO.`,
    },
    {
        startMonth: 12,
        startYear: 2009,
        endMonth: 3,
        endYear: 2010,

        projectGroup: "FJP",

        logo: "kbc.png",
        company: "KBC",
        employed: false,

        position: "Senior Developer",
        locations: ["Prague"],
        description: `A rework of a call center administration application.`,
    },
    {
        startMonth: 4,
        startYear: 2009,
        endMonth: 3,
        endYear: 2010,

        projectGroup: "FJP",

        logo: "rm.png",
        company: "Rooms Outdoor",
        employed: false,

        position: "Senior Developer",
        locations: ["London"],
        description: `A web app for designing and configuration of garden houses.`,
        url: "http://roomsoutdoor.co.uk/configurator"
    },
    {
        startMonth: 3,
        startYear: 2008,
        endMonth: 3,
        endYear: 2009,

        projectGroup: "UNICORN",

        logo: "cit.png",
        company: "Sitronics",
        employed: false,

        position: "Senior Build Engineer",
        locations: ["Prague"],
        description: `I was working as a developer/project manager of an automated CI build/deploy/test system.`,

    },
    {
        startMonth: 11,
        startYear: 2007,
        endMonth: 2,
        endYear: 2008,

        projectGroup: "UNICORN",

        logo: "kbc.png",
        company: "KBC",
        employed: false,

        position: "Senior Developer",
        locations: ["Prague"],
        description: `Projects Storm and SySel are remakes of two internal applications, used for accounting management and company's economic plans projection.`,
    },
    {
        startMonth: 5,
        startYear: 2007,
        endMonth: 10,
        endYear: 2007,

        projectGroup: "UNICORN",

        logo: "kbc.png",
        company: "KBC",
        employed: false,

        position: "Senior Developer",
        locations: ["Prague"],
        description: `Project PaySec is a payment portal for internet micro payments connected to KBC banking system.`,
        url: "http://www.paysec.cz"
    },
    {
        startMonth: 2,
        startYear: 2007,
        endMonth: 4,
        endYear: 2007,

        projectGroup: "UNICORN",

        logo: "mcd.png",
        company: "MC DONALD'S",
        employed: true,

        position: "Developer",
        locations: ["Prague"],
        description: `HR management system to improve manpower sharing among subsidiaries.`,
    },
    {
        startMonth: 7,
        startYear: 2006,
        endMonth: 1,
        endYear: 2007,

        projectGroup: "UNICORN",

        logo: "irc.png",
        company: "Inland revenue and custom of Czech Republic",
        employed: true,

        position: "Developer",
        locations: ["Prague"],
        description: `A web-based SharePoint search extension.`,
    },
    {
        startMonth: 1,
        startYear: 2006,
        endMonth: 6,
        endYear: 2006,

        projectGroup: "UNICORN",

        logo: "erste.svg",
        company: "Erste bank",
        employed: true,

        position: "Developer",
        locations: ["Prague"],
        description: `A client service suite for managing common, savings and budget accounts.`,
    },
    {
        startMonth: 1,
        startYear: 2005,
        endMonth: 12,
        endYear: 2005,

        projectGroup: "AQUA",

        logo: "solitea.jpg",
        company: "Aquasoft",
        employed: true,

        position: "Developer",
        locations: ["Prague"],
        description: `Rework of administration tools from Delphi to .NET and extending by some new features.`,
    },
    {
        startMonth: 1,
        startYear: 2004,
        endMonth: 12,
        endYear: 2004,

        projectGroup: "FJ3",

        logo: "egem.jpg",
        company: "EGEM GMBH",
        employed: false,

        position: "Developer",
        locations: ["Brno"],
        description: `A client-server solution for storing and versioning the company’s documents.`,
    },
    {
        startMonth: 1,
        startYear: 2002,
        endMonth: 12,
        endYear: 2003,

        projectGroup: "FJ3",

        logo: "netbox.svg",
        company: "Netbox",
        employed: false,

        position: "Developer",
        locations: ["Brno"],
        description: "Development of tools for network system administration.",
    }
];


export const companies: CompanyGroup[] = [
    { group: "FJ4", contract: "Freelancer", company: "Allianz" },
    { group: "eBrokers", contract: "Freelancer, Employee", company: "eBrokers" },
    { group: "FJ1", contract: "Own project", company: "Own project" },
    { group: "AGT", contract: "Employee", company: "AGT" },
    { group: "FJ2", contract: "Freelancer", company: "Freelance jobs" },
    { group: "FJP", contract: "Freelancer", company: "Freelance jobs" },
    { group: "UNICORN", contract: "Employee, Freelancer", company: "Unicorn" },
    { group: "AQUA", contract: "Employee", company: "Aquasoft" },
    { group: "FJ3", contract: "Freelancer", company: "Freelance jobs" }
];

export const languages: Language[] = [
    {
        name: "English",
        level: "C2",
        desc: "I speak English daily for over last 10 years"
    },
    {
        name: "German",
        level: "B2",
        desc: "I use the German language a couple of times a month. The level is not sufficient as a business language. I still plan to learn and improve."
    },
    {
        name: "Czech",
        level: "Mother tongue",
        desc: "Father's as well."
    },
]

export const fields: FieldRecord[] = [
    {
        name: "Backend",
        color: "#FF6384",
        years: 17
    },
    {
        name: "Frontent",
        color: "#36A2EB",
        years: 20
    },
    {
        name: "Project management",
        color: "#FFCE56",
        years: 4
    },
    {
        name: "Architecture",
        color: "#57C2DB",
        years: 10
    },
    {
        name: "UX",
        color: "#4B966E",
        years: 4
    }    
]
