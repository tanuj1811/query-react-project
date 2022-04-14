import React from "react";

import styles from './footer.module.scss'

const MainFooter = () => {
    return(
        <footer className={styles.footer}>
            <div className={styles.footer__wrapper}>
                <div className={styles.footer__row}>
                    <div className={styles.footer__column}>
                        <h3 className={styles.footer__title}>About US</h3>
                            
                        <a  className={styles.footer__link}  href="/" >Testionials</a>
                        <a  className={styles.footer__link}  href="/" >Testionials</a>
                        <a  className={styles.footer__link}  href="/" >Testionials</a>
                        <a  className={styles.footer__link}  href="/" >Testionials</a>
                    </div>
                    <div className={styles.footer__column}>
                        <h3 className={styles.footer__title}>Serives</h3>
                            
                        <a  className={styles.footer__link}  href="/" >ask Queries</a>
                        <a  className={styles.footer__link}  href="/" >ask Queries</a>
                        <a  className={styles.footer__link}  href="/" >ask Queries</a>
                        <a  className={styles.footer__link}  href="/" >ask Queries</a>
                    </div>
                    <div className={styles.footer__column}>
                        <h3 className={styles.footer__title}>Contact Us</h3>
                            
                        <a  className={styles.footer__link}  href="/" >Email</a>
                        <a  className={styles.footer__link}  href="/" >Email</a>
                        <a  className={styles.footer__link}  href="/" >Email</a>
                        <a  className={styles.footer__link}  href="/" >Email</a>
                    </div>
                    <div className={styles.footer__column}>
                        <h3 className={styles.footer__title}>Social</h3>
                            
                        <a  className={styles.footer__link}  href="/" >LinkedIn</a>
                        <a  className={styles.footer__link}  href="/" >LinkedIn</a>
                        <a  className={styles.footer__link}  href="/" >LinkedIn</a>
                        <a  className={styles.footer__link}  href="/" >LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default MainFooter;