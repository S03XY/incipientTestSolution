import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  /* background-color: rebeccapurple; */
  margin: 10px auto;

`;

export const Tittle = styled.h2`
  color: black;
  margin: 10px 20px;
`;

export const InputContainer = styled.div`
  margin: 30px 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const TaskInput = styled.input`
  width: 100%;
  border-radius: 5px;
  padding: 7px;
`;

export const AddTaskBtn = styled.button`
  margin-left: 30px;
  padding: 7px 15px;
  background: skyblue;
  color: white;
  border: none;
  border-radius: 5px;
`;

export const Notask = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 20px;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 2px solid darkgray;
  border-radius: 3px;
`;

export const SubItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  input[type=checkbox] {
  accent-color: skyblue;
}

  h5 {
    margin-left: 20px;
    text-transform: capitalize;
  }
`;

export const DeleteImg = styled.img`
  height: 30px;
  width: 30px;
`;
