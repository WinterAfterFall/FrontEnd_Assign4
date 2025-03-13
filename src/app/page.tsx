import Banner from "../components/Banner";
import Card from "../components/Card";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="flex justify-center gap-40 mt-5">
  <Card venueName="The Bloom Pavilion" imgSrc="/img/bloom.jpg" />
  <Card venueName="Spark Space" imgSrc="/img/sparkspace.jpg" />
  <Card venueName="The Grand Table" imgSrc="/img/grandtable.jpg" />
</div>
    </div>
  );
}