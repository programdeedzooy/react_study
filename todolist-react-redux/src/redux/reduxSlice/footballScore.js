import { createSlice } from '@reduxjs/toolkit'

export const footballScore = createSlice({
    name: "Score",
    initialState: {
        score: []
    },
    reducers: {
        scoreUpdate: (state, action) => {
            return {
                score: [...state.score, action.payload]
            }
        }
    }
})

export const { scoreUpdate } = footballScore.actions
export default footballScore.reducer