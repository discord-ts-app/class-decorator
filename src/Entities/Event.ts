import Events from '../Enums/Events'
import EventContext from '../Interfaces/EventContext'

function Event(type: Events) {
	return function (constructor: Function) {
		constructor.prototype.name = type
	}
}

export { Event, EventContext }
