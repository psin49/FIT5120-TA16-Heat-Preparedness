import React, { useState } from 'react';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Typography, List, ListItem, Paper } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import CardOne from './Cards';

const useStyles = makeStyles({
    grow1: {
        flexGrow: 1
    },
    cardStyle: {
        padding: "0.5rem"
    },
    chevronStyle: {
        fontSize: "3rem",
        flexGrow: 1,
        justifyContent: "center"
    },
    cardContentStyle: {
        minHeight: "450px",
        padding: "1rem"
    },
    iconStyle: {
        fontSize: "3rem"
    },
    hideCard: {
        display: "none"
    }
})



export default function QuickGuide() {

    const classes = useStyles()

    const [activePage, setActivePage] = React.useState(0)
    const [slide, setSlide] = React.useState(true)

    const icons = {
        "Do": <CheckIcon className={classes.iconStyle} />,
        "Dont": <ClearIcon className={classes.iconStyle} />
    }

    const handleNext = () => {

        if (activePage < 4) {
            setActivePage((prevActivePage) => prevActivePage + 1);
            setSlide(false)
            setSlide(true)
        }
    };

    const handleBack = () => {

        if (activePage > 0) {
            setActivePage((prevActivePage) => prevActivePage - 1);
            setSlide(false)
            setSlide(true)
        }
    };

    const content = [
        {
            "cardNumber": 1,
            "title": "Stay Hydrated and avoid strenuous activity",
            "content": [
                "Keep a full drink bottle with you and take small sips of water frequently.",
                "Avoid Caffeine and alcohol.",
                "Avoid heavy activity like sport, renovating and gardening."
            ],
            "icons": [
                "Do",
                "Dont",
                "Dont"
            ]
        },
        {
            "cardNumber": 2,
            "title": "Look out for signs of heat related illness",
            "content": [
                "Heat Cramps",
                "Heat Exhaustion",
                "Heat Stroke"
            ]
        },
        {
            "cardNumber": 3,
            "title": "Keep your environment cool",
            "content": [
                "Draw your blinds",
                "Close-off any rooms that you are not using",
                "Open the windows when there is a cool breeze or when the temperature inside rises above the outside temperature."
            ]
        },
        {
            "cardNumber": 4,
            "title": "Fan / Air Conditioner usage",
            "content": [
                "If using a fan, ensure there is adequate ventilation and that it is set-up to bring cooler air in from the outside.",
                "If using an air conditioner, make sure it is on the right setting (snowflake symbol)"
            ]
        }, {
            "cardNumber": 5,
            "title": "Final Tips",
            "content": [
                "Stay out of the sun! Especially during the hottest part of the day! (usually 11am-3pm)",
                "If you cannot stay cool in your home, make arrangements to visit a friend or spend time in air-conditioned public spaces!"
            ]
        }
    ]

    return (
        <Card >
            <Grid container alignItems="center" alignContent="space-around">
                {/*Page 1*/}
                <Slide in={activePage === 0 ? true : false} direction="left" className={activePage !== 0 && classes.hideCard}>
                    <Grid item xs={12}>
                        <CardContent className={classes.cardContentStyle}>
                            <Typography variant="h5">
                                {content[0]["title"]}
                            </Typography>
                            <List>
                                {content[0]["content"].map((item, index) =>


                                    <React.Fragment>
                                        <ListItem id={index}>
                                            <ListItemIcon>
                                                {content[0]["icons"][index] === "Do" ? <CheckIcon /> : <ClearIcon />}
                                            </ListItemIcon>
                                            <Typography variant="body1">
                                                {item}
                                            </Typography>
                                        </ListItem>

                                    </React.Fragment>
                                )}
                            </List>
                        </CardContent>

                    </Grid>
                </Slide>
                {/*Page 2*/}
                <Slide in={activePage === 1 ? true : false} direction="left" className={activePage !== 1 && classes.hideCard}>
                    <Grid item xs={12}>
                        <CardContent className={classes.cardContentStyle}>
                            <Typography variant="h5">
                                {content[1]["title"]}
                            </Typography>
                            <List>
                                {content[1]["content"].map((item, index) =>


                                    <React.Fragment>
                                        <ListItem id={index}>
                                            <Typography variant="body1">
                                                {item}
                                            </Typography>
                                        </ListItem>

                                    </React.Fragment>
                                )}
                            </List>
                        </CardContent>

                    </Grid>
                </Slide>
                {/*Page 3*/}
                <Slide in={activePage === 2 ? true : false} direction="left" className={activePage !== 2 && classes.hideCard}>
                    <Grid item xs={12}>
                        <CardContent className={classes.cardContentStyle}>
                            <Typography variant="h5">
                                {content[2]["title"]}
                            </Typography>
                            <List>
                                {content[2]["content"].map((item, index) =>


                                    <React.Fragment>
                                        <ListItem id={index}>
                                            <Typography variant="body1">
                                                {item}
                                            </Typography>
                                        </ListItem>

                                    </React.Fragment>
                                )}
                            </List>
                        </CardContent>

                    </Grid>
                </Slide>
                {/*Page 4*/}
                <Slide in={activePage === 3 ? true : false} direction="left" className={activePage !== 3 && classes.hideCard}>
                    <Grid item xs={12}>
                        <CardContent className={classes.cardContentStyle}>
                            <Typography variant="h5">
                                {content[3]["title"]}
                            </Typography>
                            <List>
                                {content[3]["content"].map((item, index) =>


                                    <React.Fragment>
                                        <ListItem id={index}>
                                            <Typography variant="body1">
                                                {item}
                                            </Typography>
                                        </ListItem>

                                    </React.Fragment>
                                )}
                            </List>
                        </CardContent>

                    </Grid>
                </Slide>
                {/*Page 5*/}
                <Slide in={activePage === 4 ? true : false} direction="left" className={activePage !== 4 && classes.hideCard}>
                    <Grid item xs={12}>
                        <CardContent className={classes.cardContentStyle}>
                            <Typography variant="h5">
                                {content[4]["title"]}
                            </Typography>
                            <List>
                                {content[4]["content"].map((item, index) =>


                                    <React.Fragment>
                                        <ListItem id={index}>
                                            <Typography variant="body1">
                                                {item}
                                            </Typography>
                                        </ListItem>

                                    </React.Fragment>
                                )}
                            </List>
                        </CardContent>

                    </Grid>
                </Slide>
                <IconButton onClick={handleBack} color={activePage > 0 ? "primary" : "default"} className={classes.chevronStyle}>
                    <ChevronLeftIcon fontSize="inherit" />
                </IconButton>
                <Grid item xs={2}>
                    <Typography variant="body1" align="center">
                        Page {activePage + 1} / 5
                        </Typography>
                </Grid>
                <IconButton onClick={handleNext} className={classes.chevronStyle} color={activePage < 4 ? "primary" : "default"}>
                    <ChevronRightIcon fontSize="inherit" />
                </IconButton>

            </Grid>
        </Card >
    )

}