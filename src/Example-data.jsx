import uniqid from "uniqid";

const exampleData = {
  personalInfo: {
    fullName: "Alex Alexander",
    email: "mycoolemail@gmail.com",
    phoneNumber: "+123 312 31231",
    adress: "Stockholm, Sweden",
  },

  sections: {
    educations: [
      {
        degree: "Bachelors in CS",
        schoolName: "MSU",
        location: "Moscow, RU",
        startDate: "2016",
        endDate: "2020",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
      {
        degree: "Bachelors in DE",
        schoolName: "MIREA",
        location: "Moscow, RU",
        startDate: "2021",
        endDate: "2025",
        isCollapsed: true,
        isHidden: true,
        id: uniqid(),
      },
    ],

    jobs: [
      {
        companyName: "Yandex",
        position: "javascript-intern",
        startDate: "2027",
        endDate: "2030",
        location: "Moscow, RU",
        description:
          "Worked on stuff that was veyr difficult surely, that's very true yes.",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
    ],
  },
};

export default exampleData;
