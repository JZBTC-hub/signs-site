// Server: fetch latest video from your channel RSS (no API key)
import { NextResponse } from "next/server";

export const revalidate = 3600; // re-fetch hourly

export async function GET() {
  const channelId = process.env.YOUTUBE_CHANNEL_ID; // e.g. "UCxxxx..."
  if (!channelId) return NextResponse.json({ error: "Missing YOUTUBE_CHANNEL_ID" }, { status: 500 });

  const url = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
  const xml = await fetch(url, { next: { revalidate } }).then(r => r.text());

  // very small parse of the first <entry>
  const entry = xml.split("<entry>")[1]?.split("</entry>")[0] || "";
  const id = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1] || "";
  const title = entry.match(/<title>([^<]+)<\/title>/)?.[1] || "";
  const thumb = entry.match(/<media:thumbnail url="([^"]+)"/)?.[1] || "";
  const link = id ? `https://www.youtube.com/watch?v=${id}` : "";

  return NextResponse.json({ id, title, thumb, link });
}
