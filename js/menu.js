const template = document.createElement("div")
template.innerHTML =
    `<div class="list-header">
    <ul>
        <li><a id="index" href="../../index.html" onClick="pageReference('index')">Home</a><fa-icon [icon]="faAddressCard"></fa-icon></li>
        <li><a id="java" href="/app/pages/java/java.html" onClick="pageReference('java')">Java</a><fa-icon [icon]="faGraduation"></fa-icon></li>
        <li><a id="python" href="/app/pages/python/python.html" onClick="pageReference('python')">Python</a><fa-icon [icon]="faTools"></fa-icon></li>
        <li><a id="javascript" href="/app/pages/js/js.html" onClick="pageReference('js')">JavaScript</a><fa-icon [icon]="faJob"></fa-icon></li>
        <li><a id="cplusplus" href="/app/pages/cplusplus/cplusplus.html" onClick="pageReference('cplusplus')">C++</a><fa-icon [icon]="faCurriculum"></fa-icon></li>
    </ul>
</div>`

class Menu extends HTMLElement {
    constructor() {
        super()
        this.appendChild(template)
    }
}

customElements.define("menu-principal", Menu);

const pageReference = (pageName) => {
    let ref = window.location.href
    if (ref.includes(pageName)) {
        let linkElement = document.querySelector("#" + pageName)
        linkElement.setAttribute("href", "#about-me")
    }
}