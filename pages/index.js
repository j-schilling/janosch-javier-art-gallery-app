import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({ globalData }) {
  console.log(globalData);

  return (
    <div>
      <Spotlight {...globalData} />
    </div>
  );
}
