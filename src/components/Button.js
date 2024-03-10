import React from 'react';
import Number from "./Number";

class Button extends React.Component {
    render() {
        return (
            <>
                <Number total={this.props.total} update={this.props.update}/>
            </>
        );
    }
}

export default Button;