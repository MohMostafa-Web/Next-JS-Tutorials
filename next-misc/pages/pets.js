// import Image from "next/image";
import ImageOne from "../public/1.jpg";

function PetsPage() {
  return (
    <div>
      <h2>Pets Images</h2>
      {/* Image with a static src to apply "placeholder" effect */}
      {/* <Image src={ImageOne} alt="pet" placeholder="blur" width="280" height="420" /> */}

      {/* List of Images */}
      {[...Array(5)].map((_, i) => (
        <div key={i}>
          <img src={`/${i + 1}.jpg`} alt="pet" width="280" height="420" />
          {/* <Image src={`/${i + 1}.jpg`} alt="pet" width="280" height="420" /> */}
        </div>
      ))}
    </div>
  );
}

export default PetsPage;
