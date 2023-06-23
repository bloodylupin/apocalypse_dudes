"use client";

import {
  useRef,
  useEffect,
  Dispatch,
  SetStateAction,
  type ReactNode,
} from "react";

export default function AnswerLabel({
  success,
  answer,
}: {
  success?: boolean;
  answer?: ReactNode;
}) {
  return success ? (
    <>
      <div className="alert alert-success">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Congratulations!</span>
      </div>
      <div className="pl-6 pt-4 text-left">{answer}</div>
    </>
  ) : (
    <>
      <div className="alert alert-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Something went wrong...</span>
      </div>
      <div className="pl-6 pt-4 text-left">{answer}</div>
    </>
  );
}
