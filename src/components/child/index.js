import React from 'react';
import './child.css';

class Child extends React.Component {
    render() {
        return (
            <div className={this.props.isChild ? 'child-title' : ''}>
                CSS stylesheet with props
            </div>
        )
    }
}

export default Child