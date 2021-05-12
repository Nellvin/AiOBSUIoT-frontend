import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

import TaskType from 'models/Task';

import 'styles/Task.scss';

export default function Task({ task, onTaskRemove, onTaskEdit }: {task: TaskType, onTaskRemove?, onTaskEdit?}) {
  const {
    id, name, user, finalDate,
  } = task;

  return (
    <div className="Task">
      <Card className="root">
        <CardHeader
          subheader={finalDate.toDateString()}
        />
        <CardContent>
          <Typography
            className="name"
            color="textSecondary"
            gutterBottom
          >
            {name}
          </Typography>
          <Typography
            className="pos"
            color="textSecondary"
          >
            .
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">{user}</Button>
        </CardActions>
        <div className="butttons">
          {!!onTaskRemove && (
          <button
            onClick={() => onTaskRemove(id)}
          >
            <DeleteForeverIcon color="error" />
          </button>
          )}
          {!!onTaskEdit && (
          <button
            onClick={() => onTaskEdit(id)}
          >
            <EditIcon />
          </button>
          )}
        </div>
      </Card>
    </div>
  );
}
