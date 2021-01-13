import CommandContext from '../Interfaces/CommandContext'
import Context from '../Types/Command'

function Command<R>({ name, description, tag, alias, roles }: Context<R>) {
	return function (constructor: Function) {
		constructor.prototype.name = name
		constructor.prototype.description = description
		constructor.prototype.tag = tag
		constructor.prototype.alias = alias || []
		constructor.prototype.roles = roles || []
	}
}

export { Command, CommandContext }
