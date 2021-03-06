import React from "react";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";
import SidebarComponent from "./components/sidebar/SidebarComponent";
import HeaderComponent from "./components/header/HeaderComponent";
import ContentComponent from "./components/content/ContentComponent";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    minHeight: "100vh",
  },
  content: {
    marginTop: 54,
  },
  mainBlock: {
    backgroundColor: "#F7F8FC",
    padding: 30,
  },
});

class App extends React.Component {
  state = { selectedItem: "Dashboard" };

  componentDidMount() {
    window.addEventListener("resize", this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }

  resize = () => this.forceUpdate();

  render() {
    const { selectedItem } = this.state;
    return (
      <Router>
        <Switch>
          <Row className={css(styles.container)}>
            <SidebarComponent
              selectedItem={selectedItem}
              onChange={(selectedItem) => this.setState({ selectedItem })}
            />
            <Column flexGrow={1} className={css(styles.mainBlock)}>
              <HeaderComponent title={selectedItem} />
              <div className={css(styles.content)}>
                <ContentComponent path={selectedItem} />
              </div>
            </Column>
          </Row>
        </Switch>
      </Router>
    );
  }
}

export default App;
