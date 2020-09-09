export const sw = () => {
    console.log('Registering Now')
    if("serviceWorker" in navigator)
    {
        navigator.serviceWorker.register(`${process.env.PUBLIC_URL}/serviceworker.js`, {
            scope: '.'  })
        .then((resp) => console.log('Reponse', resp))
    }
    }