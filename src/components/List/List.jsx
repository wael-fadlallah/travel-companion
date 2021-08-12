import React, { useState } from "react";
import {
  CircularProgress,
  MenuItem,
  Typography,
  NativeSelect,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import useStyles from "./style";
import { Grid } from "@material-ui/core";

function List() {
  const classes = useStyles();
  const [type, setType] = useState("restutautent");
  const [rating, setRating] = useState(0);

  const places = [
    { name: "cool place" },
    { name: "best icecream" },
    { name: "best pizza" },
    { name: "cool place" },
    { name: "best icecream" },
    { name: "best pizza" },
  ];
  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Restutautent, Hotels & Attractions around you
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <NativeSelect value={type} onChange={(e) => setType(e.target.value)}>
          <option value="restutautent">Restutautent</option>
          <option value="hotels">Hotels</option>
          <option value="attractions">Attractions</option>
        </NativeSelect>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <NativeSelect
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value={0}>All</option>
          <option value={3}>Above 3.0</option>
          <option value={4}>Above 4.0</option>
          <option value={4.5}>Above 4.5</option>
        </NativeSelect>
      </FormControl>
      <Grid container space={1} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default List;
