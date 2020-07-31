/*
 * @Author: your name
 * @Date: 2020-07-29 20:08:05
 * @LastEditTime: 2020-07-29 20:58:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /javaWebLearning/谷粒音乐/exercise/js/tools.js
 */
(function (w) {
    //给window增加一个tools属性,类型为对象
    w.tools = {}
    //给tools对象里增加两个属性，类型为方法
    tools.addClass = (node, className) => {
        //\b在正则中表示单词的分界处
        let reg = new RegExp('\\b' + className + '\\b')
        if (!reg.test(node.className)) {
            /* 
            className 获取或设置指定元素的class属性的值。
              1、获取属性值：Element.className
              2、设置属性值：Element.className = classname
              返回一个字符串
            */
            //如果指定节点的class里没有匹配到叫className的类，则给它增加一个
            node.className += (' ' + className)

        }
    }

    tools.removeClass = (node, className) => {

        if (node.className) { //如果指定节点class属性不为空
            let reg = new RegExp('\\b' + className + '\\b')
            //取出包含所有的class名字的字符串
            let classes = node.className
            //把字符串中的对应字符串替换为空格
            node.className = classes.replace(reg, '')
            //如果替换完后节点的class属性只剩下空格了，则删除class属性
            if (/^\\s*$/g.test(node.className)) {
                node.removeAttribute('class')
            }
        } else { //如果指定节点class属性为空
            node.removeAttribute('class')
        }
    }
})(window)