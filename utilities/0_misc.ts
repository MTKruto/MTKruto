export function drop<T>(promise: Promise<T>) {
    promise.then().catch()
}
