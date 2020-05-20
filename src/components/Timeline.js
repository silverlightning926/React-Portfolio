import React from "react";

const Timeline = ({title, timelineData}) => {
    return (
        <>
            <h1>{title}</h1>
            <div className="timeline" style={{paddingTop : "30px"}}>
                {
                    timelineData.map((data, key) => (
                        <div key={key} className= {"container " + data.direction}>
                            <div className="content">
                                <h2 style={{color: "white"}}>{data.title}</h2>
                                <p style={{color: "white"}}>{data.body}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Timeline;