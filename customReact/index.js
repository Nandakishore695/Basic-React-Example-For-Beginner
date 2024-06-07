// html object 
const reactElementObject = {
    type : 'a',
    props : {
        href : "https://google.com",
        traget : "_blank"
    },
    children : "Click to vist google"
}

const renderElement = document.querySelector("#root"); // id

function customRender(reactElement, render){
    const renderDomElement = document.createElement(reactElement.type);
    renderDomElement.innerHTML = reactElement.children;
    renderDomElement.setAttribute('href',reactElement.props.href);
    renderDomElement.setAttribute('traget',reactElement.props.traget);
    render.appendChild(renderDomElement);
}
customRender(reactElementObject, renderElement ); // invoke function