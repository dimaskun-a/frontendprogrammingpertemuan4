import React from "react";
import Hello from "./Hello";

/**
 * Membuat Component Main
 */
 function Main() {
    return (
      <div>
        <main>
          <Hello name="aufa" />
          <Hello name="mikel" />
          <Hello name="hannah" />
          <Hello name="jonas" />
          <Hello name="martha" />
        </main>
      </div>
    );
  }
  
  // export Component Main
  export default Main;