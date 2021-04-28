const userDataDump = [
  "1,Joel Peltonen,1921,Users|Admin|Sudo",
  "2,Joeltest Peltonentest,1921,Users",
  "3,Joeltest Peltonentest,,Users",
  "4,Leoj Nenotlep,,Users|Admin",
  "5,root,,Sudo|System",
  "6,Ryukahr,1901,Users|Admin",
  "7,Adamantium Claws,1332,Users",
  "8,The benevolent malevolence,,Users",
  "9,Jim Carrey,1961,Users|Admin",
  "A,Bela Lugosi,1666,Users",
  "B,Robert Smith,,Users|Admin|Sudo",
  "C,Fsh,,Users",
  "D,Racher Carson,,Users",
  "D,Cheesedude51,1951,Users",
  "E,cron,,System",
];
function userProfiles() {
  const user1 = {
    id: 1,
    fullName: "Joel Peltonen",
    initials: "J.P",
    birthYear: 1921,
    departments: ["User|Admin|Sudo"],
  };
  console.log(user1);
  const user2 = {
    id: 2,
    fullName: "Joeltest Peltonentest",
    initials: "J.P",
    birthYear: 1921,
    departments: "Users",
  };
  console.log(user2);
  const user3 = {
    id: 3,
    fullName: "Joeltest Peltonentest",
    initials: "J.T",
    birthYear: "Unknown",
    departments: "Users",
  };
  console.log(user3);

  const user4 = {
    id: 4,
    fullName: "Leoj Nenotlep",
    initials: "L,N",
    birthYear: "Unknown",
    departments: "Users|Admin",
  };
  console.log(user4);
  const user5 = {
    id: 5,
    fullName: "Root",
    initials: "R",
    birthYear: "Unknown",
    departments: "System",
  };
  console.log(user5);
  const user6 = {
    id: 6,
    fullName: "Ryukahr",
    initials: "R",
    birthYear: 1901,
    departments: "Users|Admin",
  };
  console.log(user6);

  const user7 = {
    id: 7,
    fullName: "Adamantium",
    initials: "A",
    birthYear: 1332,
    departments: "Users",
  };
  console.log(user7);
  const user8 = {
    id: 8,
    fullName: "The benevolent malevolence",
    initials: "Tbm",
    birthYear: "unkown",
    departments: "Users",
  };
  console.log(user8);
  const user9 = {
    id: 9,
    fullName: "Jim Carrey,1961",
    initials: "JC",
    birthYear: 1961,
    departments: "Users|Admin",
  };
  console.log(user9);
  const userA = {
    id: "A",
    fullName: "Bela Lugosi",
    initials: "BL",
    birthYear: "Unknown",
    departments: "Users",
  };
  console.log(userA);
  const userB = {
    id: "B",
    fullName: "Robert Smith",
    initials: "RS",
    birthYear: "Unknown",
    departments: "Users|Admin|Sudo",
  };
  console.log(userB);
  const userC = {
    id: "C",
    fullName: "Unknown",
    initials: "Fsh",
    birthYear: "Unknown",
    departments: "Users",
  };
  console.log(userC);
  const userD = {
    id: "D",
    fullName: "Racher Carson",
    initials: "RC",
    birthYear: "Unknown",
    departments: "Users",
  };
  console.log(userD);
  const userD1 = {
    id: "D1",
    fullName: "Cheesedude51",
    initials: "C",
    birthYear: 1951,
    departments: "Users",
  };
  console.log(userD1);
  const userE = {
    id: "E",
    fullName: "Cron",
    initials: "C",
    birthYear: "Unknown",
    departments: "System",
  };
  console.log(userE);
}
userProfiles();

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
