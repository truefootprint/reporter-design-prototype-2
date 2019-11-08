import Layout from "../components/layout";
import Expander from "../components/expander";
import Summary from "../components/summary";
import Card from "../components/card";

const Index = () => (
  <Layout>
    <Summary>
      <h1>A path in the front garden</h1>
      <h2>Project summary</h2>
      <p>The contract states that a black and white mosaic tile pattern will be laid on a foundation made of good quality cement. The path will be 92 cm wide and 212 cm long, leading from gate to doorstep. It will be smooth.</p>
      <button>Project contract</button>
      <img src="/images/map.png" />
      <p>This project has 3 activities to monitor:</p>
    </Summary>

    <Expander text="Remove old path" className="green">
      <Card>
        <p>As part of the contract the builder has committed to remove all the old concrete. There will be no rubbish left and you will not have to go to the tip yourself.</p>
      </Card>

      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
    </Expander>

    <Expander text="Lay foundation" className="blue">
      <Card>
        <p>A common problem with builders laying foundations is that they use inferior quality cement. Sometimes they even don't use any cement and just use sand. In the long run this results in uneven paths. Another common issue is skimping on materials and making the foundation too short or too narrow.</p>
      </Card>

      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
    </Expander>

    <Expander text="Laying the tiles" className="yellow">
      <Card>
        <p>Key things to look out for during this phase is whether they are using the right tiles, how level the tiles are, and whether they cover the foundation entirely.</p>
      </Card>

      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
      <Card><p>Another card</p></Card>
    </Expander>
  </Layout>
);

export default Index;
