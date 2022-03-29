import React from "react";

const Section = ({title, line, id, children}) => {

    return (
        <section className="section" id={id}>
            <h2 className="section-title">{title} {line? <span className="default divider">|</span> : ''} <span className="default">{line}</span></h2>
            {children}
        </section>
    )

}

export default Section
