import React from 'react';

const Testimonials = () => {
    const testimonials = [
        { author: "Jane Doe", text: "This product changed my life!" },
        { author: "John Smith", text: "Amazing service and support!" },
        { author: "Alice Johnson", text: "Highly recommend to everyone!" },
    ];

    return (
        <div className="testimonials">
            <h2>What Our Clients Say</h2>
            <div className="testimonial-list">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-item">
                        <p>{testimonial.text}</p>
                        <h4>- {testimonial.author}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;