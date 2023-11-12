export default function hobbyLinks () {
    let hobbyLinks = ["https://www.watercolorcollege.com/", "https://www.indonesianpod101.com/"];
    let pageTitle = "Hobby Links"
    return (
    <div>
    <h3>{pageTitle}</h3>
    <a href = {hobbyLinks[0]} target="blank">Watercolor</a> <br/> <br/>
    <a href = {hobbyLinks[1]} target="blank">Indonesian</a><br/> <br/><br/>
    </div>
  );
  }
