import React, {Component} from "react";
import projects from "../assets/projects";
import {Link} from "react-router-dom";
import Header from "../components/Header";
import CardList from "../components/CardList";
import Timeline from "../components/Timeline";
import SkillsPanel from "../components/SkillsPanel";

class HomePage extends Component{

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return(
            <>
                <Header title="My Portfolio"/>

                <div className="page-body">

                    <SkillsPanel
                        images={
                            [
                                {filePath: "flutterLogo", link: "https://flutter.dev/"},
                                {filePath: "nodeLogoProjectImage", link: "https://nodejs.org/"},
                                {filePath: "reactLogo", link: "https://reactjs.org/"},
                                {filePath: "unityLogo", link: "https://unity.com/"},
                                {filePath: "gitLogo", link: "https://git-scm.com/"},
                                {filePath: "githubLogo", link: "https://github.com/"},
                                {filePath: "javaLogo", link: "https://www.java.com/en/"},
                                {filePath: "C++Logo", link: "https://www.cplusplus.com/"},
                                {filePath: "CSharpLogo", link: "https://docs.microsoft.com/en-us/dotnet/csharp/"},
                                {filePath: "JavascriptLogo", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
                            ]
                        }
                    />

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
}

export default HomePage;