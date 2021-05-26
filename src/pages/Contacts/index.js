import { Container, Grid, LinearProgress, Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
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

const DATA_VIEW_MODES = {
  TABLE: "table",
  GRID: "grid",
};

export const Contacts = () => {
  const classes = useStyles();
  const contacts = useContacts();
  const [dataViewMode, setDataViewMode] = useState(DATA_VIEW_MODES.TABLE);

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
              <LinearProgress />
            ) : dataViewMode === DATA_VIEW_MODES.TABLE ? (
              <ContactsTable data={contacts.data} />
            ) : (
              dataViewMode === DATA_VIEW_MODES.GRID && <div>GRID</div>
            )}
          </Grid>
        )}
      </Grid>
    </Container>
  );
};
