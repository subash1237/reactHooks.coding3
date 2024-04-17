// Style your elements here
import styled from 'styled-components'

export const CardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  width: 350px;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`

export const CardNumberInput = styled.input`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #3b4b69;
  background-color: transparent;
  border: none;
  outline: none;
  margin-bottom: 15px;
`

export const CardHolderInput = styled.input`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #3b4b69;
  background-color: transparent;
  border: none;
  outline: none;
`

export const Heading = styled.h1`
  font-family: "Roboto";
  font-size: 24px;
  text-align: center;
  color: white;
`

export const Paragraph = styled.p`
  font-family: "Roboto";
  font-size: 15px;
  text-align: left;
  color: white;
`
