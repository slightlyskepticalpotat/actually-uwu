import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Skeleton from '@mui/joy/Skeleton';
import Image, { StaticImageData } from 'next/image';

import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  tileHeading:{
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#131200'
  }
})

interface CommentSkeletonProps {
  promptImg: StaticImageData; 
  content: string; 
}

export default function CommentSkeleton({ promptImg, content }: CommentSkeletonProps) {
  const classes= useStyles();

  return (
    <Card
      variant="outlined"
      sx={{ width: 'max(400px, 60%)', borderRadius: 0, '--Card-radius': 0 }}
    >
      <CardContent orientation="horizontal">
        <Image src={ promptImg } alt="user customization" width={44} height={44} />
        <div>
          <h3 className={classes.tileHeading}>{content}</h3>
          {/* <Skeleton variant="text" width={100} /> */}
          {/* <Skeleton level="body2" variant="text" width={200} /> */}
        </div>
      </CardContent>
      <CardContent sx={{ gap: 0.25, mt: 1 }}>
        <Skeleton level="body3" variant="text" width="92%" />
        <Skeleton level="body3" variant="text" width="99%" />
        <Skeleton level="body3" variant="text" width="96%" />
        <Skeleton level="body3" variant="text" width="95%" />
      </CardContent>
    </Card>
  );
}
