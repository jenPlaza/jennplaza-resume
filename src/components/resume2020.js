import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import PrintButton from './printButton';

//style
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    padding: '8% 12% 0% 8%',
  },
  resume: {
    margin: '0% 0% 0% 4%',
  },
}));

//exporting a class footer
export default function Resume2020() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.resume}>
        <br />
        <br />
        <h1>
          <b>
            <b>Jennifer Plaza</b>
          </b>
        </h1>
        <h4>Orlando, FL. | jennyp.plaza@gmail.com</h4>
        <br />
        <br />
        <h2>
          <b>
            <b>Summary</b>
          </b>
        </h2>
        <hr />
        <p>
          A new Full Sail graduate with an undergraduate degree in Web Design &
          Development. I have currently taken several courses on semantic design
          in front end web development, to learn how to enhance user
          interaction. I am eager to put what I’ve learned into practice. I look
          forward to using these skills to analyze, enhance your website, and
          meet your future goals.
        </p>
        <br />
        <br />
        <br />
        <h2>
          <b>
            <b>Experience </b>
          </b>
        </h2>
        <hr />
        <h3> Workforce Coordinator at National Restaurant Association</h3>
        <p> February 2017 - Mar 2018 </p>
        <br />
        <h3>
          IT Implementation and Support Coordinator at AHLEI - American Hotel &
          Lodging Educational Institute
        </h3>
        <p> January 2013 - January 2017 (4 years 1 month)</p>
        <ul>
          <li>
            <p>
              {' '}
              Fast learner with the ability to plan ahead and proactively
              provide solutions for solving problems. Very optimistic and able
              to work individually and in a team setting.
            </p>
          </li>
          <li>
            <p>
              Manage all Distance Learning student accounts, proximately 1400
              active accounts. Research and resolve student issues/ problems
              with online learning platform, enrollments, activity status,
              re-enrollments, retakes, program/ diplomas certificates.
            </p>
          </li>
          <li>
            <p>
              Accounting support for accounts receivables, payables, & expense
              reporting.{' '}
            </p>
          </li>
          <li>
            <p>
              {' '}
              Supports four online learning platforms to improve helpdesk
              content delivery.{' '}
            </p>
          </li>
          <li>
            <p> Trains department employees.</p>
          </li>
          <li>
            <p>
              Proficient in maintaining website content, using Ektron (content
              management system) for www.ahlei.org.
            </p>
          </li>
          <li>
            <p>
              {' '}
              Streamlines, resolves, and implements operational procedures to
              ensure operational performance.{' '}
            </p>
          </li>
          <li>
            <p>
              {' '}
              Knowledgeable in establishing workflow processes to facilitate
              operational procedures.{' '}
            </p>
          </li>
        </ul>
        <br />
        <h3>
          Marketing Coordinator at American Hotel & Lodging Educational
          Institute
        </h3>
        <p> January 2010 - December 2012 (3 years)</p>
        <ul>
          <li>
            <p>
              {' '}
              Achieved budget goal by establishing cost- saving purchases and
              booth rentals with AHLEI’s vendors.
            </p>
          </li>
          <li>
            <p>
              Streamlined processes to improve tradeshow booth scheduling,
              rental, and/or purchases to meet vendor and conference
              requirements.{' '}
            </p>
          </li>
          <li>
            <p>
              Enhanced communications processes with sales managers and
              coordinators to purchase tradeshow giveaways.
            </p>
          </li>
          <li>
            <p>Supported quality control for marketing collateral. </p>
          </li>
          <li>
            <p>
              Maintained files with all marketing collateral, newspaper ads,
              email marketing, tradeshow collaterals, and tradeshow pictures.
            </p>
          </li>
        </ul>
        <br />
        <h3>
          Certification Agent at American Hotel & Lodging Educational Institute
        </h3>
        <p> October 2006 - December 2009 (3 years 3 months)</p>
        <ul>
          <li>
            <p>
              Enhanced customer communications by managing productivity &
              quality experience of AHLEI’s Professional Certifications &
              Re-certifications for all military, Royal Caribbean, security &
              line-level accounts.{' '}
            </p>
          </li>
          <li>
            <p>
              Maintained certification quality by reviewing, processing, &
              billing applications, scoring & certifying exams.
            </p>
          </li>
        </ul>
        <br />
        <br />
        <br />
        <h2>
          <b>
            <b>Education</b>
          </b>
        </h2>
        <hr />
        <h3>Full Sail University</h3>
        <ul>
          <li>
            <h4>
              {' '}
              <b>Web Design & Development (BS)</b>, Nov 2017 – Nov 2020{' '}
            </h4>
          </li>
          <li>
            <h4>
              {' '}
              <b> Internet Marketing</b>, Marketing, Mar 2017 – Nov 2017
            </h4>
          </li>
          <br />
          <h3>Miami Dade Community College</h3>
          <ul>
            <li>
              <h4>
                <b> Associate of Arts (AA)</b>, 1997 – 1999
              </h4>
            </li>
          </ul>
          <br />
          <h3>Activities and Societies:</h3>
          <ul>
            <li>
              <h4> Phi Theta Kappa,1998 - 1999</h4>
            </li>
          </ul>
        </ul>
        <br />
        <br />
        <br />
        <h2>
          <b>
            <b>Skills</b>
          </b>
        </h2>
        <hr />
        <ul>
          <li>
            <p>Well-versed in both English & Spanish</p>
          </li>
          <li>
            <p>Efficient time management skills </p>
          </li>
          <li>
            <p>Disciplined and well organized</p>
          </li>
          <li>
            <p>Proficient in Microsoft Office </p>
          </li>
          <li>
            <p>Efficient in Git/ Version Control</p>
          </li>
          <li>
            <p>Efficient in Adobe XD </p>
          </li>
          <li>
            <p>Efficient in coding Html, CSS, JavaScript</p>
          </li>
          <li>
            <p>Knowledgeable in coding C# </p>
          </li>
          <li>
            <p>Efficient in Bootstrap, React, and Express frameworks </p>
          </li>
          <li>
            <p>Knowledgeable in Photoshop, InDesign</p>
          </li>
          <li>
            <p>Knowledgeable in WordPress </p>
          </li>
          <li>
            <p>Knowledgeable in using Sequel Pro, MySQL Workbench </p>
          </li>
        </ul>
        <hr />
        <br />
        <h4>
          <b>Jennifer Plaza</b>
        </h4>
        <p>Front-end Web Developer</p>
        <h5>jennyp.plaza@gmail.com</h5>
        <br /> <br /> <br />
      </Grid>
      <Grid item xs={6} sm={5} md={2} lg={2} xl={1}>
        <PrintButton />
      </Grid>
    </Grid>
  );
}
