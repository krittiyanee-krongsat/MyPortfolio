import { useRef } from 'react';
import ButtonProjects from './ButtonProjects';

const GlowCard = ({ card, children, index }) => {
    const cardRefs = useRef([]);

    const handleMouseMove = (index) => (e) => {
        const card = cardRefs.current[index];
        if(!card) return;

        // Get the mouse position relative to card
        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;

        // calc the angle from the center of the card
        let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

        angle = (angle + 360) % 360;

        card.style.setProperty('--start', angle + 60)
    }

  return (
    <div 
        ref={(el) => (cardRefs.current[index] = el)} 
        onMouseMove={handleMouseMove(index)} 
        className='card card-border timeline-card rounded-xl p-10'
    >
        <div className='glow'/>
            <div className='flex items-center gap-1 mb-5'>
                {Array.from({ length: 5}, (_, i) => (
                    <img src='/images/star.png' key={i} alt='star' className='size-5'/>
                ))}
            </div>
            <div className='mb-5'>
                <p className='text-white-50 text-lg'>{card.review}</p>
            </div>
            <div className='flex justify-between items-end'>
                {children}
                {index === 1 && (
                    <ButtonProjects 
                    text="View Certificate" 
                    className="md:w-40 md:h-12 w-40 h-10"
                    id={card}
                    />
                )}
            </div>
    </div>
  )
}

export default GlowCard