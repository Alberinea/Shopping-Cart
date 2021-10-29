/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable camelcase */
const TWITCH_CLIENT_ID = process.env.CLIENT_ID;
const { ACCESS_TOKEN } = process.env;
const END_POINT = process.env.ENDPOINT;

export interface NewGame {
  cover: {
    image_id: string;
  };
  name: string;
  id: string;
  artworks: {
    image_id: string;
  }[];
  slug: string;
  genres: {
    name: string;
  }[];
  screenshots: {
    image_id: string;
    id: string;
  }[];
  platforms: {
    abbreviation: string;
  }[];
  release_dates: {
    human: string;
  }[];
  aggregated_rating: number;
  storyline: string;
  summary: string;
}

async function getGameData(params: string): Promise<NewGame[]> {
  const data = await (
    await fetch(END_POINT!, {
      method: 'POST',
      headers: {
        'Client-ID': TWITCH_CLIENT_ID!,
        Authorization: ACCESS_TOKEN!,
      },
      body: params,
    })
  ).json();

  return data;
}

export default getGameData;
