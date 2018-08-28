import React, { Component } from 'react';
import './App.css';
import resume from './resume.json';
import Experiences from './Experience';
import Project from './Project';
import Skill from './Skill';
import Education from './Education'
import Language from './Language'

class App extends Component {
  renderExperience() {
    let resultArray = [];
    resume.experiences.map((item, i)=> {
      resultArray.push(<Experiences item={item} key={i}/>);
    });
    return resultArray;
  }
  renderProject() {
    let resultArray = [];
    resume.projects.map((item, i)=> {
      resultArray.push(<Project item={item} key={i}/>);
    });
    return resultArray;
  }
  renderSkill() {
    let resultArray = [];
    resume.skills.map((item, i)=> {
      resultArray.push(<Skill item={item} key={i}/>);
    });
    return resultArray;
  }
  renderEducation() {
    let resultArray = [];
    resume.education.map((item, i)=> {
      resultArray.push(<Education item={item} key={i}/>);
    });
    return resultArray;
  }
  renderLanguages() {
    let resultArray = [];
    resume.languages.map((item, i)=> {
      resultArray.push(<Language item={item} key={i}/>);
    });
    return resultArray;
  }
  render() {
    return (
      <div className="wrapper">
        <div className="sidebar-wrapper">
            <div className="profile-container">
                <img className="profile" src={resume.image} alt="" />
                <h1 className="name">{resume.name}</h1>
                <h3 className="tagline">Full Stack Developer</h3>
            </div>
            
            <div className="contact-container container-block">
                <ul className="list-unstyled contact-list">
                    <li className="email"><i className="fas fa-envelope"></i><a href="mailto: yourname@email.com">{resume.email}</a></li>
                    <li className="phone"><i className="fas fa-phone"></i><a href="tel:0123 456 789"></a></li>
                    <li className="website"><i className="fas fa-globe"></i><a href={resume.email} target="_blank">{resume.website}</a></li>
                    <li className="linkedin"><i className="fab fa-linkedin-in"></i><a href="#" target="_blank">linkedin.com/in/alandoe</a></li>
                    <li className="github"><i className="fab fa-github"></i><a href="#" target="_blank">github.com/username</a></li>
                    <li className="twitter"><i className="fab fa-twitter"></i><a href="https://twitter.com/3rdwave_themes" target="_blank">{resume.twitter}</a></li>
                </ul>
            </div>
            <div className="education-container container-block">
                <h2 className="container-block-title">Education</h2>
                {this.renderEducation()}
            </div>
            
            <div className="languages-container container-block">
                <h2 className="container-block-title">Languages</h2>
                <ul className="list-unstyled interests-list">
                {this.renderLanguages()}
                </ul>
            </div>
            
            <div className="interests-container container-block">
                <h2 className="container-block-title">Interests</h2>
                <ul className="list-unstyled interests-list">
                    <li>Climbing</li>
                    <li>Snowboarding</li>
                    <li>Cooking</li>
                </ul>
            </div>
            
        </div>
        
        <div className="main-wrapper">
            
            <section className="section summary-section">
                <h2 className="section-title"><span className="icon-holder"><i className="fas fa-user"></i></span>Career Profile</h2>
                <div className="summary">
                    <p>Summarise your career here lorem ipsum dolor sit amet, consectetuer adipiscing elit. You can <a href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/orbit-free-resume-cv-bootstrap-theme-for-developers/" target="_blank">download this free resume/CV template here</a>. Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.</p>
                </div>
            </section>
            
            <section className="section experiences-section">
                <h2 className="section-title"><span className="icon-holder"><i className="fas fa-briefcase"></i></span>Experiences</h2>         
                {this.renderExperience()}         
            </section>
            
            <section className="section projects-section">
                <h2 className="section-title"><span className="icon-holder"><i className="fas fa-archive"></i></span>Projects</h2>
                <div className="intro">
                    <p>You can list your side projects or open source libraries in this section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ligula in nunc bibendum fringilla a eu lectus.</p>
                </div>
                {this.renderProject()}
            </section>
            
            <section className="skills-section section">
                <h2 className="section-title"><span className="icon-holder"><i className="fas fa-rocket"></i></span>Skills &amp; Proficiency</h2>
                <div className="skillset">        
                    
                    {this.renderSkill()}
  
                </div>  
            </section>
            
        </div>
      </div>
    );
  }
}

export default App;
