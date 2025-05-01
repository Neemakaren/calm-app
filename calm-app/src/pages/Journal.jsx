import React from "react";
import { vec8 } from "../assets/images";
import {Alert, EntryForm, EntryList} from "../components/index";

const Journal = () => {
  
  return (
    <main>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <Alert />
      <EntryForm />
      <EntryList />
    </main>
  );
};

export default Journal;
