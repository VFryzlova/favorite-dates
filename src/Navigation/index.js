export const Navigation = () => {
    const element = document.createElement('nav')
    element.classList.add('nav-bottom')
    element.innerHTML = `
        <a href="/">Home</a>
    `
    return element
}