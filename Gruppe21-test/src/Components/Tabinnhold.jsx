import React from 'react';
import ResourceMap from './ResourceMap';

// funksjon for å printe data fra arrayen for hver respektiv tab 
export default function Tabinnhold({ category, text, sources }) {

// returnerer html struktur med informasjonen fra arrayen
  return (
    <section id={category.toLowerCase()} className="meny-innhold">
      <h2>{category}</h2>
      <p>{text}</p>
      <ResourceMap resources={sources} />
    </section>
  );
}