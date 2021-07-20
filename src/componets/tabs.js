import React, { useState } from 'react';

    const Tabs = props => {
        const [content, setContent] = useState('')
        const [clicked, setClicked] = useState(false)

        const onClickHandler = (e, value,tab) => {
            setContent(value);
            setClicked(tab);

        }
        const selected ={
            backgroundColor: 'black',
            color: 'whitesmoke'
        }

        return (
            <div>
                {
                    props.tabscontent.map( (item, index) => {
                        return (clicked === item.tab ? 
                            <button style={ selected } onClick={ (e) => onClickHandler(e, item.content, item.tab) }>{ item.tab }</button>:
                            <button onClick={ (e) => onClickHandler(e, item.content, item.tab) }>{ item.tab }</button>
                        )
                    })
                }
                <div>{ content }</div>
            </div>
        )
    }


export default Tabs;