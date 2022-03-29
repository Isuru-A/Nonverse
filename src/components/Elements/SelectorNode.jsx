import React, {useState} from "react";

const SelectorNode = ({name, array, setArray, children}) => {

    const [selected, setSelected] = useState(false)

    function select() {
        if (selected) {
            setArray(array.filter(e => e !== name))
        } else {
            setArray([
                ...array, name
            ])
        }
        setSelected(!selected)
    }

    return (
        <div className="selector-node">
            <div id="selector-node-box" className={selected ? 'selected' : ''} onClick={select}/>
            <span className="default">{children}</span>
        </div>
    )
}

export default SelectorNode