import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/MUNCH_Munch_Museum_Oslo_opened_22_October_2021.jpg/1280px-MUNCH_Munch_Museum_Oslo_opened_22_October_2021.jpg",
    address: "Oslo, Norway center avenue 12A-46",
    description: "This is a first meet up",
  },
  {
    id: "m2",
    title: "A SecondMEetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Chateau-saint-ange-tibre.jpg/1024px-Chateau-saint-ange-tibre.jpg",
    address: "Rome, Italy avenue pizza-slice69",
    description: "This is a second meet up",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  }
}

export default HomePage;
