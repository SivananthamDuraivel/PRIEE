import React from 'react'
import Nutrition from './../nutritionFolder/Nutrition';

const Landing = () => {
  return (
    <div>
      <a href="/nutrition"><button>Nutrition Analyser</button></a>
      <br />
      <a href="/dietplanner"><button>Diet Plans</button></a>
      <br />
      <a href="/model"><button>Predict calorie</button></a>
    </div>
  )
}

export default Landing
