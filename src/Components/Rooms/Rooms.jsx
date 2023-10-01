import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import Heading from "../Shared/Heading/Heading";
import Card from "./Card";

const Rooms = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get("category");

  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("room.json").then((res) => {
      if (category) {
        const filter = res.data.filter((room) => room.category === category);
        setRooms(filter);
      } else {
        setRooms(res.data);
      }
      setLoading(false);
    });
  }, [category]);

  if (loading) {
    return <Loader />;
  }

  if (rooms.length <= 0) {
    return (
      <div className="pt-12 mb-[13%]">
        <Heading title="No Room Available In This Category" subtitle="Please Select Other Category" center={true} />
      </div>
    );
  }

  return (
    <div className="my-container">
      <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center justify-between gap-8">
        {rooms.map((room, index) => (
          <Card room={room} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
