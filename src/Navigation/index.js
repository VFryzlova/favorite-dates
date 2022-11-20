export const Navigation = () => {
    const element = document.createElement('nav')
    element.classList.add('nav-bottom')
    element.innerHTML = `
        <a href="/">H</a>
        <a href="/contacts">C</a>
        <button class="add primary">+</button>
        <a href="/events">E</a>
        <a href="/presents">P</a>
    `
    return element
}