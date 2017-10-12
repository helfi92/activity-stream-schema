import React from 'react';
import SchemaViewer from 'react-schema-viewer';
import Schemas from './schema';

const Table = ({ title }) => (
  <div className="App">
    <h4>{title}</h4>
    <SchemaViewer type='joi' schema={Schemas[title]} />
  </div>
);

export default Table;