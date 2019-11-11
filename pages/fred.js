import Layout from "../components/layout";
import Expander from "../components/expander";
import Summary from "../components/summary";
import Card from "../components/card";
import MultiChoice from "../components/questions/multi_choice";
import FreeText from "../components/questions/free_text";
import ExpectedValue from "../components/expected_value";

const Fred = () => {
  const scrollNext = (event) => {
    const button = event.target;
    const card = button.parentElement;
    const cards = document.getElementsByClassName(card.className);
    const nextCard = cards[[...cards].indexOf(card) + 1];
    const offset = nextCard.offsetTop;

    if (offset === 0) {
      const expander = card.closest(".expander");
      const expanders = document.getElementsByClassName("expander");
      const nextExpander = expanders[[...expanders].indexOf(expander) + 1];

      nextExpander.firstChild.click();
      return;
    }

    window.scroll({ top: offset - 70, behavior: "smooth" });
  };

  return (
    <Layout>
      <a href="/">&lt; Projects</a>

      <Summary>
        <h1>Looking after Fred</h1>
        <h2>Project summary</h2>
        <p>Looking after any child isn't easy, but Fred is a tiny terrorist who plays by his own rules. This project can be re-used daily to allow anyone to herd Fred along in life and enable him to be clean, fed and happy.</p>
        <button>Project contract</button>
        <p>This project has 3 activities to monitor:</p>
      </Summary>

      <Expander text="Dinner time" className="green expander">
        <p>Fred is hungry, again. He must be fed before he loses it.</p>

        <Card>
          <span className="ordinal">1 of 17</span>
          <h3>Decide what to make for dinner</h3>
          <p>Has Fred eaten all food groups today?</p>
          <MultiChoice choices={["Yes", "No", "Not sure"]} />
          <button onClick={scrollNext}>Submit</button>
        </Card>

        <Card>
          <span className="ordinal">2 of 17</span>
          <h3>Decide what to make for dinner</h3>
          <p>Has Fred had at least 3 portions of fruit and vegetables today?</p>
          <MultiChoice choices={["Yes", "No", "Not sure"]} />
          <button onClick={scrollNext}>Submit</button>
        </Card>

        <Card>
          <span className="ordinal">3 of 17</span>
          <h3>Decide what to make for dinner</h3>
          <p>Is Fred in a fussy mood?</p>
          <MultiChoice choices={["Yes", "No", "Not sure"]} />
          <button onClick={scrollNext}>Submit</button>
        </Card>

        <Card>
          <span className="ordinal">4 of 17</span>
          <h3>Gather ingredients</h3>
          <p>What do we have in the fridge?</p>
          <FreeText placeholder="Add ingredients" />
          <button onClick={scrollNext}>Submit</button>
        </Card>

        <Card>
          <span className="ordinal">5 of 17</span>
          <h3>Gather ingredients</h3>
          <p>What do we have in the freezer?</p>
          <FreeText placeholder="Add ingredients" />
          <button onClick={scrollNext}>Submit</button>
        </Card>

        <Card>
          <span className="ordinal">6 of 17</span>
          <h3>Gather ingredients</h3>
          <p>Have we got leftovers?</p>
          <MultiChoice choices={["Yes", "No", "Not sure"]} />
          <button onClick={scrollNext}>Submit</button>
        </Card>

        <Card>
          <span className="ordinal">7 of 17</span>
          <h3>Cook dinner</h3>
          <p>Is the frying pan clean?</p>
          <MultiChoice choices={["Yes", "No", "Not sure"]} />
          <button onClick={scrollNext}>Submit</button>
        </Card>

        <Card>
          <span className="ordinal">8 of 17</span>
          <h3>Cook dinner</h3>
          <p>How much salt is added?</p>
          <em>There should be no salt added to Fred’s food</em>
          <FreeText placeholder="Add a value" unit="grams" />
          <button onClick={scrollNext}>Submit</button>
        </Card>

        <Card>
          <span className="ordinal">9 of 17</span>
          <h3>Chase down Fred</h3>
          <p>Where is Fred?</p>
          <FreeText placeholder="Add a place" />
          <button onClick={scrollNext}>Submit</button>
        </Card>

        <Card>
          <span className="ordinal">10 of 17</span>
          <h3>Chase down Fred</h3>
          <p>Is the highchair clean?</p>
          <em>The highchair should have been cleaned after the last meal</em>
          <MultiChoice choices={["Yes", "No", "Not sure"]} />
          <button onClick={scrollNext}>Submit</button>
        </Card>

        <Card>
          <span className="ordinal">11 of 17</span>
          <h3>Sit Fred in highchair and feed him</h3>
          <p>Is Fred clipped in?</p>
          <em>Fred should be clipped in now because he keeps standing up in the highchair</em>
          <MultiChoice choices={["Yes", "No", "Not sure"]} />
          <button onClick={scrollNext}>Submit</button>
        </Card>

        <Card>
          <span className="ordinal">12 of 17</span>
          <h3>Sit Fred in highchair and feed him</h3>
          <p>Does Fred’s mum reprimand him for throwing food on the floor?</p>
          <MultiChoice choices={["Yes", "No", "Not sure"]} />
          <button onClick={scrollNext}>Submit</button>
        </Card>

        <Card>
          <span className="ordinal">13 of 17</span>
          <h3>Sit Fred in highchair and feed him</h3>
          <p>How much does Fred eat?</p>
          <MultiChoice choices={["All of it", "Some of it", "None of it"]} />
          <button onClick={scrollNext}>Submit</button>
        </Card>

        <Card>
          <span className="ordinal">14 of 17</span>
          <h3>Sit Fred in highchair and feed him</h3>
          <p>Has Fred had some water?</p>
          <MultiChoice choices={["Yes", "No", "Not sure"]} />
          <button onClick={scrollNext}>Submit</button>
        </Card>

        <Card>
          <span className="ordinal">15 of 17</span>
          <h3>Sit Fred in highchair and feed him</h3>
          <p>Has Fred’s mum persuaded him to have more?</p>
          <MultiChoice choices={["Yes", "No", "Not sure"]} />
          <button onClick={scrollNext}>Submit</button>
        </Card>

        <Card>
          <span className="ordinal">16 of 17</span>
          <h3>Sit Fred in highchair and feed him</h3>
          <p>Has Fred’s mum cleaned him with a wet wipe after he has eaten?</p>
          <MultiChoice choices={["Yes", "No", "Not sure"]} />
          <button onClick={scrollNext}>Submit</button>
        </Card>

        <Card>
          <span className="ordinal">17 of 17</span>
          <h3>Sit Fred in highchair and feed him</h3>
          <p>Has this activity been completed?</p>
          <MultiChoice choices={["Yes", "No", "Not sure"]} />
          <button onClick={scrollNext}>Submit</button>
        </Card>
      </Expander>

      <Expander text="Bath time" className="blue expander">
        <p>Fred is messy from a day of fun in the park. He needs a nice bath to clean him up.</p>

        <Card>
          <span className="ordinal">1 of 17</span>
          <h3>Run the bath</h3>
          <p>Have the taps been turned on?</p>
          <MultiChoice choices={["Yes", "No", "Not sure"]} />
          <button onClick={scrollNext}>Submit</button>
        </Card>

        <Card>
          <span className="ordinal">2 of 17</span>
          <h3>Run the bath</h3>
          <p>Has the plug been put in?</p>
          <MultiChoice choices={["Yes", "No", "Not sure"]} />
          <button onClick={scrollNext}>Submit</button>
        </Card>

        <Card>
          <span className="ordinal">3 of 17</span>
          <h3>Check the temperature</h3>
          <p>Is the temperature below 38 degrees?</p>
          <em>The water should be below 38 degrees centigrade.</em>
          <MultiChoice choices={["Yes", "No", "Not sure"]} />
          <button onClick={scrollNext}>Submit</button>
        </Card>

        <Card>
          <span className="ordinal">4 of 17</span>
          <h3>Find the bath toys</h3>
          <p>Where are the bath toys?</p>
          <FreeText placeholder="Add a place" />
          <button onClick={scrollNext}>Submit</button>
        </Card>

        <Card>
          <span className="ordinal">5 of 17</span>
          <h3>Find the bath toys</h3>
          <p>Which bath toys does Fred want today?</p>
          <FreeText placeholder="Add toys" />
          <button onClick={scrollNext}>Submit</button>
        </Card>

        <Card>
          <span className="ordinal">6 of 17</span>
          <h3>Undress Fred</h3>
          <p>Are his buttons undone before the top is pulled over his head?</p>
          <MultiChoice choices={["Yes", "No", "Not sure"]} />
          <button onClick={scrollNext}>Submit</button>
        </Card>

        <Card>
          <span className="ordinal">7 of 17</span>
          <h3>Undress Fred</h3>
          <p>Can the clothes be worn another day?</p>
          <MultiChoice choices={["Yes", "No", "Not sure"]} />
          <button onClick={scrollNext}>Submit</button>
        </Card>

        <Card>
          <span className="ordinal">8 of 17</span>
          <h3>Wash Fred</h3>
          <p>Do you know where the flannel is?</p>
          <MultiChoice choices={["Yes", "No", "Not sure"]} />
          <button onClick={scrollNext}>Submit</button>
        </Card>

        <Card>
          <span className="ordinal">9 of 17</span>
          <h3>Wash Fred</h3>
          <p>Do you know where the toothbrush is?</p>
          <MultiChoice choices={["Yes", "No", "Not sure"]} />
          <button onClick={scrollNext}>Submit</button>
        </Card>

        <Card>
          <span className="ordinal">10 of 17</span>
          <h3>Wash Fred</h3>
          <p>Is Fred’s skin clean?</p>
          <MultiChoice choices={["Yes", "No", "Not sure"]} />
          <button onClick={scrollNext}>Submit</button>
        </Card>

        <Card>
          <span className="ordinal">11 of 17</span>
          <h3>Wash Fred</h3>
          <p>Are Fred’s teeth clean?</p>
          <MultiChoice choices={["Yes", "No", "Not sure"]} />
          <button onClick={scrollNext}>Submit</button>
        </Card>

        <Card>
          <span className="ordinal">12 of 17</span>
          <h3>Wash Fred</h3>
          <p>Is Fred standing up in the bath?</p>
          <em>Fred should remain seated in the bath</em>
          <MultiChoice choices={["Yes", "No", "Not sure"]} />
          <button onClick={scrollNext}>Submit</button>
        </Card>

        <Card>
          <span className="ordinal">13 of 17</span>
          <h3>Dry Fred</h3>
          <p>Do you know where Fred’s towel is?</p>
          <MultiChoice choices={["Yes", "No", "Not sure"]} />
          <button onClick={scrollNext}>Submit</button>
        </Card>

        <Card>
          <span className="ordinal">14 of 17</span>
          <h3>Dress Fred in warm, clean pyjamas</h3>
          <p>Has Fred got a clean nappy on?</p>
          <MultiChoice choices={["Yes", "No", "Not sure"]} />
          <button onClick={scrollNext}>Submit</button>
        </Card>

        <Card>
          <span className="ordinal">15 of 17</span>
          <h3>Dress Fred in warm, clean pyjamas</h3>
          <p>Do you know where his pyjamas are?</p>
          <MultiChoice choices={["Yes", "No", "Not sure"]} />
          <button onClick={scrollNext}>Submit</button>
        </Card>

        <Card>
          <span className="ordinal">16 of 17</span>
          <h3>Dress Fred in warm, clean pyjamas</h3>
          <p>Does Fred need distraction when getting dressed?</p>
          <MultiChoice choices={["Yes", "No", "Not sure"]} />
          <button onClick={scrollNext}>Submit</button>
        </Card>

        <Card>
          <span className="ordinal">17 of 17</span>
          <h3>Dress Fred in warm, clean pyjamas</h3>
          <p>Has this activity been completed?</p>
          <MultiChoice choices={["Yes", "No", "Not sure"]} />
          <button onClick={scrollNext}>Submit</button>
        </Card>
      </Expander>

      <Expander text="Play time" className="yellow expander">
        <p>Fred's mum wants Fred to sleep through the night so that she can have a glass of wine, a bath and watch RuPaul's Drag Race in peace. Playing with Fred before bed allows his to expel the last bit of energy before his long sleep and makes sure he is a happy baby.</p>

        <Card>
          <span className="ordinal">1 of 5</span>
          <h3>Lay out toys and books</h3>
          <p>Which toys and books are already out?</p>
          <FreeText placeholder="Add items" />
          <button onClick={scrollNext}>Submit</button>
        </Card>

        <Card>
          <span className="ordinal">2 of 5</span>
          <h3>Lay out toys and books</h3>
          <p>Where will you play?</p>
          <MultiChoice choices={["Living room", "Fred’s room"]} />
          <button onClick={scrollNext}>Submit</button>
        </Card>

        <Card>
          <span className="ordinal">3 of 5</span>
          <h3>Make Fred laugh</h3>
          <p>Is Fred having fun?</p>
          <MultiChoice choices={["Yes", "No", "Not sure"]} />
          <button onClick={scrollNext}>Submit</button>
        </Card>

        <Card>
          <span className="ordinal">4 of 5</span>
          <h3>Make Fred laugh</h3>
          <p>Is he enjoying reading or playing more?</p>
          <MultiChoice choices={["Reading books", "Playing with toys"]} />
          <button onClick={scrollNext}>Submit</button>
        </Card>

        <Card>
          <span className="ordinal">5 of 5</span>
          <h3>Make Fred laugh</h3>
          <p>Is Fred playing independently?</p>
          <MultiChoice choices={["Yes", "No", "Not sure"]} />
          <button onClick={scrollNext}>Submit</button>
        </Card>

        <Card>
          <h3>Thanks!</h3>
          <p>
          You have reached the end of the questions for this project. {" "}
          <a href="#" onClick={() => window.scrollTo({ top: 0 })}>Back to top</a>
          </p>
        </Card>
      </Expander>
    </Layout>
  );
};

export default Fred;
