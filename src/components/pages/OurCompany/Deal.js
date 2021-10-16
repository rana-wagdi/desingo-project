import React from 'react';

import LocationShared from '../../../sharedComponent/LocationShared';
const Deal = () => {
    return (
      <div className="deal">
      <LocationShared />

        <section className="deal-section">
          <div className="deal-text">
            <h1>The real deal</h1>
            <p>
              As strategic partners in our clients’ businesses, we are ready to
              take on any challenge as our own. Solving real problems require
              empathy and collaboration, and we strive to bring a fresh
              perspective to every opportunity. We make design and technology
              more accessible and give you tools to measure success.
            </p>
            <p  className="deal__text__pragraph">
            We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.
            </p>
          </div>
          <div className="deal-img"></div>
        </section>
      </div>
    );
}

export default Deal;