import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

const Content = ({ results }) => {
  return (
    <FlipMove className="flex-wrap justify-center flex-auto px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4">
      {results.map((result) => (
        <Thumbnail key={result.id} {...result} />
      ))}
    </FlipMove>
  );
};

export default Content;
