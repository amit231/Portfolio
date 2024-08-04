// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
    buttonColor: "#4305ba",
    LinkHighlightColor: "#4305ba"
}

// Transitions
const transitions = {
    active: true, // activate for all sections
    onlyLanding: false, // activate only for initial load of landing page
    showOnce: true, // transition only once
    thresholdOption: 0.2 // indicates at what percentage of the sections visibility the transition should start
}

// Splash Screen
const splashScreen = true // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
    intro: "Hello 👋, my name is",
    name: "Amit Sharma",
    message: `I'm a Software Developer with industry-tested technical skills. Specializing in Frontend Development, I have a deep understanding of web technologies and a good working proﬁciency in Backend development, enabling me to collaborate across the full stack development eﬀectively.`,
    basedLocation: "Hamirpur, Himachal Pradesh HP",
    resumeLink: "https://drive.google.com/file/d/1waKyuRqleAvgxYSMNMzr7JZBURTR6fCk/view", // recommended: google drive file share link (change to "anyone on the internet can view")
    logo: {
        link: "images/Alogo.png", // use relative path from  parent directory -> ex: images/image.ext
        custom: true // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
    },
    portraitLink: 'images/MainImage.jpg'
}

const socialMediaLinks = {
    github: "https://github.com/amit231",
    linkedin: "https://www.linkedin.com/in/engineer-amit/",
    medium: "https://medium.com/@amitsharma0843",
    stackoverflow: "",
    xtwitter: "https://x.com/coz_m_high"
} // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
    autobiography: [
        "My name is Amit Sharma and I'm in love with Computer Science. I've done B. Tech in Computer Science with a 8.4 CGPA. I'm a Computer CS specialist based in Career Point University. I have a passion for coding in languages such as Javascript, C++ & Python. Work in web development and have experience with Node.js and frameworks like React, Express.",
        "Responsible, organized, problem solver, and independent thinker. Work well in a team and a quick learner. Programming for 3+ years and have 4 years of experience in Frontend Development. Currently working as a Frontend Lead @Nurturelabs."
    ], // Separated items are paragraphs
    techStack: [
        "React",
        "JS/TS",
        "HTML/CSS",
        "Python",
        "DBMS",
        "Node.js",
    ],
    photo1Link: "images/Portrait1.jpeg",
    photo2Link: "images/Portrait2.jpeg",
    photo3Link: "images/Portrait3.jpeg"
}

// --- 🛡️ Experience Section ---
const experiences = [
    {
        position: "Web Dev Intern",
        company: {
            name: "Buffer Finance - Nurturelabs",
            link: "https://nurturelabs.co/"
        },
        duration: "Sept 2021 - Present",
        bulletPoints: [
            "Developed a real-time trading platform delivering live feeds packed in a seamless UX which is handling millions in trading volume.",
            "Architected suite of versatile React UI components, deployed in multiple applications, accelerating project delivery timelines & efficiency by 20%.",
            "Reduced main thread load by 30% in version 2 by eliminating unnecessary re-renders identified through constant performance monitoring cycles, significantly enhancing application efficiency."
        ],
        hashtags: [
            "React",
            "JS",
            "TS",
            "PostgreSQL",
            "CSS",
            "HTML",
            "Tailwind"
        ]
    },
    {
        position: "Frontend Developer",
        company: {
            name: "Cozmo - Nurturelabs",
            link: "https://nurturelabs.co/"
        },
        duration: "Aug 2020 - Sept 2021",
        bulletPoints: [
            "Engineered a comprehensive frontend solution for a lead management app, encompassing both native mobile and web platforms with real-time location features.",
            "Implemented complete notification machanism using push notifications and CRON jobs, enhancing user engagement by 10% through timely and efficient updates.",
            "Segregated business logic into custom hooks to achieve encapsulation, significantly enhancing frontend development efficiency."
        ],
        hashtags: [
            "React",
            "JS",
            "TS",
            "PostgreSQL",
            "CSS",
            "HTML",
            "React Native"
        ]
    }
]

// --- 💻 Work Section ---
const works = [
    {
        projectName: "useGState",
        yearCompleted: "2022",
        description: `useGstate is an Atomic State Management library for React that lets you create global states in most intuitive way
        possible ,that too with performance. It utilises core React Concepts to achieve simplicity with performance.`,
        techStack: "Javascript, React",
        links: [
            {
                label: "",
                type: "Medium",
                url: "https://medium.com/@amitsharma0843/usegstate-f7e8be11a1f4"
            },
            {
                label: "",
                type: "NPM",
                url: "https://www.npmjs.com/package/usegstate"
            }
        ],
        imageLink: "images/usegstate.jpeg",
        alignLeft: false
    },
    {
        projectName: "Sorting Algorithm Visualizers",
        yearCompleted: "2021",
        description: "Developed an interactive JavaScript web app to visualize five sorting algorithms, including Quick and Merge Sort. Integrated dynamic controls for input size and speed.",
        techStack: "Django, Python, HTML, CSS, JS",
        links: [
            {
                label: "",
                type: "external",
                url: "https://amit231.github.io/sotingVizJS/"
            }
        ],
        imageLink: "images/portfolio_pic.png",
        alignLeft: true
    },
    {
        projectName: "SPS game with Live Scores",
        yearCompleted: "2021",
        description: "Stone Paper Scisor Lizard Spock game with live scores. The game is played between the user and the computer that too real-time.",
        techStack: "Javascript, MaterialUI, Sass",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/amit231/feMentorGame"
            },
            {
                label: "",
                type: "external",
                url: "https://amit231.github.io/game/#/"
            }
        ],
        imageLink: "images/gamels.png",
        alignLeft: false
    }
]

const archiveLink = "https://github.com/feifyKike?tab=repositories"

// --- 📭 Contact Section ---
// 2 Options available - Choose 1
const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [
            "Need expert software development? Reach out to me via email and let's get started!",
            "Also looking to build a team for projects & startup ideas or just make professional connections."
        ], // paragraph breaks will be entered after each item,
        link: {
            email: "amitsharma0843@gmail.com", // email takes precedance
            other: "https://forms.gle/W3MswTKsPWMxEbn58"
        },
        responseTimeMessage: "...and I'll resopnd within the next 24hrs"
    },
    formEmbedLink: "" // inclusion of this link will take precedance
}

export default {
    colors,
    transitions,
    splashScreen,
    greeting,
    socialMediaLinks,
    about,
    experiences,
    works,
    archiveLink,
    contact
}
