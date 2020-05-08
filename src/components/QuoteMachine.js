import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  author: {
    marginTop: "50px",
    fontWeight: "bold",
    fontStyle: "italic",
  },
});

const QuoteMachine = (props) => (
  <Card variant="outlined">
    <CardContent>
      <Icon fontSize="large" className="fas fa-quote-left" />
      <Typography variant="h4">{props.selectedQuote.quote}</Typography>
      <Typography
        mt={5}
        variant="h5"
        align="right"
        className={props.classes.author}
      >
        - {props.selectedQuote.author}
      </Typography>
    </CardContent>
    <CardActions>
      <Button
        size="small"
        variant="outlined"
        color="primary"
        justify="center"
        onClick={props.assignNewQuoteIndex}
      >
        Next Quote
      </Button>
      <IconButton
        color="primary"
        target="_blank"
        href={`https://twitter.com/intent/tweet?text=${props.selectedQuote.quote}`}
      >
        <FontAwesomeIcon icon={faTwitter} size="md"></FontAwesomeIcon>
      </IconButton>
    </CardActions>
  </Card>
);

export default withStyles(styles)(QuoteMachine);
