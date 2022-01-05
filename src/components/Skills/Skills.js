import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    // <section className="section skills" id="skills">
    //   <h2 className="section__title">Skills</h2>
    //   <ul className="skills__list">
    //     {skills.map((skill) => (
    //       <li key={uniqid()} className="skills__list-item btn btn--plain">

    //         {skill}
    //       </li>
    //     ))}
    //   </ul>
    // </section>

    <section className="section skills" id="skills">
      <h2 className="section__title"> SKILLS</h2>
      <div className="skills__list">
        <img
          src="https://www.vectorlogo.zone/logos/golang/golang-icon.svg"
          className="skills__list-item"
        />

        <img
          src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
          className="skills__list-item"
        />
        <img
          className="skills__list-item"
          src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
        />

        <img
          className="skills__list-item"
          src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg"
        />
        <img
          className="skills__list-item"
          src="https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg"
        />
        <img
          className="skills__list-item"
          src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
        />
        <img
          className="skills__list-item"
          src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"
        />
        <img
          className="skills__list-item"
          src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
         
        />
        <img
          className="skills__list-item"
          src="https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg"
        />
        <img
          className="skills__list-item"
          src="https://www.vectorlogo.zone/logos/java/java-icon.svg"
        />
        <img
          className="skills__list-item"
          src="https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg"
        />
        <img
          className="skills__list-item"
          src="https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg"
        />
      </div>
    </section>
  );
}

export default Skills
