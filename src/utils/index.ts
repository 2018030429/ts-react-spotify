import apiCall from '../api';

type RequiredParamsType = { code: string, grant_type: string } | { refresh_token: string, grant_type: string };

const commonParams = {
  redirect_uri: import.meta.env.VITE_CALLBACK_HOST,
  client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
  client_secret: import.meta.env.VITE_SPOTIFY_CLIENT_SECRET
};

export const spotifyAuthCall = async (requiredParams:RequiredParamsType) => {
  try {
    const params = { 
      ...requiredParams,
      ...commonParams
    };
  
    // @ts-ignore
    const searchParams = Object.keys(params).map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(params[key])).join("&");
    console.log(searchParams);
  
    const spotifyCall = await apiCall({ 
      method: 'POST',
      url: 'https://accounts.spotify.com/api/token',
      body: searchParams,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
  
    console.log(spotifyCall);
    
    return await spotifyCall.json();
  } catch (error) {
    console.log(error);
  }
};

type SearchParams = {}[];

export const spotifySearchCall = async (params:SearchParams, token:string) => {
  try {
    const url = new URL("https://api.spotify.com/v1/search");
  
    for (const param of params) {
      const key = Object.keys(param)[0];
      // @ts-ignore
      url.searchParams.append(key, param[key]);
    }
    
    const spotifyCall = await apiCall({
      method: 'GET',
      url: url.toString(),
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    
    return await spotifyCall.json();
  } catch (error) {
    console.log(error);
  }
};
