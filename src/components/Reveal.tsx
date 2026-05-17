import { ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

type Props = {
  children: ReactNode;
  as?: 'div' | 'section' | 'article' | 'li';
  className?: string;
  delay?: number;
};

export function Reveal({ children, as: Tag = 'div', className = '', delay = 0 }: Props) {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <Tag
      ref={ref as never}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
