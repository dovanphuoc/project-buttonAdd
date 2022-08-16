import React from "react";
import './Box.scss'
class Box extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <button className="button">{this.props.children}</button>
            </>
        )
    }
}
export default Box;