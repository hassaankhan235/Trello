export const sw = () => {
    console.log('Registering Now')
    navigator.serviceWorker.register(`${process.env.PUBLIC_URL}/serviceworker.js`)
    .then((resp) => console.log('Reponse', resp))
}