import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ConfirmedBooking = () => {
  return (
    <main className='min-vh-100 bg-success text-white row justify-content-center align-items-center display-6'>
      <article className='text-center'>
        <FontAwesomeIcon icon={faCircleCheck} size="3x" />
        <h2>Your reservation has been confirmed.</h2>
        <p>You will receive an email with all the details.</p>
      </article>
    </main>
  );
};

export default ConfirmedBooking;
