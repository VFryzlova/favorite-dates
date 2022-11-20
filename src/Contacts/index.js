import { getFirestore, collection, getDocs } from 'firebase/firestore'
const db = getFirestore(),
	contactsColRef = collection(db, 'contacts')

export const Contacts = () => {
    const element = document.createElement('main')
    element.innerHTML = `
        <h1>Contacts</h1>
        <div class="list"></div>
    `

    const getContacts = async () => {
        const list = element.querySelector('.list')
        const querySnapshot = await getDocs(contactsColRef);
        querySnapshot.forEach((doc) => {
            const { firstName, lastName } = doc.data()
            list.innerHTML = `
                <div data-id='${doc.id}' class="contact-row">
                    <div class="contact"><img src="" class="profile-picture">${firstName + ' ' + lastName}</div>
                </div>
            `
        })
    }

    getContacts ()

    return element
}