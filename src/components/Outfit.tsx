import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import Cloud from '@mui/icons-material/Cloud';
import Sun from '@mui/icons-material/LightMode';

import Image, { StaticImageData } from 'next/image';
import sunhat from '../images/outfits/sunhat.png'

export default function Outfit() {
  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        width: 320,
        borderColor: '#CAF0F8',
        '&:hover': { boxShadow: 'md', borderColor: '#78a2ab' },
      }}
    >
      <AspectRatio ratio="1" sx={{ width: 90 }}>
        <Image src={ sunhat } alt=""/>
      </AspectRatio>
      <CardContent>
        <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
          Hat
        </Typography>
        <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
          <Link
            overlay
            underline="none"
            href="#interactive-card"
            sx={{ color: 'text.tertiary' }}
          >
            Wide-brimmed sunhat
          </Link>
        </Typography>
        <Chip
          variant="solid"
          color="warning"
          size="md"
          startDecorator={<Sun/>}
          sx={{ pointerEvents: 'none' }}
        >
          It's sunny outside!
        </Chip>
      </CardContent>
    </Card>
  );
}