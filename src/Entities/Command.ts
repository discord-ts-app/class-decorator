import CommandContext from '../Interfaces/CommandContext'

function Command<R>({ name, description, tag, alias, roles }: CommandContext<R>) {
	return function (constructor: Function) {
		constructor.prototype.name = name
		constructor.prototype.description = description
		constructor.prototype.tag = tag
		constructor.prototype.alias = alias || []
		constructor.prototype.roles = roles || []
	}
}

export default Command
