import React from "react";

import "../components/styles/Badge.css";
import confLogo from "../images/badge-header.svg";

class Badge extends React.Component {
    render() {
        const FirstName = "Patricio";
        const LastName = "Yumbillo L.";
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="" />
                </div>
                <div className="Badge__section-name">
                    <img
                        className="Badge__avatar"
                        src="https://secure.gravatar.com/avatar/75d3483013ff2638611c269eece1597b"
                        alt="Patricio Yumbillo"
                    />
                    <h1>
                        {this.props.FirstName}
                        <br />
                        {this.props.LastName}
                    </h1>
                </div>

                <div className="Badge__section-info">
                    <p> {this.props.jobTittle}</p>
                    <p>@{this.props.twitter}</p>
                </div>
                <div className="Badge__footer">#platziConf</div>
            </div>
        );
    }
}
export default Badge;
