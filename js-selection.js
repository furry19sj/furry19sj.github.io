// 检测用户代理以判断设备类型
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// 获取当前页面的文件名（例如：index.html 或 tools.html）
function getFileName() {
    var path = window.location.pathname;
    var fileName = path.substring(path.lastIndexOf('/') + 1);
    return fileName.replace('.html', '');
}

// 创建一个新的link元素
var link = document.createElement('link');
link.rel = 'stylesheet';

// 根据设备类型和文件名设置href属性
var fileName = getFileName();
if (isMobileDevice()) {
    link.href = './js/' + fileName + '/' + fileName + '-ph.js';
} else {
    link.href = './js/' + fileName + '/' + fileName + '-pc.js';
}

// 将link元素添加到head标签的末尾
document.head.appendChild(link);
