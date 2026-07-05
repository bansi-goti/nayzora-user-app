import React from 'react';
import Container from '../common/Container';

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export default function SectionWrapper({ children, id, className = '' }: SectionWrapperProps) {
  return (
    <section id={id} className={`relative overflow-hidden ${className}`}>
      <Container>
        {children}
      </Container>
    </section>
  );
}
