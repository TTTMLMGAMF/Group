const initialState = {
    teams: [],
    gameTitle: 'Chuck Norris',
    qa: [],
    roomName: '',
    timer: 30,
}

const UPDATE_TEAMS = 'UPDATE_TEAMS';
const UPDATE_ROOMNAME = 'UPDATE_ROOMNAME';
const UPDATE_TIMER = 'UPDATE_TIMER';
const UPDATE_GAMETITLE = 'UPDATE_GAMETITLE';
const UPDATE_QA = 'UPDATE_QA';
const LOGOUT = 'LOGOUT';
const NAVCREATEGAME = 'NAVCREATEGAME';


export function updateTeams(data) {
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

export function updateTimer(data) {
    return {
        type: UPDATE_TIMER,
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

export function logout(data) {
    return {
        type: LOGOUT,
        payload: data
    }
}

export function navCreateGame(data) {
    return {
        type: NAVCREATEGAME,
        payload: data
    }
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_TEAMS:
            return Object.assign({}, state, { teams: action.payload });

        case UPDATE_ROOMNAME:
            return Object.assign({}, state, { roomName: action.payload });

        case UPDATE_TIMER:
            return Object.assign({}, state, { timer: action.payload });

        case UPDATE_GAMETITLE:
            return Object.assign({}, state, { gameTitle: action.payload });

        case UPDATE_QA:
            return Object.assign({}, state, { qa: action.payload });

        case LOGOUT:
            return Object.assign({}, initialState, { initialState: action.payload })

        case NAVCREATEGAME:
            return Object.assign({}, state, { visible: action.payload })

        default:
            return state
    }
}