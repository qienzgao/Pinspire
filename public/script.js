const grids = grids? grids : document.querySelectorAll('.grid')
const headings = headings? headings : document.querySelectorAll('.welcome-inspiration .wrapper .text')

const onScreen = (idx) => {
    const grid = grids[idx]
    const heading = headings[idx]
    const gridColumns = grid.querySelectorAll('.column')

    grid.classList.add('active')

    gridColumns.forEach(ele => {
        ele.classList.remove('animate-before', 'animate-after')
    })


    heading.classList.remove('animate-before', 'animate-after')
}

const offScreen = (idx, delay) => {
    const grid = grids[idx]
    const heading = headings[idx]
    const gridColumns = grid.querySelectorAll('.column')

    gridColumns.forEach(ele => {
        ele.classList.add('animate-after')
    })

    heading.classList.add('animate-after')

    setTimeout(() => {
        grid.classList.remove('active')
    }, delay)
}

const animate = ({ timePerScreen, delay }) => {
    const cycleTime = timePerScreen + delay
    let nextIndex = 0

    let nextCycle = () => {
        const currentIndex = nextIndex

        onScreen(currentIndex)

        setTimeout(() => offScreen(currentIndex, delay), timePerScreen)

        nextIndex = nextIndex >= grids.length - 1 ? 0 : nextIndex + 1
    }

    nextCycle()

    setInterval(nextCycle, cycleTime)
}

animate({
    timePerScreen: 5000,
    delay: 1400 
})


