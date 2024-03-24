"use client";

import Typewriter from "typewriter-effect";

export const InformationIde = () => {
  return (
    <Typewriter
      options={{ loop: false, autoStart: true, delay: 1 }}
      onInit={(typewriter) => {
        typewriter
          .typeString(
            "<span style='color:deepskyblue'>var</span> <span>software_engineer = {</span> \
          <br>&emsp;&emsp;<span>solving_problems_at: </span> <a href='https://www.foodpanda.com/' target='_blank' style='color:rgba(253, 149, 90, 0.8); text-decoration: none'>'Foodpanda - Delivery Hero'</a><span>,</span>\
          <br>&emsp;&emsp;<span>previously_at: </span> <a href='https://www.airasia.com/' target='_blank' style='color:rgba(253, 149, 90, 0.8); text-decoration: none'>'AirAsia Superapp'</a><span>,</span>\
          <br>&emsp;&emsp;<span>first_class_honours_from: </span> <a href='https://www.monash.edu/it' target='_blank' style='color:rgba(253, 149, 90, 0.8); text-decoration: none'>'Monash University'</a><span>,</span>\
          <br>&emsp;&emsp;<span>email: </span> <a style='color:rgba(253, 149, 90, 0.8); text-decoration: none' href='mailto:siddhant8b@gmail.com?Subject=Hey Sid!'>siddhant8b@gmail.com</a> <span>,</span>\
          <br>&emsp;&emsp;<span>location: </span> <span style='color:rgba(253, 149, 90, 0.8)'>'Kuala Lumpur, Malaysia'</span><span>,</span>\
          <br><span>};</span>\
          "
          )
          .start();
      }}
    />
  );
};
