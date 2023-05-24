import React from "react";

const Footer: React.FC = () => {
    return (
        <div className="footer__container">
            <div className="footer__links"></div>
            <section className="social__media">
                <div className="social__media--wrap">
                    <div className="footer__logo">
                        <a href="/" id="footer__logo">
                            <i className="fas fa-baby"></i>PROJECT FOR DD
                        </a>
                    </div>
                    <p className="website__rights">
                        © PROJECT DD 2023. All rights reserved
                    </p>
                    <div className="social__icons">
                        <a
                            className="social__icon--link"
                            href="/"
                            target="_blank"
                            aria-label="Facebook"
                        >
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a
                            className="social__icon--link"
                            href="/"
                            target="_blank"
                            aria-label="Instagram"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a
                            className="social__icon--link"
                            href="//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber"
                            target="_blank"
                            aria-label="Youtube"
                        >
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a
                            className="social__icon--link"
                            href="/"
                            target="_blank"
                            aria-label="Twitter"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a
                            className="social__icon--link"
                            href="/"
                            target="_blank"
                            aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;
