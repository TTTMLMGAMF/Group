const initialState = {
    teams: [],
    roomName: 'bob',
    gameTitle: '',
    qa: [
        {
            question: "How many cups of sugar does it take to get to the moon?",
            answer: "3",
            catagoryNum: 1,
            catagory: "Things",
            points: 100
        },
        {
            question: "How many cups of salt does it take to get to the moon?",
            answer: "17",
            catagoryNum: 1,
            catagory: "Things",
            points: 200
        },
        {
            question: "How do you code?",
            answer: "Yes",
            catagoryNum: 1,
            catagory: "Things",
            points: 300
        },
        {
            question: "How do you code?",
            answer: "Yes",
            catagoryNum: 1,
            catagory: "Things",
            points: 400
        },
        {
            question: "How do you code?",
            answer: "Yes",
            catagoryNum: 1,
            catagory: "Things",
            points: 500
        },
        {
            question: "What is the best cohort ever?",
            answer: "42",
            catagoryNum: 2,
            catagory: "Stuff",
            points: 100
        },
        {
            question: "What is the best cohort ever?",
            answer: "42",
            catagoryNum: 2,
            catagory: "Stuff",
            points: 200
        },
        {
            question: "What is the best cohort ever?",
            answer: "42",
            catagoryNum: 2,
            catagory: "Stuff",
            points: 300
        },
        {
            question: "What is the best cohort ever?",
            answer: "42",
            catagoryNum: 2,
            catagory: "Stuff",
            points: 400
        },
        {
            question: "What is the best cohort ever?",
            answer: "42",
            catagoryNum: 2,
            catagory: "Stuff",
            points: 500
        },
        {
            question: "Can we actually make this game?",
            answer: "Try again later",
            catagoryNum: 3,
            catagory: "Other",
            points: 100
        },
        {
            question: "Can you print Hello World?",
            answer: "No",
            catagoryNum: 3,
            catagory: "Other",
            points: 200
        },
        {
            question: "Can we actually make this game?",
            answer: "Try again later",
            catagoryNum: 3,
            catagory: "Other",
            points: 300
        },
        {
            question: "Can we actually make this game?",
            answer: "Try again later",
            catagoryNum: 3,
            catagory: "Other",
            points: 400
        },
        {
            question: "Can we actually make this game?",
            answer: "Try again later",
            catagoryNum: 3,
            catagory: "Other",
            points: 500
        }
    ],
}

const UPDATE_TEAMS = 'UPDATE_TEAMS';
const UPDATE_ROOMNAME = 'UPDATE_ROOMNAME';
const UPDATE_GAMETITLE = 'UPDATE_GAMETITLE';
const UPDATE_QA = 'UPDATE_QA';



export function updateTeam(data) {
    return {
        type: UPDATE_TEAMS,
        payload: data
    }
}

export function updateRoomName(data) {
    return {
        type: UPDATE_ROOMNAME,
        payload: data
    }
}

export function updateGameTitle(data) {
    return {
        type: UPDATE_GAMETITLE,
        payload: data
    }
}

export function updateQa(data) {
    return {
        type: UPDATE_QA,
        payload: data
    }
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_TEAMS:
            return Object.assign({}, state, { teams: action.payload });

        case UPDATE_ROOMNAME:
            return Object.assign({}, state, { roomName: action.payload.teams });

        case UPDATE_GAMETITLE:
            return Object.assign({}, state, { gameTitle: action.payload.teams });

        case UPDATE_QA:
            return Object.assign({}, state, { qa: action.payload.teams });

        default:
            return state
    }
}