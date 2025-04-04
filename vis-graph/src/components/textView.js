import React from 'react';
import '../style/tableView.css'; // Reuse the table styles

const AboutOverlay = () => {
  return (
    <div className="TableView">
      <h2>About This Project</h2>
      <div className="table-container">
        <div className="about-text">
          <p>
            <strong>Ancient Egyptian Divine Mapping</strong> is an interactive visualization of the relationships
            between gods, goddesses, and other mythological figures from ancient Egyptian culture. It is built
            from curated data representing genealogies, roles, and affiliations sourced from academic and public sources.
          </p>
          <p>
            The table view allows you to explore individual characters and their attributes, while the relationship view
            illustrates how they are connected. The project is designed to be an educational tool for exploring the mythological
            structure of ancient Egypt.
          </p>
          <p>
            Built with React, this visualization uses structured data from spreadsheet files (converted from Apple Numbers),
            processed in the browser using the <code>xlsx</code> library. The interface allows filtering by group and toggling
            between characters and relationships.
          </p>
          <p>
            Data processing and server endpoints are hosted remotely and provide filterable views of the mythological dataset.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutOverlay;
