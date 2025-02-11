import React from "react";

const stats = () => {
  const calculateDateDifference = (
    dateString: string
  ): { years: number; months: number; days: number } => {
    const givenDate = new Date(dateString);
    const currentDate = new Date();

    // Ensure the given date is valid
    if (isNaN(givenDate.getTime())) {
      throw new Error("Invalid date format");
    }

    let years = currentDate.getFullYear() - givenDate.getFullYear();
    let months = currentDate.getMonth() - givenDate.getMonth();
    let days = currentDate.getDate() - givenDate.getDate();

    // Adjust for negative days
    if (days < 0) {
      months -= 1;
      const previousMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      );
      days += previousMonth.getDate();
    }

    // Adjust for negative months
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    return { years, months, days };
  };

  const result = calculateDateDifference("2020-02-14");

  return (
    <div className="w-[700px] mx-auto text-3xl">
      <div className="">Together since 2020 - 02 - 14</div>
      <div className="">
        Together for: {result.years} Years {result.months} Months {result.days} Days
      </div>

     
    </div>
  );
};

export default stats;
