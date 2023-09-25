import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

interface NoteState {
  noteText: string;
}

const initialState: NoteState = {
  noteText: "",
};

export const noteslice = createSlice({
  name: "note",
  initialState,
  reducers: {
    updateNote: (state, action: PayloadAction<string>) => {
      state.noteText = action.payload;
    },
  },
});

export const { updateNote } = noteslice.actions;

export const selectNoteText = (state: RootState) => state.note.noteText;

export default noteslice.reducer;
