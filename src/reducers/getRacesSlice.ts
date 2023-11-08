import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState ={
    loading: false,
    data: {
        type: '',
        id: '',
    status: '',
    pools: {},
    races: [],
    currentVersion: 0,
    newBettingSystem: false
    }
}

export const fetchRaces =  createAsyncThunk('races/fetchRaces', async (resultId: string) => {
   
        const response = await fetch(`https://www.atg.se/services/racinginfo/v1/api/games/${resultId}`);
    
        return await response.json();
  
})

export const getRacesSlice = createSlice({
    name: "races",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRaces.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchRaces.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchRaces.rejected, (state) => {
            state.loading = false;
        });
    }
});

export default getRacesSlice.reducer;