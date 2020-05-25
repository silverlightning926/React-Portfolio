import React, {Component} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Contact extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            email: "" ,
            message: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }

    handleSubmit(event){
        event.preventDefault();

        // Send Email To Me
    }

    handleNameChange(event) {
        this.setState({email: event.target.value});
    }

    handleMessageChange(event) {
        this.setState({message: event.target.value});
    }

    render() {
        return (
            <>
                <Header title="Contact"/>

                <div className="contact-container">
                    <form onSubmit={this.handleSubmit}>

                        <label htmlFor="name">Email</label>
                        <input type="text"  name="contactName" placeholder="Your name.." onChange={this.handleNameChange}/>

                        <label htmlFor="subject">Subject</label>
                        <textarea
                            onChange={this.handleMessageChange}
                            id="subject"
                            name="subject"
                            placeholder="Write something.."
                            style={{height:"200px"}}
                        />

                        <input type="submit" value="Submit"/>
                    </form>
                </div>
                <Footer/>
            </>
        )
    }
}

export default Contact;