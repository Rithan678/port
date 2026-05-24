import { getNowPlaying } from "../lib/spotify";

export default async function SpotifyNowPlaying() {
  const response = await getNowPlaying();

  if (!response) {
    return null;
  }

  if (response.status === 204 || response.status > 400) {
    return null;
  }

  const song = await response.json();

  const isPlaying = song.is_playing;

  const title = song.item.name;
  const artist = song.item.artists
    .map((artist: any) => artist.name)
    .join(", ");

  const albumImage =
    song.item.album.images[0].url;

  return (
    <div className="glass-card rounded-[32px] p-6">
      <p className="mb-4 text-xs uppercase tracking-[0.3em] text-neutral-500">
        Now Playing
      </p>

      <div className="flex items-center gap-4">
        <img
          src={albumImage}
          alt={title}
          className="h-16 w-16 rounded-2xl"
        />

        <div>
          <h3 className="text-lg font-medium">
            {title}
          </h3>

          <p className="text-neutral-400">
            {artist}
          </p>

          <p className="mt-2 text-sm text-green-400">
            {isPlaying
              ? "Currently listening"
              : "Recently played"}
          </p>
        </div>
      </div>
    </div>
  );
}
