export const src = (path) => {

    try {
        return require(`@/assets/img/${path}`)
    } catch (e) {
        console.error(e)
        return path
    }

}