import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NotFound from './../NotFound/NotFound';

const meals = [
  {
    id:1,
    name: 'Greek Salad',
    image: 'greek-salad.jpg',
    price: '$12.99',
    description: `The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.`,
  },
  {
    id:2,
    name: 'Bruschetta',
    image: 'bruschetta.jpg',
    price: '$5.99',
    description: `Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.`,
  },
  {
    id:3,
    name: 'Lemon Dessert',
    image: 'lemon-dessert.jpg',
    price: '$5.00',
    description: `This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.`,
  },
];



const WeekSpecials = () => {
  const listItems = meals.map(meal =>{

    const CardMeal = (
    <Card key={meal.id} style={{ width: '20rem' }}>
        <Card.Img variant="top" src={require(`./assets/images/${meal.image}`)} style={{ height:"250px" }} className='rounded-0' />
        <Card.Body>
        <Card.Title>{meal.name} <p className='float-end text-warning'>{meal.price}</p></Card.Title>
        <Card.Text>
            {meal.description}
        </Card.Text>
        <Link to='/order-online' element={<NotFound/>} className='btn btn-lg btn-dark'>Order a Delivery</Link>
        </Card.Body>
    </Card>
    );

    return CardMeal;
})

  return (
  <article id='meals' className='pt-5'>
      <section className='d-flex justify-content-between mb-5'>
          <h3>Specials</h3>
          <Link to='/order-online' element={<NotFound/>} className='btn btn-lg btn-dark'>Online Menu</Link>
      </section>
      <section className='row justify-content-around g-3'>
          {listItems}
      </section>
  </article>
)}

export default WeekSpecials