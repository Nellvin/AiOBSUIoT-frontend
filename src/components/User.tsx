import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";

import "styles/User.scss";

export default function User({ user, onUserRemove, onUserEdit }) {
  const { id, name, surname, roleEto } = user;

  return (
    <div className="User">
      <Card className="root">
        <CardContent>
          <Typography className="title" color="textSecondary" gutterBottom>
            {`${name} ${surname}`}
          </Typography>
          <Typography className="body2" variant="body2" component="p">
            {roleEto.name}
          </Typography>
        </CardContent>
        <div className="butttons">
          {!!onUserRemove && (
            <button onClick={() => onUserRemove(id)}>
              <DeleteForeverIcon color="error" />
            </button>
          )}
          {!!onUserEdit && (
            <button onClick={() => onUserEdit(id)}>
              <EditIcon />
            </button>
          )}
        </div>
      </Card>
    </div>
  );
}
