import React, {Component} from "react";
import Header from "../components/Header";

class About extends Component
{
    componentDidMount() {
        window.scrollTo(0,0);
    }

    render()
    {
        return (
            <>
                <Header title="About"/>
                <div className="page-body">
                    <p>
                        My name is Siddharth Rao. I am from Seattle Washington. I have been coding ever since I was a kid and am always learning new things.
                        I am currently used the resources around me to make myself proficient in many things such as Java, Javascript & more.
                        I have currently made my own software brand named Phoenix Interactive have developed many apps under the brand.
                        I also have worked with other companies and organizations in the past and have developed apps and applications for them under their name.
                    </p>

                    <p>
                        If you have an offer or any freelancing work, please feel free to contact me by the Contact page or any of the other methods listed on the Contact Page.
                    </p>

                    <h1>Links</h1>
                    <ul>
                        <li><a href="https://github.com/silverlightning926">Github</a></li>
                        <li><a href="https://stackoverflow.com/users/10915344/silverlightning">Stack Overflow</a></li>
                    </ul>
                </div>
            </>
        )
    }
}

export default About;