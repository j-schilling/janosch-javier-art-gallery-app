import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function DetailPage({ globalData }) {
  console.log("globalData on DetailPage: ", globalData);

  const router = useRouter();

  const artPieceData = globalData.find(
    ({ slug }) => slug === router.query.slug
  );
  console.log("artPieceData: ", artPieceData);
  return (
    <ArtPieceDetails
      image={artPieceData.imageSource}
      title={artPieceData.name}
      year={artPieceData.year}
      genre={artPieceData.genre}
      artist={artPieceData.artist}
    />
  );
}
