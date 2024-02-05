import useSWR from "swr";

const API_URL = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(API_URL);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;

  console.log(data);
  return (
    <div>
      <h1>Hello from Next.js</h1>
    </div>
  );
}
