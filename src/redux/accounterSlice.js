import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { login, logout, register } from "./firebase";

// Part1: Define Slice (including reducers and actions)
const initialState = { counterValue: 0 };

const loginAsync = createAsyncThunk(
  'account/login',
  async ({ email, password }) => {
     const { data } = await login({ email, password });
     // The value we return becomes the `fulfilled` action payload
     return data;
  }
);
const registerAsync = createAsyncThunk(
  'account/register',
  async ({ name, email, password }) => {
     const { data } = await register({ name, email, password });
     // The value we return becomes the `fulfilled` action payload
     return data;
  }
);
const accountSlice = createSlice({
  name: 'account',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
     setGeneralAccountInfo: (state, action) => {
        state.general = action.payload;
     },
     signOut: (state) => {
        logout();
        state.login.hasLogin = false;
     },
     gotoRegister: (state) => {
        state.login.hasAccount = false;
     },
     gotoLogin: (state) => {
        state.login.hasAccount = true;
     }
  },
  extraReducers: (builder) => {
     builder
        .addCase(loginAsync.pending, (state) => {
           state.status = 'loading';
        })
        .addCase(loginAsync.fulfilled, (state, action) => {
           state.status = 'idle';
           state.login.hasLogin = true;
        })
        .addCase(registerAsync.pending, (state) => {
           state.status = 'loading';
        })
        .addCase(registerAsync.fulfilled, (state, action) => {
           state.status = 'idle';
           state.login.hasLogin = true;
        })
  },
});

// export state to global
export const selectGeneral = (state) => state.account.general;

// export actions to global
export const { setGeneralAccountInfo, gotoRegister, gotoLogin, signOut } = accountSlice.actions;

// export reducer to global
export default accountSlice.reducer;
