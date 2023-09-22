import { useState } from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home';

const BookingForm = ({
  availableTimes,
  dispatchOnDateChange,
  submitData
}) => {
  const minimumDate = new Date().toISOString().split('T')[0];
  const defaultTime = availableTimes[0];
  const minimumNumberOfGuests = 1;
  const maximumNumberOfGuests = 10;
  const occasions = ['Birthday', 'Anniversary'];
  const invalidDateErrorMessage = 'Please choose a valid date';
  const invalidTimeErrorMessage = 'Please choose a valid time';
  const invalidOccasionErrorMessage = 'Please choose a valid occasion';
  const invalidNumberOfGuestsErrorMessage =
    'Please enter a number between 1 and 10';

  const [date, setDate] = useState(minimumDate);
  const [time, setTime] = useState(defaultTime);
  const [
    numberOfGuests,
    setNumberGuests
  ] = useState(minimumNumberOfGuests);
  const [occasion, setOccasion] = useState(occasions[0]);

  const isDateValid = () => date !== '';
  const isTimeValid = () => time !== '';
  const isNumberOfGuestsValid = () => numberOfGuests !== '';
  const isOccasionValid = () => occasion !== '';

  const areAllFieldsValid = () =>
    isDateValid()
    && isTimeValid()
    && isNumberOfGuestsValid()
    && isOccasionValid();

  const handleDateChange = e => {
    setDate(e.target.value);
    dispatchOnDateChange(e.target.value);
  };

  const handleTimeChange = e => setTime(e.target.value);

  const handleFormSubmit = e => {
    e.preventDefault();
    submitData({ date, time, numberOfGuests, occasion, });
  };

  const FormField = ({ children, label, htmlFor, hasError, errorMessage }) => {
    return (
      <section className="form-group my-3">
        <label htmlFor={htmlFor}>{label}</label>
        {children}
        {hasError && errorMessage ?
          <p data-testid="error-message">{errorMessage}</p> : null}
      </section>
    );
  };

  return (
    <form onSubmit={handleFormSubmit} className='form bg-light shadow-sm p-5 rounded'>
      <h2 className='text-center'>Table reservation</h2>
      <FormField
        className="form-label"
        label="Date"
        htmlFor="booking-date"
        hasError={!isDateValid()}
        errorMessage={invalidDateErrorMessage}
      >
        <input
          className='form-control'
          type="date"
          id="booking-date"
          name="booking-date"
          min={minimumDate}
          value={date}
          required={true}
          onChange={handleDateChange}
        />
      </FormField>
      <FormField
        className="form-label"
        label="Time"
        htmlFor="booking-time"
        hasError={!isTimeValid()}
        errorMessage={invalidTimeErrorMessage}
      >
        <select
          className='form-select'
          id="booking-time"
          name="booking-time"
          value={time}
          required={true}
          onChange={handleTimeChange}
        >
          {availableTimes.map(times =>
            <option data-testid="booking-time-option" key={times}>
              {times}
            </option>
          )}
        </select>
      </FormField>
      <FormField
        className="form-label"
        label="Number of guests"
        htmlFor="booking-number-guests"
        hasError={!isNumberOfGuestsValid()}
        errorMessage={invalidNumberOfGuestsErrorMessage}
      >
        <input
          className='form-control'
          type="number"
          id="booking-number-guests"
          name="booking-number-guests"
          value={numberOfGuests}
          min={minimumNumberOfGuests}
          max={maximumNumberOfGuests}
          required={true}
          onChange={e => setNumberGuests(e.target.value)}
        />
      </FormField>
      <FormField
        className="form-label"
        label="Occasion"
        htmlFor="booking-occasion"
        hasError={!isOccasionValid()}
        errorMessage={invalidOccasionErrorMessage}
      >
        <select
          className='form-select'
          id="booking-occasion"
          name="booking-occasion"
          value={occasion}
          required={true}
          onChange={e => setOccasion(e.target.value)}
        >
          {occasions.map(occasion =>
            <option data-testid="booking-occasion-option" key={occasion}>
              {occasion}
            </option>
          )}
        </select>
      </FormField>
      <button
        className="btn btn-lg btn-secondary float-end"
        type="submit"
        disabled={!areAllFieldsValid()}
      >
        Make your reservation
      </button>
      <Link to='/' element={<Home/>} className='btn btn-lg btn-dark'>Cancel</Link>
    </form>
  );
};

export default BookingForm;
