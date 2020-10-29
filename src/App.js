import "./global.css";
import { useState } from "react";
import ImagePreview from "./ImagePreview";
import { getRandomImage } from "./api/getRandomImage";

function App() {
  const [randomImage, setRandomImage] = useState(null);

  async function handleClick() {
    const randomImageResponse = await getRandomImage();
    setRandomImage(randomImageResponse);
  }

  return (
    <main>
      <button onClick={() => handleClick()}>Get Random Image</button>
      {randomImage && (
        <ImagePreview
          imgSrc={randomImage.urls.regular}
          imgAlt={"Pretty Picture"}
          author={"John Doe"}
        />
      )}
    </main>
  );
}

export default App;
