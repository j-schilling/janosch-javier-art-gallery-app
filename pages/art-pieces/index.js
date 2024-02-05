import ArtPieces from "@/components/ArtPieces";

export default function allArtPieces({ globalData }) {
  console.log("globalData: ", globalData);
  return <ArtPieces pieces={globalData} />;
}
