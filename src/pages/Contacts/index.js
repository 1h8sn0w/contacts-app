import { Container, Grid, LinearProgress, Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useContacts } from "../../hooks/useContacts";
import { ContactsTable } from "../ContactsTable";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4),
    },
    titleContainer: {
      marginBottom: theme.spacing(4),
    },
  })
);

export const Contacts = () => {
  const classes = useStyles();
  const contacts = useContacts();

  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid className={classes.titleContainer}>
          <Typography variant="h3" component="h3">
            Contacts
          </Typography>
        </Grid>
        {contacts.isError ? (
          <div>...Error...!</div>
        ) : (
          <Grid item xs={12}>
            {contacts.isLoading ? (
              <LinearProgress/>
            ) : (
              <ContactsTable data={contacts.data} />
            )}
          </Grid>
        )}
      </Grid>
    </Container>
  );
};
