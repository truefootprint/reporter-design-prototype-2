import Layout from "../components/layout";
import Summary from "../components/summary";
import Card from "../components/card";

const Index = () => (
  <Layout>
    <Summary>
      <h1>Projects</h1>
      <p>Hello, you have two active projects to monitor. Please choose one:</p>
    </Summary>

    <div className="purple">
      <Card>
        <h3>A path in the front garden</h3>
        <img src="/images/garden_path.jpg" />
        <a href="/garden_path" className="start_button">Start</a>
      </Card>
    </div>

    <div className="blue">
      <Card>
        <h3>Looking after Fred</h3>
        <img src="/images/baby.png" />
        <a href="/fred" className="start_button">Start</a>
      </Card>
    </div>
  </Layout>
);

export default Index;
