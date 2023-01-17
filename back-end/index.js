const express = require('express')
const app = express()
const port = 3001

let db = {
    users:{
        items: [
            {
                id: 1,
                name: 'Andrew',
                surname: 'Luchin',
                photo:{
                    small: null,
                    large: null
                },
                status: null,
                followed: false,
                location: 'Kiev',
                study: '',
                followers: '',
            },
        ],
        totalCount: 0,
        error: null
    }
}

app.get('/users', (req, res) => {
    db.users.totalCount = db.users.items.length
    res.json(db.users)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})