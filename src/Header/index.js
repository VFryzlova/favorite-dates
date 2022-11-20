export const Header = () => {
    const element = document.createElement('header')
    element.innerHTML = `
        <nav>
            <a href="/register">Register</a>
            <a href="/login">Login</a>
        </nav>

        <div class="today">
            <h1 class="hi">Hi Vendy!</h1>
            <p class="date">It is 12.12.2022</p>
            <p>has a name-day</p>
            <input type="search" name="" id="" placeholder="Search.." />
        </div>
    `
    return element
}