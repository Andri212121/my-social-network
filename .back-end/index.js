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
        ],
        totalCount: 0,
        error: null
    },
    profile: {
        items: [
            {
                aboutMe: null,
                contacts: {
                    facebook: null,
                    website: null,
                    twitter: null,
                    instagram: null,
                    youtube: null,
                    github: null,
                    mainLink: null
                },
                lookingForAJob: false,
                lookingForAJobDescription: null,
                name: 'Andrew',
                surname: 'Luchin',
                id: 1,
                location: 'Kiev',
                followers: '',
                education: 'The best college in Ukraine, VFK NAU',
                dayOfBirth: '21',
                monthOfBirth: '08',
                yearOfBirth: '2004',
                photos: {
                    small: null,
                    large: null
                }
            },
        ]
    }
}

app.get('/users/', (req, res) => {
    db.users.totalCount = db.users.items.length
    let page = req.query.page;
    let take = req.query.take;
    let dbCopy = JSON.parse(JSON.stringify(db));
    dbCopy.users.items = dbCopy.users.items.slice(page * take - take, page * take)
    res.json(dbCopy.users)
})

app.get('/profile/:userId', (req, res) => {
    db.users.totalCount = db.users.items.length
    let usersId = req.params.userId
    let dbCopy = JSON.parse(JSON.stringify(db));
    let user = dbCopy.profile.items.find(item => item.id === parseInt(usersId));
    res.json(user)
})



app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})