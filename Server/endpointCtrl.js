module.exports = { 
    retrieveGames: (req, res) => {
        //retrieves list of games for fames list 
        console.log('retrieveGames has been hit')
        const db = req.app.get('db');
        const {account_id} = req.params;
        db.get_games(account_id)
        .then(game => res.status(200).send(game))
        .catch(err => {
            res.status(500).send({ errorMessage: "that's not a moon" });
            console.log(err);
        })
    },
    retrieveAccountInfo: (req, res) => {
        //retrieves account info from db
        console.log("You've sunk my retrieveAccountInfo!!")
    },
    updateClassroom: (req, res) => {
        //updates classrom info (rows and columns), and sends back the updated classroom
        console.log("updateClassroom has been hit! We are sinking!!")
    },
    removeClassroom: (req, res) => {
        //deletes classroom from db, then updates user interface
        console.log("removeClassroom isn't available right now, please leave a message")
    },
    addStudents: (req, res) =>{
        console.log('addStudents works!!! Maybe...');
        
        
    },
    getGame: async (req, res) => {
        console.log('game will be got!!!');
        let {game_id} = req.params;
        const db = req.app.get('db');
        let game = await db.get_game([game_id]);
        let qas = await db.get_QAs([game_id]);
        console.log('Game gotten!!!', game);
        console.log('Qs and As!!!', qas);
        // res.send(game);
    },
    addGame: async (req, res) => {
        console.log('Game will be made!!!')
        let {
            gameTitle,
            imageUrl,
            subject,
            category,
            categoryNum,
            q1,
            a1,
            q2,
            a2,
            q3,
            a3,
            q4,
            a4,
            q5,
            a5
        } = req.body;
        const db = req.app.get('db');
        let game = await db.add_game([
            gameTitle, 
            imageUrl, 
            subject, 
            category, 
            1])
        console.log('this is the game info: ', game);
        let
        
    },
    deleteGame: (req, res) => {
        console.log('Game will be EXTERRRMINATED!!!')
    }
}