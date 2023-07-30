import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Chip, { ChipPropsColorOverrides } from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';

import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

interface OutfitProps {
    outfitPic: StaticImageData; 
    heading: string; 
    description: string;
    icon: ReactNode;
    chipColor: unknown;
    chipDescription: string;
}

export default function Outfit({ outfitPic, heading, description, icon, chipColor, chipDescription }: OutfitProps) {
  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        width: 320,
        borderColor: '#CAF0F8',
        '&:hover': { boxShadow: 'md', borderColor: '#78a2ab' },
        margin: '1%'
      }}
    >
      <AspectRatio ratio="1" sx={{ width: 90 }}>
        <Image src={ outfitPic } alt=""/>
      </AspectRatio>
      <CardContent>
        <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
          {heading}
        </Typography>
        <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
          <Link
            overlay
            underline="none"
            href="#interactive-card"
            sx={{ color: 'text.tertiary' }}
          >
            {description}
          </Link>
        </Typography>
        <Chip
          variant="solid"
          color={chipColor}
          size="md"
          startDecorator={icon}
          sx={{ pointerEvents: 'none' }}
        >
          {chipDescription}
        </Chip>
      </CardContent>
    </Card>
  );
}
