import {
  faStar,
  faStarHalfStroke
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  Card } from 'react-bootstrap';

const ratingLevels = { '0.5': faStarHalfStroke, '1': faStar, };

const TestimonialCard = ({ customer }) => {
  return (
    <section className="col-12 col-md-6 col-lg-3 g-3">
      <Card key={customer.id} style={{ width: '17rem' }} className='mx-auto overflow-hidden'>
        <Card.Img variant="top" src={customer.image} style={{ height:"250px" }} className='rounded-0' />
        <Card.Body>
          <Card.Title>{customer.fullName}</Card.Title>
          <Card.Text>
            {customer.rating.map((ratingPoint, index) =>
              <FontAwesomeIcon key={index} color='#FFFF44' icon={ratingLevels[ratingPoint]} size="xs" />
            )}
          </Card.Text>
          <Card.Text>
            "{customer.says}"
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
  );
};

export default TestimonialCard;