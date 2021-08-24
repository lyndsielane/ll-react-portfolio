import React from 'react';
import '../styles/Section.css';

const styles = {
  sectionStyles: {
    background: 'orange',
  },
};

function Section() {
  return (
    <section style={styles.sectionStyles} className="section">
      <h2>Lyndsie Lane</h2>
      <p>
      About Me
      </p>
      <p>
        Skills
      </p>
      <p>
       Projects
      </p>
    </section>
  );
}

export default Section;
