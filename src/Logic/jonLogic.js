module.exports = {
    onCollapse: (value) => {
        return !value;
    },



    submitCategory: (game, question) => {
        var newGame = [...game];
        const newQuestion = {...question}
        //add a ?
        newQuestion.qty = 1;

        newGame = newGame.map((q) => {
            if(q.id === newQuestion.id){
                let newQ = {...q};
                newQ.qty++;
                return newQ;
            }
            return q;
        })


        //push question into game
        newGame.push(newQuestion);
        return newGame;

    }
    
};


// submitCategoryHandler = event => {
//     // event.preventDefault()
//     // If categoryNum === 1 hit post game
//     this.state.categoryNum === 1
//       ? axios.post("/api/game", this.state).then(res => this.setState({ game_id: res.data[0].game_id }))
//       : axios.put(`/api/game/` + this.state.game_id, this.state);
//     // Else hit put game
//     this.setState({
//       categoryNum: this.state.categoryNum + 1
//     });
//     this.setState({
//       category: "",
//       q1: "",
//       a1: "",
//       q2: "",
//       a2: "",
//       q3: "",
//       a3: "",
//       q4: "",
//       a4: "",
//       q5: "",
//       a5: ""
//     });
//     console.log(this.state.game_id);
//     if (this.state.categoryNum === 3) {
//       this.setState({ visible: false });
//     }
//   };

// this.state = {
//     visible: false,
//     gameCategories: 1,
//     game_id: 0,
//     gameTitle: "",
//     subject: "",
//     imageUrl: "",
//     category: "",
//     categoryNum: 1,
//     q1: "",
//     a1: "",
//     q2: "",
//     a2: "",
//     q3: "",
//     a3: "",
//     q4: "",
//     a4: "",
//     q5: "",
//     a5: ""
//   };