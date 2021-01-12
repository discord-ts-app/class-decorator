import Events from '../Enums/Events'
import EventContext from '../Interfaces/EventContext'

function Event({ type }: EventContext) {
	return function (constructor: Function) {
		constructor.prototype.name = type
	}
}

export { Event, Events }
