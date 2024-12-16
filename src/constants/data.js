import { assets } from "../assets/images";

const navlinks = [
  {
    id: 0,
    title: "Home",
    url: "/home",
    icon: assets.home,
  },
  {
    id: 1,
    title: "Level",
    url: "/level",
    icon: assets.level,
  },
  {
    id: 2,
    title: "Quiz",
    url: "/quiz",
    icon: assets.quiz,
  },
  {
    id: 3,
    title: "Profile",
    url: "/profile",
    icon: assets.profile,
  },
];


const stats=[
  {
    icon:assets.chemistry,
    title:"Reading",
    progress:100
  },
  {
    icon:assets.fox,
    title:"Writing and language",
    progress:100
  },
  {
    icon:assets.console,
    title:"Math section ",
    progress:100
  },
  {
    icon:assets.console,
    title:"Math section ",
    progress:100
  },
]
const action = ["Practice", "My SAT", "Text"];
export { navlinks, action,stats };
