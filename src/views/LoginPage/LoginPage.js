import React from "react";
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";
import naver from "assets/img/naver_login.png";
import google from "assets/img/google_login.png";

import { BuildOutlined } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="JUSTMOVE"
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="info" className={classes.cardHeader}>
                    <h4>Login</h4>
                  </CardHeader>
                  <p className={classes.divider}>기존 계정으로 간단하게 회원가입하세요.</p>
                  <CardBody>
                    <a href="http://ec2-54-180-165-194.ap-northeast-2.compute.amazonaws.com/auth/login/naver" className={classes.link} style={{display: "block", margin: "10px 0"}}>
                      <img
                        src={naver}
                        alt="naver"
                        width="100%"
                        height="auto"
                      />
                    </a>
                    {/*<a href="" className={classes.link} style={{display: "block", margin: "10px 0"}}>*/}
                    {/*  <img*/}
                    {/*    src={kakao}*/}
                    {/*    alt="kakao"*/}
                    {/*    width="100%"*/}
                    {/*    height="auto"*/}
                    {/*  />*/}
                    {/*</a>*/}
                    <a href="http://ec2-54-180-165-194.ap-northeast-2.compute.amazonaws.com/auth/login/google" className={classes.link} style={{display: "block", margin: "10px 0"}}>
                      <img
                        src={google}
                        alt="google"
                        width="100%"
                        height="auto"
                      />
                    </a>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="info" size="lg">
                      Get started
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
