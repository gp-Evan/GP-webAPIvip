var box = my$('box');
var screen = getFirstElement(box);
var ul = getFirstElement(screen);
var ol = getLastElement(screen);

var arrLeft = getFirstElement(my$('arr'));
var arrRight = getLastElement(my$('arr'));

// 让 imgWidth  成为全局变量
var imgWidth = screen.offsetWidth;

// 第一步  根据图片数量，生成 ol中的序号
var count = ul.children.length;
for (var i = 0; i < count; i++) {
    var li = document.createElement('li');
    ol.appendChild(li);
    setInnerText(li, i + 1);
    // 给li注册点击事件
    // 第二步应该放到这
    // li.onclick=function(){};
    // 在循环里边注册，所以，应该定义成命名函数
    li.onclick = liClick;

    // 记录li对应的索引，通过  自定义属性的方式记录
    li.setAttribute('index', i);
}
ol.children[0].className = 'current';
// 第二步 给序号注册点击事件，动画切换图片

// 第三步  鼠标放到轮播图上，显示 左右按钮
box.onmouseenter = function () {
    my$('arr').style.display = 'block';
    clearInterval(timeId);
};
box.onmouseleave = function () {
    my$('arr').style.display = 'none';
    timeId = setInterval(function () {
        arrRight.click();
    }, 2000);
};
// 第四步  给左右箭头 注册点击事件
// 当页面刚进入的时候，索引为0
var index = 0;
// 当点击 li的时候，也要修改index

// 无缝滚动
// 获取 ul中的第一个li
var firstLi = ul.children[0];
// 复制 节点
var cloneLi = firstLi.cloneNode(true);
ul.appendChild(cloneLi);


arrRight.onclick = function () {
    // 切换之前，判断是否为克隆的最后一张图片
    if (index === count) {
        ul.style.left = 0;
        index = 0;
    }

    // if (index < count - 1) {
    // 此时总共有7张了
    index++;
    if (index < count) {
        // move(ul, -imgWidth * index);
        // 代码控制点击
        ol.children[index].click();
    } else {
        // 以动画的方式移动到克隆的最后一张图片
        move(ul, -imgWidth * index);
        for (var i = 0; i < count; i++) {
            ol.children[i].removeAttribute('class');
        }
        ol.children[0].className = 'current';
    }

};
arrLeft.onclick = function () {
    // 如果当前是 第一张，设置 到最后一张克隆的
    if (index === 0) {
        index = count;
        ul.style.left = -imgWidth * index + 'px';
    }
    index--;
    ol.children[index].click();

    // 到达最后一张之前
    /*if (index > 0) {
        index--;
        // move(ul, -imgWidth * index);
        ol.children[index].click();
    }*/

};


// 第五步  让轮播图自己动起来

// 使用定时器
// 控制 自动点击下一张
var timeId = setInterval(function () {
    arrRight.click();
}, 2000);


function liClick() {
    // 其它取消高亮，当前 高亮
    for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].removeAttribute('class');
    }
    this.className = 'current';

    // 切换对应索引的图片
    // 匀速移动到某个位置
    // 计算出这个位置的值
    // var imgWidth = screen.offsetWidth;
    //var index = parseInt(this.getAttribute('index'));  index 跟 全局index同步
    index = parseInt(this.getAttribute('index'));

    var target = -imgWidth * index;
    move(ul, target);

}