'use client'
import AppTable from "@/components/app.table";
import Link from "next/link";
import { useEffect } from "react";
import useSWR from "swr"

export default function Home() {

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );
  console.log('>>> check data', data);
  if (!data) {
    return <div>loading...</div>
  }

  return (
    <div>
      <div>{data?.length}</div>
      <ul>
        <li>
          <Link href={"/facebook"}>
            <span>Facebook</span>
          </Link>
        </li>
        <li style={{ margin: "20px 0" }}>
          <Link href={"/youtube"}>
            <span>youtube</span>
          </Link>
        </li>
        <li>
          <Link href={"/tiktok"}>
            <span>tiktok</span>
          </Link>
        </li>
      </ul>
      <AppTable
        blogs={data}
      />
    </div>
  )
}
