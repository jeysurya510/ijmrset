const AnimatedText = ({ text }) => {
  return (
    <span className="animated-text">
      {text.split('').map((char, index) => (
        <span
          key={index}
          style={{
            animationDelay: `${index * 0.2}s`,
            display: char === ' ' ? 'inline-block' : 'inline',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedText;
