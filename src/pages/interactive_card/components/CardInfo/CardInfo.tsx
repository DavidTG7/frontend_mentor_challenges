import { CardFrontImg, CardNumber, CardWrapper, ImagesBox } from './CardInfo.styles'
import cardFrontImg from '../../images/bg-card-front.png'
import cardBackImg from '../../images/bg-card-back.png'
interface CardInfoProps {
  cardNumber: string;
}
export const CardInfo = ({ cardNumber }: CardInfoProps) => {
  return (
    <CardWrapper>
      <ImagesBox>

        <CardFrontImg src={cardFrontImg} alt='frontImg' />
        <CardFrontImg src={cardBackImg} alt='backImg' />
        <CardNumber>
          {cardNumber}
        </CardNumber>
      </ImagesBox>
    </CardWrapper>
  );
};