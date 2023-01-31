//import { v4 as uuidv4 } from 'uuid';
import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import { useState } from "react";
import Cat from "./data/cat";
import CatCard from "./components/cat_card";
import { catData } from "./data/catData";
function App() {
  const [cats, setCats] = useState<Array<Cat>>(catData);

  const catCount = cats.length;
  console.log(catCount);
  // JavaScript/TypeScript code can be inserted here!

  return (
    <>
      <Navbar />
      <Header catCount={catCount} />

      <main>
        <div className="cards__wrapper">
          {
            <details>
              <summary>Click here to see the answer</summary>
              <pre>
                {cats.map((cat, index) => (
                  <CatCard
                    key={cat.id}
                    name={cat.name}
                    species={cat.species}
                    favFoods={cat.favFoods}
                    birthYear={cat.birthYear}
                    catIndex={index}
                  />
                ))}
              </pre>
            </details>
          }
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
