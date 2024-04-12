import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';

function Cards({index, title, description, urlToImage, url, author, publishedAt}) {
  return (
    <Col key={index} lg={4} md={6} sm={12} className="mb-5">
    <Card style={{ width: '18rem', height: '500px' }}>
      <Card.Img variant="top" className="card-images" src={urlToImage} />
      
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {(description.slice(0,50))}
        </Card.Text>
        <a href={url} className='btn btn-success btn-sm'>Show Detail</a>
        <br /><small>{author}</small>
      </Card.Body>
    </Card>
    </Col>
  );
}

export default Cards;