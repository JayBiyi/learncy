export default function smile() {
  const mouth = document.getElementsByClassName("mouth")[0];
  const mouthXCord = mouth.getBoundingClientRect().x;
  const mouthYCord = mouth.getBoundingClientRect().y;
  document.onmousemove = (e) => {
    if (Math.abs(mouthXCord - e.pageX) <= 200 && Math.abs(mouthYCord - e.pageY)<=500) {
      mouth.style.transform = "scaleY(1.5)";
      mouth.style.transform = "scale(2)";
      

    } else {
      mouth.style.transform = "scale(1)";
    }
  };
}
