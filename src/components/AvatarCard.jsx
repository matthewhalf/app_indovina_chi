import { useState } from 'react'
import { avatarDetails } from "../constants"
import ReactCardFlip from "react-card-flip";
import ReplayIcon from '@mui/icons-material/Replay';
import InfoIcon from '@mui/icons-material/Info';
import backCard from '../assets/back-card.png';

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
            <img src={avatar.image} alt={avatar.title} width={101} height={137} className='rounded-t-lg' onClick={() => handleClick(avatar, index)} />
            <h1 className='bg-green-vogue-100 rounded-b-lg text-green-vogue-900 p-1'>{avatar.title}</h1>
          </div>
          <div>
            <div style={{
              width: '74px',
              height:'106px', 
              backgroundImage: `url(${backCard})`,
              backgroundSize :'cover',
              backgroundPosition:'center',
              borderRadius:'10px'
              
            }} onClick={() => handleClick(avatar, index)}>
            </div>
          </div>
        </ReactCardFlip>
      ))}
      <div className="btm-nav gap-40 bg-green-vogue-400 rounded-t-[40px] shadow-xl" >
        <button onClick={()=>location.reload()}>
          <ReplayIcon fontSize="small" className=''/>
          <span className="btm-nav-label text-sm">New</span>
        </button>
        {selectedAvatar && (
          <div className="text-center absolute bottom-10 bg-green-vogue-100">
            <img src={selectedAvatar.image} alt={selectedAvatar.title} width={80} height={80} className='rounded-t-lg ' />
            <h1 className='bg-green-vogue-100 rounded-b-lg text-green-vogue-900 p-1 w-[100%]'>{selectedAvatar.title}</h1>
          </div>
        )}
        <button onClick={()=>window.my_modal_1.showModal()} className='text-sm'><InfoIcon fontSize="small" />Info</button>
          <dialog id="my_modal_1" className="modal ">
            <form method="dialog" className="modal-box bg-green-vogue-400">
              <h3 className="font-bold text-2xl text-[#0C101B]">Benvenuta Princess !!</h3>
              <p className="py-4 text-green-vogue-50">Prima di tutto seleziona il tuo personaggio poi potrai fare le domande al tuo dick preferito per scoprire il suo !! Vediamo se riuscirai a vincere in questo giochino...</p>
              <div className="modal-action">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Chiudi</button>
              </div>
            </form>
          </dialog>
      </div>
    </>
  )
}

export default AvatarCard
