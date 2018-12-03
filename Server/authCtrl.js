const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db');
        let { user, password } = req.body;
        let pwd = bcrypt.hashSync(password, 10);
        password = pwd;
        let account = await db.user_login([user])
        if (!account[0]) {
            db.add_user([user, pwd])
            res.sendStatus(200)
        } else {
            res.send("Account Already Exists")
        }

    },
    login: (req, res) => {
        const db = req.app.get('db');
        const { username, password } = req.body;
        db.user_login(username)
            .then(([user]) => {
                if (bcrypt.compareSync(password, user.account_pass)) {
                    delete user.account_pass;
                    req.session.user = user;
                    res.status(200).send(user);
                } else {
                    res.status(401).send({ error: "Invalid Username or password." });
                }
            })
            .catch(err => {
                res.status(500).send(err);
            })
    },
    logout: (req, res) => {
        if (req.session.user) {
            req.session.destroy();
            res.status(200).send({ message: "Successfully logged out." })
        }
    }
}