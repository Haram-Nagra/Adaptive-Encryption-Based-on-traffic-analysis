import Layout from "./components/layout";
import Image from './components/image';
import Part1 from './components/part1'
import Card from './components/card'
import Form from "./components/input";

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
  ];

  const hobbiesItems = [
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos rerum labore, officiis, ut porro numquam nulla esse odit voluptatem molestiae, minima perspiciatis. Dignissimos accusamus facere dolor inventore, natus cum illo!",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque magni consequatur eligendi iste eius. Qui officia veritatis iste praesentium deleniti architecto impedit vel. Perspiciatis voluptates quas animi quia dolor repellendus?",
  ];

  const project=["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos rerum labore, officiis,ut porro numquam nulla esse odit voluptatem molestiae, minima perspiciatis.Dignissimos accusamus facere dolorinventore, natus cum illo!"]
  
  const name=["fname","fname","Name"]
  const email=["ename","ename","Email"]

  
  return (
    <>
    <Layout haram={<Image/>}>
      <Part1 title="Education" items={educationItems}></Part1>
      <Part1 title="Skills" items={skillsItems}></Part1>
      <Part1 title="Experience" items={experienceItems}></Part1>
      <Part1 title="Hobbies" items={hobbiesItems}></Part1>

      <Part1 title="Projects" items={project}></Part1>

      <Card title="Task Tracker"></Card>
      <Card title="LSTM"></Card>
      <Card title="Music Generator"></Card>
      <Card title="Suroor"></Card>
      <Card title="LinkedIn Clone"></Card>
      <Card title="PharmaSearch"></Card>

      <Form input={name}></Form>
      <Form input={email}></Form>

    </Layout>
    

    </>
  );
}
