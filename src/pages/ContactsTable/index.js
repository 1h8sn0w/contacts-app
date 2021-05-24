import {
  Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { format } from "date-fns";
import parceISO from "date-fns/parseISO";
import { CopyToClipboard } from "../../components/CopyToClipboard";

const useStyles = makeStyles({
  table: {},
});

export const ContactsTable = ({ data }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="contacts table">
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell>Full name</TableCell>
            <TableCell>Birthday</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Nationality</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((contact) => (
            <TableRow key={contact.login.uuid}>
              <TableCell component="th" scope="row">
                <Avatar
                  src={contact.picture.thumbnail}
                  alt={contact.name.toString()}
                />
              </TableCell>
              <TableCell>
                {contact.name.title}. {contact.name.first} {contact.name.last}
              </TableCell>
              <TableCell>
                <Typography>{contact.dob.age} years</Typography>
                <Typography>
                  {format(parceISO(contact.dob.date), "MM.dd.yyyy")}
                </Typography>
              </TableCell>
              <TableCell>
                <CopyToClipboard text={contact.email} />
              </TableCell>
              <TableCell>
                <CopyToClipboard text={contact.phone} />
              </TableCell>
              <TableCell>
                <Typography>{contact.location.country}</Typography>
                <Typography>
                  {contact.location.city}, {contact.location.street.name}{" "}
                  {contact.location.street.number}
                </Typography>
              </TableCell>
              <TableCell>7</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
