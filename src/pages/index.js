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
      My name is Isaac and I’m a recent graduate of Allegheny College’s Class of 2020. I've worked on many projects that range from front-end development
      to working with databases and APIs. I've also worked on projects that involved data visualization; these projects varied from representing musical
      notes from a keyboard as colors and shapes through a projector, to extracting data from Twitter to create a series of comparative graphs between
      two popular hashtags. My professional experience involves co-teaching a web development bootcamp in New York City where the curriculum covered
      HTML/CSS/JS and Ruby on Rails software. This coming fall I’ll be starting as a software engineer with American Express.
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
            At my previous job, I came across a frustrating problem: when figuring out the daily schedules for all the rooms in the building,
            I’d have to do so manually. This was a tedious and repetitive process, so I sought to create a program that could assign staff to
            rooms given time conditions for each person and each room. The result is this web application leveraging Streamlit’s library and
            Python3. The application is currently being worked on to abstract it to as many rooms as you need with all the different time
            conditions. If you have experience creating APIs or working with scheduling algorithms, this is a great project to contribute to.
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
            Using Processing and The Midibus, I was able to take input from a midi-keyboard and create a colorful visual representation of
            the notes being played on my piano. The shapes, sizes, and shakiness correlate with the number of notes being played at a time
            and how loudly each note is being played.

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
            I contributed to an open source project that used grouping algorithms to designate people into balanced teams
            based on individuals' traits. Django was used to create a CRUD application for users (in this case, Professors)
            to be able to create different online groups for different assignments and classes.
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
