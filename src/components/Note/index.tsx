import React, { useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectAuth, LoginStatus } from "../Login/authslice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { updateNote } from "./noteslice";

interface NoteProps {
  note: string;
}

export function Note() {
  const [saveNote, setNote] = useState(false);
  const auth = useAppSelector(selectAuth);
   const dispatch = useDispatch();
   const noteText = useSelector((state: RootState) => state.note.noteText);


    function handleMoreClick() {
      setNote(!saveNote);
    }



  if (auth.status !== LoginStatus.LOGGED_IN) return null;
  const {
    apiToken,
    user: { id: userId },
  } = auth;

  return (
    <>
      <div className="p-2 w-full">
        <div className="relative">
          <label htmlFor="note" className="hidden" aria-label="Note"></label>
          <textarea
            id="note"
            name="note"
            value={noteText}
            defaultValue="Note goes here..."
            className="w-full md:max-w-lg bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-lime-500 focus:bg-white focus:ring-2 focus:ring-lime-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
      </div>
      <div className="p-2 w-full">
        <button
          className="flex mx-auto text-white bg-lime-500 border-0 py-2 px-8 focus:outline-none hover:bg-lime-600 rounded text-lg"
          onClick={handleMoreClick}
        >
          {saveNote ? "Edit" : "Save"} Note
        </button>
      </div>
    </>
  );
}


