import React from 'react';
import styles from './css-module.module.css'; // {component}.module.css is necessary

class CSSModules extends React.Component {
    render() {
        return (
            <div className={styles['title-wrapper']}>
                <a className={styles.link} href='https://css-tricks.com/css-modules-part-1-need/' target='blank'> css modules</a>
            </div>
        )
    }
}

export default CSSModules