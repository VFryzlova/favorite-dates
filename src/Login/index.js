import { Firebase } from '../firebase.js'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

const auth = getAuth()

export const Login = () => {
    const element = document.createElement('main')
    element.classList.add('login')
    element.innerHTML = `
        <h1>Login</h1>
        <form>
            <label>
                Your name <input type="text" name="name" />
            </label>
            <label>
                Email <input type="email" name="email" />
            </label>
            <label>
                Password <input type="password" name="password" />
            </label>
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