import React from "react";
import Card from "react-bootstrap/Card";
import logo from "./images/icon-ethereum.svg";
import icon from "./images/icon-clock.svg";

function Home(props) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          backgroundColor: "#071e26",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#0f3c4c",
            borderRadius: 8,
            paddingTop: 42,
          }}
        >
          <Card
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "18rem",
              height: "24rem",
              marginBottom: 50,
            }}
          >
            <Card.Img
              src={require("./images/image-equilibrium.jpg")}
              style={{ height: 250, width: 250, borderRadius: 5, margin: 15 }}
            />
            <Card.Body>
              <Card.Title
                style={{
                  fontWeight: "bold",
                  color: "white",
                  marginLeft: 17,
                  fontSize: 18,
                }}
              >
                {props.title}
              </Card.Title>
              <Card.Text
                style={{
                  marginLeft: 17,
                  color: "#66b6d2",
                  fontFamily: "sans-serif",
                }}
              >
                Our Equilibrium collection promotes balance and calm
              </Card.Text>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: 17,
                }}
              >
                <img alt="u" src={logo} style={{ height: 15, width: 10 }} />
                <span style={{ fontSize: 15, marginLeft: 3, color: "#3ba1c5" }}>
                  0.041 ETH
                </span>

                <img
                  alt="u"
                  title="jjj"
                  src={icon}
                  style={{ height: 15, width: 15, marginLeft: 85 }}
                />
                <span style={{ fontSize: 15, marginLeft: 4, color: "#3ba1c5" }}>
                  3 days left
                </span>
              </div>
              <div
                style={{
                  height: 0.5,
                  width: "88%",
                  backgroundColor: "grey",
                  marginLeft: 15,
                  marginTop: 19,
                }}
              />
              <div style={{ display: "flex", flexDirection: "row" }}>
                <img
                  alt="u"
                  src={require("./images/image-avatar.png")}
                  style={{
                    height: 30,
                    width: 30,
                    marginLeft: 17,
                    borderRadius: 15,
                    borderWidth: "1rem",
                    backgroundColor: "white",
                    borderColor: "white",
                    marginTop: 15,
                  }}
                />
                <span
                  style={{
                    fontSize: 15,
                    marginLeft: 7,
                    marginTop: 16,
                    color: "skyblue",
                  }}
                >
                  Creation Of
                </span>
                <span
                  style={{
                    fontSize: 15,
                    marginLeft: 3,
                    marginTop: 16,
                    color: "white",
                  }}
                >
                  Jules Wyvern
                </span>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home;
