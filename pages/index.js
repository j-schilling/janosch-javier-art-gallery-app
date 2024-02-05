import Spotlight from "@/components/Spotlight";

export default function HomePage({ globalData }) {
  return (
    <div>
      <Spotlight {...globalData} />
    </div>
  );
}
