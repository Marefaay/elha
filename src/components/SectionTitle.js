import "./SectionTitle.css";
function SectionTitle(props) {
  return (
    <div className="container">{
        props.margin==="auto"? <span className="d-block m-auto" id="section-title">
        {props.title}
      </span>: <span className="d-block" id="section-title">
        {props.title}
      </span>
    }
    </div>
     
  );
}
export default SectionTitle;
