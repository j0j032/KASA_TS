export function stopPropagation(cb?: () => void) {
    if (!cb) {
        return undefined
    }
    return (e: { stopPropagation: () => void }) => {
        e.stopPropagation()
        console.log(e)
        cb()
    }
}

export function prevent(cb?: () => void) {
    if (!cb) {
        return undefined
    }
    return (e: { preventDefault: () => void }) => {
        e.preventDefault()
        cb()
    }
}
