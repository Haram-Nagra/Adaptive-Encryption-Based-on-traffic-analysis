import Layout from "./components/layout";
import Image from './components/image';
import Part1 from './components/part1'

export default function App() {
  const educationItems = [
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos rerum labore, officiis, ut porro numquam nulla esse odit voluptatem molestiae, minima perspiciatis. Dignissimos accusamus facere dolor inventore, natus cum illo!",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque magni consequatur eligendi iste eius. Qui officia veritatis iste praesentium deleniti architecto impedit vel. Perspiciatis voluptates quas animi quia dolor repellendus?",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque magni consequatur eligendi iste eius. Qui officia veritatis iste praesentium deleniti architecto impedit vel. Perspiciatis voluptates quas animi quia dolor repellendus?"
  ];

  const skillsItems = [
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos rerum labore, officiis, ut porro numquam nulla esse odit voluptatem molestiae, minima perspiciatis. Dignissimos accusamus facere dolor inventore, natus cum illo!",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque magni consequatur eligendi iste eius. Qui officia veritatis iste praesentium deleniti architecto impedit vel. Perspiciatis voluptates quas animi quia dolor repellendus?",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque magni consequatur eligendi iste eius. Qui officia veritatis iste praesentium deleniti architecto impedit vel. Perspiciatis voluptates quas animi quia dolor repellendus?"
  ];

  const experienceItems = [
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos rerum labore, officiis, ut porro numquam nulla esse odit voluptatem molestiae, minima perspiciatis. Dignissimos accusamus facere dolor inventore, natus cum illo!",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque magni consequatur eligendi iste eius. Qui officia veritatis iste praesentium deleniti architecto impedit vel. Perspiciatis voluptates quas animi quia dolor repellendus?",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque magni consequatur eligendi iste eius. Qui officia veritatis iste praesentium deleniti architecto impedit vel. Perspiciatis voluptates quas animi quia dolor repellendus?"
  ];

  const hobbiesItems = [
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos rerum labore, officiis, ut porro numquam nulla esse odit voluptatem molestiae, minima perspiciatis. Dignissimos accusamus facere dolor inventore, natus cum illo!",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque magni consequatur eligendi iste eius. Qui officia veritatis iste praesentium deleniti architecto impedit vel. Perspiciatis voluptates quas animi quia dolor repellendus?",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque magni consequatur eligendi iste eius. Qui officia veritatis iste praesentium deleniti architecto impedit vel. Perspiciatis voluptates quas animi quia dolor repellendus?"
  ];
  return (
    <>
    <Layout haram={<Image/>}
              children1={<Part1 title="Education" items={educationItems}/>}
              children2={<Part1 title="Skills" items={skillsItems}/>}
              children3={<Part1 title="Experience" items={experienceItems}/>}
              children4={<Part1 title="Hobbies" items={hobbiesItems}/>}>
      {/* <Part1 title="Education" items={educationItems}></Part1>
      <Part1 title="Skills" items={skillsItems}></Part1>
      <Part1 title="Experience" items={experienceItems}></Part1>
      <Part1 title="Hobbies" items={hobbiesItems}></Part1> */}
    </Layout>
    

    </>
  );
}
