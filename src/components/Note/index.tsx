import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectAuth, LoginStatus } from "../Login/authslice";

export function Note() {
  const auth = useAppSelector(selectAuth);

  if (auth.status !== LoginStatus.LOGGED_IN) return null;
  const {
    apiToken,
    user: { id: userId },
  } = auth;

  return (
    <div>
      <NoteField />
    </div>
  );
}

function NoteField() {
  return <textarea defaultValue="Note goes here..."></textarea>;
}
