// Reusable Button component
// Props:
// - text: label displayed inside the button
// - className: optional CSS classes for customization
// - id: optional identifier (useful for styling, navigation, or testing)

// Destructuring props directly in the function parameter
// Instead of receiving a single "props" object and accessing props.text, props.className, etc.,
// we extract only the needed values upfront for cleaner and more readable code.
const Button = ({ text, className, id }) => {
    return (
        // Root clickable element
        // Combines external className with default "cta-wrapper" styling
        <a className={`${className ?? ''} cta-wrapper`} id={id}>
            
            {/* Main container with grouped hover effects */}
            <div className="cta-button group">
                
                {/* Decorative background element */}
                <div className="bg-circle"></div>
                
                {/* Button label */}
                <p className="text">{text}</p>
                
                {/* Arrow icon container */}
                <div className="arrow-wrapper">
                    
                    {/* Right arrow icon */}
                    <img 
                        src="/images/arrow-down.svg" 
                        alt="Arrow Right" 
                    />
                    
                </div>
            </div>
        </a>
    );
};

export default Button;