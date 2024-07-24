// components/daysleft.ts
"use client";
import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface DaysLeftProps {
  value: number;
}

const DaysLeft: React.FC<DaysLeftProps> = ({ value }) => {
  const [progress, setProgress] = useState(0);
  const [days, setDays] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < value) {
          return prev + 1;
        } else {
          clearInterval(progressInterval);
          return prev;
        }
      });
    }, 20);

    const daysInterval = setInterval(() => {
      setDays((prev) => {
        if (prev < value) {
          return prev + 1;
        } else {
          clearInterval(daysInterval);
          return prev;
        }
      });
    }, 20);

    return () => {
      clearInterval(progressInterval);
      clearInterval(daysInterval);
    };
  }, [value]);

  return (
    <div style={{ width: 200, margin: "0 auto", textAlign: "center" }}>
      <CircularProgressbar
        value={progress}
        maxValue={value}
        styles={buildStyles({
          pathColor: "#3b82f6",
          textColor: "#000",
        })}
      />
      <div style={{ marginTop: -120, fontSize: "24px", fontWeight: "bold" }}>
        {days}
      </div>
      <div style={{ fontSize: "16px" }}>Days Left</div>
    </div>
  );
};

export default DaysLeft;
