import React from "react";
import projects from "../assets/projects";
import {Link} from "react-router-dom";
import Header from "../components/Header";
import CardList from "../components/CardList";
import Timeline from "../components/Timeline";
import SkillsPanel from "../components/SkillsPanel";

const HomePage = () => {
    return(
        <>
            <Header title="My Portfolio"/>

            <div className="page-body">

                <SkillsPanel images={["flutterLogo", "nodeLogoProjectImage", "reactLogo", "unityLogo", "gitLogo", "githubLogo"]}/>

                <CardList
                    title="Top Projects"
                    projects={projects.filter(project => project.topProjects === true)}
                    imgSize={350}
                />

                <Link to="/projects" className="seeMoreButton">All Projects</Link>

                <Timeline
                    title="Timeline"
                    timelineData={
                        [
                            {direction : "left", title: "Scratch", body: "As a kid I learned programming concepts and fundamentals through Scratch. A graphic coding tool."},
                            {direction : "right", title: "Java & C++", body: "As I reached high school, I slowly started to take classes on Java and C++ and taught myself anything else that I didn't learn in those classes."},
                            {direction : "left", title: "Unity", body: "As my knowledge got more advanced, I started to learn how to use the Unity Game engine and therefore C#."},
                            {direction : "right", title: "Flutter", body: "As I was stuck at home, during quarantine, I taught myself Google's cross-platform app-building SDK through Youtube videos and online courses."},
                            {direction : "left", title: "Express JS", body: "Under quarantine, I used online resources to teach myself Express and created my own API."},
                            {direction : "right", title: "React JS", body: "Still stuck at home, I also started to teach myself React through Youtube videos and online classes."},
                        ]
                    }
                />
            </div>
        </>
    )
}

export default HomePage;