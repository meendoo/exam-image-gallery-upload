import React, { Component } from 'react'
import PhotoIcon from "../icons/photoIcon";
import styles from './header.module.scss';
import { TweenMax, Power4 } from 'gsap';

export default class Header extends Component {
    componentDidMount = () => {
        TweenMax.from(`.${styles.header}`, 0.4, {height: window.innerHeight, ease: Power4.ease}).delay(0.8);
    }
    render() {
        return (
            <header className={styles.header}>
                <div className={styles.headerInnerWrapper}>
                    <PhotoIcon className={styles.logo} fill="#2c5ed2"/>
                    <h1 className={styles.appTitle}>PhotoWall App</h1>
                </div>
            </header>
        )
    }
}
