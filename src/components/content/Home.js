import React from "react";
import {withRouter} from "react-router-dom";
import { StyleSheet, css } from 'aphrodite/no-important';
import { Column, Row } from 'simple-flexbox';
import MiniCardComponent from './MiniCardComponent';

const styles = StyleSheet.create({
  cardsContainer: {
      marginRight: -30,
      marginTop: -30
  },
  cardRow: {
      marginTop: 30,
      '@media (max-width: 768px)': {
          marginTop: 0
      }
  },
  miniCardContainer: {
      flexGrow: 1,
      marginRight: 30,
      '@media (max-width: 768px)': {
          marginTop: 30,
          maxWidth: 'none'
      }
  },
  todayTrends: {
      marginTop: 30
  },
  lastRow: {
      marginTop: 30
  },
  tasks: {
      marginTop: 0,
      '@media (max-width: 1024px)': {
          marginTop: 30,
      }
  }
});

class Home extends React.Component {
  message = () => {
      window.location.href = '/';
  }

  render() {
      return (
        <Column>
            <Row className={css(styles.cardsContainer)} wrap flexGrow={1} horizontal="space-between" breakpoints={{ 768: 'column' }}>
                <Row className={css(styles.cardRow)} wrap flexGrow={1} horizontal="space-between" breakpoints={{ 384: 'column' }}>
                    <MiniCardComponent className={css(styles.miniCardContainer)} title="Teams" value="6" />
                    <MiniCardComponent className={css(styles.miniCardContainer)} title="Services" value="124" />
                </Row>
                <Row className={css(styles.cardRow)} wrap flexGrow={1} horizontal="space-between" breakpoints={{ 384: 'column' }}>
                    <MiniCardComponent className={css(styles.miniCardContainer)} title="Alerts Triggered" value="43" />
                    <MiniCardComponent className={css(styles.miniCardContainer)} title="Alerts Resolved" value="64" />
                </Row>
            </Row>
            <div className={css(styles.todayTrends)}>
                Some Content                
            </div>
            <Row horizontal="space-between" className={css(styles.lastRow)} breakpoints={{ 1024: 'column' }}>
                Some Content
            </Row>
        </Column>
      )
  }
}

export default withRouter(Home);
