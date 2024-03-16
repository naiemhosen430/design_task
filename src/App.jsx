import LeftSide from "./Components/LeftSide";
import RightSide from "./Components/RightSide";

function App() {
  return (
    <>
      <div className="flex bg-[#f1f1f1] justify-center items-start p-10">
        <LeftSide />
        <RightSide />
      </div>
    </>
  );
}

export default App;
