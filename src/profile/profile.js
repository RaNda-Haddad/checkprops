import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from "prop-types" ;

function profile(props) {
const handleName= (profession) => alert('The profile profession is ${props.profession}')
  return (
    <Card style={{ width: '18rem' }}>
      {props.children}
      <Card.Body>
        <Card.Title>props.name</Card.Title>
        <Card.Text>
                     { props.profile}
        </Card.Text>
        <Button variant="primary" onclick={handleName}>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
profile.proptypes={
  profile: PropTypes.string
}





export default Products;