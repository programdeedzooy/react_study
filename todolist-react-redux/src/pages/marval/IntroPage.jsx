import React from 'react'
import { Tabs, Tab } from "react-bootstrap"
import FormInputs from './FormInputs'
import HeroDetails from './HeroDetails'
function IntroPage() {
  return (
    <Tabs className="mb-3">
      <Tab eventKey="heroDetial" title="heroDetial">
        <HeroDetails />
      </Tab>
      <Tab eventKey="MarvalDetial" title="MarvalDetial">
        <FormInputs />
      </Tab>
    </Tabs>
  )
}

export default IntroPage