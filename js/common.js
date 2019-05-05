/**
 * 封装通过id获取元素
 * @param id
 * @returns {Element}
 */
function my$(id) {
    return document.getElementById(id);
}

/**
 * 获取元素的第一个子元素
 * @param ele
 * @returns {*}
 */
function getFirstElement(ele) {
    var node, nodes = ele.childNodes, i = 0;
    while (node = nodes[i++]) {
        if (node.nodeType === 1) {
            return node;
        }
    }
    return null;
}

/**
 * 获取 元素的最后一个子元素
 * @param ele
 * @returns {*}
 */
function getLastElement(ele) {
    var node, nodes = ele.childNodes, i = nodes.length - 1;
    while (node = nodes[i--]) {
        if (node.nodeType === 1) {
            return node;
        }
    }
    return null;
}