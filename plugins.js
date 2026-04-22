export default {
    install(Vue) {
        //定义全局指令，自动获取焦点
        Vue.directive('fbind', {
            inserted(el) {
                el.focus();
            }
        })
    }
}