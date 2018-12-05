const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        console.log('look at the req:', req)
        const db = req.app.get('db');
        let { email, password } = req.body;
        console.log('body:', email, password)
        let pwd = bcrypt.hashSync(password, 10);
        password = pwd;
        let account = await db.user_login(email)
        if (!account[0]) {
            let createdCustomer = await db.add_user([user, pwd])
            req.session.user = createdCustomer[0];
            console.log("session user: ", req.session.user);
            res.send(req.session.user)
            db.add_user(email, pwd)
            res.sendStatus(200)
        } else {
            res.send("Account Already Exists")
        }

    },
    login: (req, res) => {
        const db = req.app.get('db');
        const { email, password } = req.body;
        // console.log(email, password);
            db.user_login(email)
            .then((user) => {
                // console.log('Here:', user)
                if (bcrypt.compareSync(password, user[0].account_pass)) {
                    delete user[0].account_pass;
                    req.session.user = user[0];
                    res.status(200).send(user[0]);
                } else {
                    res.status(401).send({ error: "Invalid Username or password." });
                }
            })
            .catch(err => {
                res.status(500).send(err);
                console.log(err)
            })
    },
    logout: (req, res) => {
        if (req.session.user) {
            req.session.destroy();
            res.status(200).send({ message: "Successfully logged out." })
        }
    }
}