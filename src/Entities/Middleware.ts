import Lifecycles from '../Enums/Lifecycles'
import MiddlewareContext from '../Interfaces/MiddlewareContext'
import Context from '../Types/Middleware'

function Middleware({ lifecycle }: Context) {
	return function (constructor: Function) {
		constructor.prototype.lifecycle = lifecycle
		constructor.prototype.execute = (params: any) => constructor.prototype.emit(name, params)
	}
}

export { Middleware, Lifecycles, MiddlewareContext }
