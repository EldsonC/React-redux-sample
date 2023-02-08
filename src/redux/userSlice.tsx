import { createSlice } from '@reduxjs/toolkit'

interface StateProps {
    user: {
        nome: string
    }
}
export const slice = createSlice({
    name: 'user',
    initialState: {
        nome: '',
        islogged: false,
    },

    reducers: {
        changeUser(state, { payload }) {
            return { ...state, islogged: true, nome: payload }
        },

        logout(state) {
            return { ...state, islogged: false, nome: '' }
        }
    }
})

export const { changeUser, logout } = slice.actions

export const selectUser = (state:StateProps) => state.user.nome

export default slice.reducer