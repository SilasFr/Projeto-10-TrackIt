import styled from "styled-components";
import Loader from "react-loader-spinner";
import "react-circular-progressbar/dist/styles.css";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

class LoaderApp extends React.Component {
  render() {
    return (
      <Loader
        type="ThreeDots"
        color="#FFFFFF"
        height={50}
        width={50}
        timeout={0}
      />
    );
  }
}

function MyCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        calendarType="US"
        tileClassName={tileStyle}
      />
    </div>
  );
}

function tileStyle({ date, view }) {
  // if (view === 'month') {
  //     // Check if a date React-Calendar wants to check is on the list of dates to add class to
  //     if (datesToAddClassTo.find(dDate => isSameDay(dDate, date))) {
  //       return 'myClassName';
  //     }
  //   }
}

const LoginScreen = styled.div`
  width: 100%;
  height: 100vh;

  padding: 68px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  a {
    color: #52b6ff;
  }
`;

const Trackit = styled.div`
  min-height: 100%;
  background-color: #f2f2f2;
  min-height: 100vh;
  height: 100%;
  padding: 80px 17px;
  padding-bottom: 100px;
`;

const NewHabit = styled.div`
  width: 340px;
  height: 180px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 30px;
  border-radius: 5px;
  background-color: #fff;
  transition: all 100ms ease-out;
  input {
    width: 303px;
    height: 45px;
    padding: 10px;
    font-size: 19.976px;
    line-height: 25px;
    border: 1px solid #d4d4d4;
    :disabled {
      background-color: #d4d4d4;
    }
  }
  input::placeholder {
    -webkit-text-fill-color: #dbdbdb;
  }
`;
const WeekDays = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  button {
    width: 30px;
    height: 30px;
    border-radius: 5px;

    font-size: 20px;
    color: #dbdbdb;
    background: #ffffff;
    border: 1px solid #d4d4d4;
  }
  button.selected {
    background-color: #cfcfcf;
    color: #fff;
  }
  .id {
    display: none;
  }
`;

const HabitOutput = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
  margin-top: 20px;
  button {
    width: 84px;
    height: 35px;
    font-weight: normal;
    font-size: 15.976px;
    line-height: 20px;
    border: none;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cancel {
    background: none;
    color: #52b6ff;
  }
  .save {
    background-color: #52b6ff;
    color: #fff;
  }
`;

const Feed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Habit = styled.div`
  width: 340px;
  height: 91px;
  padding: 14px;
  border-radius: 5px;
  background-color: #fff;
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 10px;
  p {
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
  }
  .days {
    display: flex;
    gap: 2px;
    button {
      width: 30px;
      height: 30px;
      border: 1px solid #d5d5d5;
      border-radius: 5px;

      color: #dbdbdb;
      background-color: #fff;
    }
    button.selected {
      color: #fff;
      background-color: #cfcfcf;
    }
  }
`;

const DaylyHabit = styled.div`
  width: 340px;
  height: 94px;
  padding: 14px;
  border-radius: 5px;
  background-color: #fff;
  position: relative;

  display: flex;
  flex-direction: row;
  gap: 35px;
  .habit-info {
    width: 208px;

    display: flex;
    flex-direction: column;
    span {
      font-size: 12.976px;
      line-height: 16px;
      color: #666666;
    }

    p {
      height: 25px;
      width: 100%;
      font-size: 19.976px;
      line-height: 25px;
      color: #666666;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .habit-checkbox {
    width: 69px;
    height: 69px;
    background-color: #ebebeb;
    border: none;
    border-radius: 5px;
  }

  .habit-checkbox.selected {
    background: #8fc549;
  }
`;

const TrashCan = styled.div`
  position: absolute;
  top: 11px;
  right: 10px;
`;

export {
  Trackit,
  LoaderApp,
  LoginScreen,
  NewHabit,
  WeekDays,
  Habit,
  HabitOutput,
  Feed,
  TrashCan,
  DaylyHabit,
  MyCalendar,
};
