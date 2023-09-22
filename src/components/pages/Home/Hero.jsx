import { Link } from 'react-router-dom';
import pages from '../../../utils/page';
import { Image } from 'react-bootstrap';
import kung_pao_chicken from "./assets/images/kung_pao_chicken.jpg"

const Hero = () => {
  return (
    <article id='home' className='row flex-column-reverse flex-md-row align-items-center mt-5 pt-5'>
      <section className='col-12 col-md-6'>
        <h2>The Delicious Tour</h2>
        <h5>Chicago</h5>
        <p className='mt-3 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aspernatur repudiandae odit minima, esse blanditiis commodi. Obcaecati perspiciatis soluta ut magnam aperiam, atque veniam iste tempora quaerat explicabo assumenda dignissimos?</p>
        <Link className="btn btn-lg btn-dark" to={pages.get('bookings').path}>
            Reserve a table
          </Link>
      </section>
      <section className='col-12 col-md-6'>
        <Image src={kung_pao_chicken} width="100%" className='rounded-4 mb-5 mb-md-0 mx-auto'></Image>
      </section>
    </article>
  );
};

export default Hero;
