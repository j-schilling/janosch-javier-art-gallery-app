import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function DetailPage({ globalData }) {
  const router = useRouter();

  const artPieceData = globalData.find(
    ({ slug }) => slug === router.query.slug
  );
  console.log("artPieceData: ", artPieceData);
  return <ArtPieceDetails {...artPieceData} />;
}
