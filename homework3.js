const anna = function (num1,num2,num3) {
	return num1 + num2 + num3;
};
const anna2 = anna(1,2,3);

const orange = function () {
	return 5;
};
const shlor = orange();

const lemon = function (banana, peel) {
	console.log(banana + peel);
};
const malina = lemon(5,8);

const blueberry = function (e,f,g) {
	if (e.length>f.length && e.length>g.length) {
	return e;
}
	else if (f.length>e.length && f.length>g.length) {
	return f;
}
	else if (g.length>e.length && g.length>f.length) {
	return g;
} 
};
const strawberry = blueberry ("blueberries", "are", "tasty");

const ananas = function (a,b) {
	if (a===b) {
	return 0;
} 
	else if (a>b) {
	return 1;
}
	else if (b>a) {
	return -1;
}
};
const pineapple = ananas (5,6);

const multiplication = function (a,b) {
	return a*b;
};
const mult = multiplication (7,8);

const division = function (a,b) {
	return a/b;
};
const div = division (81,9);

const triangleArea = function (base, height) {
	return division(multiplication(base, height),2);
};
const area = triangleArea(15,3);

const numLength = function(a){
	b = a+"";
	return b.length;
};
const num = numLength(789);

const aFunction = function (a,b,c) {
	if (a.length + b.length>c) {
	return 1;
}
	else {
	return -1; 
}
};
const bFunction = aFunction ("anna", "harutyunyan", 9090090909);

const runStuff = function (a,b,c) {
	if (a==="rectangle") {
	return multiplication(b,c);
}
	else if (a==="triangle") {
	return triangleArea(b,c);
}
	else {
	return -1;	
}
};
const result = runStuff ("triangle", 8, 6);