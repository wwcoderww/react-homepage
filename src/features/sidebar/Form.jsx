import React from "react";
import usePostBookmark from "./usePostBookmark";
import { useForm } from "react-hook-form";

const CSSInput = `bg-white w-50 mx-auto`;

function FormLabel({ html, children }) {
  return (
    <label htmlFor={html} className="mx-auto">
      {children}
    </label>
  );
}

export default function Form() {
  const mutate = usePostBookmark();
  const { register, handleSubmit, reset, getValues } = useForm();

  function successFunction() {
    mutate(getValues());
    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(successFunction)}
      className="border-b-2 border-dashed flex flex-col pb-1"
    >
      <FormLabel html={"name"}>Name</FormLabel>
      <input type="text" {...register("name")} className={CSSInput} />
      <FormLabel html={"link"}>URL</FormLabel>
      <input type="text" {...register("link")} className={CSSInput} />
      <div className="flex justify-center">
        <button className="border-2 px-2 m-2 rounded-md bg-orange-400 text-blue-700 hover:cursor-pointer">
          Submit
        </button>
      </div>
    </form>
  );
}
