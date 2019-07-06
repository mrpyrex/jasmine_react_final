import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import ReactDOM from "react-dom";
import Header from "../layout/Header";
import Home from "../components/pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import BlogDashboard from "./blog/BlogDashboard";
import Contact from "./Contact";
import Footer from "../layout/Footer";
import Post from "./blog/Post";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/blog" component={BlogDashboard} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog/:slug" component={Post} />
          </Switch>
          <Footer />
        </HashRouter>
      </Provider>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
