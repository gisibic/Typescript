//array
var arr = [1, 2, 3, 4, 5];
var arr2 = ["a", "b", "c", "d", "e"];
//Tuples
var Tuples = ["a", 1, 2];
//enum
var ROLE;
(function (ROLE) {
    ROLE[ROLE["ADMIN"] = 0] = "ADMIN";
    ROLE[ROLE["USER"] = 1] = "USER";
})(ROLE || (ROLE = {}));
var role = ROLE.ADMIN;
var STATUS_CODE;
(function (STATUS_CODE) {
    STATUS_CODE[STATUS_CODE["SUCSES"] = 200] = "SUCSES";
    STATUS_CODE[STATUS_CODE["CLIENT"] = 400] = "CLIENT";
    STATUS_CODE[STATUS_CODE["ERROR"] = 500] = "ERROR";
})(STATUS_CODE || (STATUS_CODE = {}));
var code = STATUS_CODE.SUCSES;
var ShowInfo = function (name, age) {
    if (typeof name == "string") {
        console.log(name.toUpperCase);
    }
};
ShowInfo("abc", "20");
