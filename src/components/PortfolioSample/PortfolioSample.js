import "./PortfolioSample.css";
const PortfolioSample = (props) => {
  return (

        <div className="alert sample-container col-12 col-sm-5 col-md-3 d-flex justify-content-center align-items-center">
          <a href={props.href}>{props.sample}</a>
        </div>

  );
};
export default PortfolioSample;
