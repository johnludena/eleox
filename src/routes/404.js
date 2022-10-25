import { useRouteError } from "react-router-dom";
import aiPuppyImg from "../images/puppy.png";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="bg-slate-200 h-full min-h-screen pt-6 pb-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl text-center font-medium leading-6 text-gray-900 mb-3">
          Woah, you are good at testing stuff!
        </h1>
        <p className="text-black text-lg mb-5 text-center">
          Here's what went wrong: <strong>{error.statusText || error.message}</strong>
        </p>

        <h2 className="text-black text-lg mb-5 text-center font-medium mt-6">Here's an AI-generated puppy for your troubles:</h2>

        <figure>
          <div className="max-w-sm rounded-full overflow-hidden text-center mx-auto">
            <img
              className="mx-auto"
              src={aiPuppyImg}
              alt="AI-generated image of a puppy on some fall trees, generated by Midjourney."
            />
          </div>

          <figcaption className="text-center mt-6">
            Midjourney prompt: "a puppy sitting below a tree during autumn,
            realistic portrait "
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
