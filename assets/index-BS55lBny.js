(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const r="_article_1fbvi_2",l="_content_1fbvi_13",a="_contentTop_1fbvi_20",b="_title_1fbvi_25",p="_titlePurple_1fbvi_32",d="_text_1fbvi_36",m="_contentBottom_1fbvi_44",f="_title2_1fbvi_51",_="_text2_1fbvi_59",v="_contentBottomDiv_1fbvi_68",u="_imageDesktop_1fbvi_73",$="_imageMobile_1fbvi_83",g="_brDesktop_1fbvi_87",h="_brMobile_1fbvi_91",t={article:r,content:l,contentTop:a,title:b,titlePurple:p,text:d,contentBottom:m,title2:f,text2:_,contentBottomDiv:v,imageDesktop:u,imageMobile:$,brDesktop:g,brMobile:h},D="/Stats-preview-card-component/assets/image-header-desktop-vbVtyz_d.jpg",M="/Stats-preview-card-component/assets/image-header-mobile-fYqb8l1J.jpg",y=()=>`
    <article  class="${t.article}">  
        <img src="${M}" class="${t.imageMobile}" />
        <div class="${t.content}">
            <div class="${t.contentTop}">
                <h1 class="${t.title}">Get <span class="${t.titlePurple}">insights</span> that<br class="${t.brMobile}">help
                <br class="${t.brDesktop}">your business<br class="${t.brMobile}">grow.</h1>
                <p class="${t.text}">
                    Discover the benefits of data<br class="${t.brMobile}">analytics and make<br class="${t.brDesktop}">
                    better decisions<br class="${t.brMobile}">regarding revenue, customer<br class="${t.brDesktop}"><br class="${t.brMobile}">
                    experience, and overall efficiency.
                </p>
            </div>
            <div class="${t.contentBottom}">
                <div class="${t.contentBottomDiv}">
                    <h2 class="${t.title2}">10k+</h2>
                    <p class="${t.text2}">COMPANIES</p>
                </div>
                <div class="${t.contentBottomDiv}">
                    <h2 class="${t.title2}">314</h2>
                    <p class="${t.text2}">TEMPLATES</p>
                </div>
                <div class="${t.contentBottomDiv}">
                    <h2 class="${t.title2}">12m+</h2>
                    <p class="${t.text2}">QUERIES</p>
                </div>
            </div>
        </div>
        <img src="${D}" class="${t.imageDesktop}"/>
    </article>
`;document.querySelector("#app").innerHTML=`
    <main>
      ${y()}
    </main>
`;
