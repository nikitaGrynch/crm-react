import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import userServerSlice from "../slices/userServerSlice";
import eventsListSlice from "../slices/eventsListSlice";
import eventDetailsSlice from "../slices/eventDetailsSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        userServer: userServerSlice,
        eventsList: eventsListSlice,
        eventDetails: eventDetailsSlice
    }
})

export default store;