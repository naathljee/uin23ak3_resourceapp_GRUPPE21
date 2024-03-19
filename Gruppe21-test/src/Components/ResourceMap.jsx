import React from 'react';

// funksjon for å mappe arrayen med ressurser og skrive det ut til et listeelement 
function ResourceMap({ resources }) {


// funksjonen mapper hver ressurs til et listeelement 
  return (
    <ul className="resource-list">
      {resources.map((resource, index) => (
        <li key={index}>
          <a href={resource.url} target="_blank" rel="">{resource.title}</a>

        </li>
      ) ) }
    </ul>
  );
}

export default ResourceMap;
