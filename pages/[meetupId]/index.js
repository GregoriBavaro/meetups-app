
import MeetupDetail from "../../components/meetups/MeetupDetails";

const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/MUNCH_Munch_Museum_Oslo_opened_22_October_2021.jpg/1280px-MUNCH_Munch_Museum_Oslo_opened_22_October_2021.jpg"
      title="A first meetup"
      address="Some street 5, some city"
      description="The meetup description"
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  //fetch data for a single meetup

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/MUNCH_Munch_Museum_Oslo_opened_22_October_2021.jpg/1280px-MUNCH_Munch_Museum_Oslo_opened_22_October_2021.jpg",
        id: meetupId,
        title: "A first meetup",
        address: "Some street 5, some city",
        description: "The meetup description",
      },
    },
  };
}

export default MeetupDetails;
