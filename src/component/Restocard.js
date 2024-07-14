import{CND_URL} from "../utils/constants.js";
export const  Restocard = (props) =>{
    const {resdata}= props;
    const{
        cloudinaryImageId,
        name,
        cuisines,
        costForTwo,
        locality,
        areaName,
        avgRating,
    }=resdata?.info;
    return(
        <div className="resto-card">
            <img className="image"
            src={CND_URL + cloudinaryImageId }></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
          <h4>{costForTwo}</h4>
          <h4>{locality}</h4>
          <h4>{areaName}</h4>
          <h4>{avgRating}</h4>
        </div>
    );

};
export default Restocard;