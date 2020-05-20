import React from "react";
import Header from "../components/Header";
import ProjectList from "../components/ProjectList";
import projects from "../assets/projects";
import {Link} from "react-router-dom";
import Timeline from "../components/Timeline";

const HomePage = () => {
    return(
        <div>

            <Header title="My Portfolio" subtitle="Siddharth Rao"/>

            <div className="page-body">
                <ProjectList
                    title="Top Projects"
                    projects={projects.filter(project => project.topProjects === true)}
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
        </div>
    )
}

export default HomePage;