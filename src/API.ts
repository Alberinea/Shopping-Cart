/* eslint-disable camelcase */
const TWITCH_CLIENT_ID = '7nyuo66bv5rgh251uw77xmstqk8g4g';
const ACCESS_TOKEN = 'Bearer lji16boycwnbyfww1t1goykar30yb1';
const END_POINT = 'https://cors.bridged.cc/https://api.igdb.com/v4/games';

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
}

// eslint-disable-next-line import/prefer-default-export
async function getGameData(params: string): Promise<NewGame[]> {
  const data = await (
    await fetch(END_POINT, {
      method: 'POST',
      headers: {
        'Client-ID': TWITCH_CLIENT_ID,
        Authorization: ACCESS_TOKEN,
      },
      body: params,
    })
  ).json();

  return data;
}

export default getGameData;
