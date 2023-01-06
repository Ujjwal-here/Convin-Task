import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("user/getUser", async () => {
  const usersData = [];
  const response = await fetch("https://reqres.in/api/users");
  const data = await response.json();
  console.log(data);
  usersData.push(...data.data);
  let i = 2;
  while (i <= data.total_pages) {
    const responseAgain = await fetch(`https://reqres.in/api/users?page=${i}`);
    const dataAgain = await responseAgain.json();
    usersData.push(...dataAgain.data);
    i += 1;
  }
  console.log(usersData);
  return { usersData, total_users_count: data.total };
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: true,
    user: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state, action) => {
      state.isLoading = true;
      console.log("Pending");
    }),
      builder.addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      });
  },
});

export default userSlice.reducer;
