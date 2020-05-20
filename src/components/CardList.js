import React from "react";
import Card from "./Card";

const CardList = ({title, projects, imgSize}) => {
    return (
        <>
            <h1>{title}</h1>
            {
                projects.map((project, key) =>
                    <Card
                        key={key}
                        img={project.img}
                        title={project.title}
                        bulletPoints={project.bulletPoints}
                        linkPoints={project.linkPoints}
                        imgSize={imgSize}
                    />
                )
            }
        </>
    )
}

export default CardList;