import React from "react";
import { useSession } from "next-auth/react";
import { Session } from "inspector";
import Avatar from "./Avatar";
import { LinkIcon, PhotographIcon } from "@heroicons/react/outline";
import { useForm } from "react-hook-form";

type FormData = {
    postTitle: string,
    postBody: string,
    postImage: string,
    subreddit: string
}

function PostBox() {
    const {
        register,
        setValue,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormData>();
  const { data: session } = useSession();
  return (
    <form className="sticky top-20 z-50 rounded-sm border  border-zinc-900 p-2 sm:mx-32 shadow-md shadow-zinc-950 ">
      <div className="flex justify-center items-center space-x-2 ">
        <Avatar />
        <input
        {...register('postTitle', {required: true})}
          disabled={!session}
          type="text"
          className="bg-black rounded-sm flex-1 outline-none p-2  text-white placeholder-zinc-400"
          placeholder={
            session ? "Create a post by entering a title." : "Sign in to enter"
          }
        ></input>
        <PhotographIcon className=" h-10 w-10 p-1 text-zinc-300 hover:cursor-pointer hover:bg-zinc-900 hover:rounded-sm"/>
        <LinkIcon className=" h-10 w-10 p-1 text-zinc-300 hover:cursor-pointer hover:bg-zinc-900 hover:rounded-sm" />
      </div>

      {}
    </form>
  );
}

export default PostBox;
