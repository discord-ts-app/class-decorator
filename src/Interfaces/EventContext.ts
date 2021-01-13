export default interface EventContext {
	run(...params: any): Promise<void>
}
