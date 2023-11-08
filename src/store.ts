import { configureStore } from "@reduxjs/toolkit";
import betTypeSlice from './reducers/betTypeSlice'
import getRacesSlice from './reducers/getRacesSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
    reducer: {
        content: betTypeSlice,
        races: getRacesSlice
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
