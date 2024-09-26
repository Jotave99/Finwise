import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 94vh;
  background-color: #f5f5f5;
  padding: 1rem;

  @media (max-width: 768px) {
    height: 100vh;
  }
`;

export const FormContainer = styled.div`
  width: 30%;
  padding: 40px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 90%;
    padding: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #031A6E;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

export const SubTitle = styled.h3`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #808080;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 15px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0 10px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #333;

  &:focus {
    outline: none;
    box-shadow: 0 0 2px 1px #007bff;
  }

  @media (max-width: 768px) {
    height: 35px;
    font-size: 12px;
  }
`;

export const Button = styled.button`
  height: 40px;
  border: none;
  border-radius: 4px;
  background-color: #031A6E;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    height: 35px;
    font-size: 12px;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const SuccessMessage = styled.div`
  color: green;
  font-size: 12px;
  margin-top: 5px;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
