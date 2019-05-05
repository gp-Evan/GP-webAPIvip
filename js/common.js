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

/**
 * 获取该元素下一个兄弟元素
 * @param el
 * @returns {*}
 */
function getNextElementSibling(el) {
    while (el = el.nextSibling) {
        if (el.nodeType === 1) {
            return el;
        }
    }
    return null;
}

/**
 * 获取该元素上一个兄弟元素
 * @param el
 * @returns {*}
 */
function getPreviousElementSibling(el) {
    while (el = el.previousSibling) {
        if (el.nodeType === 1) {
            return el;
        }
    }
    return null;
}