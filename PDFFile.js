import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
import LebronStretch from "../photos/lebron_transparent.png";

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: "center",
    height: "50px",
    width: "100%",
    backgroundColor: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: "30px",
    left: 0,
    right: 0,
    textAlign: "center",
    color: "red",
    zIndex: 10,
  },

  footer: {
    position: "absolute",
    fontSize: 12,
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: "center",
    height: "50px",
    width: "100%",
    backgroundColor: "grey",
    zIndex: 1,
  },

  border: {
    border: "2px solid red",
  },
});

const PDFFile = () => {
  return (
    <Document>
      <Page>
        <Text style={styles.header} fixed>
          Header
        </Text>

        <Image style={styles.image} src={LebronStretch} />
        <Text style={styles.border}>Uzzal</Text>
        <Text style={styles.text}>
          Oh right. I forgot about the battle. Wow, you got that off the
          Internet? In my day, the Internet was only used to download
          pornography. I don't know what you did, Fry, but once again, you
          screwed up! Now all the planets are gonna start cracking wise about
          our mamas. She also liked to shut up! We'll go deliver this crate like
          professionals, and then we'll go home. In your time, yes, but nowadays
          shut up! Besides, these are adult s ambitious and misunderstood! I
          guess because my parents keep telling me to be more ladylike. As
          though! You know the worst thing about being a slave? They make you
          work, but they don't pay you or let you go.
        </Text>
        <Text
          style={{
            border: "1px solid red",
            display: "flex",
            marginHorizontal: 35,
          }}
        >
          <Text>Name: </Text>
          <Text>Uzzal Hosain</Text> <Text>Name: </Text>
          <Text>Uzzal Hosain</Text>{" "}
        </Text>
        <Text
          style={{
            border: "1px solid green",
            display: "flex",
            marginHorizontal: 35,
          }}
        >
          <Text>Name: </Text>
          <Text>Uzzal Hosain</Text> <Text>Name: </Text>
          <Text>Uzzal Hosain</Text>{" "}
        </Text>
        {/* <table style={{ border: "1px solid red" }}>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
          </tr>
          <tr>
            <td>Peter</td>
            <td>Griffin</td>
          </tr>
          <tr>
            <td>Lois</td>
            <td>Griffin</td>
          </tr>
        </table> */}
        {/* <table>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
          </tr>
          <tr>
            <td>Peter</td>
            <td>Griffin</td>
          </tr>
          <tr>
            <td>Lois</td>
            <td>Griffin</td>
          </tr>
        </table> */}

        <Text style={styles.footer}>
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
          />
        </Text>
      </Page>
    </Document>
  );
};

export default PDFFile;
