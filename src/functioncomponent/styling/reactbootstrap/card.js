import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from '../spinners/spinner';

function CustomCard({name,description,ImageUrl,loaderVisible}) {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src={ImageUrl} width={30} height={200} />
      <Card.Body>
       {
        loaderVisible?<Spinner/>
        :null
       }
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;