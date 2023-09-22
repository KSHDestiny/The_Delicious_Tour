import customer1Image from './assets/images/customer1.jpg';
import customer2Image from './assets/images/customer2.jpg';
import customer3Image from './assets/images/customer3.jpg';
import customer4Image from './assets/images/customer4.jpg';
import TestimonialCard from './TestimonialCard';

const customers = [
  {
    fullName: 'Jonh Marker',
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsa labore, totam nostrum magni facere tempore temporibus.`,
  },
  {
    fullName: 'Sam Rosy',
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsa labore, totam nostrum magni facere tempore temporibus.`,
  },
  {
    fullName: 'Joe',
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsa labore, totam nostrum magni facere tempore temporibus.`,
  },
  {
    fullName: 'Clare Walt',
    image: customer4Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsa labore, totam nostrum magni facere tempore temporibus.`,
  },
];

const Testimonials = () => {
  return (
    <article className="container mt-5">
      <section className="row">
          <h2>What people say about us!</h2>
          {customers.map((customer, index) =>
            <TestimonialCard key={index} customer={customer} />
          )}
     </section>
    </article>
  );
};

export default Testimonials;
