/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: { filterValue: '', filteredBy: '', isFilter: false },
  reducers: {
    isFilter: (state) => {
      state.isFilter = true
    },
    filterBy: (state, action) => {
      state.filterValue = action.payload
    },
    filterCategory: (state, action) => {
      state.filteredBy = action.payload
    },
  },
})

export const { filterBy, filterCategory, isFilter } = filterSlice.actions

export default filterSlice.reducer
