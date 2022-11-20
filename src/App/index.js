import { Header } from '../Header/index.js'
import { Navigation } from '../Navigation/index.js'
import { Home } from '../Home/index.js'
import { Register } from '../Register/index.js'
import { Login } from '../Login/index.js'

export const App = () => {
    const element = document.createElement('div')
    element.classList.add('app')

    // Append header
    element.append(Header())

    // Client side routing - show appropriate component with a change of pathname
    const { pathname } = window.location

    if (pathname == '/') {
        element.append(Home())
    } else if (pathname == '/register') {
        element.append(Register())
    } else if (pathname == '/login') {
        element.append(Login())
    }

    // Append navigation
    element.append(Navigation())

    return element
}

