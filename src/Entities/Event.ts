import Events from '../Enums/Events'
import EventContext from '../Interfaces/EventContext'
import Context from '../Types/Event'

function Event({ type }: Context) {
	return function (constructor: Function) {
		constructor.prototype.name = type
	}
}

export { Event, Events, EventContext }
