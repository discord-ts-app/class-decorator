import { Message } from 'discord.js'

export default interface CommandContext {
	run(message: Message, args: Array<string>): Promise<void>
}
