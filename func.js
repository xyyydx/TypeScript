var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age, money) {
        this.name = name;
        this.age = age;
        this.money = money;
    }
    return Person;
}());
var Son = /** @class */ (function (_super) {
    __extends(Son, _super);
    // name继承成了Person的name 所以Son里就有name:'111'
    function Son(name, age, sex, money) {
        var _this = _super.call(this, name, age, money) || this;
        _this.sex = sex;
        _this.age = age;
        _this.sex = '男';
        return _this;
    }
    return Son;
}(Person));
var s = new Son('111', 12, "男", 1000);
console.log(s);
// console.log(s.age) 报错
