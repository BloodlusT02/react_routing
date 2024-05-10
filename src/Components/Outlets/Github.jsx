import React from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {

  const data = useLoaderData();

  return (
    <>
      <div className="m-4 bg-gray-600 text-white p-4 text-3xl">
        <div className="flex flex-col items-center justify-center">
          <img className="w-20 h-20 rounded-full cursor-pointer" src={data.avatar_url} alt="Git picture" width={300} />
          <p className="text-xs font-medium opacity-80 mt-1">@{data.login}</p>
          <p className="text-base font-semibold mt-2">{data.name}</p>
          <p className="text-base font-semibold">Github followers: {data.followers}</p>
        </div>
      </div>
    </>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/BloodlusT02');
  return response.json();
};
