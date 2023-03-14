export const getTooltipPosition = (position, parent, child) => {
    const windowWidth = window.innerWidth
    if (position === 'bot') {
        const top = parent.getBoundingClientRect().top
        const heightFather = parent.offsetHeight
        const bottom = (window.innerHeight - top - heightFather)
        const heightChild = child.offsetHeight
        if ( bottom < heightChild)
            return 'top'
        else
            return 'bot'
    }
    if (position === 'top') {
        const top = parent.getBoundingClientRect().top
        const heightChild = child.offsetHeight
        if (top < heightChild)
            return 'bot'
        else
            return 'top'
    }
    if (position === 'left') {
        const left = parent.getBoundingClientRect().left
        const widthChild = child.offsetWidth
        if (left < widthChild)
            return 'right'
        else
            return 'left'
    }
    if (position === 'right') {
        const left = parent.getBoundingClientRect().left
        const widthFather = parent.offsetWidth
        const widthChild = child.offsetWidth
        console.log(widthChild)
        if (windowWidth - left - widthFather < widthChild)
            return 'left'
        else
            return 'right'
    }
}