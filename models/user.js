const mongoose = require('mongoose')


mongoose.connect('mongodb+srv://mohamad:SkPmPPqhPSwfPROe@admin.jcgha5w.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then( () => console.log('Successfully Connected To MongoDB'))
.catch( err => console.log(err))

const userSchema =  new mongoose.Schema({
    username: {
        type: String,
        
    },
    email: {
      type: String,
 
    },
    password: {
        type: String,
      
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User;