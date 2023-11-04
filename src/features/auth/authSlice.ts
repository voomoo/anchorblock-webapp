import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface UserState {
  email: string;
  token: string;
  isAuthenticated: boolean;
}

// Define the initial state using that type
const initialState: UserState = {
  email: "",
  token: "",
  isAuthenticated: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    storeUser: (state, action: PayloadAction<UserState>) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.isAuthenticated = action.payload.isAuthenticated;
      localStorage.setItem(import.meta.env.VITE_USER_TOKEN_NAME as string, JSON.stringify(action.payload))
    },
  },
})

export const { storeUser } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.auth.value

export default authSlice.reducer