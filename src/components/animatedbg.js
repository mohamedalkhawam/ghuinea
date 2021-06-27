import Bubble from "../assets/bubble.png";
import video from "../assets/bg.mp4";
export default function AnimatedBg(industry) {
  const arr1 = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <div className="w-screen h-screen  overflow-hidden dd">
      <video
        autoPlay
        loop
        muted
        id="myVideo"
        className=" h-screen  w-screen fixed   z-0 "
      >
        <source src={video} type="video/mp4" />
      </video>
      {/* {arr1.map((item, index) => (
        <img
          key={index}
          style={{
            left: `${Math.floor(Math.random() * 1200)}px`,
            bottom: `${Math.floor(Math.random() * 600)}px`,
            animationDuration: `30s`,
            animationFillMode: `both`,
            animationName: `bubbles`,
            animationTimingFunction: `linear`,
            animationIterationCount: `infinite`,
          }}
          alt=""
          src={Bubble}
          className={`w-5 absolute left-80 bottom-52 opacity-80 `}
        />
      ))}
      {arr1.map((item, index) => (
        <img
          key={index}
          style={{
            left: `${Math.floor(Math.random() * 1200)}px`,
            bottom: `${Math.floor(Math.random() * 600)}px`,
            animationDuration: `20s`,
            animationFillMode: `both`,
            animationName: `bubbles`,
            animationTimingFunction: `linear`,
            animationIterationCount: `infinite`,
          }}
          alt=""
          src={Bubble}
          className={`w-3 absolute left-80 bottom-52 opacity-80 `}
        />
      ))}
      {arr1.map((item, index) => (
        <img
          key={index}
          style={{
            left: `${Math.floor(Math.random() * 1200)}px`,
            bottom: `${Math.floor(Math.random() * 600)}px`,
            animationDuration: `27s`,
            animationFillMode: `backwards`,
            animationName: `bubbles`,
            animationTimingFunction: `linear`,
            animationIterationCount: `infinite`,
          }}
          alt=""
          src={Bubble}
          className={`w-4 absolute left-80 bottom-52 opacity-80 `}
        />
      ))} */}
      {/* {arr1.map((item, index) => (
        <img
          style={{
            left: `${Math.floor(Math.random() * 1200)}px`,
            top: `${Math.floor(Math.random() * 600)}px`,
            animationDuration: `25s`,
            animationFillMode: `both`,
            animationName: `bubbles`,
            animationPlayState: ``,
            animationTimingFunction: `linear`,
            animationIterationCount: `infinite`,
          }}
          alt=""
          src={Bubble}
          className={`w-6 absolute left-80 bottom-52 opacity-80 `}
        />
      ))} */}
    </div>
  );
}
