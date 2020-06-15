import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import { CardMedia } from '@material-ui/core';

const CoffeeCard = (props) => {
  const { avatarUrl, title, subtitle, description, imageUrl } = props;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={avatarUrl}></Avatar>}
        action={
          <IconButton aria-label='settings'>
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
      <CardMedia image={imageUrl} />
      <CardContent>
        <Typography variant='body2' component='p'>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>BUY NOW</Button>
      </CardActions>
      <CardActions>
        <Button size='small'>OFFER</Button>
      </CardActions>
    </Card>
  );
};

export default CoffeeCard;
