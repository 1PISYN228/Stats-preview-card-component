import "./styles/global.scss"
import content from "./layout/Main"



document.querySelector("#app").innerHTML = `
    <main>
      ${content()}
    </main>
`