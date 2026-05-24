const TOKEN_ENDPOINT =
  "https://accounts.spotify.com/api/token";

const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

const hasSpotifyConfig =
  clientId &&
  clientSecret &&
  refreshToken &&
  !clientId.includes("YOUR_") &&
  !clientSecret.includes("YOUR_") &&
  !refreshToken.includes("YOUR_");

const basic = hasSpotifyConfig
  ? Buffer.from(`${clientId}:${clientSecret}`).toString("base64")
  : "";

export async function getNowPlaying() {
  if (!hasSpotifyConfig) {
    return null;
  }

  try {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: "POST",

      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type":
          "application/x-www-form-urlencoded",
      },

      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      }),
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    const access_token = data.access_token;

    if (!access_token) {
      return null;
    }

    return fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },

      next: {
        revalidate: 60,
      },
    });
  } catch {
    return null;
  }
}
