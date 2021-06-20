import React from 'react' ;
import passionate from "../../assets/Home/illustration-passionate.svg";
import resourceful from "../../assets/Home/illustration-resourceful.svg";
import friendly from "../../assets/Home/illustration-friendly.svg";

const PeopleContact = () => {
    return (
      <section className="peopleContact">
        <div className="passionate">
          <img src={passionate} alt="passionate" />
          <h3>PASSIONATE</h3>
          <p>
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </div>
        <div className="resourceful">
          <img src={resourceful} alt="resourceful" />
          <h3>RESOURCEFUL</h3>
          <p>
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </p>
        </div>
        <div className="friendly">
          <img src={friendly} alt="friendly" />
          <h3>FRIENDLY</h3>
          <p>
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </p>
        </div>
      </section>
    );
}
export default PeopleContact;