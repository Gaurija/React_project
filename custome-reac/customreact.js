 function customerRender(reactElemnt,container){
    
    /*
    const domElement =document.createElement
    (reactElemnt.type)
 
    domElement.innerHTML = reactElemnt.childern
    domElement.setAttribute('href',reactElemnt.props.href)

    domElement.setAttribute('href',reactElemnt.props.target)

    container.appendChild(domElement) */


    const domElement =document.createElement
    (reactElemnt.type)

    domElement.innerHTML = reactElemnt.childern
    for(const prop in reactElemnt.props){
        if (prop == 'children') continue ;
        domElement.setAttribute(prop,reactElemnt.props[prop])
    }
    container.appendChild(domElement)
}

 
 
 const reactElemnt={
type:'a',
props:{

    href:'https://google.com',
    target: '_blank'
},
childern :'click me to visit google'

 }
 
 const mainContainer =document.querySelector('#root')

customerRender(reactElemnt,mainContainer)