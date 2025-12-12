
export const companyName = "United Service Center";

export const phoneNumber = "+971 50 402 7148";
export const phoneNumberForUrl = "+971504027148"; // Phone number without spaces for URLs

export const sendMessage = () => {
  const message = `Hi, I need ${companyName} Service Appointment.`;
  const url = `https://wa.me/${phoneNumberForUrl}?text=${encodeURIComponent(
    message
  )}`;
  window.open(url, "_blank"); // Opens WhatsApp in a new tab
};

export const dialPhone = () => {
  window.location.href = `tel:${phoneNumberForUrl}`;
};

export const getData = (company, route) => {
  const displayCompany =
    route !== "/" && company !== "Repair Site 6" ? company : "";
  const allData = [
    {
      title: "Dishwasher Repair",
      imgUrl: "/static/service-dishwasher.png",
      slug: "dishwasher-repair",
      description: `At ${displayCompany}, we specialize in providing high-quality dishwasher repair services. Our expert technicians are trained to diagnose and resolve a wide range of dishwasher issues, ensuring your appliance operates efficiently and effectively.`,
      commonProblems: [
        `${displayCompany} Dishwasher not starting`,
        `${displayCompany} Water not draining properly`,
        `${displayCompany} Dishes not coming out clean`,
        `${displayCompany} Leaking water`,
        `${displayCompany} Unusual noises during wash`,
        `${displayCompany} Door latch issues`,
        `${displayCompany} Dishwasher unusual cycles`,
        `${displayCompany} Odors issues`,
        `${displayCompany} Error codes appearing `,
        `${displayCompany} Water not filling`,
      ],
    },
    {
      title: "Dryer Repair",
      imgUrl: "/static/service-dryer.png",
      slug: "dryer-repair",
      description: `At ${displayCompany}, we offer expert dryer repair services to ensure your appliance functions properly. Our trained technicians can address a variety of dryer issues, helping you get back to your laundry routine quickly.`,
      commonProblems: [
        `${displayCompany} Dryer not starting`,
        `${displayCompany} Clothes not drying`,
        `${displayCompany} Excessive noise in wash`,
        `${displayCompany} Drum not spinning`,
        `${displayCompany} Overheating`,
        `${displayCompany} Lint trap issues`,
        `${displayCompany} Dryer cycle not finishing`,
        `${displayCompany} Bad odor from dryer`,
        `${displayCompany} Error codes appearing`,
        `${displayCompany} Drum making noises`
      ],
    },
    {
      title: "Washing Machine Repair",
      slug: "washing-machine-repair",
      imgUrl: "/static/service-washing-new.png",
      description: `At ${displayCompany}, we provide reliable washing machine repair services. Our experienced technicians can quickly diagnose and resolve various washing machine problems, ensuring your laundry is done efficiently.`,
      commonProblems: [
        `${displayCompany} Machine not turning on`,
        `${displayCompany} Water not filling`,
        `${displayCompany} Excessive noise`,
        `${displayCompany} Draining issues`,
        `${displayCompany} Leaking water`,
        `${displayCompany} Door not sealing properly`,
        `${displayCompany} Unbalanced loads`,
        `${displayCompany} Overheating`,
        `${displayCompany} Cycle not completing`,
        `${displayCompany} Error codes on display`,
      ],
    },
    {
      title:
        company === "Bosch" || company === "Siemens" || company === companyName
          ? "Stove/Cooker Repair"
          : "TV Repair",
      slug:
        company === "Bosch" || company === "Siemens" || company === companyName
          ? "stove-cooker-repair"
          : "tv-repair",
      imgUrl:
        company === "Bosch" || company === "Siemens" || company === companyName
          ? "/static/service-stove.png"
          : "/static/service-tv-new.png",
      description:
        company === "Bosch" || company === "Siemens" || company === companyName
          ? `At ${company}, we deliver quality stove and cooker repair services. Our skilled technicians are adept at diagnosing and fixing a range of issues, ensuring your cooking appliance operates safely and effectively.`
          : `At ${company}, we provide reliable TV repair services. Our skilled technicians can troubleshoot and resolve various television issues, ensuring you enjoy your favorite shows without disruption.`,
      commonProblems:
        company === "Bosch" || company === "Siemens" || company === companyName
          ? [
            `${displayCompany} Burners not lighting`,
            `${displayCompany} Uneven heating`,
            `${displayCompany} Oven not heating`,
            `${displayCompany} Self-cleaning cycle issues`,
            `${displayCompany} Control panel problems`,
            `${displayCompany} Gas leaks`,
            `${displayCompany} Electric ignition failure`,
            `${displayCompany} Burner clicking noises`,
            `${displayCompany} Oven door issues`,
            `${displayCompany} Error codes on display`,
          ]
          : [
            `${displayCompany} TV not turning on`,
            `${displayCompany} Screen flickering`,
            `${displayCompany} No sound`,
            `${displayCompany} Picture issues`,
            `${displayCompany} Remote control problems`,
            `${displayCompany} HDMI connection issues`,
            `${displayCompany} Software glitches`,
            `${displayCompany} Color distortion`,
            `${displayCompany} Overheating`,
            `${displayCompany} Input selection problems`,
          ],
    },
    {
      title: "Oven Repair",
      slug: "oven-repair",
      imgUrl: "/static/service-oven-new.png",
      description: `At ${displayCompany}, we specialize in oven repair services to keep your cooking appliances in top shape. Our technicians are trained to handle various oven issues, ensuring you can cook your meals without interruption.`,
      commonProblems: [
        `${displayCompany} Oven not heating`,
        `${displayCompany} Temperature issues`,
        `${displayCompany} Oven door not sealing`,
        `${displayCompany} Self-cleaning problems`,
        `${displayCompany} Ignition issues`,
        `${displayCompany} Faulty thermostat`,
        `${displayCompany} Error codes on display`,
        `${displayCompany} Unusual noises `,
        `${displayCompany} Oven light not working`,
        `${displayCompany} Electrical problems`,
      ],
    },
    {
      title: "Fridge Repair",
      slug: "fridge-repair",
      imgUrl: "/static/service-fridge-new.png",
      description: `At ${displayCompany}, we offer comprehensive fridge repair services. Our experienced technicians can diagnose and fix a variety of refrigerator issues, ensuring your food stays fresh and safe.`,
      commonProblems: [
        `${displayCompany} Fridge not cooling`,
        `${displayCompany} Excessive noise`,
        `${displayCompany} Leaking water`,
        `${displayCompany} Ice maker issues`,
        `${displayCompany} Frost buildup `,
        `${displayCompany} Fridge cycling too frequently`,
        `${displayCompany} Temperature issues`,
        `${displayCompany} Condenser coils problems`,
        `${displayCompany} Door seal issues`,
        `${displayCompany} Error codes on display`,
      ],
    },
  ];
  const tvRepair = company === companyName && {
    title: "TV Repair",
    slug: "tv-repair",
    imgUrl: "/static/service-tv-new.png",
    description: `At ${company}, we provide reliable TV repair services. Our skilled technicians can troubleshoot and resolve various television issues, ensuring you enjoy your favorite shows without disruption.`,
    commonProblems: [
      `${displayCompany} TV not turning on`,
      `${displayCompany} Screen flickering`,
      `${displayCompany} No sound`,
      `${displayCompany} Picture issues`,
      `${displayCompany} Remote control problems`,
      `${displayCompany} HDMI connection issues`,
      `${displayCompany} Software glitches`,
      `${displayCompany} Color distortion`,
      `${displayCompany} Overheating`,
      `${displayCompany} Input selection problems`,
    ],
  };

  return company === companyName ? allData.concat(tvRepair) : allData;

};
