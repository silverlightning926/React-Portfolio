import React from "react";
import projects from "../assets/projects";
import ProjectList from "../components/ProjectList";
import Header from "../components/Header";

const ProjectPage = () => {
    return (
        <>
            <Header title= "Projects"/>
            <div className="page-body">
                <ProjectList
                    title="Top Projects"
                    projects={projects}
                />
            </div>
        </>
    )
}

export default ProjectPage;