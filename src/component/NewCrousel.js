import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const NewCrousel = () => {
  return (
    <>
      <AwesomeSlider>
        <div className="grid gap-4 grid-cols-2 p-48 text-white bg-[url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3NtYW58ZW58MHx8MHx8&w=1000&q=80')]">
          <div className="h-80 w-72 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3NtYW58ZW58MHx8MHx8&w=1000&q=80"
              alt=""
              className="w-full h-full rounded-sm animate-bounce"
            />
          </div>
          <div className="h-full w-full border-2 border-solid border-white p-1 animate-pulse">
            <h2 className="border-2 border-solid border-white h-full w-full p-4 text-2xl text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
              tempora veniam delectus! Unde perferendis ex reiciendis facilis id
              asperiores molestiae nesciunt corporis veniam esse facere qui,
              ullam atque nam ipsam?
            </h2>
          </div>
        </div>
        <div className="grid gap-4 grid-cols-2 p-48 text-white">
          <div className="h-80 w-72 rounded-lg">
            <img
              src="https://img.freepik.com/free-photo/cheerful-young-caucasian-businessman_171337-727.jpg"
              alt=""
              className="w-full h-full rounded-sm animate-bounce"
            />
          </div>
          <div className="h-full w-full border-2 border-solid border-white p-1 animate-pulse">
            <h2 className="border-2 border-solid border-white h-full w-full p-4 text-2xl text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
              tempora veniam delectus! Unde perferendis ex reiciendis facilis id
              asperiores molestiae nesciunt corporis veniam esse facere qui,
              ullam atque nam ipsam?
            </h2>
          </div>
        </div>

        <div className="grid gap-4 grid-cols-2 p-48 text-white">
          <div className="h-80 w-72 rounded-lg">
            <img
              src="https://media.istockphoto.com/id/1069160140/photo/back-view-of-the-thoughtful-businessman-wearing-a-suit-standing-in-his-office-hands-in.jpg?s=612x612&w=0&k=20&c=XJ7VYP7kogblV83Qyj91OCQY3Ycg9W1qawk5L8_LsMo="
              alt=""
              className="w-full h-full rounded-sm animate-bounce"
            />
          </div>
          <div className="h-full w-full border-2 border-solid border-white p-1 animate-pulse">
            <h2 className="border-2 border-solid border-white h-full w-full p-4 text-2xl text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
              tempora veniam delectus! Unde perferendis ex reiciendis facilis id
              asperiores molestiae nesciunt corporis veniam esse facere qui,
              ullam atque nam ipsam?
            </h2>
          </div>
        </div>
      </AwesomeSlider>
    </>
  );
};

export default NewCrousel;
