import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  pageSize=15;
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
          <Route path="/business" element={<News key="Business" pagesize={this.pageSize} country="in" category="Business" />} />
            <Route path="/business" element={<News key="Business" pagesize={this.pageSize} country="in" category="Business" />} />
            <Route path="/entertainment" element={<News key="Entertainment" pagesize={this.pageSize} country="in" category="Entertainment" />} />
            <Route path="/general" element={<News key="General" pagesize={this.pageSize} country="in" category="General" />} />
            <Route path="/health" element={<News key="Health" pagesize={this.pageSize} country="in" category="Health" />} />
            <Route path="/science" element={<News key="Science" pagesize={this.pageSize} country="in" category="Science" />} />
            <Route path="/sports" element={<News key="Sports" pagesize={this.pageSize} country="in" category="Sports" />} />
            <Route path="/technology" element={<News key="Technology" pagesize={this.pageSize} country="in" category="Technology" />} />
            <Route path="/general" element={<News key="Home" pagesize={this.pageSize} country="in" category="General" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
