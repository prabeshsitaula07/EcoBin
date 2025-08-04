import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface AdminState{
loading: boolean;

}

const initialState:AdminState={
loading: false,
}

export const fetchData = createAsyncThunk(
    'fetch/data',
    async(_, ThunkAPI)=>{
        try {
            const response = axios.get(import.meta.env.VITE_BACKEND)

            return response;
        } catch (error) {
            return ThunkAPI.rejectWithValue('fetching failed')
        }
    }
)


const chatSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(fetchData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { } = chatSlice.actions;
export default chatSlice.reducer;
