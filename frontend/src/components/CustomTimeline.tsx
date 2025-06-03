import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import type { SvgIconProps } from '@mui/material/SvgIcon';

interface TimelineItemProps {
  title: string;
  description: string;
  icon: React.ReactElement<SvgIconProps>;
  isLast?: boolean;
}

export const CustomTimelineItem: React.FC<TimelineItemProps> = ({ 
  title, 
  description, 
  icon, 
  isLast = false 
}) => {
  return (
    <Box sx={{ position: 'relative', mb: isLast ? 0 : 4, pl: 4 }}>
      {/* Icon circle */}
      <Box 
        sx={{ 
          position: 'absolute',
          left: -8,
          top: 0,
          width: 40,
          height: 40,
          borderRadius: '50%',
          bgcolor: 'primary.main',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2
        }}
      >
        {React.cloneElement(icon, { sx: { color: 'background.paper' } })}
      </Box>
      
      {/* Vertical line */}
      {!isLast && (
        <Box 
          sx={{ 
            position: 'absolute',
            left: 12,
            top: 40,
            bottom: -20,
            width: 2,
            bgcolor: 'primary.main',
            opacity: 0.5,
            zIndex: 1
          }}
        />
      )}
      
      {/* Content */}
      <Paper
        elevation={3} 
        sx={{ 
          p: 3, 
          background: 'linear-gradient(145deg, #1e1e1e 0%, #2a2a2a 100%)',
          border: '1px solid rgba(255,255,255,0.05)',
          borderRadius: 2,
          ml: 2
        }}
      >
        <Typography variant="h6" component="h4" color="primary" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1">
          {description}
        </Typography>
      </Paper>
    </Box>
  );
};

interface CustomTimelineProps {
  children: React.ReactNode;
}

export const CustomTimeline: React.FC<CustomTimelineProps> = ({ children }) => {
  return (
    <Box sx={{ position: 'relative', py: 2 }}>
      {children}
    </Box>
  );
};