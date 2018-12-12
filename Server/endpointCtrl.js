module.exports = {
  retrieveGames: (req, res) => {
    //retrieves list of games for fames list
    console.log("retrieveGames has been hit");
    const db = req.app.get("db");
    const { account_id } = req.session.user;
    db.get_games([account_id])
      .then(game => res.status(200).send(game))
      .catch(err => {
        res.status(500).send({ errorMessage: "that's not a moon" });
        console.log(err);
      });
  },
  retrieveAccountInfo: (req, res) => {
    //retrieves account info from db
    console.log("You've sunk my retrieveAccountInfo!!");
  },
  //   updateClassroom: (req, res) => {
  //     //updates classroom info (rows and columns), and sends back the updated classroom
  //     console.log("updateClassroom has been hit! We are sinking!!");
  //   },
  //   removeClassroom: (req, res) => {
  //     //deletes classroom from db, then updates user interface
  //     console.log(
  //       "removeClassroom isn't available right now, please leave a message"
  //     );
  //   },
  //   addStudents: (req, res) => {
  //     console.log("addStudents works!!! Maybe...");
  //   },
  // getGame: async (req, res) => {
  //   console.log("game will be got!!!");
  //   let { game_id } = req.params;
  //   const db = req.app.get("db");
  //   let game = await db.get_game([game_id]);
  //   let qas = await db.get_QAs([game_id]);
  //   console.log("Game gotten!!!", game);
  //   console.log("Qs and As!!!", qas);
  //   res.send(game);
  // },
  addGame: async (req, res) => {
    console.log("Game will be made!!!");
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
    let { account_id } = req.session.user;
    console.log("CategoryNumber!!!: ", categoryNum);
    const db = req.app.get("db");
    let game = await db.add_game([gameTitle, imageUrl, subject, category, account_id]);
    console.log("this is the game info: ", game);
    let qas = await db.add_QAs([
      game[0].game_id,
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
    ]);
    console.log("Q's and A's: ", qas);
    res.status(200).send(game);
  },
  addCategories: async (req, res) => {
    console.log(`addCategories has been hit!!!!`);
    const db = req.app.get('db');
    let { game_id } = req.params;
    let {
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
    console.log("game ID worked!!", game_id);
    let addCategories = db.add_QAs([
      game_id,
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
    ]);
    res.send(addCategories)
  },
  deleteGame: async (req, res) => {
    console.log("Game will be EXTERRRMINATED!!!");
    const db = req.app.get("db");
    console.log(req.params);
    let { game_id, game_name } = req.params;
    console.log('game_id: ', game_id, "game_name: ", game_name);
    let deleted = await db.delete_game([game_id]);
    if (deleted) {
      res.send(`${game_name} successfully deleted.`);
    } else {
      res.send(
        `We encountered an error deleting ${game_name}. Please try again later.`
      );
    }
    console.log("EXTERRRMINATED");
  }
};
