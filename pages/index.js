import Layout from "../components/layout";
import Expander from "../components/expander";
import Summary from "../components/summary";
import Card from "../components/card";
import MultiChoice from "../components/questions/multi_choice";
import FreeText from "../components/questions/free_text";
import ExpectedValue from "../components/expected_value";

const Index = () => (
  <Layout>
    <Summary>
      <h1>A path in the front garden</h1>
      <h2>Project summary</h2>
      <p>The contract states that a black and white mosaic tile pattern will be laid on a foundation made of good quality cement. The path will be 92 cm wide and 212 cm long, leading from gate to doorstep. It will be smooth.</p>
      <button>Project contract</button>
      <img src="/images/map.png" />
      <p>This project has 4 activities to monitor:</p>
    </Summary>


    <Expander text="Remove old path" className="green">
      <Card>
        <p>As part of the contract the builder has committed to remove all the old concrete. There will be no rubbish left and you will not have to go to the tip yourself.</p>
      </Card>

      <Card>
        <span className="ordinal">1 of 3</span>
        <h3>Removal</h3>
        <p>Have all pieces of old path been removed from garden?</p>
        <MultiChoice choices={["Yes", "No", "Not sure"]} />
        <button>Submit</button>
      </Card>

      <Card>
        <span className="ordinal">2 of 3</span>
        <h3>Removal</h3>
        <p>Any comments about removal of old path?</p>
        <ExpectedValue>should be 123 metres</ExpectedValue>
        <FreeText placeholder="Add a comment" unit="metres"/>
        <button>Submit</button>
      </Card>
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

    <Expander text="Using the path" className="purple">
      <Card>
        <p>Throughout the course of the first year it is good to assess from time to time how well the path is working for you.</p>
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
