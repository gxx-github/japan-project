import classNames from "classnames";

const SkeletonLoading = (props: any) => {
  const {
    children,
    show = true,
    type,
    width = "130px",
    height = "25px",
  } = props;

  return (
    <>
      {show && type === "inline" && (
        <div>
          <span
            className={classNames(
              "skeletonInlineBox",
              "skeletonInlineLightBox"
            )}
            style={{ width, height }}
          ></span>
        </div>
      )}
      {show && type === "block" && (
        <div>
          <div
            className={classNames("skeletonBlockBox", "skeletonBlockLightBox")}
            style={{ width, height }}
          >
            <div className="loading-img"></div>
          </div>
        </div>
      )}
      {!show && children && <>{children}</>}
    </>
  );
};

export default SkeletonLoading;
