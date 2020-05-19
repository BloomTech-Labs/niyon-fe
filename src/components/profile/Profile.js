import React from 'react';
import './styles.scss';
import Select from "react-select";
import Header from '../header/Header'
import Footer from '../footer/Footer'

function Profile(props) {

  const technologies = [
    {
      value: 1,
      label: "C ++",
      type: "Language",
    },
    {
      value: 2,
      label: "React",
      type: "Framework",
    },
    {
      value: 3,
      label: "Nodejs",
      type: "Language",
    },
    {
      value: 4,
      label: "Angular",
      type: "Framework",
    },
    {
      value: 5,
      label: "Dev-Ops",
      type: "Soft",
    },
    {
      value: 6,
      label: "Go!",
      type: "Language",
    },
    {
      value: 7,
      label: "Ruby",
      type: "Language",
    },
    {
      value: 8,
      label: "Graphql",
      type: "Language",
    },
    {
      value: 9,
      label: "JavaScript",
      type: "Language",
    },
    {
      value: 10,
      label: "Javascript - Front-End",
      type: "Soft",
    },
    {
      value: 11,
      label: "Javascript - Back-End",
      type: "Soft",
    },
    {
      value: 12,
      label: "Java",
      type: "Language",
    },
    {
      value: 13,
      label: "Kotlin",
      type: "Language",
    },
    {
      value: 14,
      label: "C#",
      type: "Language",
    },
    {
      value: 15,
      label: "Rest API",
      type: "Soft",
    },
    {
      value: 16,
      label: "Swift",
      type: "Language",
    },
    {
      value: 17,
      label: "Ember",
      type: "Framework",
    },
    {
      value: 18,
      label: "AWS",
      type: "Soft",
    },
    {
      value: 19,
      label: "SQL",
      type: "Language",
    },
    {
      value: 20,
      label: ".NEt",
      type: "Language",
    },
    {
      value: 21,
      label: "TypeScript",
      type: "Language",
    },
    {
      value: 22,
      label: "Linux",
      type: "Soft",
    },
    {
      value: 23,
      label: "HTML",
      type: "Language",
    },
    {
      value: 24,
      label: "Docker",
      type: "Soft",
    },
    {
      value: 25,
      label: "PHP",
      type: "Language",
    },
    {
      value: 26,
      label: "Perl",
      type: "Language",
    },
    {
      value: 27,
      label: "Python",
      type: "Language",
    },
    {
      value: 28,
      label: "PowerShell",
      type: "Soft",
    },
    {
      value: 29,
      label: "Rust",
      type: "Language",
    },
    {
      value: 30,
      label: "Unix",
      type: "Soft",
    },
    {
      value: 31,
      label: "Visual Basic",
      type: "Language",
    },
    {
      value: 32,
      label: "Vim",
      type: "Soft",
    },
    {
      value: 33,
      label: "MATLAB",
      type: "Language",
    },
    {
      value: 34,
      label: "Functional Programming",
      type: "Soft",
    },
    {
      value: 35,
      label: "Object Oriented Programming",
      type: "Soft",
    },
    {
      value: 36,
      label: "Interviewing",
      type: "Soft",
    },
    {
      value: 37,
      label: "Communication",
      type: "Soft",
    },
    {
      value: 38,
      label: "Agile",
      type: "Soft",
    },
    {
      value: 39,
      label: "Leadership",
      type: "Soft",
    },
    {
      value: 40,
      label: "Integrated Development Environment",
      type: "Soft",
    },
    {
      value: 41,
      label: "NPM",
      type: "Soft",
    },
    {
      value: 42,
      label: "Express",
      type: "Framework",
    },
    {
      value: 43,
      label: "Rails",
      type: "Framework",
    },
    {
      value: 44,
      label: "Django",
      type: "Framework",
    },
    {
      value: 45,
      label: "Vue",
      type: "Framework",
    },
    {
      value: 46,
      label: "Graphql-Apollo",
      type: "Framework",
    },
    {
      value: 47,
      label: "Graphql-Yoga",
      type: "Framework",
    },
    {
      value: 48,
      label: "Spring",
      type: "Framework",
    },
    {
      value: 49,
      label: "Laravel Lumen",
      type: "Framework",
    },
    {
      value: 50,
      label: "Flask",
      type: "Framework",
    },
    {
      value: 51,
      label: "ASP.NET",
      type: "Framework",
    },
    {
      value: 52,
      label: "DRY Code",
      type: "Soft",
    },
    {
      value: 53,
      label: "Machine Learning",
      type: "Soft",
    },
  ];
  
  const locations = [
    {
      value: 1,
      label: "Lagos, Nigeria",
    },
    {
      value: 2,
      label: "Kano, Nigeria",
    },
    {
      value: 3,
      label: "Ibadan, Nigeria",
    },
    {
      value: 4,
      label: "Kaduna, Nigeria",
    },
    {
      value: 5,
      label: "Port Harcourt, Nigeria",
    },
    {
      value: 6,
      label: "Benin, Nigeria",
    },
    {
      value: 7,
      label: "Mavalueuguri, Nigeria",
    },
    {
      value: 8,
      label: "Zaria, Nigeria",
    },
    {
      value: 9,
      label: "Aba, Nigeria",
    },
    {
      value: 10,
      label: "Ilorin, Nigeria",
    },
    {
      value: 11,
      label: "Jos, Nigeria",
    },
    {
      value: 12,
      label: "Ogbomosho, Nigeria",
    },
    {
      value: 13,
      label: "Ovo, Nigeria",
    },
    {
      value: 14,
      label: "Enugu, Nigeria",
    },
    {
      value: 15,
      label: "Abeokuta, Nigeria",
    },
    {
      value: 16,
      label: "Onitsha, Nigeria",
    },
    {
      value: 17,
      label: "Warri, Nigeria",
    },
    {
      value: 18,
      label: "Sokoto, Nigeria",
    },
    {
      value: 19,
      label: "Okene, Nigeria",
    },
    {
      value: 20,
      label: "Calabar, Nigeria",
    },
    {
      value: 21,
      label: "Oshogbo, Nigeria",
    },
    {
      value: 22,
      label: "Katsina, Nigeria",
    },
    {
      value: 23,
      label: "Akure, Nigeria",
    },
    {
      value: 24,
      label: "Bobo Dioulasso, Nigeria",
    },
    {
      value: 25,
      label: "Ife, Nigeria",
    },
    {
      value: 26,
      label: "Bauchi, Nigeria",
    },
    {
      value: 27,
      label: "Iseyin, Nigeria",
    },
    {
      value: 28,
      label: "Minna, Nigeria",
    },
    {
      value: 29,
      label: "Makurdi, Nigeria",
    },
    {
      value: 30,
      label: "Owo, Nigeria",
    },
    {
      value: 31,
      label: "Ado, Nigeria",
    },
    {
      value: 32,
      label: "Ilesha, Nigeria",
    },
    {
      value: 33,
      label: "Gombe, Nigeria",
    },
    {
      value: 34,
      label: "Umuahia, Nigeria",
    },
    {
      value: 35,
      label: "Ondo, Nigeria",
    },
    {
      value: 36,
      label: "Damaturu, Nigeria",
    },
    {
      value: 37,
      label: "Jimeta, Nigeria",
    },
    {
      value: 38,
      label: "Ikot Ekpene, Nigeria",
    },
    {
      value: 39,
      label: "Gusau, Nigeria",
    },
    {
      value: 40,
      label: "Mubi, Nigeria",
    },
    {
      value: 41,
      label: "Shagumu, Nigeria",
    },
    {
      value: 42,
      label: "Owerri, Nigeria",
    },
    {
      value: 43,
      label: "Ugep, Nigeria",
    },
    {
      value: 44,
      label: "Ijebu Ode, Nigeria",
    },
    {
      value: 45,
      label: "Ise, Nigeria",
    },
    {
      value: 46,
      label: "Gboko, Nigeria",
    },
    {
      value: 47,
      label: "Ilawe, Nigeria",
    },
    {
      value: 48,
      label: "Ikare, Nigeria",
    },
    {
      value: 49,
      label: "Abuja, Nigeria",
    },
    {
      value: 50,
      label: "Okpoko, Nigeria",
    },
    {
      value: 51,
      label: "Awka, Nigeria",
    },
    {
      value: 52,
      label: "Sapele, Nigeria",
    },
    {
      value: 53,
      label: "Ila, Nigeria",
    },
    {
      value: 54,
      label: "Shaki, Nigeria",
    },
    {
      value: 55,
      label: "Ijero, Nigeria",
    },
    {
      value: 56,
      label: "Otukpo, Nigeria",
    },
    {
      value: 57,
      label: "Kishi, Nigeria",
    },
    {
      value: 58,
      label: "Bugama, Nigeria",
    },
    {
      value: 59,
      label: "Funtua, Nigeria",
    },
    {
      value: 60,
      label: "Abakaliki, Nigeria",
    },
    {
      value: 61,
      label: "Gbongan, Nigeria",
    },
    {
      value: 62,
      label: "Lafia, Nigeria",
    },
    {
      value: 63,
      label: "Igboho, Nigeria",
    },
    {
      value: 64,
      label: "Amaigbo, Nigeria",
    },
    {
      value: 65,
      label: "Gashua, Nigeria",
    },
    {
      value: 66,
      label: "Offa, Nigeria",
    },
    {
      value: 67,
      label: "Jalingo, Nigeria",
    },
    {
      value: 68,
      label: "Bama, Nigeria",
    },
    {
      value: 69,
      label: "Uvo, Nigeria",
    },
    {
      value: 70,
      label: "Uromi, Nigeria",
    },
    {
      value: 71,
      label: "Nsukka, Nigeria",
    },
    {
      value: 72,
      label: "Okigwe, Nigeria",
    },
    {
      value: 73,
      label: "Modakeke, Nigeria",
    },
    {
      value: 74,
      label: "Abvaluejan, Ivory Coast",
    },
    {
      value: 75,
      label: "Bouake, Ivory Coast",
    },
    {
      value: 76,
      label: "Daloa, Ivory Coast",
    },
    {
      value: 77,
      label: "Yamoussoukro, Ivory Coast",
    },
    {
      value: 78,
      label: "Korhogo, Ivory Coast",
    },
    {
      value: 79,
      label: "San Pedro, Ivory Coast",
    },
    {
      value: 80,
      label: "Divo, Ivory Coast",
    },
    {
      value: 81,
      label: "Man, Ivory Coast",
    },
    {
      value: 82,
      label: "Gagnoa, Ivory Coast",
    },
    {
      value: 83,
      label: "Dakar, Senegal",
    },
    {
      value: 84,
      label: "Thies, Senegal",
    },
    {
      value: 85,
      label: "Kaolack, Senegal",
    },
    {
      value: 86,
      label: "Ziguinchor, Senegal",
    },
    {
      value: 87,
      label: "Saint Louis, Senegal",
    },
    {
      value: 88,
      label: "Mbour, Senegal",
    },
    {
      value: 89,
      label: "Diourbel, Senegal",
    },
    {
      value: 90,
      label: "Accra, Ghana",
    },
    {
      value: 91,
      label: "Kumasi, Ghana",
    },
    {
      value: 92,
      label: "Tamale, Ghana",
    },
    {
      value: 93,
      label: "Obuasi, Ghana",
    },
    {
      value: 94,
      label: "Conakry, Guinea",
    },
    {
      value: 95,
      label: "Kankan, Guinea",
    },
    {
      value: 96,
      label: "Bissua, Guinea-Bissau",
    },
    {
      value: 97,
      label: "Douala, Cameroon",
    },
    {
      value: 98,
      label: "Yaounde, Cameroon",
    },
    {
      value: 99,
      label: "Garoua, Cameroon",
    },
    {
      value: 100,
      label: "Maroua, Cameroon",
    },
    {
      value: 101,
      label: "Bafoussan, Cameroon",
    },
    {
      value: 102,
      label: "Ngaoundere, Cameroon",
    },
    {
      value: 103,
      label: "Bamenda, Cameroon",
    },
    {
      value: 104,
      label: "Kaele, Cameroon",
    },
    {
      value: 105,
      label: "Kumba, Cameroon",
    },
    {
      value: 106,
      label: "Freetown, Sierra Leone",
    },
    {
      value: 107,
      label: "Kovalueu, Sierra Leone",
    },
    {
      value: 108,
      label: "Makeni, Sierra Leone",
    },
    {
      value: 109,
      label: "Ouagadougou, Burkina Faso",
    },
    {
      value: 110,
      label: "Bobo Diolasso, Burkina Faso",
    },
    {
      value: 111,
      label: "Cotonou, Benin",
    },
    {
      value: 112,
      label: "Porto Novo, Benin",
    },
    {
      value: 113,
      label: "Parakou, Benin",
    },
    {
      value: 114,
      label: "Djougou, Benin",
    },
    {
      value: 115,
      label: "Bohicon, Benin",
    },
    {
      value: 116,
      label: "Kandi, Benin",
    },
    {
      value: 117,
      label: "Abomey, Benin",
    },
    {
      value: 118,
      label: "Natitingou, Benin",
    },
    {
      value: 119,
      label: "Lome, Togo",
    },
    {
      value: 120,
      label: "Sokode, Togo",
    },
    {
      value: 121,
      label: "Monrovie, Liberia",
    },
    {
      value: 122,
      label: "Ajdabivah, Liberia",
    },
    {
      value: 123,
      label: "Libreville, Gabon",
    },
    {
      value: 124,
      label: "Port Gentil. Gabon",
    },
    {
      value: 125,
      label: "Serekunda, Gambia",
    },
  ];
  
  const jobs = [
    {
      value: 1,
      label: "Full Stack Web Developer",
    },
    {
      value: 2,
      label: "Data Scientist",
    },
    {
      value: 3,
      label: "UI Designer",
    },
    {
      value: 4,
      label: "iOS Developer",
    },
    {
      value: 5,
      label: "Android Developer",
    },
    {
      value: 6,
      label: "Network Programmer",
    },
    {
      value: 7,
      label: "AWS Solutions Architect",
    },
    {
      value: 8,
      label: "Front-End Developer",
    },
    {
      value: 9,
      label: "Back-End Developer",
    },
    {
      value: 10,
      label: "Software Engineer",
    },
    {
      value: 11,
      label: "Junior Developer",
    },
    {
      value: 12,
      label: "Senior Developer",
    },
    {
      value: 13,
      label: "Software Architect",
    },
    {
      value: 14,
      label: "Dev Ops Specialist",
    },
    {
      value: 15,
      label: "Java Developer",
    },
    {
      value: 16,
      label: "SQL Developer",
    },
    {
      value: 17,
      label: ".NET Developer",
    },
    {
      value: 18,
      label: "Python Developer",
    },
    {
      value: 19,
      label: "Web Analytics Developer",
    },
    {
      value: 20,
      label: "UX Designer",
    },
    {
      value: 21,
      label: "Ruby Developer",
    },
    {
      value: 22,
      label: "Systems Engineer",
    },
    {
      value: 23,
      label: "Project Manager",
    },
    {
      value: 24,
      label: "Director of Technology",
    },
    {
      value: 25,
      label: "Webmaster",
    },
    {
      value: 26,
      label: "Student",
    },
    {
      value: 27,
      label: "Freelancer",
    },
  ];

  return (
    <div>
      <Header />
      <div className='profile'>
      <h1>User Profile</h1>
      <h2>Job Title</h2>
      <Select
        defaultValue={[]}
        name="jobs"
        options={jobs}
        className="basic-multi-select"
        classNamePrefix="select"
      />
      <h2>Location</h2>
      <Select
        defaultValue={[]}
        name="locations"
        options={locations}
        className="basic-multi-select"
        classNamePrefix="select"
      />

      <h2>Technologies</h2>
      <Select
        defaultValue={[]}
        isMulti
        name="technologies"
        options={technologies}
        className="basic-multi-select"
        classNamePrefix="select"
      />
      <button>Save</button>
      <Footer value={1} />
    </div>
    </div>
  );
}

export default Profile;