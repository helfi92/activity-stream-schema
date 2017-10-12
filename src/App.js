import React from 'react';
import Table from './Table';
import './App.css';

const App = () => (
  <div className="App">
    <h1>Activity Stream Schemas</h1>
    <Table title="BasePing" />
    <Table title="UndesiredPing" />
    <Table title="UserEventPing" />
    <Table title="UserEventAction" />
    <Table title="ImpressionStatsPing" />
    <Table title="TileSchema" />
    <Table title="PerfPing" />
    <Table title="SessionPing" />
  </div>
);

export default App;
