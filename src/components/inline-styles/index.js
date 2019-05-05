import React from 'react';

class InlineStyles extends React.Component {
    styles = {
        title: {
            color: 'darkgrey'
        }
    }

    render() {
        return (
            <div style={this.styles.title}>
                inline styles
            </div>
        )
    }
}

export default InlineStyles