//const db = require('../../../models');
const {Router, request} = require('express');
const userController = require('../../../controllers/userController');

// Create router to use verbs HTTP
const router = router(); // method router express

router.get("/", userController.getAllUsers);

router.get("/:userId", userController.getUser);

router.post("/", userController.createUser);

router.put("/:userId", userController.updateUser);

router.delete("/:userId", userController.deleteUser);

/*const { restart } = require('nodemon');
const router = Router();

//Method GET

router.get('/', (req, res)=> {
    res.send({Title: 'Hello USERS'});
});


//Methos GET -- All users
router.get('/', async (req, res)=> {
    try{
        let users = await db.User.findAll();
        res.status(200).send({Data:users,Msg:'Success'});
    } catch(error) {
        res.status(400).send({Data:null,Msg:'Users error'});
    }
});

router.get('/:id', async (req, res)=> {
    try {
        let id = req.params.id;
        let user = db.User.findByPk(id);
        res.status(200).send({Data:user,Msg:'Success'});
    }catch(error) {
        res.status(400).send({Data:null,Msg:'Users Error'});
    }
});
//Method PUT - Update
router.put('/:id', async (req, res)=> {
    try{
        let id = req.params.id;
        let {name, email, password} = req.body;
        let user = await db.User.update(
            {name,email,password},{where:{id}}
        );
        res.status(200).send({Data:user,Msg: 'User update'});
    }catch(error) {
        res.status(400).send({Data:null,Msg:'Error updating user'});
    }
});
// Method Delete
router.delete('/:id', async (req, res)=> {
    try{
        let id = req.params.id;
        let user = await db.User.destroy({
            where:{id}
        });
        res.status(200).send({Data:user,Msg: 'User deleted'});
    }catch(error) {
        res.status(400).send({Data:null,Msg: 'Error deleting users'});
    }
});
//Method POST
router.post('/', async (req, res)=> {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    try {
        await db.User.create({
            name,
            email,
            password,
        });
        res.status(200).send({Title: 'User created'});
    }catch(error) {
        res.status(400).send({Msg: 'User Not created'});
    }
})*/
module.exports = router;