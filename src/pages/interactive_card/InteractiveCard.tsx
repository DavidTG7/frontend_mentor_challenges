import { useState, SyntheticEvent } from "react";
import { CardInfo } from "./components/CardInfo/CardInfo";
import { Form } from "./components/Form/Form";
import {
  InteractiveCardMain,
} from "./InteractiveCard.styles";

interface CardTypes {
  cardNumber?: any;
  nameCardHolder?: string 
}
export const InteractiveCard = () => {
  const [cardData, setCardData] = useState<CardTypes>();
  
  const handleChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setCardData({
      ...cardData,
      cardNumber: `${target.value.split('').map((num, i) => (i > 0 && i % 4 === 0)? ' '+ num : num).join('')}`
    })
  }

  const handleSubmit = (e: SyntheticEvent) => {
    
    console.log(cardData?.cardNumber)
  }
  return (
    <InteractiveCardMain>
      <CardInfo cardNumber={cardData?.cardNumber}/>
      <Form handleSubmit={handleSubmit} handleChange={handleChange}/>
    </InteractiveCardMain>
  );
};