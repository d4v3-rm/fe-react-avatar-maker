import React from 'react';
import { 
  StyledCard, 
  StyledCardHeader, 
  StyledCardTitle, 
  StyledCardContent, 
  StyledCardFooter,
  StyledCardExtra
} from './styles';
import type { CardProps } from './types';

export const Card: React.FC<CardProps> = ({
  children,
  title,
  extra,
  footer,
  hoverable = false,
  bordered = true,
  shadow = 'none',
  ...rest
}) => {
  return (
    <StyledCard 
      $hoverable={hoverable} 
      $bordered={bordered}
      $shadow={shadow}
      {...rest}
    >
      {(title || extra) && (
        <StyledCardHeader>
          {title && <StyledCardTitle>{title}</StyledCardTitle>}
          {extra && <StyledCardExtra>{extra}</StyledCardExtra>}
        </StyledCardHeader>
      )}
      <StyledCardContent>
        {children}
      </StyledCardContent>
      {footer && <StyledCardFooter>{footer}</StyledCardFooter>}
    </StyledCard>
  );
};

export default Card;
