import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // ensure the route runs on each request

export async function GET() {
  const channelId = process.env.YOUTUBE_CHANNEL_ID;
  const playlistId = process.env.YOUTUBE_PLAYLIST_ID; // optional: use a playlist instead

  const url = playlistId
    ? `https://www.youtube.com/feeds/videos.xml?playlist_id=${playlistId}`
    : channelId
    ? `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`
    : null;

  if (!url) {
    return NextResponse.json(
      { error: "Missing YOUTUBE_CHANNEL_ID or YOUTUBE_PLAYLIST_ID" },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(url, { cache: "no-store" });
    const xml = await res.text();

    const entry = xml.split("<entry>")[1]?.split("</entry>")[0];
    if (!entry) throw new Error("No entries found");

    const id = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1];
    const title = entry.match(/<title>([^<]+)<\/title>/)?.[1] ?? "Latest session";
    if (!id) throw new Error("Video ID not found");

    return NextResponse.json({
      id,
      title,
      link: `https://www.youtube.com/watch?v=${id}`,
    });
  } catch (err: any) {
    return NextResponse.json({ error: String(err?.message || err) }, { status: 500 });
  }
}
