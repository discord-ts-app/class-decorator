export default interface MiddlewareContext {
	run(params?: any): Promise<void>
}
