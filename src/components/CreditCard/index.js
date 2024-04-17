// Write your code here
import {useState} from 'react'
import {
  CardContainer,
  CardNumberInput,
  CardHolderInput,
  Heading,
  Paragraph,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolderName, setCardHolderName] = useState('')

  const handleCardNumberChange = event => {
    setCardNumber(event.target.value)
  }

  const handleCardHolderChange = event => {
    setCardHolderName(event.target.value.toUpperCase())
  }

  return (
    <CardContainer data-testid="creditCard">
      <Heading>CREDIT CARD</Heading>
      <Paragraph>CARDHOLDER NAME</Paragraph>
      <CardNumberInput
        type="text"
        placeholder="Card Number"
        value={cardNumber}
        onChange={handleCardNumberChange}
      />
      <CardHolderInput
        type="text"
        placeholder="Cardholder Name"
        value={cardHolderName}
        onChange={handleCardHolderChange}
      />
    </CardContainer>
  )
}

export default CreditCard
