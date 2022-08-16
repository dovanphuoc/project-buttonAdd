import React from "react";
import './Button.scss'
class Button extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <button className="btn" onClick={this.props.handleClick}>{this.props.name}</button>
            </>
        )
    }
}
export default Button