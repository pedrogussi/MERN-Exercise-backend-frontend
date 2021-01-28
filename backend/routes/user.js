import express from 'express';
import User from '../models/user.models.js';

const router = express.Router();

router.route('/').get((req,res)=>{
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json({message: 'Something went wrong'}+err))
});

//Adding new User
router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
    .then(() => res.json({message: 'User added'}))
    .catch(err => res.status(400).json({message: 'Something went wrong'} + err))
});

export default router;

