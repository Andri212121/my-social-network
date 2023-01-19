const express = require('express')
const app = express()
const port = 3001

const db = {
    users: {
        items: [
            {
                id: 1,
                name: 'Andrew',
                surname: 'Luchin',
                photo: {
                    small: 'null',
                    large: 'null'
                },
                status: null,
                followed: false,
                location: 'Kiev',
                study: '',
                followers: '',
            },
            {
                id: 2,
                name: 'Kyla',
                surname: 'Huff',
                photo: {
                    small: 'null',
                    large: 'null'
                },
                status: null,
                followed: false,
                location: 'Kiev',
                study: '',
                followers: '',
            },
            {
                id: 3,
                name: 'Abbas',
                surname: 'Tate',
                photo: {
                    small: 'null',
                    large: 'null'
                },
                status: null,
                followed: false,
                location: 'Kiev',
                study: '',
                followers: '',
            },
            {
                id: 4,
                name: 'Neave',
                surname: 'Dickson',
                photo: {
                    small: 'null',
                    large: 'null'
                },
                status: null,
                followed: false,
                location: 'Kiev',
                study: '',
                followers: '',
            },
            {
                id: 5,
                name: 'Patricia',
                surname: 'Connolly',
                photo: {
                    small: 'null',
                    large: 'null'
                },
                status: null,
                followed: false,
                location: 'Kiev',
                study: '',
                followers: '',
            },
            {
                id: 6,
                name: 'Barney',
                surname: 'Winter',
                photo: {
                    small: 'null',
                    large: 'null'
                },
                status: null,
                followed: false,
                location: 'Kiev',
                study: '',
                followers: '',
            },
            {
                id: 7,
                name: 'Kelvin',
                surname: 'Pope',
                photo: {
                    small: 'null',
                    large: 'null'
                },
                status: null,
                followed: false,
                location: 'Kiev',
                study: '',
                followers: '',
            },
            {
                id: 8,
                name: 'Kaitlyn',
                surname: 'Blanchard',
                photo: {
                    small: 'null',
                    large: 'null'
                },
                status: null,
                followed: false,
                location: 'Kiev',
                study: '',
                followers: '',
            },
            {
                id: 9,
                name: 'Maia',
                surname: 'Thornton',
                photo: {
                    small: 'null',
                    large: 'null'
                },
                status: null,
                followed: false,
                location: 'Kiev',
                study: '',
                followers: '',
            },
            {
                id: 10,
                name: 'Owen',
                surname: 'Boyle',
                photo: {
                    small: 'null',
                    large: 'null'
                },
                status: null,
                followed: false,
                location: 'Kiev',
                study: '',
                followers: '',
            },
            {
                id: 11,
                name: 'Asad',
                surname: 'Dyer',
                photo: {
                    small: 'null',
                    large: 'null'
                },
                status: null,
                followed: false,
                location: 'Kiev',
                study: '',
                followers: '',
            },
            {
                id: 12,
                name: 'Tianna',
                surname: 'Cooke',
                photo: {
                    small: 'null',
                    large: 'null'
                },
                status: null,
                followed: false,
                location: 'Kiev',
                study: '',
                followers: '',
            },
            {
                id: 13,
                name: 'Briony',
                surname: 'Valencia',
                photo: {
                    small: 'null',
                    large: 'null'
                },
                status: null,
                followed: false,
                location: 'Kiev',
                study: '',
                followers: '',
            },
            {
                id: 14,
                name: 'Gregory',
                surname: 'Rosales',
                photo: {
                    small: 'null',
                    large: 'null'
                },
                status: null,
                followed: false,
                location: 'Kiev',
                study: '',
                followers: '',
            },
            {
                id: 15,
                name: 'Aine',
                surname: 'O\'Sullivan',
                photo: {
                    small: 'null',
                    large: 'null'
                },
                status: null,
                followed: false,
                location: 'Kiev',
                study: '',
                followers: '',
            },
            {
                id: 16,
                name: 'Zoe',
                surname: 'Blankenship',
                photo: {
                    small: 'null',
                    large: 'null'
                },
                status: null,
                followed: false,
                location: 'Kiev',
                study: '',
                followers: '',
            },
            {
                id: 17,
                name: 'Zarah',
                surname: 'O\'Reilly',
                photo: {
                    small: 'null',
                    large: 'null'
                },
                status: null,
                followed: false,
                location: 'Kiev',
                study: '',
                followers: '',
            },
            {
                id: 18,
                name: 'Jesse',
                surname: 'Oneill',
                photo: {
                    small: 'null',
                    large: 'null'
                },
                status: null,
                followed: false,
                location: 'Kiev',
                study: '',
                followers: '',
            },
            {
                id: 19,
                name: 'Callan',
                surname: 'Winters',
                photo: {
                    small: 'null',
                    large: 'null'
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
    let page = req.query.page;
    let take = req.query.take;
    let dbCopy = JSON.parse(JSON.stringify(db));
    dbCopy.users.items = dbCopy.users.items.slice(page * take - take, page * take)
    res.json(dbCopy.users)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})