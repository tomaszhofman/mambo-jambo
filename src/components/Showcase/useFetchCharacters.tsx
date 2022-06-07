import React, { useEffect, useState } from "react";

type Status = "loading" | "error" | "success" | "indle";

type Result = {
  id: number;
  name: string;
  status: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episodes: Array<string>;
  url: string;
  created: string;
};

type APIResponse = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null;
  };
  results: Result[];
};

export const useFetchCharacters = () => {
  const [status, setStatus] = useState<Status>("indle");
  const [characters, setCharacters] = useState<Result[]>();

  useEffect(() => {
    setStatus("loading");
    const fetchCharacters = async () => {
      try {
        const data = await fetch("https://rickandmortyapi.com/api/character");
        const characters = (await data.json()) as APIResponse;
        console.log(characters);
        setCharacters(characters.results);
        setStatus("success");
      } catch (error) {
        setStatus("error");
      }
    };
    fetchCharacters();
  }, []);

  return [characters, status] as const;
};
