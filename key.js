function func(a, b) {
    return a + b;
}
func(1, 2);
func('1', '2');
var qew = ['1', '2', '3', true];
var qwer = [1, 23, 2];
var io = {
    name: '123',
    id: 12,
    children: [],
    title: '1123'
};
var ss = function (a, b) {
    return a + b;
};
console.log(ss('1', '2'));
var arr = {
    title: '123',
    sex: '男'
};
var fa = /** @class */ (function () {
    function fa() {
        this.sex = '男';
    }
    return fa;
}());
var sfa = new fa();
// delete sfa.sex
console.log(sfa);
