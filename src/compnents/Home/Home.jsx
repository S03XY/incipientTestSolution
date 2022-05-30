import React, { useRef, useState } from "react";
import { Navbar } from "../NavbarComponent/Navbar";
import {
  AddTaskBtn,
  Container,
  DeleteImg,
  InputContainer,
  ItemContainer,
  Notask,
  SubItemContainer,
  TaskInput,
  Tittle,
} from "./HomeStyles";

import icon from "../../assets/delete.png";

const data = ["read book", "eat food"];

function Home() {
  const [list, setList] = useState(data);
  const [taskvalue, setTaskValue] = useState("");
  let tasknodes = useRef([]).current;

  const addtask = (input) => {
    setList([...list, input]);
  };

  const deletetask = (index) => {
    const arraylist = list;
    arraylist.splice(index, 1);
    setList([...arraylist]);
  };

  const oncheck = (index) => {
    const ele = tasknodes[index];
    ele.style.textDecoration = "line-through";
  };

  const onuncheck = (index) => {
    const ele = tasknodes[index];
    ele.style.textDecoration = "none";
  };

  return (
    <>
      <Navbar />
      <Container>
        <Tittle>ToDo List</Tittle>
        <InputContainer>
          <TaskInput
            type="text"
            placeholder="New Task"
            onChange={(e) => {
              setTaskValue(e.target.value);
            }}
          />
          <AddTaskBtn
            onClick={() => {
              if (taskvalue !== "") {
                addtask(taskvalue);
              }
            }}
          >
            Add
          </AddTaskBtn>
        </InputContainer>

        {list.length > 0 ? (
          list.map((item, index) => (
            <ItemContainer
              key={index}
              onClick={() => {
                console.log(tasknodes);
              }}
            >
              <SubItemContainer>
                <input
                  type="checkbox"
                  name="checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      oncheck(index);
                    } else {
                      onuncheck(index);
                    }
                  }}
                />

                <h5 ref={(item) => (tasknodes = [...tasknodes, item])}>
                  {item}
                </h5>
              </SubItemContainer>
              <DeleteImg
                src={icon}
                alt="delete"
                onClick={() => {
                  deletetask(index);
                }}
              />
            </ItemContainer>
          ))
        ) : (
          <Notask>No Task</Notask>
        )}
      </Container>
    </>
  );
}

export default Home;
