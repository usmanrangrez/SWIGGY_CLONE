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
