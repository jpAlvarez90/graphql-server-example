import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/graphqltest')
.then(db => {
    console.log('Database is connected')
})
.catch(err => {
    console.error(err)
})