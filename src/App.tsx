import React, { useState } from "react";
import "./App.css";
import { ProgressVenDiagram } from "./components/progress-ven-diagram";
import { ManualForm } from "./components/manual-form";
import { ProgressVenDiagramProps } from "./components/progress-ven-diagram/model";
import { Form } from "./components/manual-form/model";

function App() {
  const [showProgress, setShowProgress] = useState(false);
  const [props, setProps] = useState<Partial<ProgressVenDiagramProps>>({});
  const submit = (form: Form) => {
    setProps({
      currentDate: new Date(),
      ...form,
    });
    setShowProgress(true);
  };
  return (
    <div className="App">
      {showProgress ? (
        <ProgressVenDiagram
          {...(props as ProgressVenDiagramProps)}
        ></ProgressVenDiagram>
      ) : (
        <div className="App-header">Enter your information to determine your progress!</div>
      )}
      <ManualForm submit={submit}></ManualForm>
    </div>
  );
}

export default App;
