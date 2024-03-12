import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const FormContainer = styled.div`
  width: 30%;
  padding: 40px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-right: 215px;
  margin-bottom: 30px;
  color: #031A6E;
`;

export const SubTitle = styled.h3`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  margin: -25px;
  margin-right: 100px;
  margin-bottom: 30px;
  color: #808080;
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
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;