import React from "react";
import projects from "../assets/projects";
import CardList from "../components/CardList";
import Header from "../components/Header";

const ProjectPage = () => {
    return (
        <>
            <Header title= "Projects"/>
            <div className="page-body">
                <CardList
                    title="Projects"
                    projects={projects}
                    imgSize={350}
                />
            </div>
        </>
    )
}

export default ProjectPage;