import {
    EmailShareButton,
    EmailIcon,
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon
  } from "react-share";

  
const socialLinkDescription = "Put your money where your <3 is and ShopLove by purchasing The ShopLove SLASHcard, a discount card with a purpose! Get a $250 or $125 gift card for 50% off!"
const socialLinkSubject = "Get great deals helping black and brown owned businesses!"
const socialLinkHashtags = ['vsedc', 'blackowned', 'shoplove']

const socialButtons = ({pathname, style}) =>{
    return(
        <div style={style}>
            <FacebookShareButton hashtag={'vsedc'} quote={socialLinkDescription} url={`https://love.marty.world${pathname}`}>
            <FacebookIcon round={true} size={35}/>
            </FacebookShareButton>

            <LinkedinShareButton  url={`https://love.marty.world`}>
            <LinkedinIcon round={true} size={35}/>
            </LinkedinShareButton>

            <TwitterShareButton hashtags={socialLinkHashtags} title={socialLinkSubject} url={`https://love.marty.world${pathname}`}>
            <TwitterIcon round={true} size={35}/>
            </TwitterShareButton>

            <EmailShareButton subject={socialLinkSubject} body={socialLinkDescription} url={`https://love.marty.world${pathname}`}>
            <EmailIcon round={true} size={35}/>
            </EmailShareButton>
        </div>
    )
}

export default socialButtons