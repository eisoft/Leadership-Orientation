import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

function Result(props) {
  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        <h3>You prefer <strong>{props.quizResult}</strong>!</h3>

        <hr></hr>

        <h2>Leadership Orientation Descriptions:</h2>

        <h3>Structural Leaders:</h3>
        <p>Structural leaders emphasize rationality, analysis, logic, facts, and data. They are likely to believe strongly in the importance of clear structure and well-developed management systems. A good leader is someone who thinks clearly, makes the right decisions, has good analytical skills, and can design structures and systems that get the job done.</p>

        <h3>Human Resource Leaders:</h3>
        <p>Human resource leaders emphasize the importance of people. They endorse the view that the central task of management is to develop a good fit between eople and organizations. They believe in the importance of coaching, participation, motivation, teamwork, and good interpersonal relations. A good leader is a facilitator and participative manager who supports and empowers others.</p>
        
        <h3>Political Leaders:</h3>
        <p>Political leaders believe that managers and leaders live in a world of conflict and scarce resources. The central task of management is to mobilize the resources needed to advocate and fight for the unit&rsquo;s or the organization&rsquo;s goals and objectives. Political leaders emphasize the importance of building a power base: allies, networks, coalitions. A good leader is an advocate and negotiator who understands politics and is comfortable with conflict.</p>
        
        <h3>Symbolic Leaders:</h3>
        <p>Symbolic leaders believe that the essential task of management is to provide vision and inspiration. They rely on personal charisma and a flair for drama to get people excited and committed to the organizational mission. A good leader is a prophet and visionary, who uses symbols, tells stories, and frames experience in ways that give people hope and meaning.</p>
      </div>
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
