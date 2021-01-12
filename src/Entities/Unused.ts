function Unused() {
	return function (constructor: Function) {
		constructor.prototype.unused = true
	}
}

export default Unused
