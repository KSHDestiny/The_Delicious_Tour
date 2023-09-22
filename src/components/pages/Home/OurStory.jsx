import { Image } from 'react-bootstrap';
import Chicago1 from './assets/images/chicago1.jpg';
import Chicago2 from './assets/images/chicago2.jpg';

const OurStory = () => {
  return (
    <article className="row align-items-center vh-100">
      <section className="col-12 d-md-none d-block text-center">
        <h1>The Delicious Tour</h1>
        <h2>Chicago</h2>
        <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam voluptatibus perspiciatis saepe excepturi vero, eum ab aspernatur omnis exercitationem sunt nemo facilis cupiditate quas. Animi nemo corrupti est impedit possimus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur sunt quam vitae excepturi architecto, nulla nihil! Cum tempore nostrum, veniam numquam natus fugiat, eum delectus repudiandae error, at sunt excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ratione eos corporis! Corrupti cumque maxime tenetur, consequuntur, impedit asperiores nulla vel commodi doloribus cupiditate ipsam neque maiores illum qui deleniti!
        </p>
      </section>
      <section className='col-12 col-md-6'>
        <Image src={Chicago1} width="40%" className='rounded-5 d-inline' style={{ marginTop:"-100px" }}></Image>
        <Image src={Chicago2} width="40%" className='rounded-5 d-inline'></Image>
      </section>
      <section className="col-md-6 d-none d-md-block">
        <h1>The Delicious Tour</h1>
        <h2>Chicago</h2>
        <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam voluptatibus perspiciatis saepe excepturi vero, eum ab aspernatur omnis exercitationem sunt nemo facilis cupiditate quas. Animi nemo corrupti est impedit possimus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur sunt quam vitae excepturi architecto, nulla nihil! Cum tempore nostrum, veniam numquam natus fugiat, eum delectus repudiandae error, at sunt excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ratione eos corporis! Corrupti cumque maxime tenetur, consequuntur, impedit asperiores nulla vel commodi doloribus cupiditate ipsam neque maiores illum qui deleniti!
        </p>
      </section>
    </article>
  );
};

export default OurStory;
