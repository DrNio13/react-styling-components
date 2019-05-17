import React from 'react'
import styled, { css } from 'styled-components'

const Span = styled.span`
    ${props => props.isRed && css`
        color: palevioletred;
    `};
`

class StyledComponents extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Span {...this.props}>styled</Span>
                <Span> components</Span>
            </React.Fragment>
        )
    }
}

export default StyledComponents