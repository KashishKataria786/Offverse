import React from 'react'
import Layout from '../components/common/Layout.jsx'
import StarSection from '../components/home-components/StarSection.jsx'
import Marques from '../components/common/Marques.jsx'
import Service_card from '../components/Service_card.jsx'
import ServiceSection from '../components/home-components/ServiceSection.jsx'

const HomePage = () => {
  return (
    <Layout>
      <StarSection/>
      <ServiceSection/>
    </Layout>
  )
}

export default HomePage