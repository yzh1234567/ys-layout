import YsLayout from "./components/layout/index.vue"

const components=[YsLayout]

function install(app){
    components.forEach(component=>{
        app.component(component.name,component)
    })
}

// if(typeof window !=='undefined' && window.app){
//     install(window.app)
// }



export default {
    install,
    YsLayout
}

export {
    YsLayout
}
