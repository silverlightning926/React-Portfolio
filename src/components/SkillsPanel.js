import React from "react";

const SkillsPanel = ({images}) => {
    return(
        <div className="center-image">
            {
                images.map((img, key) => (
                    <img style={{padding: "0px 20px", margin: "20px 0px",}} key={key} height="85px" src={require(`../assets/images/logoImages/${img}.svg`)} alt = ""/>
                ))
            }
        </div>
    )
}

export default SkillsPanel;