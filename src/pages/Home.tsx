import { ReactNode } from 'react';
import HomeBanner from '../components/HomeBanner/HomeBanner';
import { Card } from '../components/UI/Card/Card';
import Button from '../components/UI/Button/Button';
import Input from '../components/UI/Input/Input';

function Home() {
  const subscriptionStatusActions: ReactNode = (
    <Button btnsize='medium' btntype='primary'>
      Check
    </Button>
  );
  return (
    <>
      <HomeBanner />
      <Card title='Subscription Status' actions={subscriptionStatusActions}>
        <Input label='Subscriber Number' id='subscription-status' />
      </Card>
    </>
  );
}

export default Home;
