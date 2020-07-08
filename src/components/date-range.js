import React from "react";
import DatePicker, {registerLocale} from "react-datepicker";

import ru from "date-fns/locale/ru";

registerLocale("ru", ru);

export const RangeComponent = ({
  handleChangeStart,
  handleChangeEnd,
  startDate,
  endDate,
  disabled,
  className,
  inline,
}) => {
  return (
    <div className="date-range">
      <DatePicker
        selected={startDate}
        onChange={(date) => handleChangeStart(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        inline={inline}
        disabled={disabled}
        className={className}
        locale="ru"
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => handleChangeEnd(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        inline={inline}
        disabled={disabled}
        className={className}
        locale="ru"
      />
    </div>
  );
};
