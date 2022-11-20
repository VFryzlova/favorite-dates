export const Header = () => {
    const element = document.createElement('header')

    // Today's date
    const date = new Date(),
    dateFormatted = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear()

    // Today's name day
    fetch('https://svatky.adresa.info/json')
        .then((response) => response.json())
        .then((data) => element.innerHTML = `
                <nav>
                    <a href="/register">Register</a>
                    <a href="/login">Login</a>
                </nav>

                <div class="today">
                    <h1 class="hi">Hi Vendy!</h1>
                    <p class="date">It is ${dateFormatted}</p>
                    <p class="nameDay">${data[0].name} has a name-day</p>
                    <input type="search" name="" id="" placeholder="Search.." />
                </div>
            `
        )

    return element
}