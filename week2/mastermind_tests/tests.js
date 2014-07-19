// QUnit.module permet de créer des groupes de tests ayant pour nom la chaîne de caractères passée en arguments. //
QUnit.module("test ");
//QUnit.test(" nom_du_test", function() {} Permet de lancer un test.
QUnit.test("isEven()", function () {
	//On lance un test sur la fonction isEven() avec pour argument 0. Si vraie alors on imprime "true succeeds"
	ok(isEven(0), "true succeeds");
	ok(isEven(2), "is fun");
	ok(isEven(-4), "is mega cool");
});
QUnit.module("fonction computed");
QUnit.test("computed()", function() {

});
