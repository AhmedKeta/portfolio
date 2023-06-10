import "./SkillsChart.css";

const SkillsChart = (props) => {
  return (
    <div className="skill-bar">
      <div className="bar" style={{ width: props.value +"%" }}>
        {props.skill}
      </div>
    </div>
  );
};
export default SkillsChart;
