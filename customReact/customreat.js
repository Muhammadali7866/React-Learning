function customRender (reactElement,container){
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children,
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target),
    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop of reactElement.props){
        if(prop === "children") continue
        domElement.setAttributes(prop,reactElement.props[prop])

    }
    container.appendChild(domElement)
}

const reactElement = {
    type:'a',
    props: {
        href:'https://google.com',
        target:'_blank',
    },
    children : 'Clickme to visit  google'
}

const mainContainer = document.querySelector("#root")

customRender(reactElement,mainContainer)