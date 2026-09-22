import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ScrollReveal = ({
    children,
    variant = 'fadeUp',
    delay = 0,
    duration = 0.6,
    once = true,
    margin = '-100px',
    className = ''
  }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin });
  
    const variants = {
      fadeUp: {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      },
      fadeDown: {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 }
      },
      fadeLeft: {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
      },
      fadeRight: {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 }
      },
      scale: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
      },
      fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }
    };
  
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={variants[variant]}
        transition={{ duration, delay, ease: 'easeOut' }}
        className={className}
      >
        {children}
      </motion.div>
    );
  };
export default ScrollReveal;