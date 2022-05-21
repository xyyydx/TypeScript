// 限制字符串
var a = 'a';
// 限制数字
var b = 1;
// 限制是布林带
var c = true;
// 限制一个数组
var d = [1, 2, 3, 4, 5];
var e = [1, 2, 3, 4, 5, 6, true, '123'];
// 任意值
var f = [1, '2', true];
// 函数得限制
var g = function (a, b) {
    return a + b;
};
// 元组tuple(只有两项)
var h = ['1', 2];
console.log(h);
// 枚举
var color;
(function (color) {
    color[color["Red"] = 10] = "Red";
    color[color["Green"] = 11] = "Green";
    color[color["Yellow"] = 12] = "Yellow";
})(color || (color = {}));
console.log(color.Red);
console.log(color.Green);
console.log(color[10]);
