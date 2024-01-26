import { shimmer_card_unit } from "../utils/constants";

const CardShimmer = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img stroke animate"></div>
      <div className="shimmer-title stroke animate"></div>
      <div className="dets_1 stroke animate"></div>
      <div className="dets_2 stroke animate"></div>
    </div>
  );
};

export const MenuShimmer = () => {
  return (
    <div className="shimmer-container">
      <div className="restaurant-summary-details">
        <h2 className="shimmer-w40  stroke animate"></h2>
        <p className="shimmer-w20 stroke animate"></p>
        <div className="shimmer-w60  stroke animate"></div>
      </div>

      <div className="restaurant-menu-content">
        <div className="menu-items-container">
          <div className="menu-title-wrap ">
            <h3 className="shimmer-w40 stroke animate"></h3>
            <p className="shimmer-w20 stroke animate"></p>
          </div>
          <div className="menu-items-list">
            {Array(shimmer_card_unit)
              .fill("")
              .map((_element, index) => (
                <div className="shimmer-menu-card" key={index}>
                  <div className="shimmer-item-details">
                    <h3 className="shimmer-w40  stroke animate"></h3>
                    <p className="shimmer-w20  stroke animate"> </p>
                    <p className="shimmer-w60  stroke animate"></p>
                  </div>
                  <div className="shimmer-img-wrapper">
                    <img className="shimmer-img stroke animate" />
                    <div className="shimmer-btn stroke animate"> </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {new Array(shimmer_card_unit).fill(0).map((_ele, idx) => {
        return <CardShimmer className="shimmer-card" key={idx} />;
      })}
    </div>
  );
};

export default Shimmer;
