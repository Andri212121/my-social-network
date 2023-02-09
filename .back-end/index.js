const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()
const port = 3001

app.use(cors({
    origin: "http://localhost:3000",
    method: ["GET", "POTS", "PUT", "DELETE"],
    credentials: true,
}))

app.use(cookieParser())

const db = {
    users: {
        items: [
            {
                id: 1,
                name: 'Andrew',
                lastname: 'Luchin',
                surname: 'Luchin',
                photo: {
                    small: 'null',
                    large: 'null'
                },
                status: null,
                followed: false,
                location: 'Kiev',
                study: '',
                followers: [2]
            },
            {
                id: 2,
                name: 'da',
                lastname: 'da',
                surname: 'a',
                photo: {
                    small: 'null',
                    large: 'null'
                },
                status: null,
                followed: false,
                location: 'Kiev',
                study: '',
                followers: [1]
            }
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
                id: 2,
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
    for(let i = 0; i < dbCopy.users.items.length; i++) {
        let find = false
        for(let j = 0; j < dbCopy.users.items[i].followers.length; j++){
            if(dbCopy.users.items[i].followers[j] === parseInt(req.cookies.userId)){
                find = true
                break;
            }
        }
        dbCopy.users.items[i].followed = find;
    }

    dbCopy.users.items = dbCopy.users.items.slice(page * take - take, page * take)
    res.json(dbCopy.users)
})

app.get('/profile/:userId', (req, res) => {
    let usersId = req.params.userId
    let dbCopy = JSON.parse(JSON.stringify(db));
    let user = dbCopy.profile.items.find(item => item.id === parseInt(usersId));
    res.json(user)
})

app.get('/auth/me', (req, res) => {
    res.cookie('userId', '1');
    res.status(200).json('all good')
})

// app.post('/follow/:userId', (req, res) => {

// })
// app.delete('/follow/:userId', (req, res) => {

// })

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})