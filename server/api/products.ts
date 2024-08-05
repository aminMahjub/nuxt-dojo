export default defineEventHandler(async (event) => {
    const {} = getQuery(event)
    const {} = readBody(event)

    return {
        message: "Hi"
    }
})
