import styles from "./Main.module.scss";
import imageHeaderDesktop from "@/assets/images/image-header-desktop.jpg";
import imageHeaderMobile from "@/assets/images/image-header-mobile.jpg";

export default () => `
    <article  class="${styles.article}">  
        <img src="${imageHeaderMobile}" class="${styles.imageMobile}" />
        <div class="${styles.content}">
            <div class="${styles.contentTop}">
                <h1 class="${styles.title}">Get <span class="${styles.titlePurple}">insights</span> that<br class="${styles.brMobile}">help
                <br class="${styles.brDesktop}">your business<br class="${styles.brMobile}">grow.</h1>
                <p class="${styles.text}">
                    Discover the benefits of data<br class="${styles.brMobile}">analytics and make<br class="${styles.brDesktop}">
                    better decisions<br class="${styles.brMobile}">regarding revenue, customer<br class="${styles.brDesktop}"><br class="${styles.brMobile}">
                    experience, and overall efficiency.
                </p>
            </div>
            <div class="${styles.contentBottom}">
                <div class="${styles.contentBottomDiv}">
                    <h2 class="${styles.title2}">10k+</h2>
                    <p class="${styles.text2}">COMPANIES</p>
                </div>
                <div class="${styles.contentBottomDiv}">
                    <h2 class="${styles.title2}">314</h2>
                    <p class="${styles.text2}">TEMPLATES</p>
                </div>
                <div class="${styles.contentBottomDiv}">
                    <h2 class="${styles.title2}">12m+</h2>
                    <p class="${styles.text2}">QUERIES</p>
                </div>
            </div>
        </div>
        <img src="${imageHeaderDesktop}" class="${styles.imageDesktop}"/>
    </article>
`