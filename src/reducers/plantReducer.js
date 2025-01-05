const SET_PLANTS = "SET_PLANTS";
const SET_SEARCH_PLANTS = "SET_SEARCH_PLANTS";
const SET_CHARACTERISTICS = "SET_CHARACTERISTICS";
const SET_FREQUENCY = "SET_FREQUENCY";
const SET_PLANT = "SET_PLANT";
const SET_PLANT_CHARACTERISTICS = "SET_PLANT_CHARACTERISTICS";
const SET_CALENDAR_INFO = "SET_CALENDAR_INFO";
const LOADING = "LOADING";

const defaultState = {
    plants: [],
    searchPlants: [],
    characteristics: [],
    calendarInfo: [],
    frequency: [],
    currentPlant: {},
    page: 1,
    limit: 10,
    isLoading: true
}

export default function plantReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_PLANTS:
            return {
                ...state,
                plants: action.payload,
                isLoading: true
            }

        case SET_SEARCH_PLANTS:

            console.log({ "SET_SEARCH_PLANTS": action.payload });

            return {
                ...state,
                searchPlants: action.payload,
                isLoading: false
            }

        case SET_PLANT:
            return {
                ...state,
                currentPlant: action.payload,
                isLoading: false
            }

        case SET_PLANT_CHARACTERISTICS:
            return {
                ...state,
                currentPlant: {
                    ...state.currentPlant,
                    characteristics: action.payload
                },
                isLoading: false
            }
        case SET_CALENDAR_INFO:
            return {
                ...state,
                calendarInfo: action.payload,
                isLoading: false
            }

        case LOADING:
            return {
                ...state,
                plants: state.plants,
                isLoading: action.payload
            }
        case SET_CHARACTERISTICS:

            console.log({ "SET_CHARACTERISTICS": action.payload });

            return {
                ...state,
                characteristics: action.payload,
                isLoading: false
            }

        case SET_FREQUENCY:

            console.log({ "SET_FREQUENCY": action.payload });

            return {
                ...state,
                frequency: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}

export const setPlants = (plants) => ({ type: SET_PLANTS, payload: plants });

export const setCharacteristics = (characteristics) => ({ type: SET_CHARACTERISTICS, payload: characteristics });

export const setFrequency = (frequency) => ({ type: SET_FREQUENCY, payload: frequency });

export const setSearchPlants = (searchPlants) => ({ type: SET_SEARCH_PLANTS, payload: searchPlants });

export const setPlant = (plant) => ({ type: SET_PLANT, payload: plant });

export const setPlantCharacteristics = (characteristics) => ({ type: SET_PLANT_CHARACTERISTICS, payload: characteristics });

export const setCalendarInfo = (calendarInfo) => ({ type: SET_CALENDAR_INFO, payload: calendarInfo });

export const setLoading = (isLoading) => ({ type: LOADING, payload: isLoading });