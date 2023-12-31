import {
  SunIcon,
  BoltIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
        <h1 className="mb-20 text-5xl font-bold">ChatGPT</h1>
        <div className="flex space-x-2 text-center">
          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              <SunIcon className="w-8 h-8" /> <h2>Examples</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">"Explain something to me"</p>
              <p className="infoText">
                "What is the difference between a cat and a dog?""
              </p>
              <p className="infoText">"What is the color of the sun?"</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              <BoltIcon className="w-8 h-8" /> <h2>Capabilities</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">
                Messenges are stored in Firebase's Firestore
              </p>
              <p className="infoText">
                Hot Toast notifications when ChatGPT is thinking!
              </p>
              <p className="infoText">What is the color of the sun?</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              <ExclamationTriangleIcon className="w-8 h-8" />
              <h2>Limitations</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">
                May occasionally generate incorrect information
              </p>
              <p className="infoText">
                May occasionally produce harmful instructions or biased content
              </p>
              <p className="infoText">
                Limited knowledge of world and events are 2021
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
