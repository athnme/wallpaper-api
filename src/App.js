import "./global.css";
import ImagePreview from "./ImagePreview";

function App() {
  return (
    <>
      <button>Get Random Image</button>
      <ImagePreview
        imgSrc={
          "https://images.unsplash.com/photo-1603303159685-8f7a0e2ef6c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
        }
        imgAlt={"Test"}
        author={"Leon"}
      />
    </>
  );
}

export default App;
