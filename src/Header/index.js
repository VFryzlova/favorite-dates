import { Firebase } from '../firebase.js'
import { getAuth, signOut } from "firebase/auth"

const auth = getAuth()

export const Header = (props) => {
    const { nameDay } = props

    // Today's date
    const date = new Date(),
    dateFormatted = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear()

    const element = document.createElement('header')
    element.innerHTML = `
        <div class="today">
        <a href="/login">Logout</a>
            <h1 class="hi">Hello!</h1>
            <p class="date">It is ${dateFormatted}</p>
            <p class="nameDay">${nameDay} has a name-day</p>
            <input type="search" name="" id="" placeholder="Search.." />
        ` 

    element.querySelector('a').addEventListener('click', () => {
        signOut(auth)
            .then(() => { 
                window.location.pathname = '/login'
            })
    })

    return element
}