import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Card, CardContent, Button, Grid } from "@material-ui/core";
import { register } from "../store/actions/login";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
    },
    cardSpacing: { marginBottom: "2rem" },
    button: {
        margin: theme.spacing(1),
    },
}));

const Register = ({ register }) => {
    const classes = useStyles();

    const [formData, setFormData] = React.useState({
        userName: "",
        password: "",
    });

    const { userName, password } = formData;

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        register(formData);

        console.log("submit worked");
    };
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                style={{ minHeight: "50vh" }}
            >
                <Grid item xs={12} md={4} lg={3}>
                    <Card className={classes.cardSpacing}>
                        <CardContent>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <TextField
                                        className={classes.textField}
                                        id="username"
                                        alignItems="center"
                                        label="User Name"
                                        name="userName"
                                        value={userName}
                                        onChange={(e) => handleChange(e)}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        className={classes.textField}
                                        id="password"
                                        label="Password"
                                        name="password"
                                        value={password}
                                        onChange={(e) => handleChange(e)}
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                type="submit"
                            >
                                register
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </form>
    );
};

export default connect(null, { register })(Register);
