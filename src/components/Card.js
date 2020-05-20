import React from "react";

const Card = ({img, title, bulletPoints, linkPoints, imgSize}) => {
    return (
        <>
            <div style={{"paddingLeft" : "20px", "paddingTop" : "20px"}}>
                <div className="inline">
                    <div className="image-div">
                        <img className="project-image" width={`${imgSize}px`} src={require(`../assets/images/projectImages/${img}.svg`)} alt=""/>
                    </div>
                    <div className="">
                        <h3 className="project-title">{title}</h3>
                        <ul>
                            {bulletPoints.map((bulletPoint, key) => <li key={key}>{bulletPoint}</li>)}
                        </ul>
                        {
                            linkPoints != null ?
                                <div style={
                                    {
                                        "paddingLeft": 10
                                    }
                                }>
                                    <h4>Links</h4>
                                    <ul>
                                        {
                                            linkPoints.map(
                                                (link, key) =>
                                                    (
                                                        <li key={key}>
                                                            <a href={link.link}>{link.name}</a>
                                                        </li>
                                                    )
                                            )
                                        }
                                    </ul>
                                </div>
                            : null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;