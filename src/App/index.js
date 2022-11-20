import { Login } from '../Login/index.js'
import { Header } from '../Header/index.js'
import { Navigation } from '../Navigation/index.js'
import { Home } from '../Home/index.js'
import { Contacts } from '../Contacts/index.js'
import { getAuth, onAuthStateChanged } from "firebase/auth"

const auth = getAuth();

export const App = () => {
    const element = document.createElement('div')
    element.classList.add('app')

    const { pathname } = window.location

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // Show header
            // TODO: cache name day
            fetch('https://svatky.adresa.info/json')
                .then((response) => response.json())
                .then((data) => element.prepend(Header({ nameDay: data[0].name })))

            // Client side routing - show appropriate component with a change of pathname
            if (pathname == '/') {
                element.append(Home())
            } else if (pathname == '/contacts') {
                element.append(Contacts())
            }

            // Show navigation
            element.append(Navigation())
        } else if (!user){
            element.append(Login())
        }
      })

    return element
}

