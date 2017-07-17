const assert = require('assert')
const obj1 = {
	a: {
		b: 1
	}
}
const obj2 = {
	a: {
		b: 2
	}
}
const obj3 = {
	a: {
		b: 1
	}
}

const obj4 = Object.create(obj1);
//用==进行比较
// assert.deepEqual(obj1, obj4, 'test assert');
// assert.deepStrictEqual({ a: 1 }, { a: '1' });
const date = new Date();
const object = {};
const fakedate = {};

// Object.setPrototypeOf(fakedate, Date.prototype);

// assert.deepStrictEqual(object, fakedate);
// console.log(date)
// assert.deepStrictEqual(date, fakedate);

// assert.doesNotThrow(
//   () => {
//     throw new TypeError('Wrong value');
//   },
//   TypeError,
//   'Whoops'
// );

assert.equal({ a: { b: 1 } }, { a: { b: 1 } });