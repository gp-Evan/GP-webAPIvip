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

/**
 * 获取元素里边的文本
 * @param ele
 * @returns {*}
 */
function getInnerText(ele) {
    return ele.innerText ? ele.innerText : ele.textContent;
}

/**
 * 设置元素中的文本
 * @param el
 * @param content
 */
function setInnerText(el, content) {
    if (el.innerText) {
        el.innerText = content;
    } else {
        el.textContent = content;
    }
}

/**
 * 添加事件监听
 * @param el
 * @param eventName
 * @param fn
 */
function addEventListener(el, eventName, fn) {
    if (el.addEventListener) {
        el.addEventListener(eventName, fn);
    } else if (el.attachEvent) {
        el.attachEvent('on' + eventName, fn);
    } else {
        el['on' + eventName] = fn;
    }
}

/**
 * 解除事件监听
 * @param el
 * @param eventName
 * @param fn
 */
function removeEventListener(el, eventName, fn) {
    if (el.removeEventListener) {
        el.removeEventListener(eventName, fn);
    } else if (el.detachEvent) {
        el.detachEvent('on' + eventName, fn);
    } else {
        el['on' + eventName] = null;
    }
}

/**
 * 获取浏览器 滚动出去的距离
 * @returns {{scrollLeft: number, scrollTop: number}}
 */
function getScroll() {
    return {
        left: document.documentElement.scrollLeft || document.body.scrollLeft,
        top: document.documentElement.scrollTop || document.body.scrollTop
    }
}

/**
 * 获取浏览器距离页面左上角的距离
 * @param e
 * @returns {{pageX: *, pageY: *}}
 */
function getPage(e) {
    return {
        x: e.pageX || e.clientX + getScroll().scrollLeft,
        y: e.pageY || e.clientY + getScroll().scrollTop
    }

}