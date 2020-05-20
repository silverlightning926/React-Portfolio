import React, {Component} from "react";
import projects from "../assets/projects";
import CardList from "../components/CardList";
import Header from "../components/Header";

class ProjectPage extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
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
}

export default ProjectPage;