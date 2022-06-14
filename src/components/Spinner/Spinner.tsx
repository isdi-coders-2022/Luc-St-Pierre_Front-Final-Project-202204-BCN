import SpinnerStyled from "./SpinnerStyled";

const Spinner = () => {
  return (
    <SpinnerStyled className="dot-pulse">
      <div className="dot-pulse__dot">Loading</div>
    </SpinnerStyled>
  );
};

export default Spinner;
