type Context<T> = {
	name: string
	description: string
	tag: string
	alias?: Array<string>
	roles?: Array<T>
}

export default Context
