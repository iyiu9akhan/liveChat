import React from "react";
import SideBar from "../components/Layout/SideBar";
import Container from "../components/Layout/Container";

function Settings() {
  return (
    <div>
      <Container>
        <div className="md:flex md:h-screen md:py-[35px]">
          <SideBar />
        </div>
      </Container>
    </div>
  );
}

export default Settings;
