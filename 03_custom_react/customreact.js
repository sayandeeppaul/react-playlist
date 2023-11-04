const reactElement = {
    type:'a',
    props:{
        href :'https://google.com',
        target:'_blank',
        class:'link',
        id:'google',
        title:'demo'
    },
    children : "click me to open google"
}

// function customRender(reactElement,mainContainer) {
//     const domElement = document.createElement(reactElement.type)
//     domElement.innerHTML = reactElement.children
//     domElement.setAttribute("href",reactElement.props.href)
//     domElement.setAttribute("target",reactElement.props.target) 
//     mainContainer.appendChild(domElement)
// }

function customRenderOptimize(reactElement,mainContainer) {
        const domElement = document.createElement(reactElement.type)
        domElement.innerHTML = reactElement.children
        for (const prop in reactElement.props) {
            domElement.setAttribute(prop,reactElement.props[prop])
        }
        mainContainer.appendChild(domElement)
}

const mainContainer = document.querySelector("#root")
// customRender(reactElement,mainContainer)

customRenderOptimize(reactElement,mainContainer)
