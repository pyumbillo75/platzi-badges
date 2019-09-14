import React, { Component } from "react";
class BadgeForm extends Component {
    handleChange = e => {
        console.log({ name: e.target.name, value: e.target.value });
    };
    handleClick = e => {
        console.log("button was clicked");
    };
    handleSubmit = e => {
        e.preventDefault();
        console.log("Form was submit");
    };
    render() {
        return (
            <div>
                <h1>New Attend</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input
                            name="firstName"
                            onChange={this.handleChange}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <button
                        onClick={this.handleClick}
                        className="btn btn-primary"
                    >
                        Save
                    </button>
                </form>
            </div>
        );
    }
}

export default BadgeForm;
