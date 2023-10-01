import Header from "../../Components/Rooms/Header";
import RoomInfo from "../../Components/Rooms/RoomInfo";
import RoomReservation from "../../Components/Rooms/RoomReservation";

const RoomDetails = () => {
  return (
    <div className="my-container">
      <div className=" max-w-screen-lg mx-auto ">
        <div className=" flex flex-col gap-6">
          <div>
            <Header />
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-20 mt-6">
            <div>
              <RoomInfo />
            </div>
            <div className=" order-first md:order-last">
                <RoomReservation/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
