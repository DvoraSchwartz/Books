let PORT = process.env.PORT || 4000
const basicApi = `http://localhost:${PORT}/`;

// async function callMyServer() {
//     try {
//         return await fetch(basicApi)
//             .then(res => { return res.json() })
//             .then(result => { return result.message })

//     }
//     catch (err) {
//         console.log(err)
//     }
// }
async function getAllBooks() {
    try {
        return await fetch(`${basicApi}books`, {
            headers: { 'Content-Type': 'application/json' }
        })

            .then(res => { return res.json() })
            .then(result => { return result.data })

    }
    catch (err) {
        console.log(err)
    }
}
async function postBook(newBook) {
    try {
        return await fetch(`${basicApi}books`,
            {
                method: "POST",
                body: JSON.stringify(newBook),
                headers: { 'Content-Type': 'application/json' }

            })
            .then(res => { return res.json() })

    }
    catch (err) {
        console.log(err)
    }
}
export {
    getAllBooks,
    postBook
}