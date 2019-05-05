import React from 'react';

class InlineStylesComputedPropertyNames extends React.Component {
    styles = {
        title: {
            [this.props.lightGrey ? 'color': null]: 'lightblue',
            marginTop: '50px'
        }
    }

    render() {
        return (
            <div style={this.styles.title}>
                inline styles with computed property names
            </div>
        )
    }
}

export default InlineStylesComputedPropertyNames