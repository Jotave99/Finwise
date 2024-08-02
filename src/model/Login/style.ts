import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 94vh;
  background-color: #f5f5f5;
  padding: 1rem;

  @media (max-width: 768px) {
    height: 95.7vh;
  }
`;

export const FormContainer = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 0.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
    max-width: 90%;
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  color: #031A6E;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  margin-bottom: 1rem;

  &:focus {
    outline: none;
    box-shadow: 0 0 2px 1px #007bff;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #031A6E;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  margin-top: 2rem;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-top: 1.5rem;
  }
`;

export const SignupButton = styled.button`
  padding: 0.5rem;
  font-size: 0.9rem;
  font-weight: bold;
  background-color: #fff;
  color: #031A6E;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  margin-top: 1rem;
  width: 100%;

  &:hover {
    color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.8rem;
  text-align: center;
  margin-bottom: 0;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
