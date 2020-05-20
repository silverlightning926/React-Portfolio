import React from "react";

const SkillsPanel = ({images}) => {
    return(
        <>
            <h1 style={{fontSize: "25px", textAlign: "center", fontWeight: 250}}>Skills</h1>
            <div className="center-image">
                {
                    images.map((img, key) => (
                        <a href={img.link}>
                            <img style={{padding: "0px 20px", margin: "20px 0px"}} key={key} height="85px" src={require(`../assets/images/logoImages/${img.filePath}.svg`)} alt = ""/>
                        </a>
                    ))
                }
            </div>
        </>
    )
}

export default SkillsPanel;