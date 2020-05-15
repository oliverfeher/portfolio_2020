import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Hello from "../Hello/Hello";
import Intro from "../Intro/Intro";
import NavBar from "../NavBar/NavBar"
import NavBarMobile from "../NavBarMobile/NavBarMobile"
import Dots from "../Dots/Dots";
import Dots2 from "../Dots/mobiledots.png";
import SocialIcons from "../SocialIcons/SocialIcons";
import AboutMe from "../AboutMe/AboutMe"
import ProjectCard from "../ProjectCard/ProjectCard";
import gif1 from "../App/gif.gif"
import gif2 from "../App/gif2.gif"
import gif3 from "../App/gif3.gif"
import gif4 from "../App/gif4.gif"
import gif5 from "../App/gif5.gif"
import myproject from "../App/myprojects.png"

function App() 
{
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutMe} />
            {/* <Route exact path="/contact" component={Contact} /> */}
            <Route exact path="/projects" component={Projects} />
        </Switch>
    )
}

function HomePage()
{
    return (
        <div id="main">
            <Dots place="top-left"/>
            <Dots place="bottom-right"/>
            <img src={Dots2} id="dots2" alt="bottom-design"/>
            <NavBarMobile />
            <NavBar />
            <div id="center">
                <Intro />
                <Hello />
                <Link className="btn" to="/projects">explore</Link>
            </div>
            <SocialIcons />
        </div>
    )
}

// function Contact()
// {
//     return (
//         <div id="main">
//             <Dots place="top-left"/>
//             <Dots place="bottom-right"/>
//             <NavBar />
//             <SocialIcons />
//         </div>
//     )
// }

function Projects()
{
    return (
        <div id="main">
            <NavBar />
            <NavBarMobile />
            <img src={myproject} className="section-title" alt="project-section-title"/>
            <div id="projects-container">
                <ProjectCard 
                    src={gif1} 
                    desc1="+ Built with Ruby's Sinatra framework."
                    desc2="+ Utilized MVC pattern."
                    desc3="+ Login/Signup authentication system with BCrypt."
                    desc4="+ Utilize CRUD actions to a SQLite3 database."
                    source="https://github.com/oliverfeher/flatironcross"
                    demo="https://www.youtube.com/watch?v=6r1kZx5raBI&t=4s"
                    videoLive="demo"
                />
                <ProjectCard 
                    src={gif2} 
                    desc1="+ Built with Ruby on Rails framework."
                    desc2="+ MVC pattern, RESTful routes."
                    desc3="+ Login/Signup authentication system with BCrypt."
                    desc4="+ Utilize CRUD actions to a PostgreSQL database."
                    source="https://github.com/oliverfeher/alpha_shoes"
                    demo="http://alpha-shoes.herokuapp.com/"
                    videoLive="live"
                />
                <ProjectCard 
                    src={gif3} 
                    desc1="+ Command Line Application /w Ruby."
                    desc2="+ Scraped data from wikipedia/nba.com."
                    desc3="+ Created application flow based on user input."
                    desc4="+ Built navigatable UI inside the terminal."
                    source="https://github.com/oliverfeher/nbafam"
                    demo="https://nba-fam.oliverfeher.repl.run/"
                    videoLive="live"
                />
                <ProjectCard 
                    src={gif5} 
                    desc1="+ financial application with D3js"
                    desc2="+ Developed a Rails API with user/bills/income endpoints."
                    desc3="+ Used BCrypt for server-side authentication."
                    desc4="+ Used vanilla ES6 JavaScript to develop front-end."
                    source="https://github.com/oliverfeher/trackmymoney"
                    // demo="https://nba-fam.oliverfeher.repl.run/"
                    videoLive="none"
                />
                <ProjectCard 
                    src={gif4} 
                    desc1="+ Portfolio page built with React"
                    desc2="+ Utilized React-Routers for frontend routing"
                    desc3="+ Custom built UI"
                    desc4="+ State management with Redux"
                    source="https://github.com/oliverfeher/portfolio_2020"
                    demo="http://www.oliverfeher.com"
                    videoLive="live"
                />
            </div>
            <SocialIcons />
        </div>
    )
}

export default App;



