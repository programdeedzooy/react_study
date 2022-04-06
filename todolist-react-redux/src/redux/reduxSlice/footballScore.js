import { createSlice } from '@reduxjs/toolkit'

export const footballScore = createSlice({
  name: "Score",
  initialState: {
    tossWinner: "",
    season: 0,
    teamA:[],
    teamB:[],
    score: []
  },
  reducers: {
    tossWinnerUpdate: (state, action) => {
      return {
        ...state,
        tossWinner: [action.payload]
      }
    },
    teamAUpdate:(state,action)=>{
       return{
         ...state,
         teamA:[action.payload]
       }
    },
    teamBUpdate:(state,action)=>{
        return{
          ...state,
          teamB:[action.payload]
        }
    },
    seasonUpdate: (state, action) => {
      return {
        ...state,
        season: [action.payload]
      }
    },
    scoreUpdate: (state, action) => {
      return {
        ...state,
        score: [action.payload]
      }
    }
  }
})

export const { tossWinnerUpdate, seasonUpdate, scoreUpdate,teamAUpdate,teamBUpdate } = footballScore.actions
export default footballScore.reducer