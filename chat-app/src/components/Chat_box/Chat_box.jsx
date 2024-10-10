import React from 'react'
import Chat_group from '../Group_chat/Chat_group'
import InfoSection from '../InfoSection/InfoSection'

const Chat_box = () => {
  return (
    <div className='chat-box'>
      <Chat_group />
      <InfoSection />
    </div>
  )
}

export default Chat_box