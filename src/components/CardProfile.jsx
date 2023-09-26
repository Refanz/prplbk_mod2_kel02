import Card, {CardButton, CardEmail, CardNIM, CardTitle} from "../elements/Card.jsx";
import ImageCard from "../elements/ImageCard.jsx";

const CardProfile = (props) => {
    return(
      <Card>
          <ImageCard
              src={props.src}/>
          <h3>{props.name}</h3>
          <CardEmail>{props.email}</CardEmail>
          <CardTitle>{props.title}</CardTitle>
          <CardNIM>{props.nim}</CardNIM>
          <p>{props.college}</p>
          <CardButton>Github</CardButton>
      </Card>
    );
}

export default CardProfile;