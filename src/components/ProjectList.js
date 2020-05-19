import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectList = ({title, projects}) => {
    return (
        <>
            <h1>{title}</h1>
            {
                projects.map((project, key) =>
                    <ProjectItem
                        key={key}
                        img={project.img}
                        title={project.title}
                        bulletPoints={project.bulletPoints}
                        linkPoints={project.linkPoints}
                    />
                )
            }
        </>
    )
}

export default ProjectList;