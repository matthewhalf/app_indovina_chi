import { useState } from 'react'
import { avatarDetails } from "../constants"
import ReactCardFlip from "react-card-flip";

const AvatarCard = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [firstClick, setFirstClick] = useState(true);
  const [flippedCards, setFlippedCards] = useState([]);

  const handleClick = (avatar, index) => {
    if (firstClick) {
      setSelectedAvatar(avatar);
      setFirstClick(false);
    } else {
      setFlippedCards(prevState => {
        const newState = [...prevState];
        newState[index] = !newState[index];
        return newState;
      });
    }
  };

  return (
    <>
      {avatarDetails.map((avatar, index) => (
        <ReactCardFlip isFlipped={!!flippedCards[index]} flipDirection="vertical" key={avatar.title}>
          <div className='text-center'>
            <img src={avatar.image} alt={avatar.title} width={300} height={300} className='rounded-t-lg' onClick={() => handleClick(avatar, index)} />
            <h1 className='bg-green-vogue-100 rounded-b-lg text-green-vogue-900 p-1'>{avatar.title}</h1>
          </div>
          <div>
            <div style={{
              width: '106px',
              height:'142px', 
              background: 'var(--green-vogue-400)',
              borderRadius:'10px'
              
            }} onClick={() => handleClick(avatar, index)}>
            </div>
          </div>
        </ReactCardFlip>
      ))}
      <div className='absolute bottom-0 bg-slate-300 w-[100%] h-[13vh] flex justify-center bg-green-vogue-500 p-10 rounded-t-[70px]'>
        {selectedAvatar && (
          <div className="selected-avatar text-center absolute bottom-5">
            <img src={selectedAvatar.image} alt={selectedAvatar.title} width={100} height={100} className='rounded-t-lg' />
            <h1 className='bg-green-vogue-100 rounded-b-lg text-green-vogue-900 p-1'>{selectedAvatar.title}</h1>
          </div>
        )}
      </div>
    </>
  )
}

export default AvatarCard
