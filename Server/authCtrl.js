const require bcrypt = require('bcryptjs');

module.exports = {
    register: (req, res) => {
        const db = req.app.get('db');
        const {name, user} = req.body;
        var pwd = bcrypt.hashSync(user.password, 10);
        user.password = pwd;
        db.add_user([name, pwd])
            .catch(err =>{
                res.status(500).send(err);
            })
    },
    login: (req, res)=>{
        const db = req.app.get('db');
        const {username, password} = req.body;
        db.user_login(username)
            .then(([user])=>{
                if (bcrypt.compareSync(password, user.account_pass)){
                    delete user.account_pass;
                    req.session.user = user;
                    res.status(200).send(user);
                } else {
                    res.status(401).send({error: "Invalid Username or password."});
                }
            })
            .catch(err => {
                res.status(500).send(err);
            })
    },
    logout: (req, res) => {
        if (req.session.user){
            req.session.destroy();
            res.status(200).send({message: "Successfully logged out."})
        }
    }
}