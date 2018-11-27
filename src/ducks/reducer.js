const initialState = {
    teams: [],
    roomName: '',
    gameTitle: '',
    qa: []
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