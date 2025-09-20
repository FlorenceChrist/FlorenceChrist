// 获取随机整数的函数
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 获取随机浮点数的函数
function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

// 从数组中随机选择一个元素
function getRandomFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// 生成随机字符串
function getRandomString(length = 8) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

// 示例用法
console.log(getRandomInt(1, 100)); // 1到100之间的随机整数
console.log(getRandomFloat(0, 1)); // 0到1之间的随机浮点数
console.log(getRandomFromArray(['red', 'green', 'blue'])); // 随机颜色
console.log(getRandomString(10)); // 10位随机字符串
