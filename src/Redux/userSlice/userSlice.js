import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import auth from "../../firebase/firebase.config";

const initialState = {
    email: '',
    name: '',
    image: '',
    isLoading: false,
    isError: null,
};

export const createUser = createAsyncThunk('userSlice/createUser', async ({ email, password, name, imageUrl }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: imageUrl,
    });
    return {
        email: data.user.email,
        name: data.user.displayName,
        image: data.user.photoURL,
    };
});

export const loginUser = createAsyncThunk('userSlice/loginUser', async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password);
    return {
        email: data.user.email,
        name: data.user.displayName,
        image: data.user.photoURL,
    };
});

export const googleLogin = createAsyncThunk('userSlice/googleLogin', async () => {
    const googleProvider = new GoogleAuthProvider();
    const data = await signInWithPopup(auth, googleProvider);
    console.log(data);
    return {
        email: data.user.email,
        name: data.user.displayName,
        image: data.user.photoURL,
    };
});


const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.email = payload.email;
            state.name = payload.name;
            state.image = payload.image;
        },
        toggleLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        logOut: (state) => {
            state.name = '';
            state.email = '';
            state.image = '';
            state.isError = null;
            state.isLoading = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createUser.pending, (state) => {
            state.isLoading = true;
            state.isError = null;
            state.email = '';
            state.name = '';
            state.image = '';
        });
        builder.addCase(createUser.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.isError = null;
            state.email = payload.email;
            state.name = payload.name;
            state.image = payload.image;
        });
        builder.addCase(createUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.error.message;
            state.email = '';
            state.name = '';
            state.image = '';
        });
        builder.addCase(loginUser.pending, (state) => {
            state.isLoading = true;
            state.isError = null;
            state.email = '';
            state.name = '';
            state.image = '';
        });
        builder.addCase(loginUser.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.isError = null;
            state.email = payload.email;
            state.name = payload.name;
            state.image = payload.image;
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.error.message;
            state.email = '';
            state.name = '';
            state.image = '';
        });
        builder.addCase(googleLogin.pending, (state) => {
            state.isLoading = true;
            state.isError = null;
            state.email = '';
            state.name = '';
            state.image = '';
        });
        builder.addCase(googleLogin.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.isError = null;
            state.email = payload.email;
            state.name = payload.name;
            state.image = payload.image;
        });
        builder.addCase(googleLogin.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.error.message;
            state.email = '';
            state.name = '';
            state.image = '';
        });
    },
});

export const { setUser, toggleLoading, logOut } = userSlice.actions;

export default userSlice.reducer;