import MiddlewareContext from '../Interfaces/MiddlewareContext'

function Middleware(lifecycle: 'messageReceived' | 'commandReceived' | 'createDiscordClient' | 'starting' | 'commandLoaded' | 'eventLoaded' | 'middlewareLoaded') {
	return function (constructor: Function) {
		constructor.prototype.lifecycle = lifecycle
		constructor.prototype.execute = (params: any) => constructor.prototype.emit(name, params)
	}
}

export { Middleware, MiddlewareContext }
