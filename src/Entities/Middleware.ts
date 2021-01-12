import Lifecycles from '../Enums/Lifecycles'
import MiddlewareContext from '../Interfaces/MiddlewareContext'

function Middleware({ lifecycle }: MiddlewareContext) {
	return function (constructor: Function) {
		constructor.prototype.lifecycle = lifecycle
		constructor.prototype.execute = (params: any) => constructor.prototype.emit(name, params)
	}
}

export { Middleware, Lifecycles }
