import React from "react";
import RealEstate from "./../assets/real-estate.png";
import todoApp from "./../assets/todo-app.png";
import calculator from "./../assets/calculator.png";
import amazonE from "./../assets/amazon.png";
import restImg from "./../assets/geriche_rest.png";
import adminDashboard from "./../assets/admin-dashboard.png";
import WorkContainter from "./WorkContainter";

export const Work = () => {
  return (
    <div name="work" className="w-full pt-[100px] text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#fc5657]">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* container */}
        <div className="grid sm:grid-cols-2 gap-4">
          {/* add md:grid-cols-3 when you add new project to the portfolio */}

          {/* work display, grid items*/}
          <WorkContainter
            image={amazonE}
            title="Amazon Clone Ecommerce"
            demo="https://ninigibradze.github.io/ecommerce-project/"
            code="https://github.com/ninigibradze/ecommerce-project"
            userInfo={false}
            comingSoon={false}
          />
          <WorkContainter
            image={RealEstate}
            title="Real Estate Application"
            demo="https://ninigibradze.github.io/real-estate/"
            code="https://github.com/ninigibradze/real-estate"
            userInfo={true}
            comingSoon={false}
          />
          <WorkContainter
            image={restImg}
            title="Moders Restaurant App"
            demo="https://ninigibradze.github.io/restaurant-app/"
            code="https://github.com/ninigibradze/restaurant-app"
            userInfo={false}
            comingSoon={false}
          />
          <WorkContainter
            image={adminDashboard}
            title="Admin Dashboard"
            demo="/"
            code="/"
            userInfo={false}
            comingSoon={true}
          />
          <WorkContainter
            image={todoApp}
            title="JS Todo app"
            demo="https://ninigibradze.github.io/todo-list-react/"
            code="https://github.com/ninigibradze/todo-list-react"
            userInfo={false}
            comingSoon={false}
          />
          <WorkContainter
            image={calculator}
            title="JS Calculator"
            demo="https://ninigibradze.github.io/calculator_ng/"
            code="https://github.com/ninigibradze/calculator_ng"
            userInfo={false}
            comingSoon={false}
          />
        </div>
      </div>
    </div>
  );
};
