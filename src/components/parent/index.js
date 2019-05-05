import React from 'react'
import './parent.css'

class Parent extends React.Component {
    render() {
        return (
            <div className='parent'>
                <div>CSS stylesheet</div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Parent