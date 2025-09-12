import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import RowList from '../Rows/RowList/RowList'

const Home = () => {
  return (
    <>
      <Header />
      <Banner/>
      <RowList/>
      <Footer />
    </>
  );
}

export default Home