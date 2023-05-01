import React from 'react';

import { Row, Col } from 'antd';

const items = [
  {
    key: '1',
    icon: <i className="fas fa-chart-pie"></i>,
    title: 'Car Detailing',
    content: 'Unleash the hidden shine of your vehicle with our meticulous car detailing.',
  },
  {
    key: '2',
    icon: <i className="fas fa-desktop"></i>,
    title: 'Decorative Concrete Design',
    content: 'Unlock the beauty within your concrete with our artistic touch.',
  },
  {
    key: '3',
    icon: <i className="fas fa-database"></i>,
    title: 'Trash Can Cleaning',
    content: 'Transforming trash-ridden spaces into pristine paradises, one cleanup at a time.',
  },
]

function AppAbout() {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>About Us</h2>
        </div>
        <div className="contentHolder">
          <p>Looking for convenient and reliable services in Prosper, Mustang Lakes or Light Farms? Look no further! Our top-notch services are now available to you on weekdays from 4PM-6PM, and on weekends and summer break from 8AM-7PM. We understand that you have a busy schedule, which is why we are flexible and available during hours that work best for you. To schedule a time and place that suits your needs, simply give us a call at 4699200475. Let us take care of your needs, so you can enjoy your free time stress-free!

</p>
        </div>
        <Row gutter={[16, 16]}>   
          {items.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppAbout;