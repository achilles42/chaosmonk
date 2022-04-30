import React from "react";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite/no-important";

const styles = StyleSheet.create({
  mainContainer: {
    position: 'relative',
    width: '1122px',
    height: '942px'
  },
  cardContainer: {
    position: 'absolute',
    height: '92px',
    left: '1px',
    right: '1px',
    top: '134px'
  },
  titleContainer: {
    position: 'absolute',
    height: '30px',
    left: '1px',
    right: '1px',
    top: '104px',
  }
});

export default function Team() {
  return (
    <Column>
        <Row className={css(styles.cardsContainer)} wrap flexGrow={1} horizontal="space-between" breakpoints={{ 768: 'column' }}>
            <Row className={css(styles.cardRow)} wrap flexGrow={1} horizontal="space-between" breakpoints={{ 384: 'column' }}>
            </Row>
            <Row className={css(styles.cardRow)} wrap flexGrow={1} horizontal="space-between" breakpoints={{ 384: 'column' }}>
            </Row>
        </Row>
        <div className={css(styles.todayTrends)}>
            Some Content                
        </div>
        <Row horizontal="space-between" className={css(styles.lastRow)} breakpoints={{ 1024: 'column' }}>
            Some Content
        </Row>
    </Column>
  );
}
