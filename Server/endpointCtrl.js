module.exports = { 
    retrieveGames: (req, res) => {
        //retrieves list of games for fames list 
        console.log('retrieveGames has been hit')
        const db = req.app.get('db');
        const {account_id} = req.params;
        db.retrieve_games_list(account_id)
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
        console.log('addStudents hit!!!');
    },
    getGame: (req, res) => {
        console.log('game will be gotten!!!');
    },
    deleteGame: (req, res) => {
        console.log('Game will be EXTERRRMINATED!!!')
    }
}