import React from 'react';

import Layout from '../components/layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import screen from '../assets/images/screen.png';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.png';
import resume from "../assets/images/resume.pdf"
import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <header id="header">
      <div className="content">
        <h1>
          <a href="/#">{config.heading}</a>
        </h1>
        <p>{config.subHeading}</p>
        <ul className="actions">
          <li>
            <a
              href={resume}
              className="button primary icon fa-download"
            >
              Open Resume
            </a>
          </li>
          <li>
            <Scroll type="id" element="one">
              <a href="#one" className="button icon fa-chevron-down">
                Learn More
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <div className="image phone">
        <div className="inner">
          <img src={screen} alt="" />
        </div>
      </div>
    </header>

    <section id="one" className="wrapper style2 special">
      <header className="major">
        <h2>
          About Me
        </h2>
      </header>
      <div className="inner alt">
      <div className="content">

      <p>
          My name is Isaac and I recently graduated from Allegheny College. In the past, I've worked on many projects that range from front end development to working
          with databases and APIs. My professional experience involves co-teaching a Web Development
          bootcamp in NYC in which we went over HTML/CSS/JS and Ruby on Rails. I'm starting a position
          with American Express as a software engineer in the fall. I've worked on many projects that involved data visualization.
          These projects varied from representing musical notes on a keyboard as colors and shapes over a projector to extracting data from tweets
          to create a series of graphs comparing sentiment between two hashtags.
        </p>
      </div>
      </div>
    </section>

    <section id="two" className="wrapper">
    <header className="major">
        <h2>
          My Projects
        </h2>
      </header>
      <div className="inner alt">
        <section className="spotlight">
          <div className="image">
            <img src="https://media.giphy.com/media/VhoziXpdEL0DS54jak/source.mp4" alt="" />
          </div>
          <div className="content">
            <h3>Scheduler</h3>
            <p>
              Tired of manually figuring out daily room schedules at my last job, I sought to create a program that could assign staff to each room
              given time conditions for each person and room. The result is this web application leveraging streamlit's library and python3. This one
              is still being worked on in order to abstract it to as many rooms as you need all with different time conditions. If you have experience
              creating API's or working with scheduling algorithms, this is a good project to try and contribute to.
            </p>
          </div>
        </section>
        <section className="spotlight">
          <div className="image">
            <img src="https://media.giphy.com/media/lSU9A3WvzwGH3Bm6sd/giphy.gif" alt="" />
          </div>
          <div className="content">
            <h3>Synesthesia</h3>
            <p>
            Using Processing and themidibus, I was able to take input from a midi keyboard and turn the notes into a colorful visual representation.
            The shapes, sizes, and shakiness correlate with the number of notes being played at a time and how loud each note is being played.

            </p>
          </div>
        </section>
        <section className="spotlight">
          <div className="image">
            <img src={pic3} alt="" />
          </div>
          <div className="content">
            <h3>GatorGrouper</h3>
            <p>
              Contributed to an opensource project that used grouping algorithms to designate people into balaced
              teams based on individuals' traits. Used Django to create a CRUD application for users (professors) to
              be able to create different groups for different assignments and classes.
            </p>
          </div>
        </section>
        <section className="special">
          <ul className="icons labeled">
          <li>
              <span className="icon fa-code">
                <span className="label">Object Oriented Programming</span>
              </span>
            </li>
            <li>
              <span className="icon fa-code">
                <span className="label">React/Django</span>
              </span>
            </li>
            <li>
              <span className="icon fa-code">
                <span className="label">HTML/CSS/JS</span>
              </span>
            </li>
            <li>
              <span className="icon fa-code">
                <span className="label">Python/Java</span>
              </span>
            </li>
          </ul>
        </section>
      </div>
    </section>

    <section id="three" className="wrapper style2 special">
      <header className="major">
        <h2>Check out more of my projects at github</h2>
      </header>
    </section>

    <Footer />
  </Layout>
);

export default IndexPage;
