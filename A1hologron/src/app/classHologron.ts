class HologronPersonal {
  hologronFullName: string;
  hologronStudentNumber: number;
  hologronLoginName: string;
  hologronSheridanEmail: string;
  hologronHomeCampus: string;
  hologronImageName: string;

  constructor(
    name: string,
    studentNumber: number,
    login: string,
    email: string,
    campus: string,
    image: string
  ) {
    this.hologronFullName = name;
    this.hologronStudentNumber = studentNumber;
    this.hologronLoginName = login;
    this.hologronSheridanEmail = email;
    this.hologronHomeCampus = campus;
    this.hologronImageName = image;
  }
}

class HologronCountry {
  hologronCountry: string;
  hologronID: number;
  hologronCapital: string;
  hologronAvgSalary: number;
  hologronFlag: string;

  constructor(
    country: string,
    id: number,
    capital: string,
    salary: number,
    flagImage: string
  ) {
    this.hologronCountry = country;
    this.hologronID = id;
    this.hologronCapital = capital;
    this.hologronAvgSalary = salary;
    this.hologronFlag = flagImage;
  }
}

export { HologronPersonal, HologronCountry };
