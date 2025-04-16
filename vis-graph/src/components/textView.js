import React from 'react';
import '../style/tableView.css'; // Reuse the table styles

const AboutOverlay = () => {
  return (
    <div className="TableView">
      <h2>About This Project</h2>
      <div className="table-container">
        <div className="about-text">
          <p class="AboutText">
            <strong>Ancient Egyptian Divine Mapping</strong> is an interactive visualization of the relationships
            between gods, goddesses, and other mythological figures from ancient Egyptian culture. It is built
            from curated data representing genealogies, roles, and affiliations sourced from academic and public sources.
<br></br><br></br>
            The table view allows you to explore individual characters and their attributes, while the relationship view
            illustrates how they are connected. The project is designed to be an educational tool for exploring the mythological
            structure of ancient Egypt.

            Data processing and server endpoints are hosted remotely and provide filterable views of the mythological dataset.<br></br>
<br></br>
<b>Sources</b><br></br>Sources 

The Editors of Encyclopaedia Britannica. "11 Egyptian Gods and Goddesses". Encyclopedia Britannica, 27 Oct. 2017, https://www.britannica.com/list/11-egyptian-gods-and-goddesses. Accessed 4 April 2025.<br></br>

Hart, George. *The Routledge Dictionary of Egyptian Gods and Goddesses*, Taylor & Francis Group, 2005. *ProQuest Ebook Central*, https://ebookcentral-proquest-com.revproxy.brown.edu/lib/brown/detail.action?docID=214769.<br></br>

Pyramid texts are sourced from James P. Allen's translation of the Ancienct Egyptian Pyramid Texts (2005)<br></br>

Coffin Texts (Class Handouts)<br></br>

Greenfield Papyrus</p>
        </div>
      </div>
    </div>
  );
};

export default AboutOverlay;
