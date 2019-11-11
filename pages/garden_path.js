import Layout from "../components/layout";
import Expander from "../components/expander";
import Summary from "../components/summary";
import Card from "../components/card";
import MultiChoice from "../components/questions/multi_choice";
import FreeText from "../components/questions/free_text";
import ExpectedValue from "../components/expected_value";

const GardenPath = () => (
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
      <p>As part of the contract the builder has committed to remove all the old concrete. There will be no rubbish left and you will not have to go to the tip yourself.</p>

      <Card>
        <span className="ordinal">1 of 2</span>
        <h3>Removal</h3>
        <p>Have all pieces of old path been removed from garden?</p>
        <MultiChoice choices={["Yes", "No", "Not sure"]} />
        <button>Submit</button>
      </Card>

      <Card>
        <span className="ordinal">2 of 2</span>
        <h3>Removal</h3>
        <p>Has this activity been completed?</p>
        <MultiChoice choices={["Yes", "No", "Not sure"]} />
        <button>Submit</button>
      </Card>
    </Expander>

    <Expander text="Lay foundation" className="blue">
      <p>A common problem with builders laying foundations is that they use inferior quality cement. Sometimes they even don't use any cement and just use sand. In the long run this results in uneven paths. Another common issue is skimping on materials and making the foundation too short or too narrow.</p>

      <Card>
        <span className="ordinal">1 of 2</span>
        <h3>Cement</h3>
        <p>Does the cement float in water? </p>
        <MultiChoice choices={["Yes", "No", "Not sure"]} />
        <button>Submit</button>
      </Card>

      <Card>
        <span className="ordinal">2 of 2</span>
        <h3>Cement</h3>
        <p>Does it contain lumps?</p>
        <MultiChoice choices={["Yes", "No", "Not sure"]} />
        <button>Submit</button>
      </Card>

      <Card>
        <span className="ordinal">1 of 5</span>
        <h3>Sizes and position</h3>
        <p>What is the width of the foundation?</p>
        <ExpectedValue>It should be 92 centimeters wide</ExpectedValue>
        <em>You measure from the outside border to the other outside border.</em>
        <FreeText placeholder="Add a value" unit="cm" />
        <button>Submit</button>
      </Card>

      <Card>
        <span className="ordinal">2 of 5</span>
        <h3>Sizes and position</h3>
        <p>What is the length of the foundation?</p>
        <ExpectedValue>It should be 212 centimeters long</ExpectedValue>
        <FreeText placeholder="Add a value" unit="cm" />
        <button>Submit</button>
      </Card>

      <Card>
        <span className="ordinal">3 of 5</span>
        <h3>Sizes and position</h3>
        <p>Is the foundation going from gate to doorstep?</p>
        <MultiChoice choices={["Yes", "No", "Not sure"]} />
        <button>Submit</button>
      </Card>

      <Card>
        <span className="ordinal">4 of 5</span>
        <h3>Sizes and position</h3>
        <p>Is the surface smooth?</p>
        <MultiChoice choices={["Yes", "No", "Not sure"]} />
        <button>Submit</button>
      </Card>

      <Card>
        <span className="ordinal">5 of 5</span>
        <h3>Sizes and position</h3>
        <p>Has this activity been completed?</p>
        <MultiChoice choices={["Yes", "No", "Not sure"]} />
        <button>Submit</button>
      </Card>
    </Expander>

    <Expander text="Laying the tiles" className="yellow">
      <p>Key things to look out for during this phase is whether they are using the right tiles, how level the tiles are, and whether they cover the foundation entirely.</p>

      <Card>
        <span className="ordinal">1 of 4</span>
        <h3>Tiles</h3>
        <p>Are the tiles black and white?</p>
        <MultiChoice choices={["Yes", "No", "Not sure"]} />
        <button>Submit</button>
      </Card>

      <Card>
        <span className="ordinal">2 of 4</span>
        <h3>Tiles</h3>
        <p>What is the width of the biggest tile?</p>
        <FreeText placeholder="Add a value" unit="cm" />
        <button>Submit</button>
      </Card>

      <Card>
        <span className="ordinal">3 of 4</span>
        <h3>Tiles</h3>
        <p>What is the length of the biggest tile?</p>
        <FreeText placeholder="Add a value" unit="cm" />
        <button>Submit</button>
      </Card>

      <Card>
        <span className="ordinal">4 of 4</span>
        <h3>Tiles</h3>
        <p>Are there any broken tiles?</p>
        <MultiChoice choices={["Yes", "No", "Not sure"]} />
        <button>Submit</button>
      </Card>

      <Card>
        <span className="ordinal">1 of 3</span>
        <h3>Laying them</h3>
        <p>Have the tiles been laid in a mosaic pattern?</p>
        <MultiChoice choices={["Yes", "No", "Not sure"]} />
        <button>Submit</button>
      </Card>

      <Card>
        <span className="ordinal">2 of 3</span>
        <h3>Laying them</h3>
        <p>Do the tiles cover the foundation entirely?</p>
        <MultiChoice choices={["Yes", "No", "Not sure"]} />
        <button>Submit</button>
      </Card>

      <Card>
        <span className="ordinal">3 of 3</span>
        <h3>Laying them</h3>
        <p>Is the surface even?</p>
        <MultiChoice choices={["Yes", "No", "Not sure"]} />
        <button>Submit</button>
      </Card>

      <Card>
        <span className="ordinal">1 of 3</span>
        <h3>Tidy-up</h3>
        <p>Have all the remaining tiles been handed over?</p>
        <MultiChoice choices={["Yes", "No", "Not sure"]} />
        <button>Submit</button>
      </Card>

      <Card>
        <span className="ordinal">2 of 3</span>
        <h3>Tidy-up</h3>
        <p>Have all the remaining items been removed from the premises?</p>
        <MultiChoice choices={["Yes", "No", "Not sure"]} />
        <button>Submit</button>
      </Card>

      <Card>
        <span className="ordinal">3 of 3</span>
        <h3>Tidy-up</h3>
        <p>Has this activity been completed?</p>
        <MultiChoice choices={["Yes", "No", "Not sure"]} />
        <button>Submit</button>
      </Card>
    </Expander>

    <Expander text="Using the path" className="purple">
      <p>Throughout the course of the first year it is good to assess from time to time how well the path is working for you.</p>

      <Card>
        <span className="ordinal">1 of 3</span>
        <h3>Using the path</h3>
        <p>Does the new path look good?</p>
        <MultiChoice choices={["Yes", "No", "Not sure"]} />
        <button>Submit</button>
      </Card>

      <Card>
        <span className="ordinal">2 of 3</span>
        <h3>Using the path</h3>
        <p>Is the new path slippery in the rain?</p>
        <MultiChoice choices={["Yes", "No", "Not sure"]} />
        <button>Submit</button>
      </Card>

      <Card>
        <span className="ordinal">3 of 3</span>
        <h3>Using the path</h3>
        <p>Overall, how happy are you with the new path?</p>
        <MultiChoice choices={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
        <button>Submit</button>
      </Card>
    </Expander>
  </Layout>
);

export default GardenPath;
