import React from "react";
import { Column } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";
import LogoComponent from "./LogoComponent";
import MenuItemComponent from "./MenuItemComponent";
import IconOverview from "../../assets/icon-overview.js";
import IconTeams from "../../assets/icon-contacts";
import IconServices from "../../assets/icon-articles";
import IconSettings from "../../assets/icon-settings";
import IconSubscription from "../../assets/icon-subscription";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#363740",
    width: 255,
    paddingTop: 32,
  },
  menuItemList: {
    marginTop: 52,
  },
  outsideLayer: {
    position: "absolute",
    width: "100vw",
    minWidth: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,.50)",
    zIndex: 900,
  },
  separator: {
    borderTop: "1px solid #DFE0EB",
    marginTop: 16,
    marginBottom: 16,
    opacity: 0.06,
  },
  hide: {
    left: -255,
  },
  show: {
    left: 0,
  },
});

function SidebarComponent(props) {
  return (
    <Column className={css(styles.container)}>
      <LogoComponent />
      <Column className={css(styles.menuItemList)}>
        <MenuItemComponent
          title="Dashboard"
          icon={IconOverview}
          onClick={() => props.onChange("Dashboard")}
          active={props.selectedItem === "Dashboard"}
          path="/dashboard"
        />
        <MenuItemComponent
          title="Teams"
          icon={IconTeams}
          onClick={() => props.onChange("Teams")}
          active={props.selectedItem === "Teams"}
          path="/teams"
        />
        <MenuItemComponent
          title="Services"
          icon={IconServices}
          onClick={() => props.onChange("Services")}
          active={props.selectedItem === "Services"}
          path="/services"
        />
        <div className={css(styles.separator)}></div>
        <MenuItemComponent
          title="Settings"
          icon={IconSettings}
          onClick={() => props.onChange("Settings")}
          active={props.selectedItem === "Settings"}
          path=""
        />
        <MenuItemComponent
          title="Subscription"
          icon={IconSubscription}
          onClick={() => props.onChange("Subscription")}
          active={props.selectedItem === "Subscription"}
          path=""
        />
      </Column>
    </Column>
  );
}

export default SidebarComponent;
