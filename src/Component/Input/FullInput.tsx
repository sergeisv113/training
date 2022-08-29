import React, {ChangeEvent, useState} from 'react';

export type Message = {
    message: string
}
export type MessagesPropsType = {
    message: Array<Message>
    addMessage: (title: string) => void
}
export const FullInput = (props: MessagesPropsType) => {
    let [title, setTitle] = useState('')
    
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
   const onClickButtonHandler = () => {
        props.addMessage(title)
       setTitle('')
   }

    return (
          <div>
                <input value={title} onChange={onChangeInputHandler} />
              {/*Handler-если выносв верх*/}
                <button onClick={onClickButtonHandler}>+</button>
            </div>
    );
};
