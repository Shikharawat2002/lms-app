"use client";
import { Button } from "@/components/ui/button";
import React from "react";

const CreatePage = () => {
  return (
    <main className="h-screen w-full flex justify-center items-center">
      <div className="flex flex-col   gap-y-4 border-2 max-w-fit p-10 rounded-md shadow-lg m-auto ">
        <div>
          <h1 className="font-semibold text-4xl text-gray-600">
            Name your course
          </h1>
          <p className="text-slate-600 pt-1">
            what would you like to name your course
          </p>
          <p className="text-slate-600">
            Do not worry, you can change this later.
          </p>
        </div>
        <div className="flex flex-col gap-y-3">
          <h6 className="font-semibold pt-4 text-xl  text-gray-600">
            Course title
          </h6>
          <input
            className="border-2 p-2 w-[320px]"
            type="text"
            name=""
            id=""
            placeholder="test"
          />
          <p className="text-gray-400">what will you teach in this course</p>
        </div>
        <div className="pt-3">
          <Button variant={"ghost"}>Cancle</Button>
          <Button>Continue</Button>
        </div>
      </div>
    </main>
  );
};

export default CreatePage;
