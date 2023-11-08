import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {BetType, Option} from '../interfaces'

interface BetTypeState {
    loading: boolean
    data: BetType
}

const initialState: BetTypeState = {
    loading: false,
    data: {betType: '',
        upcoming: [],
        results:[]}
}

export const fetchData =  createAsyncThunk('content/fetchBetType', async (selectedOption:Option) => {
    if (selectedOption.label !== '') {
        const response = await fetch(`https://www.atg.se/services/racinginfo/v1/api/products/${selectedOption.label}`);
    
        return await response.json();
    }
   return {betType: '',
   upcoming: [],
   results:[]}
})

export const betTypeSlice = createSlice({
    name: "content",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchData.rejected, (state) => {
            state.loading = false;
        });
    }
});

export default betTypeSlice.reducer;