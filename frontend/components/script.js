export const grids = document.querySelectorAll('.grid');
export const headings = document.querySelectorAll('.main-text .categories .text')

export const enterScreen = index => {
    const grid = grids[index]
    const heading = headings[index]
    const gridColumns = grid.querySelectorAll('.column')

    grid.classList.add('active')

    gridColumns.forEach(element => {
        element.classList.remove('before', 'after')
    })

    heading.classList.remove('before', 'after')
}

export const exitScreen = (index, exitDelay) => {
    const grid = grids[index]
    const heading = headings[index]
    const gridColumns = grid.querySelectorAll('.column')

    gridColumns.forEach(element => {
        element.classList.add('after')
    })

    heading.classList.add('after')

    setTimeout(() => {
        grid.classList.remove('active')
    }, exitDelay)
}

export let setupAnimationCycle = ({ timePerScreen, exitDelay }) => {
    const cycleTime = timePerScreen + exitDelay
    let nextIndex = 0

    function nextCycle() {
        const currentIndex = nextIndex

        enterScreen(currentIndex)

        setTimeout(() => exitScreen(currentIndex, exitDelay), timePerScreen)

        nextIndex = nextIndex >= grids.length - 1 ? 0 : nextIndex + 1
    }

    nextCycle()

    setInterval(nextCycle, cycleTime)
}

setupAnimationCycle = () =>({
    timePerScreen: 2000,
    exitDelay: 200 * 7
})


