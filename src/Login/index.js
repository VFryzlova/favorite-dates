import { Firebase } from '../firebase.js'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

const auth = getAuth()

export const Login = () => {
    const element = document.createElement('main')
    element.innerHTML = `
        <h1>Login</h1>
        <form>
            <label for="name">Your name</label>
            <input type="text" name="name" />
            <label for="email">Email</label>
            <input type="email" name="email" />
            <label for="password">Password</label>
            <input type="password" name="password" />
            <button class="primary">Log in</button>
        </form>
    `
    const form = element.querySelector('form')
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        const email = form.email.value,
            password = form.password.value

        signInWithEmailAndPassword(auth, email, password)
            .then(() => { 
                window.location.pathname = '/'
            })
      })

    return element
}