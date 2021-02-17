import React from "react";

const stepsConfig = {
  correo: {
    title: "Correo",
    text: "¡Vacía tu bandeja de entrada!",
    iconName: "envelope outline",
    start: 8,
    end: 9
  },
  papeleo1: {
    title: "Papeleo",
    text: "A currar un poquito",
    inconName: "file alternate outline",
    start: 9,
    end: 11
  },
  llamadas: {
    title: "Llamadas",
    text: "Atiende todas las llamadas",
    iconName: "phone",
    start: 11,
    end: 12
  },
  descanso: {
    title: "Descansito",
    text: "Tomate un descanso",
    iconName: "coffee",
    start: 12,
    end: 13
  },
  papeleo2: {
    title: "Papeleo",
    text: "Termina el trabajo que te queda",
    iconName: "envelope outline",
    start: 13,
    end: 14
  }
};

const getStatus = (hour, start, end) => {
  if (hour >= end) return "completed";
  else if (hour < start) return "disabled";
  else return "active";
};

const StatusDisplay = (props) => {
  const step = props.step;
  const { title, text, iconName, start, end } = stepsConfig[step];
  return (
    <div className={`${getStatus(props.hour, start, end)} step`}>
      <i className={`${iconName} icon`}></i>
      <div className="content">
        <div className="title">{title}</div>
        <div className="description">{text}</div>
      </div>
    </div>
  );
};

export default StatusDisplay;
