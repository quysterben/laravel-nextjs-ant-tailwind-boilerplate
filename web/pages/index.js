import { Button } from 'antd';

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <Button size="large" type="primary">
        Button
      </Button>

      <Button size="large" type="primary" className='bg-primary border-primary'>
        Button
      </Button>
    </div>
  );
};

export default Home;