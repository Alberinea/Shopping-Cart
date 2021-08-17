/* eslint-disable camelcase */
const TWITCH_CLIENT_ID = '7nyuo66bv5rgh251uw77xmstqk8g4g';
const ACCESS_TOKEN = 'Bearer lji16boycwnbyfww1t1goykar30yb1';
const END_POINT = 'https://cors.bridged.cc/https://api.igdb.com/v4/games';

export interface NewGame {
  cover: {
    image_id: string;
  };
  name: string;
  summary: string;
  id: string;
  artworks: {
    image_id: string;
  }[];
  slug: string;
}

// eslint-disable-next-line import/prefer-default-export
export async function getNewGames(): Promise<NewGame[]> {
  const data = await (
    await fetch(END_POINT, {
      method: 'POST',
      headers: {
        'Client-ID': TWITCH_CLIENT_ID,
        Authorization: ACCESS_TOKEN,
      },
      body: 'fields cover.image_id,name,id,artworks.*,slug; where rating >= 80 & rating_count >= 5 & first_release_date > 1609426800; limit 6; sort first_release_date desc;',
    })
  ).json();

  return data;
}
