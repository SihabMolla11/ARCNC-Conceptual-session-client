import { DateRange } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Button from "../Button/Button";

const RoomReservation = () => {
  return (
    <div className=" bg-white border-[1px] border-neutral-200 rounded-lg overflow-hidden ">
      <div className="flex flex-row items-center gap-1 p-4">
        <h2 className="text-2xl font-semibold "> $ 200</h2>
        <p className=" font-light text-neutral-600">night</p>
      </div>
      <hr />
      <div className="text-center">
        <DateRange
          rangeColors={["#262626"]}
          date={new Date()}
          direction="vertical"
          showDateDisplay={false}
          minDate={new Date()}
        />
      </div>
      <hr />
      <div className="p-4">
        <Button label="Reserve" />
      </div>
      <hr />

      <div className="p-4 flex flex-row justify-between items-center gap-1 font-semibold text-xl">
        <p>Total</p>
        <p>$ 300</p>
      </div>
    </div>
  );
};

export default RoomReservation;
