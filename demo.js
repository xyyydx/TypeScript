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
// null和undefined
var derm = null;
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
    color[color["Monday"] = 10] = "Monday";
    color[color["Tuesday"] = 11] = "Tuesday";
    color[color["Wednesday"] = 12] = "Wednesday";
    color[color["Thursday"] = 13] = "Thursday";
    color[color["Friday"] = -1] = "Friday";
    color[color["Saturday"] = 0] = "Saturday";
    color[color["weekday"] = 1] = "weekday";
    // console.log(color[1]) weekday
})(color || (color = {}));
// 枚举初始值是0 如果中途有赋值从赋值开始
var color1;
(function (color1) {
    color1[color1["Monday"] = 0] = "Monday";
    color1[color1["Tuesday"] = 10] = "Tuesday";
    color1[color1["Wednesday"] = 11] = "Wednesday";
    color1[color1["Thursday"] = 12] = "Thursday";
    color1[color1["Friday"] = 13] = "Friday";
    color1[color1["Saturday"] = 14] = "Saturday";
    color1[color1["weekday"] = 15] = "weekday";
})(color1 || (color1 = {}));
// 如果有重复得在赋值的后面两边才会想等
var color2;
(function (color2) {
    color2[color2["Monday"] = 0] = "Monday";
    color2[color2["Tuesday"] = 1] = "Tuesday";
    color2[color2["Wednesday"] = 2] = "Wednesday";
    color2[color2["Thursday"] = 3] = "Thursday";
    color2[color2["Friday"] = 0] = "Friday";
    color2[color2["Saturday"] = 1] = "Saturday";
    color2[color2["weekday"] = 2] = "weekday"; //2      true
    // console.log(color2[1]==='Tuesday')false
})(color2 || (color2 = {}));
// 每个成员都必须有都要有值
var color3;
(function (color3) {
    color3["a"] = "1";
    color3["b"] = "1";
})(color3 || (color3 = {}));
// void
function add() {
    16 + 1;
}
